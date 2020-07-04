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
    const { mdx } = data;
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
            {/* <SEO
                image={image.childImageSharp.original.src}
                title={title}
                description={summary}
                pathname={pathname}
            /> */}
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Course",
                        // name: title,
                        // description: summary,
                        provider: {
                            "@type": "Organization",
                            name: "Udemy",
                            sameAs: "https://www.udemy.com/"
                        }
                    })}
                </script>
            </Helmet>
            <MDXProvider components={shortcodes}>
                <MDXRenderer>{mdx.body}</MDXRenderer>
            </MDXProvider>
        </div>
    );
};
export default Post;

export const query = graphql`
    query BlogPostQuery($id: String) {
        mdx(id: { eq: $id }) {
            id
            body
            frontmatter {
                title
            }
        }
    }
`;
