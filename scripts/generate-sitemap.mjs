import { writeFileSync, mkdirSync } from 'node:fs'
import { resolve } from 'node:path'

const BASE = 'https://tarjetagratis.com'
const routes = ['/', '/about', '/faq']
const now = new Date().toISOString()

const urlEntry = (path) =>
  `
  <url>
    <loc>${BASE}${path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${path === '/' ? '1.0' : '0.8'}</priority>
  </url>`.trim()

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(urlEntry).join('\n')}
</urlset>
`

const outDir = resolve('public')
mkdirSync(outDir, { recursive: true })
writeFileSync(resolve(outDir, 'sitemap.xml'), xml, 'utf8')
console.log('sitemap.xml generado en /public')
