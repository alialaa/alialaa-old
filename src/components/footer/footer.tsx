import { Link } from "gatsby";
import React, { useState, useEffect } from "react";
import styles from "./footer.style";
import { Newsletter } from "@components";
import { navigation } from "@utils";
import Youtube from "@svgs/youtube";
import Twitter from "@svgs/twitter";
import Github from "@svgs/github";
import Instagram from "@svgs/instagram";

const Footer = ({ siteUrl }: { siteUrl: string }) => {
    return (
        <footer css={styles}>
            <div className="container">
                <div className="footer-row">
                    <div className="footer-column">
                        <Newsletter />
                    </div>
                    <div className="footer-column links">
                        <div className="quick">
                            <h3>Site Links:</h3>
                            <nav
                                className="navigation"
                                role="navigation"
                                aria-label="Footer Navigation"
                            >
                                <ul>
                                    {navigation.map(item => {
                                        return (
                                            <li key={item.title}>
                                                <Link activeClassName="active" to={item.to}>
                                                    {item.title}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </nav>
                        </div>
                        <div className="external">
                            <h3>External Links:</h3>

                            <ul>
                                <li>
                                    <a href="https://medium.com/@alialaa">My Articles on Medium</a>
                                </li>
                                <li>
                                    <a href="https://css-tricks.com/author/alialaa">
                                        My Articles on CSS Tricks
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.udemy.com/user/ali-alaa-3/">
                                        My Courses on Udemy
                                    </a>
                                </li>
                                <li>
                                    <a href="https://alialaa.github.io/css-grid-cheat-sheet/">
                                        CSS Grid Cheat Sheet
                                    </a>
                                </li>
                                <li>
                                    <a href={`${siteUrl}/rss.xml`}>Articles RSS Feed</a>
                                </li>
                            </ul>
                        </div>
                        <div className="social">
                            <h3>Find me on:</h3>

                            <ul>
                                <li>
                                    <a href="https://twitter.com/alialaa">
                                        <Twitter focusable="false" aria-hidden />
                                        <span>
                                            <span className="visually-hidden">Follow me on </span>
                                            Twitter
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/alialaa17/">
                                        <Instagram focusable="false" aria-hidden />
                                        <span>
                                            <span className="visually-hidden">Follow me on </span>
                                            Instagram
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/channel/UCa-VVCGLQZv6IQWTKyVlnjg">
                                        <Youtube focusable="false" aria-hidden />
                                        <span>
                                            <span className="visually-hidden">
                                                Subscribe to my{" "}
                                            </span>
                                            YouTube<span className="visually-hidden"> channel</span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/alialaa/">
                                        <Github focusable="false" aria-hidden />
                                        <span>
                                            <span className="visually-hidden">Follow me on </span>
                                            GitHub
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="logo">
                    <svg aria-hidden focusable="false" viewBox="0 0 434 219.675">
                        <path
                            fill="#090909"
                            stroke="#090909"
                            strokeWidth="3"
                            d="M432.5,146.5h-40.881l-53.456-145h-1h-29h-1
l-53.456,145h-70.088l-53.456-145h-1h-29h-1l-53.456,145H1.5v31h32.778l-15.115,40.25l36.083,0.413L69.223,177.5h90.88
l13.976,40.288l36.084,0.337L195.048,177.5h47.23l-15.115,40.25l36.084,0.413l13.976-40.663h90.879l13.977,40.288l36.084,0.337
L403.048,177.5H432.5V146.5z M79.78,146.5l34.883-102.424L149.545,146.5H79.78z M287.781,146.5l34.882-102.424L357.545,146.5
H287.781z"
                        />
                    </svg>
                </div>
                <div className="copyright">
                    Copyright &copy; 2020 Ali Alaa. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};
export default Footer;
