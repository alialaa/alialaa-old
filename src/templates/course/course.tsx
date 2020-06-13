import React, { useEffect, useRef } from "react";
import { SEO, ButtonAnchor } from "@components";
import { useLocation } from "@reach/router";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import { useTheme } from "@context/theme-context";
import { useHeader } from "@context/header-context";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styles, { courseHeaderOverrides } from "./course.styles";
import FiveStarts from "@svgs/5starts";
import SpaceSVG from "@svgs/space";
import SpaceSVG2 from "@svgs/space2";

const Course = (props: any) => {
    const video = useRef<HTMLVideoElement | null>(null);
    const { pathname } = useLocation();
    const { setHeader, setHeaderStyles } = useHeader();
    const { dark } = useTheme();
    const { data } = props;
    const {
        title,
        summary,
        udemyUrl,
        image,
        duration,
        promo,
        url,
        objectives
    } = data.allCourse.nodes[0];
    useEffect(() => {
        setHeader(<div style={{ height: 0 }}></div>);
        setHeaderStyles(courseHeaderOverrides);
        return () => {
            setHeader(null);
            setHeaderStyles(null);
        };
    }, []);

    return (
        <div css={styles}>
            <div className="header">
                <div className="header-bg">
                    <Img
                        imgStyle={{
                            objectFit: "cover",
                            objectPosition: "50% 50%"
                        }}
                        fluid={image.childImageSharp.fluid}
                        alt=""
                    />
                </div>
                <div className="container">
                    <div className="title-wrap">
                        <p className="hours">{duration} hours on-demand video</p>
                        <h1 className="title">{title}</h1>
                        <div className="buttons">
                            <ButtonAnchor dark={true} href={udemyUrl}>
                                Buy <span className="visually-hidden">{title}</span>on Udemy
                            </ButtonAnchor>
                            <ButtonAnchor
                                onClick={() => {
                                    video?.current?.play();
                                }}
                                dark={true}
                                href="#promo"
                            >
                                Watch Promo
                            </ButtonAnchor>
                        </div>
                    </div>
                </div>
            </div>

            <SEO title={title} description={summary} pathname={pathname} />
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Course",
                        name: title,
                        description: summary,
                        provider: {
                            "@type": "Organization",
                            name: "Udemy",
                            sameAs: "https://www.udemy.com/"
                        }
                    })}
                </script>
            </Helmet>
            <div className="content">
                <section className="intro">
                    <div className="container">
                        <p className="summary">{summary}</p>
                        <div className="video" id="promo">
                            <video
                                ref={video}
                                id="playerId__14515694_html5_api"
                                preload="metadata"
                                // autoPlay
                                // muted
                                controls
                                src={promo}
                                poster={image.childImageSharp.fluid.src}
                            >
                                <p>Your browser doesn&apos;t support HTML5 video</p>
                                <track
                                    label="English"
                                    kind="subtitles"
                                    srcLang="en"
                                    src={`/${url}.vtt`}
                                    default
                                />
                            </video>
                        </div>
                    </div>
                </section>
                <section className="objectives">
                    <div className="container">
                        <SpaceSVG
                            className={`bg ${dark ? "dark" : ""}`}
                            fill={dark ? "#ffffff" : "#000000"}
                            width={100}
                            aria-hidden
                            focusable="false"
                        />
                        <h2>What you&apos;ll Learn:</h2>
                        <ul>
                            {objectives.map((objective: string, index: number) => {
                                return <li key={index}>{objective}</li>;
                            })}
                        </ul>
                        <div className="buy-button-wrap">
                            <ButtonAnchor className="buy-button" dark={dark} href={udemyUrl}>
                                Learn More & Buy<span className="visually-hidden">{title}</span> on
                                Udemy <span aria-hidden>→</span>
                            </ButtonAnchor>
                        </div>
                    </div>
                </section>
                <section className="reviews-wrap" id="reviews">
                    <div className="container">
                        <SpaceSVG2
                            className={`bg ${dark ? "dark" : ""}`}
                            fill={dark ? "#ffffff" : "#000000"}
                            aria-hidden
                            focusable="false"
                        />
                        <h2>What Students are Saying:</h2>
                        <ul className={`reviews ${dark ? "dark" : ""}`}>
                            {data.reviews.edges.map((review: { [key: string]: any }) => {
                                return (
                                    <li key={review.node.id}>
                                        <FiveStarts aria-hidden focusable="false" />
                                        <blockquote cite="https://www.udemy.com/course/github-actions">
                                            <p>“{review.node.content}”</p>
                                            <footer>
                                                — <cite>{review.node.user.title}</cite>
                                            </footer>
                                        </blockquote>
                                    </li>
                                );
                            })}
                        </ul>
                        <div className="buy-button-wrap">
                            <div>
                                <ButtonAnchor className="buy-button" dark={dark} href={udemyUrl}>
                                    See More Reviews on Udemy <span aria-hidden>→</span>
                                </ButtonAnchor>
                            </div>
                            <div>
                                <Link className="all-courses-link" to="/courses">
                                    See All Courses
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};
export default Course;

export const query = graphql`
    query($url: String!, $udemyID: String!, $lengthRegex: String!) {
        allCourse(filter: { url: { eq: $url } }) {
            nodes {
                title
                summary
                udemyID
                udemyUrl
                duration
                promo
                url
                objectives
                image {
                    childImageSharp {
                        fluid(maxWidth: 1200) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
        reviews: allCourseReview(
            limit: 9
            filter: { course: { id: { eq: $udemyID } }, content: { regex: $lengthRegex } }
        ) {
            edges {
                node {
                    id
                    content
                    user {
                        title
                    }
                }
            }
        }
    }
`;
