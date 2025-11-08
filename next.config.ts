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

  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Optimize production builds (SWC minification is default in Next.js 15)
  
  // Reduce JavaScript bundle size with tree-shaking
  modularizeImports: {
    '@heroicons/react': {
      transform: '@heroicons/react/{{member}}',
    },
    'react-icons': {
      transform: 'react-icons/{{member}}',
    },
  },

  // Optimize output
  productionBrowserSourceMaps: false, // Disable source maps in production for smaller bundles

  // Headers for better caching and performance
  async headers() {
    const staticFileExtensions = [
      "jpg",
      "jpeg",
      "gif",
      "png",
      "svg",
      "ico",
      "webp",
      "woff",
      "woff2",
      "ttf",
      "eot",
    ];

    const staticFileHeaders = staticFileExtensions.map((ext) => ({
      source: `/:path*.${ext}`,
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    }));

    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
      ...staticFileHeaders,
    ];
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
    // Optimize images for better performance
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          ...config.optimization.splitChunks,
          chunks: 'all',
          maxInitialRequests: 25,
          minSize: 20000,
          cacheGroups: {
            ...config.optimization.splitChunks.cacheGroups,
            default: false,
            vendors: false,
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: "vendors",
              chunks: "all",
              priority: 10,
              reuseExistingChunk: true,
            },
            particles: {
              test: /[\\/]node_modules[\\/]@tsparticles[\\/]/,
              name: "particles",
              chunks: "async", // Only load when needed
              priority: 25,
              reuseExistingChunk: true,
            },
            firebase: {
              test: /[\\/]node_modules[\\/]firebase[\\/]/,
              name: "firebase",
              chunks: "async", // Only load when needed
              priority: 25,
              reuseExistingChunk: true,
            },
            react: {
              test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
              name: "react",
              chunks: "all",
              priority: 30,
              reuseExistingChunk: true,
            },
          },
        },
        usedExports: true, // Enable tree-shaking
        sideEffects: false, // Assume no side effects for better tree-shaking
      };
    }

    return config;
  },
};

export default withBundleAnalyzer(withNextIntl(nextConfig));
