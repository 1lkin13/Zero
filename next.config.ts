// import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  // experimental: {
  //   ppr: "incremental",
  //   after: true,
  // },
  // devIndicators: {
  //   appIsrStatus: true,
  //   buildActivity: true,
  //   buildActivityPosition: "bottom-right",
  // },
};
export default nextConfig
// export default withSentryConfig(nextConfig, {
  

//   org: "js-mastery-dk",
//   project: "javascript-nextjs",

//   silent: !process.env.CI,

//   widenClientFileUpload: true,

//   reactComponentAnnotation: {
//     enabled: true,
//   },

//   hideSourceMaps: true,
//   disableLogger: true,
//   automaticVercelMonitors: true,
// });