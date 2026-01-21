/** @type {import('next').NextConfig} */

const tunnelUrl = process.env.NEXT_PUBLIC_STRAPI_TUNNEL_URL || "";
const tunnelHost = tunnelUrl.replace(/^https?:\/\//, "");

const nextConfig = {
	images: {
		qualities: [75, 90],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.sanity.io",
				pathname: "/images/**",
			},
			{
				protocol: "https",
				hostname: "images.unsplash.com",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "placehold.co",
				pathname: "/**",
			},
			...(tunnelHost
				? [
						{
							protocol: "https",
							hostname: tunnelHost,
							pathname: "/uploads/**",
						},
					]
				: []),
			{
				protocol: "https",
				hostname: "nasa-quarter-occupations-chrome.trycloudflare.com",
			},
		],
	},

	async rewrites() {
		if (!tunnelUrl) return [];

		return [
			{
				source: "/admin/:path*",
				destination: `${tunnelUrl}/admin/:path*`,
			},
			{
				source: "/api/:path*",
				destination: `${tunnelUrl}/api/:path*`,
			},
			{
				source: "/uploads/:path*",
				destination: `${tunnelUrl}/uploads/:path*`,
			},
		];
	},
};

export default nextConfig;
