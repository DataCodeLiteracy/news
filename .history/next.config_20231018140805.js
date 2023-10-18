/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: [
      'www.reuters.com',
      'bloximages.newyork1.vip.townnews.com',
      'image.cnbcfm.com',
      'assets.bwbx.io',
      'kubrick.htvapps.com'
    ]
  }
}

module.exports = nextConfig
