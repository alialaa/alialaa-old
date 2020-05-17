import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import React, { useState, useEffect } from "react";
import styles from "./header.style";
import { useInterval, useMedia } from "@hooks";
import { navigation, getPageInfo } from "@utils";
import { Space } from "@components";

type HeaderProps = {
    siteTitle: string;
};
const Header = ({ siteTitle }: HeaderProps) => {
    const reduceMotion = useMedia("(prefers-reduced-motion: reduce)");
    const [animate, setAnimate] = useState<boolean>(!reduceMotion);
    const { pathname } = useLocation();
    useEffect(() => {
        if (reduceMotion) return;
        setTimeout(() => {
            setAnimate(false);
        }, 2500);
    }, []);
    useInterval(() => {
        if (reduceMotion) return;
        setAnimate(true);
        setTimeout(() => {
            setAnimate(false);
        }, 2500);
    }, 8500);

    return (
        <header css={styles}>
            <div className="canvas-wrap">
                <div className="canvas">
                    <Space page={getPageInfo(pathname)} />
                </div>
            </div>
            <div className="content">
                <h1>
                    <Link to="/">
                        <svg
                            role="img"
                            aria-labelledby="svg-logo-title svg-logo-desc"
                            width="120px"
                            height="60px"
                            viewBox="0 0 434 219.675"
                        >
                            <title id="svg-logo-title">{siteTitle}</title>
                            <desc id="svg-logo-desc">
                                The logo is comprised of to A letters joined togather representing
                                my initials.
                            </desc>
                            <path
                                id="l_s"
                                className={animate ? "animate" : ""}
                                fill="none"
                                stroke="#fff"
                                strokeWidth="3"
                                strokeMiterlimit="10"
                                d="M432.5,146.5h-40.881l-53.456-145h-1h-29h-1
					l-53.456,145h-70.088l-53.456-145h-1h-29h-1l-53.456,145H1.5v31h32.778l-15.115,40.25l36.083,0.413L69.223,177.5h90.88
					l13.976,40.288l36.084,0.337L195.048,177.5h47.23l-15.115,40.25l36.084,0.413l13.976-40.663h90.879l13.977,40.288l36.084,0.337
					L403.048,177.5H432.5V146.5z M79.78,146.5l34.883-102.424L149.545,146.5H79.78z M287.781,146.5l34.882-102.424L357.545,146.5
					H287.781z"
                            />
                        </svg>
                    </Link>
                </h1>
                <nav className="navigation" role="navigation" aria-label="Main Navigation">
                    <ul>
                        {navigation.map(item => {
                            return (
                                <li key={item.title}>
                                    <Link activeClassName="active" to={item.to}>
                                        {item.title}
                                        {pathname === item.to && (
                                            <span className="visually-hidden"> (current page)</span>
                                        )}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    );
};
export default Header;
