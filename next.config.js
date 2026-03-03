
const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  experimental: {
  },
  allowedDevOrigins: [
    "https://6000-firebase-system-kyron-3-1771736325274.cluster-f73ibkkuije66wssuontdtbx6q.cloudworkstations.dev",
    "https://9000-firebase-system-kyron-3-1771736325274.cluster-f73ibkkuije66wssuontdtbx6q.cloudworkstations.dev",
    "https://6000-firebase-system-kyron-2-1769997556778.cluster-f73ibkkuije66wssuontdtbx6q.cloudworkstations.dev", 
    "https://9000-firebase-system-kyron-2-1769997556778.cluster-f73ibkkuije66wssuontdtbx6q.cloudworkstations.dev"
  ],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
       {
        protocol: 'https',
        hostname: 'api.qrserver.com',
      },
       {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
    ],
  },
};

module.exports = withNextIntl(nextConfig);
