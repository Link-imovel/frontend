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
  i18n: {
    locales: ['en-US', 'pt-BR', 'pt', 'en'],
    defaultLocale: 'pt-BR',
  },
  env: {
    BACKEND_SERVICE: 'http://localhost:3001',
    STRAPI_URL: 'http://localhost:1337',
  },
};
