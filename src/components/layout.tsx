import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Header, Footer } from "@components";
import { useLocation } from "@reach/router";
import { Global, css } from "@emotion/react";
import Helmet from "react-helmet";
import { useTheme } from "@context/theme-context";
import { pageClassName } from "@utils";
import "focus-visible";
import "normalize.css";
import "./global-styles/font-visby.css";
// import "./global-styles/font-dank.css";
import global from "./global-styles";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                    siteUrl
                }
            }
        }
    `);
    const { dark, animations, loaded } = useTheme();
    const { pathname } = useLocation();
    return (
        <>
            <Global
                styles={css`
                    ${global}
                `}
            />
            {loaded && (
                <Helmet
                    htmlAttributes={{
                        "data-dark": dark ? "true" : "false",
                        "data-animations": animations ? "true" : "false"
                    }}
                ></Helmet>
            )}
            <a className="skip-link" href="#main">
                Skip to Content
            </a>
            <Header siteTitle={data.site.siteMetadata.title} />
            <div className={pageClassName(pathname)} id="main">
                {children}
            </div>
            <Footer siteUrl={data.site.siteMetadata.siteUrl} />
        </>
    );
};

export default Layout;
