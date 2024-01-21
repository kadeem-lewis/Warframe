/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.wikia.nocookie.net",
        port: "",
        pathname: "/warframe/images/**",
      },
      {
        protocol: "https",
        hostname: "cdn.warframestat.us",
        port: "",
        pathname: "/img/**",
      },
    ],
  },
};

export default nextConfig;
