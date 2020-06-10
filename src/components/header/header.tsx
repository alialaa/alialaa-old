import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import React, { useState, useEffect, Suspense } from "react";
import styles from "./header.style";
import { useInterval } from "@hooks";
import { navigation, getPageInfo } from "@utils";
import { useTheme } from "@context/theme-context";

const Space = React.lazy(() => import("../space/space"));

const Logo = ({ siteTitle, animations }: { siteTitle: string; animations: boolean }) => {
    const [animate, setAnimate] = useState<boolean>(animations);
    useEffect(() => {
        if (!animations) {
            setAnimate(false);
            return;
        }
        setAnimate(true);
        setTimeout(() => {
            setAnimate(false);
        }, 2500);
    }, [animations]);
    useInterval(() => {
        if (!animations) return;
        setAnimate(true);
        setTimeout(() => {
            setAnimate(false);
        }, 2500);
    }, 8500);
    return (
        <svg
            role="img"
            focusable="false"
            aria-labelledby="svg-logo-title svg-logo-desc"
            width="120px"
            height="60px"
            viewBox="0 0 434 219.675"
        >
            <title id="svg-logo-title">{siteTitle}</title>
            <desc id="svg-logo-desc">
                The logo is comprised of to A letters joined togather representing my initials.
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
    );
};

const DarkModeButton = ({
    dark,
    animations,
    toggleDark
}: {
    dark: boolean;
    animations: boolean;
    toggleDark: () => void;
}) => {
    return (
        <button
            className="toggle-button"
            onClick={() => toggleDark()}
            type="button"
            aria-pressed={dark ? "true" : "false"}
            aria-label="Dark Mode"
            title={dark ? "Activate Light Mode" : "Activate Dark Mode"}
        >
            <div
                className={`color-scheme-button ${dark ? "dark-active" : "light-active"} ${
                    !animations ? "no-motion" : ""
                }`}
            >
                <div className="moon">
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        viewBox="0 0 16 16"
                        fill="#ffffff"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M14.53 10.53a7 7 0 01-9.058-9.058A7.003 7.003 0 008 15a7.002 7.002 0 006.53-4.47z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <div className="sun">
                    <div className="body"></div>
                    {Array(8)
                        .fill(null)
                        .map((r, i) => (
                            <div
                                key={`ray_${i}`}
                                className={`ray ray_${i} ${i % 2 === 0 ? "small" : ""}`}
                            />
                        ))}
                </div>
            </div>
            <p aria-hidden className="toggle-button-text">{`Dark Mode: ${dark ? "On" : "Off"}`}</p>
        </button>
    );
};

const AnmationsButton = ({
    animations,
    toggleAnimations
}: {
    animations: boolean;
    toggleAnimations: () => void;
}) => {
    return (
        <button
            className="toggle-button"
            onClick={() => toggleAnimations()}
            type="button"
            aria-pressed={animations ? "true" : "false"}
            aria-label="Animations"
            title={animations ? "Turn off animations" : "Turn on animations"}
        >
            <div
                className={`animations-button ${
                    animations ? "animations-active" : "animations-inactive"
                } ${!animations ? "no-motion" : ""}`}
            >
                <div className="circles">
                    <div className="circle circle_1"></div>
                    <div className="circle circle_2"></div>
                    <div className="circle circle_3"></div>
                </div>
            </div>
            <p aria-hidden className="toggle-button-text">{`Animations: ${
                animations ? "On" : "Off"
            }`}</p>
        </button>
    );
};

type HeaderProps = {
    siteTitle: string;
};
const Header = ({ siteTitle }: HeaderProps) => {
    const { pathname } = useLocation();
    const { toggleAnimations, toggleDark, animations, dark, loaded: settingstLoaded } = useTheme();

    return (
        <header
            className={getPageInfo(pathname)
                ?.title.replace(/ /g, "-")
                .toLocaleLowerCase()}
            css={styles}
        >
            <div className="canvas-wrap">
                <div className="canvas">
                    <Suspense fallback={null}>
                        <Space night={dark} page={getPageInfo(pathname)} animations={animations} />
                    </Suspense>
                </div>
            </div>
            <div className="content">
                <h1>
                    <Link to="/">
                        <Logo siteTitle={siteTitle} animations={animations} />
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
            {settingstLoaded && (
                <div className="toggle-buttons">
                    <DarkModeButton dark={dark} animations={animations} toggleDark={toggleDark} />
                    <AnmationsButton animations={animations} toggleAnimations={toggleAnimations} />
                </div>
            )}
        </header>
    );
};
export default Header;
