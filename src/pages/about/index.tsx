import React from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import { SEO } from "@components";
import styles from "./_about.styles";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import courses from "../../../content/courses.yml";

const About = ({ data }: any) => {
    const { pathname } = useLocation();
    return (
        <div css={styles}>
            <SEO title="About" pathname={pathname} />
            <div className="container">
                <h1 className="page-title">About</h1>

                <div className="content">
                    <div className="portrait-image grid-item ">
                        <div className="shadow">
                            <Img fluid={data.portrait.childImageSharp.fluid} alt="A photo of me" />
                        </div>
                    </div>
                    <div className="intro-text grid-item ">
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

                    <div className="beginnings grid-item ">
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
                    <div className="uni-image grid-item ">
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

                    <div className="themeforest-text grid-item ">
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
                    <div className="themeforest-image grid-item ">
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

                    <div className="job-text grid-item ">
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
                    <div className="job-testimonial testimonial grid-item ">
                        <figure>
                            <div className="shadow">
                                <blockquote>
                                    <p>
                                        “I have been in the tech space for the past 10 years, worked
                                        with more than 100 developers. Ali is THE best frontend
                                        developer I have worked with. He has great knowledge,
                                        helpful and has a distinguished work ethic.”
                                    </p>
                                </blockquote>
                            </div>
                            <figcaption>
                                Testimonial from the CEO of the agency where I had my first job.
                            </figcaption>
                        </figure>
                    </div>
                    <div className="job-text-2 grid-item ">
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
                    <div className="freelancing-text grid-item">
                        <h3>Freelancing</h3>
                        <p>
                            After few years of having a regular job, I gained a lot of experience
                            and worked on a lot of big projects. Nevertheless, I started getting
                            tired of the routine. I felt like I needed a new challange at this
                            point. So I decided to start freelancing. When I took that decision, I
                            had no idea what to do and how to find clients. I started applying for
                            jobs on <a href="https://www.upwork.com">Upwork</a>. And given my empty
                            Upwork profile, It took me around 6 months to be noticed and hired by a
                            client. It was a very difficult period in my life. I was barely getting
                            any income and I started to doubt my decision. But during these 6 months
                            I did a lot of things that helped me a lot later. I created a website
                            for myself which was{" "}
                            <a href="https://twitter.com/wesbos/status/933730758547660800">
                                shared by Wes Bos
                            </a>
                            ,{" "}
                            <a href="https://medium.com/@alialaa">wrote some articles on medium</a>,
                            created a CSS grid cheat sheet{" "}
                            <a href="https://twitter.com/smashingmag/status/856989478212313088">
                                which was shared by Smashing Magazine
                            </a>{" "}
                            and so on. All of that gave a bit of exposure and helped me have some
                            stuff to show the clients that I was applying for their jobs. Since I
                            got my first job, things went a lot better for me and I was able to get
                            clients easier. A lot of times I didn&apos;t have to search for jobs,
                            clients started to get in touch with me either from an article I wrote
                            or from my Upwork profile.
                        </p>
                    </div>
                    <div className="freelancing-testimonial testimonial grid-item ">
                        <figure>
                            <div className="shadow">
                                <blockquote>
                                    <p>
                                        “Ali is the best freelancer I had the opportunity to work
                                        with. He produces quality code, maintains an excellent
                                        communication and always delivers in time. It is a real
                                        pleasure to work with him.”
                                    </p>
                                </blockquote>
                            </div>
                            <div className="shadow">
                                <blockquote>
                                    <p>
                                        “I would work with Ali again. He is a really good developer
                                        and has strong technical skills.”
                                    </p>
                                </blockquote>
                            </div>
                            <figcaption>
                                Testimonials from some of my freelancing clients.
                            </figcaption>
                        </figure>
                    </div>
                    <div className="courses-text grid-item ">
                        <h3>Course Creation</h3>
                        <p>
                            After about a year of freelancing; I was thinking about something new to
                            do. One of the things that I thought of was creating online courses. I
                            wasn&apos;t sure if I was gonna be able to do it. I haven&apos;t done
                            anything like that before. But after some research and demos, I decided
                            that I am gonna give it a try. And I started preparing for my{" "}
                            <Link to="/courses/wordpress">first course</Link> which was about
                            creating WordPress themes. It took me a very long time to prepare and
                            record that course. I was very unconfident about how I was doing things
                            and I kept re-recording and re-editing a lot. But after the first few
                            sections I started to get used to it and I finally released the course
                            on Udemy.
                        </p>
                        <p>
                            I struggeled a bit at the beginning with sales, but after a while the
                            course started getting some traction and also some good reviews. Few
                            months later I decided to do more courses. Although it&apos;s a very
                            stressful process to create and edit a course on your own; but I really
                            enjoyed the outcome of it. Helping students and getting positive
                            feedback is a really satisfying experience.
                        </p>
                        <p>
                            I have made <Link to="/courses">{courses.length} courses</Link> so far
                            and I really enjoyed each one of them. When you create a course about a
                            certain topic, you really learn a lot about this topic. When you are
                            willing to explain something to people, you have to have a very deep
                            understanding of it. And that makes you learn things wouldn&apos;t have
                            learned otherwise.
                        </p>
                        <p>
                            I am currently focusing on creating more courses. I am also planing to
                            do free tutorials on{" "}
                            <a href="https://www.youtube.com/channel/UCa-VVCGLQZv6IQWTKyVlnjg">
                                youtube
                            </a>{" "}
                            and write more <Link to="/blog">articles here on my website</Link> 🙂.
                        </p>
                    </div>
                    <div className="desk-image grid-item ">
                        <figure>
                            <div className="shadow">
                                <Img
                                    fluid={data.editing.childImageSharp.fluid}
                                    alt="A photo I took while editing one of the lectures of my first course. Shows my laptop screen with the editing software opened."
                                />
                            </div>
                            <figcaption>
                                A photo I took while editing one of the lectures of my first course.
                            </figcaption>
                        </figure>
                        <br />
                        <figure>
                            <div className="shadow">
                                <Img
                                    fluid={data.desk.childImageSharp.fluid}
                                    alt="A photo I took during recording one of my courses showing my recording set-up"
                                />
                            </div>
                            <figcaption>
                                A photo I took during recording one of my courses showing my
                                recording set-up.
                            </figcaption>
                        </figure>
                    </div>
                    <div className="course-testimonials grid-item  testimonial">
                        <figure>
                            <div className="course-testimonials-items">
                                <div className="shadow">
                                    <blockquote>
                                        <p>
                                            “Probably one of the best WordPress Udemy course. Not an
                                            easy one, it will take time to digest it but the topics
                                            are deeply covered by Ali.”
                                        </p>
                                    </blockquote>
                                </div>
                                <div className="shadow">
                                    <blockquote>
                                        <p>
                                            “Very competent teacher with clear pronounce and
                                            clarification as well as useful practical examples.”
                                        </p>
                                    </blockquote>
                                </div>
                                <div className="shadow">
                                    <blockquote>
                                        <p>
                                            “Ali is really a great Teacher, My all search stop after
                                            watching his course and now I have created my first
                                            theme to sell on ThemeForest.”
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                            <figcaption>
                                Some of the reviews left by students who took my courses.
                            </figcaption>
                        </figure>
                    </div>
                    <div className="more-text grid-item ">
                        <h3>More About Me</h3>
                        <p>
                            When I am not working; I am probably spending some time with street
                            cats, that makes up around 20% of my day 😄. I also enjoy football
                            (soccer), I am a fan of{" "}
                            <a href="https://en.wikipedia.org/wiki/FC_Bayern_Munich">
                                FC Bayern Munich
                            </a>
                            , <a href="https://en.wikipedia.org/wiki/Arsenal_F.C.">Arsenal F.C.</a>{" "}
                            and <a href="https://en.wikipedia.org/wiki/Al_Ahly_SC">Al Ahly SC</a>.
                            My favourite form of entertainment is music and my favourite band is{" "}
                            <a href="https://en.wikipedia.org/wiki/Radiohead">Radiohead</a>.
                        </p>
                    </div>
                    <div className="more-image grid-item ">
                        <figure>
                            <div className="shadow">
                                <Img
                                    fluid={data.cat.childImageSharp.fluid}
                                    alt="A photo of me and Nadya (a street cat)."
                                />
                            </div>
                            <figcaption>A photo of me and Nadya (a street cat).</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const query = graphql`
    query AboutQuery {
        portrait: file(relativePath: { eq: "portrait2.jpg" }) {
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
        desk: file(relativePath: { eq: "desk2.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        editing: file(relativePath: { eq: "editing.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        cat: file(relativePath: { eq: "cat.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

export default About;
