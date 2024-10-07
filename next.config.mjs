/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	webpack: (config, { isServer, dev }) => {
	  if (!isServer && dev) {
		config.watchOptions = {
		  poll: 1000,
		  aggregateTimeout: 300,
		};
	  }
	  return config;
	},
  };
  
  export default nextConfig;