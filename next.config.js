/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    distDir: 'dist',
    modularizeImports: {
        "@mui/material": {
            transform: "@mui/material/{{member}}"
        },
        "@mui/icons-material": {
            transform: "@mui/icons-material/{{member}}"
        }
    }
}

module.exports = nextConfig
