/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'opengraph.githubassets.com',
      'github.com',
      'raw.githubusercontent.com',
      'avatars.githubusercontent.com'
    ],
  },
  // Enable React Strict Mode
  reactStrictMode: true,
  // SWC minification is now the default in newer Next.js versions
  // No need to explicitly set swcMinify
};

module.exports = nextConfig;
