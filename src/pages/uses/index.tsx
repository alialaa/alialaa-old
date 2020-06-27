import React from "react";
import { Link } from "gatsby";
import { SEO } from "@components";
import Microphone from "@svgs/microphone";
import styles from "./_uses.styles";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { useTheme } from "@context/theme-context";

const Uses = ({ data }: any) => {
    const { dark } = useTheme();
    return (
        <div css={styles}>
            <SEO title="Uses" />
            <div className="container">
                <h1 className="page-title">Uses</h1>

                <div className="course-production">
                    <div className="course-production-image">
                        <div className="shadow">
                            <Img
                                fluid={data.deskImage.childImageSharp.fluid}
                                alt="A photo I took during recording one of my courses showing my recording set-up"
                            />
                        </div>
                    </div>
                    <div className="course-production-title">
                        <Microphone
                            className={dark ? "dark" : ""}
                            fill={dark ? "#ffffff" : "#000000"}
                            focusable={false}
                            aria-hidden
                        />
                        <h2>
                            Course
                            <br />
                            Production
                        </h2>
                        <p>Here are some of the things that I use to produce courses.</p>
                    </div>
                </div>

                <ul>
                    <li>
                        I use a MacBook Pro (Retina, 15-inch, Mid 2015), 2.5 GHz Quad-Core Intel
                        Core i7, 16 GB memory. It works fine for recording. Sometimes however,
                        especially during summer when it&apos;s hot, the fan speed gets a bit high.
                        That of course gets into the voice recording and then I have to deal with it
                        when post-processing the voice.
                    </li>
                    <li>
                        I don&apos;t record my laptop&apos;s screen directly. I have an{" "}
                        <a href="https://www.amazon.com/ASUS-VX248H-1920x1080-Gaming-Monitor/dp/B00GMGHCVG">
                            ASUS VX248H 24&quot; Full HD monitor
                        </a>{" "}
                        connected to the laptop. I use the laptop&apos;s screen for looking at
                        finished code or notes while recording. Although the laptop&apos;s screen
                        resolution is higher than the monitor&apos;s, I chose to record the monitor
                        since I don&apos;t need a higher resolution than 1080p. Recording the laptop
                        results in unnecessarily large files.
                    </li>
                    <li>
                        For screen recording and editing I use{" "}
                        <a href="http://www.telestream.net/screenflow/overview.htm">ScreenFlow</a>.
                        I used to use{" "}
                        <a href="https://www.techsmith.com/camtasia-pricing.html">Camtasia</a> wich
                        I got for a good price using a promo code. However when I needed to upgrade
                        to the newest verison I found out that ScreenFlow is almost half the price
                        and it does everything that I want.
                    </li>
                    <li>
                        I have recently been recording using a{" "}
                        <a href="http://www.rode.com/microphones/nt1">RØDE NT1</a> with a{" "}
                        <a href="https://www.rode.com/interfaces/ai1">RØDE AI-1</a> interface. RØDE
                        is also responsible for attaching the mic to the desk using the{" "}
                        <a href="http://www.rode.com/accessories/psa1">PSA1</a> boom arm. Before
                        that I used to use a{" "}
                        <a href="http://recordinghacks.com/microphones/CAD/GXL2400">
                            CAD Audio GXL2400
                        </a>
                        . It was a great choice given its price, but the RØDE NT1 is much more
                        superior.
                    </li>
                    <li>
                        I use{" "}
                        <a href="https://www.adobe.com/products/audition.html">Adobe Audacity</a>{" "}
                        for post-processing my voice recordings. I do things like noise reduction,
                        normalization, equalization, etc...
                    </li>
                    <li>
                        I tried using{" "}
                        <a href="https://www.google.com/search?q=Acoustic+foam">
                            soundproofing panels
                        </a>{" "}
                        (as seen in the picture above). However it didn&apos;t work for me, I
                        probably needed a lot of them in order to have an effect. I just tried
                        moving my desk into a more &quot;furniture crammed&quot; place and the echo
                        was significantly less.
                    </li>
                </ul>

                <div className="coding">
                    <div className="coding-title">
                        <svg
                            className={dark ? "dark" : ""}
                            fill={dark ? "#ffffff" : "#000000"}
                            focusable={false}
                            aria-hidden
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0zm-.999-3.124a.5.5 0 0 1 .33.625l-4 13a.5.5 0 0 1-.955-.294l4-13a.5.5 0 0 1 .625-.33z"
                            />
                        </svg>
                        <h2>
                            Coding &<br />
                            Services
                        </h2>
                        <p>Hardware, Code editor, softwares, terminal and more.</p>
                    </div>
                    <div className="coding-list">
                        <ul>
                            <li>
                                I currently code on a MacBook Pro (Retina, 15-inch, Mid 2015), 2.5
                                GHz Quad-Core Intel Core i7, 16 GB memory. It&apos;s old but still
                                working fine for me.
                            </li>
                            <li>
                                I use <a href="https://code.visualstudio.com">VS Code</a> as my main
                                code editor for both; my daily work and recording courses and
                                videos.
                            </li>
                            <li>
                                I prefer dark VS Code themes. My current theme is{" "}
                                <a href="https://draculatheme.com/visual-studio-code/">Dracula</a>.
                                This is also the theme that I use when recording.
                            </li>
                            <li>
                                I use <a href="https://dank.sh">Dank Mono</a> as a font for VS Code.
                                I also use this font on this website in the blog for code snippets.
                            </li>
                            <li>
                                I use the default macOS terminal with the default Z shell. I am not
                                sure why would I use another terminal to be honest 😁.
                            </li>
                            <li>
                                <a href="https://www.google.com/chrome/">Google Chrome</a> is my
                                main browser. I use other browsers for testing.
                            </li>
                            <li>
                                I use <a href="https://www.mamp.info/">MAMP</a> for WordPress
                                development, <a href="https://www.postman.com/">Postman</a> for API
                                testing, <a href="https://www.notion.so/">Notion</a> for notes and
                                task management, <a href="https://slack.com/">Slack</a> for
                                communication and{" "}
                                <a href="https://www.apple.com/keynote/">Keynote</a> for course
                                presentations.
                            </li>
                            <li>
                                This website is hosted on{" "}
                                <a href="https://www.netlify.com/">Netlify</a>, the code is hosted
                                on <a href="https://github.com/alialaa/alialaa"> GitHub</a>.
                                Amazon&apos;s <a href="https://aws.amazon.com/s3/">S3</a> and{" "}
                                <a href="https://aws.amazon.com/cloudfront/">CloudFront</a> are used
                                to host some assets.
                            </li>
                            <li>
                                I use <a href="https://godaddy.com/">GoDaddy</a> for domain names.
                            </li>
                            <li>
                                I use <a href="https://sendy.co/">Sendy</a> for newsletters.
                                It&apos;s a self-hosted service which uses{" "}
                                <a href="https://aws.amazon.com/ses">Amazon Simple Email Service</a>
                                . It&apos;s written using PHP and thus it needs the{" "}
                                <a href="https://en.wikipedia.org/wiki/LAMP_(software_bundle)">
                                    LAMP stack
                                </a>{" "}
                                to be hosted. I use a{" "}
                                <a href="https://www.digitalocean.com/">DigitalOcean</a> droplet
                                with the LAMP stack installed to host it.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const query = graphql`
    query UsesQuery {
        deskImage: file(relativePath: { eq: "desk2.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

export default Uses;
