import type { MetadataRoute } from 'next'

const baseUrl = 'https://shambhavimetal.com'

const routes: Array<{
  path: string
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
}> = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/products', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/process', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/why-us', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/knowledge-hub', changeFrequency: 'weekly', priority: 0.9 },
  {
    path: '/knowledge-hub/aluminium-ingots-automotive-supply-chain',
    changeFrequency: 'monthly',
    priority: 0.7
  },
  {
    path: '/knowledge-hub/how-to-choose-right-alloy-grade',
    changeFrequency: 'monthly',
    priority: 0.7
  },
  {
    path: '/knowledge-hub/what-are-aluminium-alloy-ingots',
    changeFrequency: 'monthly',
    priority: 0.7
  },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.9 }
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority
  }))
}
