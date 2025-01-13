/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    // Ottimizza la cache di webpack
    if (!dev && !isServer) {
      config.cache = {
        type: 'filesystem',
        buildDependencies: {
          config: [__filename],
        },
        name: 'production-cache',
        version: '1.0.0',
        maxAge: 172800000, // 48 ore in millisecondi
      };
    }
    return config;
  },
  // Altre configurazioni di Next.js se necessarie
};

module.exports = nextConfig;
