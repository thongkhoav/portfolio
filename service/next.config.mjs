/** @type {import('next').NextConfig} */
const nextConfig = {
  // Plain static files for Cloudflare Pages: no server, no image optimizer.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
