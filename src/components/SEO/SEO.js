import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'PyScript.tech - Software House Especializada em Soluções Digitais',
  description = 'Desenvolvimento de software sob medida, aplicações web modernas e automações inteligentes. Transformamos suas ideias em soluções digitais de alta performance.',
  keywords = 'desenvolvimento de software, software house, aplicações web, automação, bots, react, python, django, sistemas sob medida, rio de janeiro',
  author = 'PyScript.tech',
  image = '/og-image.png',
  url = 'https://pyscript.tech',
  type = 'website',
}) => {
  const siteTitle = title.includes('PyScript.tech') ? title : `${title} | PyScript.tech`;

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="PyScript.tech" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Portuguese" />
      <meta name="revisit-after" content="7 days" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
