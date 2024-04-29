/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GOOGLE_PRIVATE_KEY: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY,
    GOOGLE_CLIENT_EMAIL: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
    GOOGLE_SHEET_ID: process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
      config.resolve.fallback.tls = false;
      config.resolve.fallback.net = false;
      config.resolve.fallback.child_process = false;
    }

    return config;
  },
};

export default nextConfig;
