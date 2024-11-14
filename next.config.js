const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.publicamas.com.ar',
        port: '',
        pathname: '/images/**',
      },{
        protocol: 'https',
        hostname: 'tailwindui.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;