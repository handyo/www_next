/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
}
const {i18n} = require("./next-i18next.config");

module.exports = {
    i18n,
    nextConfig,
    images: {
        loader: 'akamai',
        path: '/',
    },
    assetPrefix:
        process.env.NODE_ENV === "production"
            ? "https://handyo.github.io/seo"
            : "",


}
