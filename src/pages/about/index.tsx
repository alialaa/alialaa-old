import React from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import { SEO } from "@components";
import styles from "./_about.styles";
import { graphql } from "gatsby";
import Img from "gatsby-image";

const About = ({ data }: any) => {
    const { pathname } = useLocation();
    return (
        <div css={styles}>
            <SEO title="About" pathname={pathname} />
            <div className="container">
                <h1 className="page-title">About</h1>

                <div className="content">
                    <div className="portrait-image">
                        <div className="shadow">
                            <Img fluid={data.portrait.childImageSharp.fluid} alt="A photo of me" />
                        </div>
                    </div>
                    <div className="intro-text">
                        <h2>Who am I? (TL;DR version)</h2>
                        <p>
                            My name is Ali Alaa. I am a front-end web developer based in Cairo,
                            Egypt. I have been working in the field for around{" "}
                            {new Date().getFullYear() - 2012} years. I am currently focusing on
                            creating online learning content. I publish{" "}
                            <Link to="/courses">online courses</Link>,{" "}
                            <Link to="/blog">articles</Link> and I am planning to publish free
                            tutorials on{" "}
                            <a href="https://www.youtube.com/channel/UCa-VVCGLQZv6IQWTKyVlnjg">
                                my youtube channel
                            </a>
                            .
                        </p>
                        <p>
                            I also do freelance work from time to time. If you are interested in
                            working with me, feel free to{" "}
                            <Link to="/contact">get in touch with me</Link>.
                        </p>
                    </div>
                    <div className="uni-image">
                        <figure>
                            <div className="shadow">
                                <Img
                                    fluid={data.uni.childImageSharp.fluid}
                                    alt="A photo of a classroom. A memory I found on my phone of my days studying at the university."
                                />
                            </div>
                            <figcaption>
                                A memory of my days studying at the university that I found on my
                                old phone.
                            </figcaption>
                        </figure>
                    </div>
                    <div className="beginnings">
                        <h3>The Beginnings</h3>
                        <p>
                            I was first introduced to web development during my time studying
                            telecommunications engineering around 2010. During that time I
                            discovered <a href="https://themeforest.net">themeforest</a> and I was
                            intrigued by some of the WordPress templates that I saw there. Shortly
                            after, I decided to start learning web development and WordPress in
                            parallel with my university studies. I learned through online tutorials
                            and courses. As far as I remember,{" "}
                            <a href="https://tutsplus.com">tutsplus</a> &{" "}
                            <a href="https://www.lynda.com">Lynda</a> were my two biggest sources of
                            learning.
                        </p>
                    </div>

                    <div className="themeforest-text">
                        <h3>First Milestone</h3>
                        <p>
                            At the time I graduated university; I was able to get a jQuery plugin &
                            a WordPress template published on themeforest. This of course happened
                            after multiple rejections which looking back I consider were important
                            for my development. This was a huge milestone for me. Although my theme
                            didn&apos;t do well, but I knew that I have reached a good point in my
                            career.
                        </p>
                        <p>
                            During that time I was looking for a job and I wasn&apos;t yet decided
                            on which field I would like to carry on with. I was applying for jobs
                            for both telecommunications and web development fields.
                        </p>
                    </div>
                    <div className="themeforest-image">
                        <figure>
                            <div className="shadow">
                                <Img
                                    fluid={data.themeforest.childImageSharp.fluid}
                                    alt="A photo of my computer screen showing my first WordPress template accepted on themeforest."
                                />
                            </div>
                            <figcaption>
                                A photo I took during working on the first accepted WordPress
                                template on themeforest.
                            </figcaption>
                        </figure>
                    </div>

                    <div className="job-text">
                        <h3>First Job</h3>
                        <p>
                            I got my first job at a web development agency in 2014. I worked on tons
                            of WordPress projects. At the same time I was still working in my free
                            time on WordPress themes for themeforest. I managed to publish another
                            WordPress theme and a WordPress plugin. However, I started to lose
                            interest in WordPress stuff and I was more interested in learning more
                            about JavaScript and different front-end aspects that I wasn&apos;t
                            aware of like accessibility, JS frameworks and hybrid mobile application
                            development. Luckily, that was also the direction of the agency I worked
                            for. We were getting more web app and hybrid mobile app sort of
                            projects.
                        </p>
                    </div>
                    <div className="job-testimonial">
                        <figure>
                            <div className="shadow">
                                <blockquote>
                                    <p>
                                        “ I have been in the tech space for the past 10 years,
                                        worked with more than 100 developers. Ali is THE best
                                        frontend developer I have worked with. He has great
                                        knowledge, helpful and has a distinguished work ethic.”
                                    </p>
                                </blockquote>
                            </div>
                            <figcaption>
                                Testimonial from the CEO of the agency where I had my first job.
                            </figcaption>
                        </figure>
                    </div>
                    <div className="job-text-2">
                        <p>
                            Publishing themes on themeforest also wans&apos;t a very good idea if
                            you are an individual. To succeed on such a competitive marketplace, you
                            have to have a team of designers, developers and customer support and
                            that wasn&apos;t possible for me at the time. So I decided to quit
                            themeforest and focus more on expanding my front-end development
                            knowledge.
                        </p>
                        <p>
                            Working at an agency was a really beneficial step in my career. Working
                            on real-life projects, dealing with clients and collaborating with
                            different teams taught me a lot. But after a while I decided to take my
                            next step and start freelancing.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const query = graphql`
    query AboutQuery {
        portrait: file(relativePath: { eq: "portrait.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        uni: file(relativePath: { eq: "uni.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        themeforest: file(relativePath: { eq: "themeforest.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

export default About;
