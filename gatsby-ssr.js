import React from "react";

export const onRenderBody = ({ setPreBodyComponents }) => {
    setPreBodyComponents([
        React.createElement("script", {
            dangerouslySetInnerHTML: {
                __html: `
          (function() {    
            var prefersDarkModeSystem =
            window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches === true;
            var prefersDarkModeLocalStorage = JSON.parse(localStorage.getItem("dark") || "null");

            document.documentElement.setAttribute('data-dark', prefersDarkModeLocalStorage === null
                ? prefersDarkModeSystem
                : prefersDarkModeLocalStorage)
            })()
        `
            }
        })
    ]);
};
