/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  remotePatterns: [
      {
        protocol: 'https',
        hostname: 'turi-uzbekistana.ru',
        port: '',
        pathname: '',
      },
     
    ],
    images: { domains: ['turi-uzbekistana.ru'], formats: ['image/avif', 'image/webp'], },
}

module.exports = nextConfig