/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'store-images.s-microsoft.com'
      }
    ]
  }
}

export default nextConfig
