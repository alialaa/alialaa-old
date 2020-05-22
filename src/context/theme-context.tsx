import React, { createContext, useState, useCallback, useEffect } from "react";

type ThemeContextType = {
    dark: boolean;
    animations: boolean;
    toggleAnimations: () => void;
    toggleDark: () => void;
    loaded: boolean; //used to check if values are loaded from localstorgae to hide contraols and avoid a flicker
};

type ThemeProviderType = {
    children: React.ReactNode;
};

//default context values are needed otherwise a gatsby build error will happen
const ThemeContext = createContext<ThemeContextType>({
    dark: false,
    animations: true,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    toggleAnimations: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    toggleDark: () => {},
    loaded: false
});

function useTheme() {
    const context = React.useContext(ThemeContext);
    if (!context) {
        //window check because it throws an error when running gatsby build
        throw new Error(`useTheme must be used within a ThemeProvider`);
    }
    return context;
}
function ThemeProvider({ children }: ThemeProviderType) {
    const [dark, setDark] = useState(false);
    const [animations, setAnimations] = useState(true);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const prefersDarkModeSystem =
            window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches === true;
        const prefersDarkModeLocalStorage = JSON.parse(localStorage.getItem("dark") || "null");
        const prefersReduceMotionSystem =
            window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches === true;
        const prefersReduceMotionLocalStorage = JSON.parse(
            localStorage.getItem("animations") || "true"
        );
        setDark(
            prefersDarkModeLocalStorage === null
                ? prefersDarkModeSystem
                : prefersDarkModeLocalStorage
        );
        setAnimations(
            prefersReduceMotionLocalStorage === null
                ? prefersReduceMotionSystem
                : prefersReduceMotionLocalStorage
        );
        setLoaded(true);
    }, []);

    const toggleDark = useCallback(() => {
        setDark(!dark);
        localStorage.setItem("dark", JSON.stringify(!dark));
    }, [setDark, dark]);
    const toggleAnimations = useCallback(() => {
        setAnimations(!animations);
        localStorage.setItem("animations", JSON.stringify(!animations));
    }, [setAnimations, animations]);
    return (
        <ThemeContext.Provider
            value={{
                dark,
                animations,
                toggleAnimations,
                toggleDark,
                loaded
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}
export { ThemeProvider, useTheme };
