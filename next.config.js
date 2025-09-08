/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["hulu12com.wordpress.com"],
  },
};

module.exports = nextConfig;
