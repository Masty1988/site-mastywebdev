import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://mastywebdev.fr',
      lastModified: new Date(),
    },
    {
      url: 'https://mastywebdev.fr/services',
      lastModified: new Date(),
    },
    {
      url: 'https://mastywebdev.fr/projects',
      lastModified: new Date(),
    },
    {
      url: 'https://mastywebdev.fr/apropos',
      lastModified: new Date(),
    },
    {
      url: 'https://mastywebdev.fr/contact',
      lastModified: new Date(),
    },
  ]
}