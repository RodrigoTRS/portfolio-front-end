/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'portfolio-storage-s3.s3.amazonaws.com',
            port: '',
            pathname: '/projects-images/**',
          },
        ],
      },
};

export default nextConfig;
