/** @type {import('next').NextConfig} */
const nextConfig = {
  future: {
    webpack5: true // Next.js 11부터는 Babel과 SWC를 함께 사용 가능
  }
}

module.exports = nextConfig
