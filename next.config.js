/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
}

module.exports = {
    nextConfig,
    images: {
        loader: 'akamai',
        path: '/',
    },
    assetPrefix:
        process.env.NODE_ENV === "production"
            ? "https://boramyy.github.io/invitation"
            : "",

}
