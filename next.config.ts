/** @type {import('next').NextConfig} */

const tunnelUrl = process.env.NEXT_PUBLIC_STRAPI_TUNNEL_URL || "";
const tunnelHost = tunnelUrl.replace("https://", "");

const nextConfig = {
	images: {
		remotePatterns: [
			{ protocol: "https", hostname: "cdn.sanity.io", pathname: "/images/**" },
			{ protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
			{ protocol: "https", hostname: "placehold.co", pathname: "/**" },
			{
				protocol: "https",
				hostname: tunnelHost,
				pathname: "/uploads/**",
			},
		],
	},
	async rewrites() {
		return [
			{
				source: "/studio-cms/:path*",
				destination: `${tunnelUrl}/:path*`,
			},
			{
				source: "/admin/:path*",
				destination: `${tunnelUrl}/admin/:path*`,
			},
			{
				source: "/api/:path*",
				destination: `${tunnelUrl}/api/:path*`,
			},
			{
				source: "/i18n/:path*",
				destination: `${tunnelUrl}/i18n/:path*`,
			},
		];
	},
};

export default nextConfig;
