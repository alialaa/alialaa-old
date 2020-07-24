import React from "react";
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
function SEO({ description, lang = "en", meta = [], title, pathname, image }: SEOProps) {
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
    const cover = `${site.siteMetadata.siteUrl}${
        image || defaultImage.childImageSharp.original.src
    }`;
    const url = `${site.siteMetadata.siteUrl}${
        pathname ? (pathname[pathname.length - 1] === "/" ? pathname : pathname + "/") : "/"
    }`;
    const finalTitle = `${title} | ${site.siteMetadata.title}`;

    const webpage = {
        "@context": "http://schema.org",
        "@type": "WebPage",
        url: site.siteMetadata.siteUrl,
        description: site.siteMetadata.description,
        name: site.siteMetadata.title,
        author: {
            "@type": "Person",
            name: "Ali Alaa"
        },
        copyrightHolder: {
            "@type": "Person",
            name: "Ali Alaa"
        },
        copyrightYear: "2020",
        creator: {
            "@type": "Person",
            name: "Ali Alaa"
        },
        publisher: {
            "@type": "Person",
            name: "Ali Alaa"
        },
        image: {
            "@type": "ImageObject",
            url: cover
        }
    };

    const breadcrumbs = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: site.siteMetadata.siteUrl
            }
        ]
    };
    if (pathname !== "/") {
        if (pathname?.includes("blog")) {
            breadcrumbs.itemListElement.push({
                "@type": "ListItem",
                position: 2,
                name: "The Blog",
                item: `${site.siteMetadata.siteUrl}/blog`
            });
            if (title !== "The Blog") {
                breadcrumbs.itemListElement.push({
                    "@type": "ListItem",
                    position: 3,
                    name: title,
                    item: url
                });
            }
        } else if (pathname?.includes("courses")) {
            breadcrumbs.itemListElement.push({
                "@type": "ListItem",
                position: 2,
                name: "Courses",
                item: `${site.siteMetadata.siteUrl}/courses`
            });
            if (title !== "Courses") {
                breadcrumbs.itemListElement.push({
                    "@type": "ListItem",
                    position: 3,
                    name: title,
                    item: url
                });
            }
        } else {
            breadcrumbs.itemListElement.push({
                "@type": "ListItem",
                position: 2,
                name: title,
                item: url
            });
        }
    }
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
                    content: finalTitle
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
                    content:
                        pathname?.includes("blog") && title !== "The Blog" ? `article` : `website`
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
                    content: finalTitle
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
        >
            <script type="application/ld+json">{JSON.stringify(webpage)}</script>
            <script type="application/ld+json">{JSON.stringify(breadcrumbs)}</script>
        </Helmet>
    );
}

export default SEO;
