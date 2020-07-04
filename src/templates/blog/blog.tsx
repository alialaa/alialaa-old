import React from "react";
import { Link } from "gatsby";
import { SEO } from "@components";
import styles from "./blog.styles";
import { graphql } from "gatsby";
import Img from "gatsby-image";

const Blog = ({ data, pageContext }: any) => {
    const { edges: posts } = data.allMdx;
    const { limit, skip, numPages, currentPage } = pageContext;
    return (
        <div css={styles}>
            <SEO title="The Blog" />
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
                <nav role="navigation" aria-label="Posts Pagination">
                    <ul>
                        <li>
                            <Link
                                to={`/blog/page/${currentPage - 1}`}
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
                                            to={i === 0 ? `/blog` : `/blog/page/${i + 1}`}
                                        >
                                            <div className="visually-hidden">Page</div> {i + 1}
                                        </Link>
                                    </li>
                                );
                            })}
                        <li>
                            <Link
                                to={`/blog/page/${currentPage + 1}`}
                                aria-disabled={currentPage === numPages}
                            >
                                Next <div className="visually-hidden">Page</div>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export const BLOGQuery = graphql`
    query blogIndex($skip: Int!, $limit: Int!) {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: $limit, skip: $skip) {
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

export default Blog;
