/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
};

module.exports = nextConfig;

module.exports = {
    distDir: 'build',
    trailingSlash: true,
    unoptimized: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          port: '',
          pathname: '/williamsondesign/**',
        },
      ],
    },
  }
