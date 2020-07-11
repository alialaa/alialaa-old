import React from "react";
import { useLocation } from "@reach/router";
import { Link } from "gatsby";
import { SEO, Post, Pagination } from "@components";
import styles from "./blog.styles";
import { graphql } from "gatsby";
import { useTheme } from "@context/theme-context";

const Blog = ({ data, pageContext }: any) => {
    const { pathname } = useLocation();
    const { dark } = useTheme();
    const { edges: posts } = data.posts;
    const { group: tags } = data.tags;
    const { numPages, currentPage } = pageContext;
    return (
        <div css={styles}>
            <SEO title="The Blog" pathname={pathname} />
            <div className="container">
                <h1 className="page-title">The Blog</h1>
                <div className="content">
                    <section>
                        <ul className="posts-list">
                            {posts.map(({ node: _post }: { node: any }) => {
                                const post = {
                                    title: _post.frontmatter.title,
                                    slug: _post.frontmatter.slug,
                                    timeToRead: _post.timeToRead,
                                    excerpt: _post.excerpt,
                                    date: _post.frontmatter.date,
                                    featuredImage: _post.frontmatter.featuredImage,
                                    tags: _post.frontmatter.tags
                                };
                                return <Post key={_post.id} post={post} />;
                            })}
                        </ul>
                        <Pagination numPages={numPages} currentPage={currentPage} />
                    </section>
                    <aside className="sidebar">
                        <h3>Tags</h3>
                        <ul className={`tags-list ${dark ? "dark" : ""}`}>
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
                    excerpt(pruneLength: 200)
                    timeToRead
                    frontmatter {
                        title
                        slug
                        date
                        tags
                        featuredImage {
                            childImageSharp {
                                fluid(maxWidth: 800) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
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
