import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import bundleAnalyzer from "@next/bundle-analyzer";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

// Bundle analyzer setup
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@heroicons/react", "lucide-react", "react-icons"],
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },

  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        ...config.optimization.splitChunks,
        cacheGroups: {
          ...config.optimization.splitChunks.cacheGroups,
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
            priority: 10,
          },
          particles: {
            test: /[\\/]node_modules[\\/]@tsparticles[\\/]/,
            name: "particles",
            chunks: "all",
            priority: 20,
          },
          firebase: {
            test: /[\\/]node_modules[\\/]firebase[\\/]/,
            name: "firebase",
            chunks: "all",
            priority: 20,
          },
        },
      };
    }

    return config;
  },
};

export default withBundleAnalyzer(withNextIntl(nextConfig));
