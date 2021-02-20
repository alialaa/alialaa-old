import React from "react";
import { SEO, ButtonLink, ButtonAnchor } from "@components";
import { useLocation } from "@reach/router";
import { testimonials } from "@utils";
import { Link } from "gatsby";
import styles from "./_home.styles";
import Img from "gatsby-image";
import { useTheme } from "@context/theme-context";
import SpaceSVG from "@svgs/space";
import SpaceSVG2 from "@svgs/space2";
import FiveStarts from "@svgs/5starts";

const Home = ({ data }: { data: { [key: string]: any } }) => {
    console.log(data);
    const { dark } = useTheme();
    const { pathname } = useLocation();
    const post = data.posts.edges;
    return (
        <div css={styles}>
            <SEO title="Home" pathname={pathname} />
            <section>
                <div className="container">
                    <div className="intro">
                        <h2>
                            Hello, I&apos;m Ali Alaa.
                            <br /> <span>A Front-end web developer.</span>
                        </h2>
                        <p>
                            I am a freelance front-end developer based in Egypt 🇪🇬. I develop
                            UI&apos;s for the web and hybrid mobile applications. I am currently
                            focusing on creating <Link to="/courses">online courses</Link>,{" "}
                            <Link to="/blog">writing articles</Link> and{" "}
                            <a href="https://www.youtube.com/channel/UCa-VVCGLQZv6IQWTKyVlnjg">
                                publishing free tutorials
                            </a>
                            . If you are interested in working with me, feel free to{" "}
                            <Link to="/contact">contact me</Link>.
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
                                <ButtonLink dark={dark} to="/blog">
                                    View All<span className="visually-hidden"> Articles</span>
                                </ButtonLink>
                            </div>
                            {post.map((item: any) => {
                                const post = item.node;
                                const date = new Date(post.frontmatter.date);
                                const options = {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric"
                                };
                                const dateString = date.toLocaleDateString("en-GB", options);
                                return (
                                    <article key={post.id} className="post">
                                        {post.frontmatter.featuredImage && (
                                            <Img
                                                fluid={
                                                    post.frontmatter.featuredImage.childImageSharp
                                                        .fluid
                                                }
                                                alt=""
                                            />
                                        )}
                                        <div className="post-inner">
                                            <div>
                                                <header>
                                                    <div className="info">
                                                        <time dateTime={post.frontmatter.date}>
                                                            {dateString}
                                                        </time>
                                                        <p>
                                                            {post.timeToRead} min
                                                            {post.timeToRead > 1 && "s"} read
                                                        </p>
                                                    </div>
                                                    <h4>
                                                        <Link to={`/blog/${post.frontmatter.slug}`}>
                                                            {post.frontmatter.title}
                                                        </Link>
                                                    </h4>
                                                </header>
                                                <p>{post.excerpt}</p>
                                            </div>
                                            {post.frontmatter.tags &&
                                                post.frontmatter.tags.length > 0 && (
                                                    <footer>
                                                        <ul className="tags">
                                                            {post.frontmatter.tags.map(
                                                                (tag: any) => {
                                                                    return (
                                                                        <li key={tag}>
                                                                            <Link
                                                                                to={`/tags/${tag
                                                                                    .split(" ")
                                                                                    .join("-")
                                                                                    .toLowerCase()}`}
                                                                            >
                                                                                #{tag}
                                                                            </Link>
                                                                        </li>
                                                                    );
                                                                }
                                                            )}
                                                        </ul>
                                                    </footer>
                                                )}
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
                                    Workflows. Create & Publish GitHub Actions to the Marketplace.
                                </p>
                                <div className="course-buttons">
                                    <ButtonLink dark={dark} to={`/courses/github-actions`}>
                                        Learn More
                                        <span className="visually-hidden">
                                            {" "}
                                            About the course: The Complete GitHub Actions &
                                            Workflows Guide
                                        </span>
                                    </ButtonLink>
                                    <ButtonAnchor
                                        dark={dark}
                                        href="https://www.udemy.com/course/github-actions/?referralCode=49A5F56B87CD62AEF6D4"
                                    >
                                        Buy{" "}
                                        <span className="visually-hidden">
                                            The Complete GitHub Actions & Workflows Guide
                                        </span>{" "}
                                        on Udemy
                                    </ButtonAnchor>
                                </div>
                            </div>
                            <div className="course-reviews">
                                <ul>
                                    {data.featuredCourseReviews.edges.map(
                                        (review: { [key: string]: any }) => {
                                            return (
                                                <li key={review.node.id}>
                                                    <FiveStarts aria-hidden focusable="false" />
                                                    <blockquote cite="https://www.udemy.com/course/github-actions">
                                                        <p>“{review.node.content}”</p>
                                                        <footer>
                                                            —{" "}
                                                            <cite>
                                                                {review.node.user.title}, Udemy
                                                                Student
                                                            </cite>
                                                        </footer>
                                                    </blockquote>
                                                </li>
                                            );
                                        }
                                    )}
                                </ul>
                            </div>
                            <div className="more-courses">
                                <Link to="/courses">
                                    View All Courses <span aria-hidden>→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={`testimonials ${dark ? "dark" : ""}`}>
                <div className="container">
                    <SpaceSVG2 fill={dark ? "#ffffff" : "#000000"} aria-hidden focusable="false" />
                    <h3>Testimonials</h3>
                    <ul>
                        {testimonials.map(testimonial => {
                            return (
                                <li key={testimonial.name}>
                                    <blockquote>
                                        <p>“{testimonial.testimonial}”</p>
                                        <footer>
                                            —{" "}
                                            <cite>
                                                {testimonial.name}, {testimonial.title} at{" "}
                                                <a href={testimonial.url}>{testimonial.company}</a>
                                            </cite>
                                        </footer>
                                    </blockquote>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Home;
