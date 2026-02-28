import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        pathname: "/t/p/**",
      },
    ],
  },
  // env: {
  //   TMDB_ACCESS_TOKEN: process.env.TMDB_ACCESS_TOKEN,
  // },
};

export default nextConfig;
