const withGraphql = require('next-plugin-graphql');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  webpack: (config) => {
    config.resolve.preferRelative = true;
    return config;
  },
};

module.exports = withGraphql(nextConfig);
