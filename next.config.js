/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "github.com",
      "camo.githubusercontent.com",
      "raw.githubusercontent.com",
    ],
  },
  compiler: { styledComponents: true },
};

module.exports = nextConfig;
