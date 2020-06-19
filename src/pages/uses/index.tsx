import React from "react";
import { Link } from "gatsby";
import { SEO } from "@components";
import styles from "./_uses.styles";
import { graphql } from "gatsby";
import Img from "gatsby-image";

const Uses = ({ data }: any) => {
    return (
        <div css={styles}>
            <SEO title="Uses" />
            <div className="container">
                <h1 className="page-title">Uses</h1>
                <div className="course-production">
                    <div className="course-production-image">
                        <Img
                            fluid={data.deskImage.childImageSharp.fluid}
                            alt="A photo I took during recording one of my courses showing my recording set-up"
                        />
                    </div>
                    <div className="course-production-title">
                        <h2>
                            Course
                            <br />
                            Production
                        </h2>
                        <p>
                            Here are the things I use to produce courses. This includes screen and
                            voice recording, audio and video editing and processing software and
                            more.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container">
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
            </div>
        </div>
    );
};

export const query = graphql`
    query UsesQuery {
        deskImage: file(relativePath: { eq: "desk.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

export default Uses;
