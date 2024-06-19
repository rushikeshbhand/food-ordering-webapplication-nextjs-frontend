/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'img.daisyui.com',
      'encrypted-tbn0.gstatic.com',
      'img.freepik.com',
      'static.vecteezy.com',
      'www.archanaskitchen.com',
    ],
    unoptimized: true, // Disable image optimization for GitHub Pages
  },
  basePath: '/food-ordering-webapplication-nextjs-frontend',
  assetPrefix: '/food-ordering-webapplication-nextjs-frontend/',
  output: 'export', // Add this line for static export
};

export default nextConfig;
