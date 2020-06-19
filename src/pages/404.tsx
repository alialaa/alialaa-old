import React, { useEffect } from "react";
import SEO from "../components/seo";
import { useHeader } from "@context/header-context";
import { css } from "@emotion/core";
import Link from "gatsby-link";

const styles = css`
    padding: 8rem 0;
    text-align: center;
    h1 {
        font-weight: 800;
        font-size: calc(4rem + 1.5vw);
    }
    p {
        font-size: 2.2rem;
        margin-top: 2rem;
    }
`;

const NotFoundPage = () => {
    const { setIs404 } = useHeader();
    useEffect(() => {
        setIs404(true);
        return () => {
            setIs404(false);
        };
    });
    return (
        <div css={styles} className="fof">
            <SEO title="404: Not found" />
            <div className="container">
                <h1>Welcome to Mars</h1>
                <p>
                    There&apos;s nothing to do here. If you insist on staying you are welcome but
                    you can <Link to="/">go home now</Link>.
                </p>
            </div>
        </div>
    );
};

export default NotFoundPage;
