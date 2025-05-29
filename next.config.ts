

// const nextConfig: NextConfig = {
  /* config options here */
//   module.exports = {
//   images: {
//     remotePatterns: [new URL('https://www.instagram.com/girlsdpz.01/')],
//   },
// }
// module.exports = {
//   images: {
//     remotePatterns: [new URL('https://img.freepik.com/')],
//   },
// }
module.exports = {
  images: {
    remotePatterns: [
      // Configuration for freepik.com
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
        port: '',
        pathname: '/**',
      },
      // Configuration for icons8.com
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        port: '',
        pathname: '/**',
      },
    ],
    // If you need to support older Next.js versions (optional)
    domains: ['img.freepik.com', 'img.icons8.com'],
  },
}

// };

// export default nextConfig;
