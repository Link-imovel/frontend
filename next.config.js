/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  ignoreBuildErrors: false,
  compress: true,
  useFilesystemPublicRoutes: false,
  images: {
    loader: 'default',
    minimumCacheTTL: 60,
  },
  devIndicators: {
    autoPrerender: true,
  },
  env: {
    BACKEND_SERVICE: 'http://localhost:3001',
  },
};
