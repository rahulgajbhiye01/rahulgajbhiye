import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable filesystem caching to improve build performance
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.cache = {
        type: "filesystem",
        allowCollectingMemory: true,
        cacheDirectory: path.resolve(".next/cache/webpack"),
      };
    }

    // Add SVGR loader for SVG files
    config.module.rules.push({
      test: /\.svg$/, // Match SVG files
      use: [
        {
          loader: "@svgr/webpack", // Use SVGR for React components
          options: {
            svgo: true, // Enable SVGO optimizations
            svgoConfig: {
              plugins: [
                {
                  name: "removeViewBox", // Keep viewBox to preserve scaling
                  active: false,
                },
              ],
            },
          },
        },
      ],
    });

    return config;
  },

  // Optionally, add any other Next.js config below
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/cryptosh",
          destination: "https://cryptosh.rahulgajbhiye.com/",
        },
        {
          source: "/letter",
          destination: "https://letter.rahulgajbhiye.com/",
        },
      ],
    };
  },
};

// Wrap MDX and Next.js config with each other
export default nextConfig;
