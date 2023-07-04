/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  options: {
    providerImportSource: '@mdx-js/react',
  },
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
