import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.qwevotv.pro'

  const latestPost = blogPosts.reduce((latest, post) => {
    return post.publishedAt > latest ? post.publishedAt : latest;
  }, blogPosts[0]?.publishedAt ?? '2026-06-15');

  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(latestPost),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(latestPost),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/features`,
      lastModified: new Date(latestPost),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/support`,
      lastModified: new Date(latestPost),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(latestPost),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/iptv-apps`,
      lastModified: new Date(latestPost),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/iptv-technology`,
      lastModified: new Date(latestPost),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
  ]

  const posts: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.7,
    images: [`${baseUrl}${post.image}`],
  }))

  return [...routes, ...posts]
}
