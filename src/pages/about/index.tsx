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
                <div className="main">
                    <a
                        href="https://twitter.com/intent/tweet?screen_name=TwitterDev&ref_src=twsrc%5Etfw"
                        className="twitter-mention-button"
                        data-show-count="false"
                    >
                        Tweet to @TwitterDev
                    </a>
                    <script
                        async
                        src="https://platform.twitter.com/widgets.js"
                        charSet="utf-8"
                    ></script>
                </div>
                <div className="sidebar">
                    <a
                        className="twitter-timeline"
                        href="https://twitter.com/TwitterDev?ref_src=twsrc%5Etfw"
                    >
                        Tweets by TwitterDev
                    </a>{" "}
                    <script
                        async
                        src="https://platform.twitter.com/widgets.js"
                        charSet="utf-8"
                    ></script>
                </div>
            </div>
        </div>
    );
};

export default About;
