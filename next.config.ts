import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://bopfhncluvcxvdgbnvxt.supabase.co', // Ganti pake hostname Supabase kamu
        port: '',
        pathname: '/storage/v1/object/public/**', // Ini buat izinin semua file di bucket public
      },
    ],
  },
};

export default nextConfig;