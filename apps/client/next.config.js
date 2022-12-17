/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    transpilePackages: ['@packages/comment'],
  },
};

module.exports = nextConfig;
