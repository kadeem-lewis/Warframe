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
        ],
      },
};

export default nextConfig;
