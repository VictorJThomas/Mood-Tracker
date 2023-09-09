/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    typescript:{
        ignoreBuildErrors: true
    },
    eslint: {
        ignoreBuildErrors: true,
        ignoreDuringBuilds: true
    }
}

module.exports = nextConfig
