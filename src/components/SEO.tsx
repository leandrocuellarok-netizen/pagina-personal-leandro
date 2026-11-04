import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
}

export const SEO = ({ title, description, image }: SEOProps) => {
  const siteTitle = title
    ? `${title} | Leandro A. Cuellar`
    : "Leandro A. Cuellar";

  const seoDescription = description ?? "Autor, intelectual, estratega y comunicador. Página editorial y biográfica de Leandro A. Cuellar.";

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={seoDescription} />
      {image && <meta property="og:image" content={image} />}
    </Helmet>
  );
};