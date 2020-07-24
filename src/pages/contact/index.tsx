import React from "react";
import { Link } from "gatsby";
import { SEO } from "@components";
import styles from "./_contact.styles";
import { useTheme } from "@context/theme-context";

const Contact = ({ data }: any) => {
    const { dark } = useTheme();
    return (
        <div css={styles}>
            <SEO title="Contact" />
            <div className="container">
                <h1 className="page-title">Contact</h1>
                <div className="main">
                    <div className="content">
                        <p>
                            If you would like to get in touch with me for any reason, please read
                            the following page first.
                        </p>
                        <br />
                        <p className="lead">
                            <strong>
                                I am currently focusing more on creating online content. But I also
                                do freelance work from time to time. If you would like to hire me
                                for a job, please understand what I can do for you first:
                            </strong>
                        </p>
                        <ul>
                            <li>
                                <p>
                                    <strong>
                                        I am a{" "}
                                        <a href="https://en.wikipedia.org/wiki/Front-end_web_development">
                                            <strong>front-end web developer</strong>
                                        </a>
                                    </strong>
                                    . Which means I can turn your designs and data into user
                                    interfaces that work in the browser. I can also develop user
                                    interfaces for mobile phones through{" "}
                                    <a href="https://en.wikipedia.org/wiki/Mobile_app#Hybrid_app">
                                        hybrid mobile applications
                                    </a>
                                    .
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>I am not</strong> a web designer.{" "}
                                    <strong>I cannot</strong> use tools like photoshop and sketch to
                                    design a website or an application. <strong>I can</strong> turn
                                    designs made using such tools into web or mobile user
                                    interfaces.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>I am also not</strong> a back-end developer. I have an
                                    idea about back-end concepts. However creating API&apos;s,
                                    dealing with databases, etc.. is not my main profession.
                                </p>
                            </li>
                            <li>
                                <p>
                                    In addition to HTML/CSS and Vanilla JavaScript, I can use{" "}
                                    <a href="https://reactjs.org/">ReactJS</a> for web and
                                    single-page applications (Including Next.js and Gatsby). I use{" "}
                                    <a href="https://reactnative.dev/">React Native</a> for hybrid
                                    mobile applications. I can aslo develop front-ends for{" "}
                                    <a href="https://wordpress.org/">WordPress</a> powered websites.
                                </p>
                            </li>
                        </ul>
                        <p>
                            After reading these points, if you think I am a good match for your
                            project, please get in touch with me through my email:{" "}
                            <a
                                href="mailto:hello@alialaa.com
"
                            >
                                hello@alialaa.com
                            </a>
                        </p>
                        <br />
                        <br />
                        <p className="lead">
                            <strong>If you have a question related to one of my courses:</strong>
                        </p>
                        <ul>
                            <li>
                                <p>
                                    Currently all my courses are available on{" "}
                                    <a href="https://www.udemy.com/user/ali-alaa-3/">Udemy.</a> I
                                    prefere that you keep course related questions in the Q&A
                                    section on Udemy. This way everybody else can see your question
                                    which is better for me and for other students.
                                </p>
                            </li>
                            <li>
                                <p>
                                    When applicable, attach your question to the related lecture.
                                    Students can filter questions by a specific lecture, so this is
                                    way you are also helping other students find questions easily.
                                </p>
                            </li>
                            <li>
                                <p>
                                    If your question requires me looking at your code, please upload
                                    your entire project folder either on github or any storage
                                    service like google drive. If you are going to send a compressed
                                    folder, use ZIP and not RAR. Also avoid adding generated folders
                                    like node_modules in the compressed file.
                                </p>
                            </li>
                            <li>
                                <p>
                                    {" "}
                                    As a last resort, If you would like to keep the question or code
                                    private, send me an email to{" "}
                                    <a
                                        href="mailto:hello@alialaa.com
"
                                    >
                                        hello@alialaa.com
                                    </a>
                                    . But please keep that as your last option.
                                </p>
                            </li>
                        </ul>
                        <br /> <br />
                        <p>
                            If you would like to know more about me, make sure to check my{" "}
                            <Link to="/about">About page</Link>. Also check my{" "}
                            <Link to="/uses">Uses page</Link> for information about stuff that I use
                            for development and course production.
                        </p>
                        <br />
                        <p>
                            If you have suggestions, requests, quick questions or just wanna say hi
                            you can also{" "}
                            <a
                                href="mailto:hello@alialaa.com
"
                            >
                                send me an email
                            </a>{" "}
                            or just{" "}
                            <a
                                href="https://twitter.com/intent/tweet?screen_name=alialaa&ref_src=twsrc%5Etfw"
                                className="twitter-mention-button"
                                data-related=""
                                data-show-count="false"
                            >
                                Tweet to @alialaa
                            </a>
                            .
                        </p>
                    </div>

                    <div className="sidebar">
                        <div className={`twitter shadow ${dark ? "dark" : "light"}`}>
                            <div className="header">
                                <h3>
                                    <div className="visually-hidden">Twitter: </div>@alialaa
                                </h3>
                                <a
                                    className="twitter-follow-button"
                                    href="https://twitter.com/alialaa"
                                >
                                    Follow @alialaa
                                </a>
                            </div>
                            <div className="light" style={{ height: 500 }}>
                                <a
                                    className="twitter-timeline"
                                    data-height="500"
                                    data-chrome="nofooter noborders noheader transparent"
                                    data-theme={"light"}
                                    data-link-color="#fff"
                                    href="https://twitter.com/alialaa"
                                ></a>
                            </div>
                            <div className="dark" style={{ height: 500 }}>
                                <a
                                    className="twitter-timeline"
                                    data-height="500"
                                    data-chrome="nofooter noborders noheader transparent"
                                    data-theme={"dark"}
                                    data-link-color="#fff"
                                    href="https://twitter.com/alialaa"
                                ></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
