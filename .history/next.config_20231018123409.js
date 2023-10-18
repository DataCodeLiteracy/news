/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'file-loader'
        }
      ]
    })

    return config
  },
  future: {
    webpack5: true // Next.js 11부터는 Babel과 SWC를 함께 사용 가능
  }
}

module.exports = nextConfig
