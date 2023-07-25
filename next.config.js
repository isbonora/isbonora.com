/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'app', 'styles')],
  },
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
