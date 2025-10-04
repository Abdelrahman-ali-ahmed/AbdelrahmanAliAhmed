'use client';

import { useCallback, useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";
import { useTheme } from "next-themes";
import "./index.css";
import { firstColor, secondColor } from "../Color";

interface NetworkBackgroundProps {
  className?: string;
}

export default function NetworkBackground({ className = "" }: NetworkBackgroundProps) {
  const [init, setInit] = useState(false);
  const { theme } = useTheme();

  // Initialize particles engine
  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(async (): Promise<void> => {
  }, []);

  // Particle configuration based on theme
  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: {
            enable: true,
          },
        },
        modes: {
          push: {
            quantity: 3,
          },
          repulse: {
            distance: 150,
            duration: 0.8,
          },
        },
      },
      particles: {
        color: {
          value: theme === 'dark' ?  secondColor : firstColor  ,
        },
        links: {
          color: theme === 'dark' ? firstColor   : secondColor ,
          distance: 140,
          enable: true,
          opacity: theme === 'dark' ? 0.9 : 0.7,
          width: 2.5,
          triangles: {
            enable: false,
          },
        },
        move: {
          direction: "none" as const,
          enable: true,
          outModes: {
            default: "bounce" as const,
          },
          random: true,
          speed: 8,
          straight: false,
          attract: {
            enable: false,
          },
        },
        number: {
          density: {
            enable: true,
            area: 1200,
          },
          value: 300,
        },
        opacity: {
          value: theme === 'dark' ? 0.9 : 0.7,
          animation: {
            enable: true,
            speed: 1.5,
            minimumValue: 0.3,
            sync: false,
          },
        },
        shape: {
          type: "circle" as const,
        },
        size: {
          value: { min: 2, max: 6 },
          animation: {
            enable: true,
            speed: 10,
            minimumValue: 1,
            sync: false,
          },
        },
      },
      detectRetina: true,
    }),
    [theme]
  );

  if (!init) {
    return null;
  }

  return (
    <div className={`network-background ${className}`}>
      <Particles
        id="network-background"
        particlesLoaded={particlesLoaded}
        options={options}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
