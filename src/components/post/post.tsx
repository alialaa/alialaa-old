import React from "react";
import styles from "./post.style";
import { useTheme } from "@context/theme-context";
import { Link } from "gatsby";
// import Img from "gatsby-image";
import { StaticImage } from "gatsby-plugin-image";

type PostProps = {
    post: {
        title: string;
        slug: string;
        timeToRead: number;
        excerpt: string;
        date: string;
        featuredImage: { [key: string]: any } | null;
        tags: [] | null;
    };
};

const Post = ({ post }: PostProps) => {
    const date = new Date(post.date);
    const { dark } = useTheme();
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric"
    };
    const dateString = date.toLocaleDateString("en-GB", options);
    return (
        <li className={`post ${dark ? "dark" : ""} shadow-2`} css={styles}>
            <article>
                {post.featuredImage && (
                    <StaticImage fluid={post.featuredImage.childImageSharp.gatsbyImageData} />
                )}
                <header>
                    <div className="info">
                        <time dateTime={post.date}>{dateString}</time>
                        <p>
                            {post.timeToRead} min
                            {post.timeToRead > 1 && "s"} read
                        </p>
                    </div>
                    <h2 className="title">
                        {" "}
                        <Link to={`/blog/${post.slug}`}>{post.title} </Link>
                    </h2>
                </header>
                <p className="excerpt">{post.excerpt}</p>
                {post.tags && post.tags.length > 0 && (
                    <footer>
                        <ul className="tags">
                            {post.tags.map((tag: any) => {
                                return (
                                    <li key={tag}>
                                        <Link
                                            to={`/tags/${tag.split(" ").join("-").toLowerCase()}`}
                                        >
                                            #{tag}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </footer>
                )}
            </article>
        </li>
    );
};
export default Post;
