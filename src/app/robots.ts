import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    // Bedelna .com b .pro hna
    sitemap: 'https://www.qwevotv.pro/sitemap.xml',
  }
}
