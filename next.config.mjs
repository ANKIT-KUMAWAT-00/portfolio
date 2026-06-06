/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { turbopack: { root: './src' } }
};
export default nextConfig;
// ERROR: next 14 complains about turbopack.root option
