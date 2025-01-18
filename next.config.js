/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: '.next-temp',
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.cache = {
        type: 'filesystem',
        buildDependencies: {
          config: [__filename],
        },
        name: 'production-cache',
        version: '1.0.0',
        maxAge: 172800000,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
