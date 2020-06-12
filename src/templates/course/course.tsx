import React, { useEffect } from "react";
import { SEO, ButtonAnchor } from "@components";
import { useLocation } from "@reach/router";
import Helmet from "react-helmet";
import { useTheme } from "@context/theme-context";
import { useHeader } from "@context/header-context";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styles from "./course.styles";
import FiveStarts from "@svgs/5starts";
import { css } from "@emotion/core";

const Course = (props: any) => {
    const { pathname } = useLocation();
    const { setHeader, setHeaderStyles } = useHeader();
    const { dark } = useTheme();
    const { data } = props;
    const { title, summary, udemyUrl, image, duration } = data.allCourse.nodes[0];

    useEffect(() => {
        setHeader(<div style={{ height: 0 }}></div>);
        setHeaderStyles(css`
            overflow: visible;
            position: absolute;
            width: 100%;
            .content {
                position: relative;
            }
        `);
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
                                Buy <span className="visually-hidden">{title}</span> on Udemy
                            </ButtonAnchor>
                            <ButtonAnchor dark={true} href="#reviews">
                                See Reviews
                            </ButtonAnchor>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
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
                    <p className="summary">{summary}</p>
                    <video
                        id="playerId__14515694_html5_api"
                        preload="metadata"
                        controls
                        src="https://mp4-b.udemycdn.com/2018-09-29_08-52-01-9fd030340c3fff303b4d9af98357be43/WebHD_720p.mp4?secure=aKh7ocAp3BEZhSWorvur8Q%3D%3D%2C1592011091"
                    ></video>
                    <div className="objectives">
                        <h2>What you&apos;ll Learn:</h2>
                    </div>
                    <div id="reviews">
                        <h2>What Students are Saying:</h2>
                        <ul className={`reviews ${dark ? "dark" : ""}`}>
                            {data.reviews.edges.map((review: { [key: string]: any }) => {
                                return (
                                    <li key={review.node.id}>
                                        <FiveStarts />
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
                    </div>
                </div>
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
