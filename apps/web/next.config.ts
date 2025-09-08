import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: true, // ✅ moved out of experimental
  transpilePackages: ["@seafood/ui", "@seafood/types", "@seafood/lib"],
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }]
  }
};

export default nextConfig;
