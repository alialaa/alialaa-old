import React from "react";
import { ThemeProvider } from "./src/context/theme-context";

export const wrapRootElement = ({ element }) => {
    return <ThemeProvider>{element}</ThemeProvider>;
};

export const onServiceWorkerUpdateReady = () => {
    window.location.reload(true);
};
