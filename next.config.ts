/** @type {import('next').NextConfig} */

const tunnelUrl = process.env.NEXT_PUBLIC_STRAPI_TUNNEL_URL || "";
const tunnelHost = tunnelUrl.replace("https://", "");
const nextConfig = {
	images: {
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
				source: "/admin/:path*",
				destination: `${process.env.NEXT_PUBLIC_STRAPI_TUNNEL_URL}/admin/:path*`,
			},
			{
				source: "/api/:path*",
				destination: `${process.env.NEXT_PUBLIC_STRAPI_TUNNEL_URL}/api/:path*`,
			},
			{
				source: "/upload/:path*",
				destination: `${process.env.NEXT_PUBLIC_STRAPI_TUNNEL_URL}/upload/:path*`,
			},
		];
	},
};

export default nextConfig;
