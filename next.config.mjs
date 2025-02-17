/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                // port: '', // Leave empty if not using a specific port
                // pathname: '/**', // This allows all paths under the hostname
            },
        ],
    },
};

export default nextConfig;
