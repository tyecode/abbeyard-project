/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
  async rewrites() {
    return [
      {
        source: '/dashboard',
        destination: '/dashboard/users',
      },
    ]
  },
}

module.exports = nextConfig
