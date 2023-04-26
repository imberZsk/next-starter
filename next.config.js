/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, //可以不要
  i18n: {
    locales: ['cn', 'en'],
    defaultLocale: 'cn'
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '/account123/**'
      }
    ]
  }
}

module.exports = nextConfig
