/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['media.autochek.africa'],
    loader: "custom"
  },
}
module.exports = nextConfig
