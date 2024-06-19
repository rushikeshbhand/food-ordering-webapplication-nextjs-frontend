/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['img.daisyui.com', 'encrypted-tbn0.gstatic.com', 'img.freepik.com', 'static.vecteezy.com', 'www.archanaskitchen.com'],
  },
  output: 'export'
};

export default nextConfig;
