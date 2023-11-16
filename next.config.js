/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/dashboard',
        destination: '/dashboard/users',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
