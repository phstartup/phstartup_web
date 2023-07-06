/** @type {import('next').NextConfig} */
const nextConfig = {
    modularizeImports: {
        "@mui/material": {
            transform: "@mui/material/{{member}}"
        },
        "@mui/icons-material": {
            transform: "@mui/icons-material/{{member}}"
        }
    },
    experimental: {
        modern: true,
        dynamicImports: true,
        css: true
    }
}

module.exports = nextConfig
