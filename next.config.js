/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  // ✅ IMPORTANT: fixes Image error in static export
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
