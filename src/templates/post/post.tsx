import React, { useEffect, useRef } from "react";
import { SEO, ButtonAnchor } from "@components";
import { useLocation } from "@reach/router";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { useTheme } from "@context/theme-context";
import { useHeader } from "@context/header-context";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styles, { courseHeaderOverrides } from "./post.styles";
import FiveStarts from "@svgs/5starts";
import SpaceSVG from "@svgs/space";
import SpaceSVG2 from "@svgs/space2";

const shortcodes = { Link }; // Provide common components here

const Post = (props: any) => {
    const { pathname } = useLocation();
    const { setHeader, setHeaderStyles } = useHeader();
    const { dark } = useTheme();
    const { data } = props;
    const { mdx, site } = data;
    console.log(mdx);
    // useEffect(() => {
    //     setHeader(<div style={{ height: 0 }}></div>);
    //     setHeaderStyles(courseHeaderOverrides);
    //     return () => {
    //         setHeader(null);
    //         setHeaderStyles(null);
    //     };
    // }, []);

    return (
        <div css={styles}>
            <SEO
                image={
                    mdx.frontmatter.featuredImage
                        ? mdx.frontmatter.featuredImage.childImageSharp.original.src
                        : undefined
                }
                title={mdx.frontmatter.title}
                description={mdx.excerpt}
                pathname={pathname}
            />
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "NewsArticle",
                        mainEntityOfPage: {
                            "@type": "WebPage",
                            "@id": `${site.siteMetadata.siteUrl}${pathname}`
                        },
                        headline: mdx.frontmatter.title,
                        image: mdx.frontmatter.featuredImage
                            ? [
                                  site.siteMetadata.siteUrl +
                                      mdx.frontmatter.featuredImage.childImageSharp.original.src
                              ]
                            : undefined,
                        datePublished: mdx.frontmatter.date,
                        dateModified: mdx.frontmatter.date,
                        author: {
                            "@type": "Person",
                            name: "Ali Alaa"
                        }
                    })}
                </script>
            </Helmet>
            <MDXProvider components={shortcodes}>
                {mdx.frontmatter.featuredImage && (
                    <Img fluid={mdx.frontmatter.featuredImage.childImageSharp.fluid} />
                )}
                <MDXRenderer>{mdx.body}</MDXRenderer>
            </MDXProvider>
        </div>
    );
};
export default Post;

export const query = graphql`
    query BlogPostQuery($id: String) {
        site {
            siteMetadata {
                siteUrl
            }
        }
        mdx(id: { eq: $id }) {
            id
            body
            excerpt
            frontmatter {
                title
                date
                featuredImage {
                    childImageSharp {
                        fluid(maxWidth: 800) {
                            ...GatsbyImageSharpFluid
                        }
                        original {
                            src
                        }
                    }
                }
            }
        }
    }
`;
