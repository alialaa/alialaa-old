import React, { createContext, useState, useCallback } from "react";

type ThemeContextType = {
    dark: boolean;
    animations: boolean;
    toggleAnimations: () => void;
    toggleDark: () => void;
};

type ThemeProviderType = {
    children: React.ReactNode;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function useTheme() {
    const context = React.useContext(ThemeContext);
    if (!context) {
        throw new Error(`useTheme must be used within a ThemeProvider`);
    }
    return context;
}
function ThemeProvider({ children }: ThemeProviderType) {
    const prefersDarkModeSystem =
        window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches === true;
    const prefersDarkModeLocalStorage = JSON.parse(localStorage.getItem("dark") || "null");
    const prefersReduceMotionSystem =
        window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches === true;
    const prefersReduceMotionLocalStorage = JSON.parse(
        localStorage.getItem("animations") || "true"
    );
    const [dark, setDark] = useState(
        prefersDarkModeLocalStorage === null ? prefersDarkModeSystem : prefersDarkModeLocalStorage
    );
    const [animations, setAnimations] = useState(
        prefersReduceMotionLocalStorage === null
            ? prefersReduceMotionSystem
            : prefersReduceMotionLocalStorage
    );
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
                toggleDark
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}
export { ThemeProvider, useTheme };
