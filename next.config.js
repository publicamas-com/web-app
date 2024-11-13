const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.publicamas.com.ar',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

module.exports = nextConfig;