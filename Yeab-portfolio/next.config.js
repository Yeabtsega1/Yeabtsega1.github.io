/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['github.com', 'github-readme-stats.vercel.app'],
  },
  async redirects() {
    return [
      {
        source: '/hello',
        destination: '/#contact',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
