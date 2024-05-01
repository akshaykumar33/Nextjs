/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        //domains:["images.unsplash.com"] //imp to register for external source images
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'images.unsplash.com',
            },
          ],
    }
};

export default nextConfig;
