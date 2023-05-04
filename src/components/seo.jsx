import React from "react";
import { useSiteMetadata } from "./hooks/use-site-metadata";

export const SEO = ({ title, description, pathname, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    // author: `Michael Law`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <link
        rel="icon"
        href={seo.icon}
      />
      {children}
    </>
  );
};

// All props are optional since each value has a default value or fallback. The pathname prop will be the relative path of the page so you need to construct an absolute URL with siteUrl.
// You can extend the seo object with other keys, but it’s recommended to follow the pattern of prop || fallback so that no value is undefined.
