/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export interface SEOProps {
    description?: string;
    lang?: string;
    meta?: [];
    title: string;
    pathname?: string;
    image?: string;
}
function SEO({ description, lang, meta = [], title, pathname, image }: SEOProps) {
    const { site, defaultImage } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        siteUrl
                    }
                }
                defaultImage: file(relativePath: { eq: "icon.png" }) {
                    childImageSharp {
                        original {
                            src
                        }
                    }
                }
            }
        `
    );

    const metaDescription = description || site.siteMetadata.description;
    const cover = `${site.siteMetadata.siteUrl}${image ||
        defaultImage.childImageSharp.original.src}`;
    const url = `${site.siteMetadata.siteUrl}${pathname || ""}`;
    return (
        <Helmet
            htmlAttributes={{
                lang
            }}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription
                },
                {
                    property: `og:title`,
                    content: title
                },
                {
                    property: `og:url`,
                    content: url
                },
                {
                    property: `og:image`,
                    content: cover
                },
                {
                    property: `og:description`,
                    content: metaDescription
                },
                {
                    property: `og:type`,
                    content: `website`
                },
                {
                    name: `twitter:card`,
                    content: `summary`
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata.author
                },
                {
                    name: `twitter:title`,
                    content: title
                },
                {
                    name: `twitter:description`,
                    content: metaDescription
                },
                {
                    name: `twitter:image`,
                    content: cover
                },
                {
                    name: `twitter:description`,
                    content: metaDescription
                }
            ].concat(meta)}
        />
    );
}

export default SEO;
