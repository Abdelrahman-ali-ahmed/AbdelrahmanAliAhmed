'use client';

import { useCallback, useEffect, useMemo, useState, useRef } from "react";
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
  const [shouldLoad, setShouldLoad] = useState(false);
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  // Simplified loading logic - always load for debugging
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check device capabilities but don't block loading for debugging
    const isMobile = window.innerWidth < 768;
    const isLowEnd = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;

    // Type-safe connection check
    interface NavigatorConnection {
      effectiveType?: string;
    }

    interface NavigatorWithConnection extends Navigator {
      connection?: NavigatorConnection;
    }

    const navigatorWithConnection = navigator as NavigatorWithConnection;
    const hasSlowConnection = navigatorWithConnection.connection?.effectiveType === 'slow-2g' ||
                              navigatorWithConnection.connection?.effectiveType === '2g';

    // Log device info for debugging
    console.log('NetworkBackground - Device info:', {
      isMobile,
      isLowEnd,
      hasSlowConnection,
      screenWidth: window.innerWidth,
      hardwareConcurrency: navigator.hardwareConcurrency
    });

    // Always load for now (for debugging)
    setShouldLoad(true);

    // Optional: Use Intersection Observer for optimization later
    // const observer = new IntersectionObserver(
    //   (entries) => {
    //     if (entries[0].isIntersecting) {
    //       setShouldLoad(true);
    //       observer.disconnect();
    //     }
    //   },
    //   { threshold: 0.1, rootMargin: '50px' }
    // );

    // if (containerRef.current) {
    //   observer.observe(containerRef.current);
    // }

    // return () => {
    //   observer.disconnect();
    // };
  }, []);

  // Initialize particles engine - simplified for debugging
  useEffect(() => {
    if (!shouldLoad) return;

    console.log('NetworkBackground - Starting particle initialization...');

    // Immediate initialization for debugging
    const initParticles = async () => {
      try {
        await initParticlesEngine(async (engine: Engine) => {
          await loadSlim(engine);
        });
        console.log('NetworkBackground - Particles engine initialized successfully');
        setInit(true);
      } catch (error) {
        console.error('NetworkBackground - Failed to initialize particles:', error);
      }
    };

    // Initialize immediately for debugging
    initParticles();
  }, [shouldLoad]);

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
      fpsLimit: 30, // Reduced to 30 FPS for better performance on all devices
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
            quantity: 2, // Reduced from 3
          },
          repulse: {
            distance: 100, // Reduced from 150
            duration: 0.4, // Reduced from 0.8
          },
        },
      },
      particles: {
        color: {
          value: theme === 'dark' ?  secondColor : firstColor  ,
        },
        links: {
          color: theme === 'dark' ? firstColor   : secondColor ,
          distance: 100, // Further reduced from 120 to 100
          enable: true,
          opacity: theme === 'dark' ? 0.6 : 0.5, // Reduced opacity
          width: 1.5, // Reduced from 2.5
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
          speed: 2, // Further reduced from 4 to 2 for better performance
          straight: false,
          attract: {
            enable: false,
          },
        },
        number: {
          density: {
            enable: true,
            area: 2000, // Increased area (fewer particles per area)
          },
          value: 50, // Further reduced from 80 to 50 for better performance
        },
        opacity: {
          value: theme === 'dark' ? 0.7 : 0.5, // Reduced
          animation: {
            enable: false, // Disabled animation for better performance
            speed: 1.5,
            minimumValue: 0.3,
            sync: false,
          },
        },
        shape: {
          type: "circle" as const,
        },
        size: {
          value: { min: 1.5, max: 4 }, // Reduced size range
          animation: {
            enable: false, // Disabled animation for better performance
            speed: 10,
            minimumValue: 1,
            sync: false,
          },
        },
      },
      detectRetina: false, // Disable retina detection for better performance
    }),
    [theme]
  );

  // Debug logging
  console.log('NetworkBackground - Render state:', {
    init,
    shouldLoad,
    theme,
    className
  });

  // Don't render particles if not initialized
  if (!init || !shouldLoad) {
    return (
      <div ref={containerRef} className={`network-background ${className}`}>
        <div className="absolute inset-0 flex items-center justify-center text-xs opacity-50">
          {!shouldLoad ? 'Loading...' : !init ? 'Initializing particles...' : ''}
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`network-background ${className}`}>
      <Particles
        id="network-background"
        particlesLoaded={particlesLoaded}
        options={options}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
