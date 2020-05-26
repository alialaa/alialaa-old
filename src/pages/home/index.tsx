import React, { useEffect } from "react";
import { SEO, ButtonLink, ButtonAnchor } from "@components";
import { Link } from "gatsby";
import styles from "./home.styles";
import Img from "gatsby-image";
import { useTheme } from "@context/theme-context";
import SpaceSVG from "@svgs/space";
import FiveStarts from "@svgs/5starts";

const Home = ({ data }: { data: { [key: string]: any } }) => {
    const { dark } = useTheme();
    console.log(data);
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
                <div className="container">
                    <div className={`latest-articles ${dark ? "dark" : ""}`}>
                        <SpaceSVG
                            fill={dark ? "#ffffff" : "#000000"}
                            width={100}
                            aria-hidden
                            focusable="false"
                        />
                        <div className="posts">
                            <div className="title">
                                <h3>Latest Articles</h3>
                                <ButtonLink dark={dark} to="/">
                                    View All<span className="visually-hidden"> Articles</span>
                                </ButtonLink>
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
                                            <div>
                                                <header>
                                                    <div className="info">
                                                        <time dateTime="2020-04-07T18:47:45+00:00">
                                                            April 7, 2020
                                                        </time>{" "}
                                                        <p>2 min.</p>
                                                    </div>
                                                    <h4>
                                                        <Link to="/blog">
                                                            {post === 1
                                                                ? "Managing WordPress Metadata in Gutenberg Using a Sidebar Plugin"
                                                                : "Gulp for WordPress: Creating the Tasks"}
                                                        </Link>
                                                    </h4>
                                                </header>
                                                <p>
                                                    WordPress released their anticipated over to the
                                                    post editor, nicknamed Gutenberg, which is also
                                                    referred to as the block editor.
                                                </p>
                                            </div>
                                            <footer>
                                                <ul className="tags">
                                                    <li>
                                                        <Link to="/blog">#Javascript</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/blog">#ReactJS</Link>
                                                    </li>
                                                </ul>
                                            </footer>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
            <section className={`featured-course ${dark ? "dark" : ""}`}>
                <div className="container">
                    <div className="course">
                        <div className="course-image">
                            <Img fluid={data.courseImage.childImageSharp.fluid} alt="" />
                        </div>
                        <div className="course-info-wrap">
                            <div className="course-info">
                                <h3>Featured Course</h3>
                                <h4>The Complete GitHub Actions & Workflows Guide</h4>
                                <p>
                                    Automate Code Testing, Deployment & Versioning using CI/CD
                                    Workflows. Create & Publish GitHub Actions to the Marketplace
                                </p>
                                <div className="course-buttons">
                                    <ButtonAnchor dark={dark} filled href="udemy.com">
                                        Learn More
                                        <span className="visually-hidden">
                                            {" "}
                                            About the course: The Complete GitHub Actions &
                                            Workflows Guide
                                        </span>
                                    </ButtonAnchor>
                                    <ButtonAnchor dark={dark} href="udemy.com">
                                        See More Courses
                                    </ButtonAnchor>
                                </div>
                            </div>
                            <div className="course-reviews">
                                <ul>
                                    {data.featuredCourseReviews.edges.map(
                                        (review: { [key: string]: any }) => {
                                            return (
                                                <li key={review.node.id}>
                                                    <FiveStarts />
                                                    <blockquote cite="https://www.udemy.com/course/github-actions">
                                                        <p>“{review.node.content}”</p>
                                                        <footer>
                                                            —{review.node.user.title},{" "}
                                                            <cite>Udemy Student</cite>
                                                        </footer>
                                                    </blockquote>
                                                </li>
                                            );
                                        }
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
