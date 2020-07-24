import React, { useEffect } from "react";
import { useLocation } from "@reach/router";
import { SEO, Pagination, Post } from "@components";
import styles from "../blog/blog.styles";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import { useTheme } from "@context/theme-context";
import { useHeader } from "@context/header-context";

const Tag = ({ data, pageContext }: any) => {
    const { pathname } = useLocation();
    const { edges: posts } = data.posts;
    const { group: tags } = data.tags;
    const { dark } = useTheme();
    const { setCanvasTitle } = useHeader();
    const { numPages, currentPage, tag, tagSlug } = pageContext;

    useEffect(() => {
        setCanvasTitle("#" + tag);
        return () => {
            setCanvasTitle(null);
        };
    }, []);
    return (
        <div css={styles}>
            <SEO title={`Articles tagged #${tag}`} pathname={pathname} />
            <div className="container">
                <h1 className="page-title">#{tag}</h1>
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
                        <Pagination tag={tagSlug} numPages={numPages} currentPage={currentPage} />
                    </section>
                    <aside className="sidebar">
                        <h3>More Tags</h3>
                        <ul className={`tags-list ${dark ? "dark" : ""}`}>
                            {tags.map((_tag: any) => {
                                if (_tag.tag === tag) return null;
                                return (
                                    <li key={_tag.tag}>
                                        <Link
                                            to={`/tags/${_tag.tag
                                                .split(" ")
                                                .join("-")
                                                .toLowerCase()}`}
                                        >
                                            #{_tag.tag} ({_tag.totalCount})
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

export default Tag;
