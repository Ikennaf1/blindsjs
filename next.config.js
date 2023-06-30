/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/documentation',
            destination: '/documentation/v0/installation',
            permanent: true,
          },
          {
            source: '/documentation/v0',
            destination: '/documentation/v0/installation',
            permanent: true,
          }
        ]
    }
}

module.exports = nextConfig
