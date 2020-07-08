import React from "react";
import { useLocation } from "@reach/router";
import { Link } from "gatsby";
import { SEO } from "@components";
import styles from "./blog.styles";
import { graphql } from "gatsby";
import Img from "gatsby-image";

const Blog = ({ data, pageContext }: any) => {
    const { pathname } = useLocation();
    const { edges: posts } = data.posts;
    const { group: tags } = data.tags;
    const { numPages, currentPage } = pageContext;
    return (
        <div css={styles}>
            <SEO title="The Blog" pathname={pathname} />
            <div className="container">
                <h1 className="page-title">The Blog</h1>
                <section>
                    <ul>
                        {posts.map(({ node: post }: { node: any }) => (
                            <li key={post.id}>
                                <Link to={`/blog/${post.frontmatter.slug}`}>
                                    <h2>{post.frontmatter.title}</h2>
                                </Link>
                                <p>{post.timeToRead}</p>
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
                                                    <div className="visually-hidden">Page</div>{" "}
                                                    {i + 1}
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
                    )}
                </section>
                <aside>
                    <h3>Tags</h3>
                    <ul>
                        {tags.map((tag: any) => {
                            return (
                                <li key={tag.tag}>
                                    <Link
                                        to={`/tags/${tag.tag
                                            .split(" ")
                                            .join("-")
                                            .toLowerCase()}`}
                                    >
                                        #{tag.tag} ({tag.totalCount})
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </aside>
            </div>
        </div>
    );
};

export const BLOGQuery = graphql`
    query blogIndex($skip: Int!, $limit: Int!) {
        posts: allMdx(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    id
                    excerpt
                    timeToRead
                    frontmatter {
                        title
                        slug
                        date
                    }
                }
            }
        }
        tags: allMdx {
            group(field: frontmatter___tags) {
                tag: fieldValue
                totalCount
            }
        }
    }
`;

export default Blog;
