/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['@acquirer/ui'],
    experimental: {
        optimizePackageImports: ['@phosphor-icons/react'],
    },
}

export default nextConfig
