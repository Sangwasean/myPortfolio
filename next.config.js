/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.module\.css$/,
      use: ["style-loader", "css-loader"],
    });
    return config;
  },
}

module.exports = nextConfig
