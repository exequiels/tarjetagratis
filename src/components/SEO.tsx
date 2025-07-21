type Props = {
  title: string
  description: string
  canonicalUrl?: string
  keywords?: string
}

const SEO = ({ title, description, canonicalUrl, keywords }: Props) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </>
  )
}

export default SEO
