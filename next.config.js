/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["drive.google.com", "ibb.co", "i.ibb.co"],
  },
};

module.exports = nextConfig;
