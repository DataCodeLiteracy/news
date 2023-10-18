/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: ['www.reuters.com']
  }
}

module.exports = nextConfig
