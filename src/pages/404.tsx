import React, { useEffect } from "react";
import SEO from "../components/seo";
import { useHeader } from "@context/header-context";

const NotFoundPage = () => {
    const { setIs404 } = useHeader();
    useEffect(() => {
        setIs404(true);
        return () => {
            setIs404(false);
        };
    });
    return (
        <>
            <SEO title="404: Not found" />
            <h1>NOT FOUND</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </>
    );
};

export default NotFoundPage;
