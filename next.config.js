/** @type {import('next').NextConfig} */
const nextConfig = {
  // 用了react会执行两次
  // reactStrictMode: true,

  // 服务端ctx、客户端useRouter都能拿到语言信息
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
