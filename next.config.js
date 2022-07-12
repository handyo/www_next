/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')], // 2. sassOptions 옵션 추가
        prependData: `@import "styles/_common.scss";`,
    },
}

const {i18n} = require("./next-i18next.config");

module.exports = {
    i18n,
    webpack: (config, options) => {
        config.resolve.fallback = {
            perf_hooks: false, // as per "Quick Solution" on https://dev.to/marcinwosinek/how-to-add-resolve-fallback-to-webpack-5-in-nextjs-10-i6j
            fs: false, // 2022-02-02 hack to fix i18n errors, per https://github.com/isaachinman/next-i18next/issues/935#issuecomment-970024608
            path: false, // 2022-02-02 hack to fix i18n errors, per https://github.com/isaachinman/next-i18next/issues/935#issuecomment-970024608
        };
        return config;
    },
    nextConfig,
    images: {
        loader: 'akamai',
        path: '/',
    },
    assetPrefix:
        process.env.NODE_ENV === "production"
            ? "https://handyo.github.io/seo"
            : "",

    async redirects() {
        return [
            {
                source: "/en/Sub1",
                destination: "/Sub1", //안되네
                permanent: false
            }
        ]
    }
}
