import React from "react";
import { SEO } from "@components";
import { Link } from "gatsby";
import styles from "./home.styles";

const Home = () => (
    <section css={styles}>
        <SEO title="Home" />
        <div className="container">
            <h2 className="visually-hidden">
                Hello, I&apos;m Ali Alaa. A Front-end web developer.
            </h2>
            <div className="wrapper">
                <p>
                    I am a freelance front-end developer based in Egypt 🇪🇬. I develop UI&apos;s for
                    the web and hybrid mobile applications. I am currently focusing on creating{" "}
                    <Link to="/">online courses</Link>, <Link to="/">writing articles</Link> and{" "}
                    <Link to="/">publishing free tutorials</Link>. If you are interested in working
                    with me, feel free to <Link to="/">contact me</Link>.
                </p>
            </div>
        </div>
    </section>
);

export default Home;
