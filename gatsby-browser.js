import React from "react";
import { ThemeProvider } from "./src/context/theme-context";
import { HeaderProvider } from "./src/context/header-context";

export const wrapRootElement = ({ element }) => {
    return (
        <ThemeProvider>
            <HeaderProvider>{element}</HeaderProvider>
        </ThemeProvider>
    );
};

export const onServiceWorkerUpdateReady = () => {
    window.location.reload(true);
};
