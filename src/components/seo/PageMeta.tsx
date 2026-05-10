import { Helmet } from "react-helmet-async"

interface PageMetaProps {
  title: string
  description: string
}

export default function PageMeta({ title, description }: PageMetaProps) {
  return (
    <Helmet>
      <title>{title} | Djordje Boris Portfolio</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={`${title} | Djordje Boris Portfolio`} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </Helmet>
  )
}