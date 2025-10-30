/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // ✅ correct
  images: {
    unoptimized: true, // image optimization disable karni padti hai static export ke liye
  },
};

export default nextConfig;
