/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    )
    if (fileLoaderRule) fileLoaderRule.exclude = /\.svg$/i

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgo: true,
            svgoConfig: {
              plugins: [
                { name: "removeViewBox", active: false },
                { name: "convertColors", params: { currentColor: true } },
              ],
            },
          },
        },
      ],
    })

    return config
  },
}

export default nextConfig
