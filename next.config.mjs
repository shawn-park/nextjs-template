/** @type {import('next').NextConfig} */
import path from 'path';
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(path.resolve(), 'styles')],
  },
};

export default nextConfig;
