/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Image Optimization (Hada houwa sir dyal Performance score)
  images: {
    formats: ['image/avif', 'image/webp'], // Google k-i-7meeeel had l-formats hit sghar bzaf
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },

  // 2. JS Optimization
  compiler: {
    // K-i-7iyd ga3 console.log f l-production (bach l-site ikoun khfif)
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // 3. Speed up build & Package Optimization
  experimental: {
    // Bach icons dyal Lucide-react ma-i-t-9loch l-site
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },

  // 4. React Strict Mode (Mzyan l-Best Practices score)
  reactStrictMode: true,

  // 5. Compression (Gzip/Brotli)
  compress: true,
};

export default nextConfig;
