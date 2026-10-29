const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    // 90 is used by the hero portrait; Next 16 only serves listed qualities.
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
    ],
  },
  // Short link for the TikTok bio: <domain>/t lands on /links tagged as TikTok
  // traffic, so the bio URL itself stays short and free of query strings.
  async redirects() {
    return [
      {
        source: '/t',
        destination: '/links?utm_source=tiktok&utm_medium=bio&utm_campaign=profile',
        permanent: false,
      },
    ]
  },
}
