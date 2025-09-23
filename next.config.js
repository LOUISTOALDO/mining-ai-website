/** @type {import('next').NextConfig} */
const nextConfig = {
  // appDir is enabled by default in Next.js 13+
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig
