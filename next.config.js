/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    webpack: (config, { isServer }) => {
        config.module.rules.push({
            test: /\.svg$/,

            use: ["@svgr/webpack"],
        });

        if (!isServer) {
            config.resolve.fallback = { fs: false };
        }

        return config;
    },
};
