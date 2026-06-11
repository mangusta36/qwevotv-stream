/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },

  reactStrictMode: true,

  compress: true,
};

export default nextConfig;
