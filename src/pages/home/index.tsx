import React from "react";
import { SEO, ButtonLink } from "@components";
import { Link } from "gatsby";
import styles from "./home.styles";
import Img from "gatsby-image";
import { useTheme } from "@context/theme-context";
import SpaceSVG from "@svgs/space";

const Home = ({ data }: { data: { [key: string]: any } }) => {
    const { dark } = useTheme();
    return (
        <div css={styles}>
            <SEO title="Home" />
            <section>
                <div className="container">
                    <h2 className="visually-hidden">
                        Hello, I&apos;m Ali Alaa. A Front-end web developer.
                    </h2>
                    <div className="intro">
                        <p>
                            I am a freelance front-end developer based in Egypt 🇪🇬. I develop
                            UI&apos;s for the web and hybrid mobile applications. I am currently
                            focusing on creating <Link to="/">online courses</Link>,{" "}
                            <Link to="/">writing articles</Link> and{" "}
                            <Link to="/">publishing free tutorials</Link>. If you are interested in
                            working with me, feel free to <Link to="/">contact me</Link>.
                        </p>
                    </div>
                </div>
            </section>
            <section className="latest-articles-section">
                <SpaceSVG
                    fill={dark ? "#ffffff" : "#000000"}
                    width={100}
                    aria-hidden
                    focusable="false"
                />
                <div className="container">
                    <div className={`latest-articles ${dark ? "dark" : ""}`}>
                        <div className="posts">
                            <div className="title">
                                <h3>Latest Articles</h3>
                                <ButtonLink to="/">Hello</ButtonLink>
                            </div>
                            {[1, 2].map(post => {
                                return (
                                    <article key={post} className="post">
                                        <Img
                                            fluid={
                                                post === 1
                                                    ? data.blogImage.childImageSharp.fluid
                                                    : data.blogImage2.childImageSharp.fluid
                                            }
                                            alt=""
                                        />
                                        <div className="post-inner">
                                            <h4>
                                                <Link to="/blog">
                                                    {post === 1
                                                        ? "Managing WordPress Metadata in Gutenberg Using a Sidebar Plugin"
                                                        : "Gulp for WordPress: Creating the Tasks"}
                                                </Link>
                                            </h4>
                                            <p>
                                                WordPress released their anticipated over to the
                                                post editor, nicknamed Gutenberg, which is also
                                                referred to as the block editor.
                                            </p>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
