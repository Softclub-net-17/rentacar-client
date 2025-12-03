/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
     unoptimized: true, // ⬅ private IP filtering OFF
    remotePatterns: [
      {
        protocol: "http",
        hostname: "172.20.10.4", // ← LOCAL NETWORK IP
        port: "5257",
        pathname: "/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;
