import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["bopfhncluvcxvdgbnvxt.supabase.co"],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "bopfhncluvcxvdgbnvxt.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  }
};

export default nextConfig;
