import React from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import { SEO } from "@components";
import styles from "./tag.styles";
import { graphql } from "gatsby";
import Img from "gatsby-image";

const Tag = ({ data, pageContext }: any) => {
    const { pathname } = useLocation();
    const { edges: posts } = data.posts;
    const { limit, skip, numPages, currentPage, tag, tagSlug } = pageContext;
    return (
        <div css={styles}>
            <SEO title={`Articles tagged #${tag}`} pathname={pathname} />
            <div className="container">
                <h1 className="page-title">The Blog</h1>
                <ul>
                    {posts.map(({ node: post }: { node: any }) => (
                        <li key={post.id}>
                            <Link to={`/blog/${post.frontmatter.slug}`}>
                                <h2>{post.frontmatter.title}</h2>
                            </Link>
                            <p>{post.excerpt}</p>
                            <p>{post.frontmatter.date}</p>
                        </li>
                    ))}
                </ul>
                {numPages > 1 && (
                    <nav role="navigation" aria-label="Posts Pagination">
                        <ul>
                            <li>
                                <Link
                                    to={`/tags/${tagSlug}/${currentPage - 1}`}
                                    aria-disabled={currentPage === 1}
                                >
                                    Previous <div className="visually-hidden">Page</div>
                                </Link>
                            </li>
                            {Array(numPages)
                                .fill(null)
                                .map((v, i) => {
                                    return (
                                        <li key={`page-${i}`}>
                                            <Link
                                                {...(i + 1 === currentPage
                                                    ? { "aria-current": "page" }
                                                    : {})}
                                                to={
                                                    i === 0
                                                        ? `/tags/${tagSlug}`
                                                        : `/tags/${tagSlug}/page/${i + 1}`
                                                }
                                            >
                                                <div className="visually-hidden">Page</div> {i + 1}
                                            </Link>
                                        </li>
                                    );
                                })}
                            <li>
                                <Link
                                    to={`/tags/${tagSlug}/page/${currentPage + 1}`}
                                    aria-disabled={currentPage === numPages}
                                >
                                    Next <div className="visually-hidden">Page</div>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>
        </div>
    );
};

export const TagQuery = graphql`
    query tagIndex($skip: Int!, $limit: Int!, $tag: String) {
        posts: allMdx(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { tags: { in: [$tag] } } }
            limit: $limit
            skip: $skip
        ) {
            totalCount
            edges {
                node {
                    id
                    excerpt
                    frontmatter {
                        title
                        slug
                        date
                    }
                }
            }
        }
    }
`;

export default Tag;
