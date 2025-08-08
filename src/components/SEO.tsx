type Props = {
  title: string
  description: string
  canonicalUrl?: string
  keywords?: string
  jsonLd?: object | object[]
  image?: string
  openGraphType?: 'website' | 'article'
  siteName?: string
}

const SEO = ({
  title,
  description,
  canonicalUrl,
  keywords,
  jsonLd,
  image = 'https://tarjetagratis.com/logo.png',
  openGraphType = 'website',
  siteName = 'TarjetaGratis',
}: Props) => {
  const schemas = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : []

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:type" content={openGraphType} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}

export default SEO
