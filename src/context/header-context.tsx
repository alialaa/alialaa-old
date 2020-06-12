import React, { createContext, useState, useCallback } from "react";
import { SerializedStyles } from "@emotion/serialize";

type HeaderContextType = {
    header: React.ReactNode | null;
    headerStyles: SerializedStyles | null;
    setHeader: (header: React.ReactNode) => void;
    setHeaderStyles: (styles: SerializedStyles | null) => void;
};

type HeaderProviderType = {
    children: React.ReactNode;
};

//default context values are needed otherwise a gatsby build error will happen
const HeaderContext = createContext<HeaderContextType>({
    header: null,
    headerStyles: null,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setHeader: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setHeaderStyles: () => {}
});

function useHeader() {
    const context = React.useContext(HeaderContext);
    if (!context) {
        //window check because it throws an error when running gatsby build
        throw new Error(`useHeader must be used within a HeaderProvider`);
    }
    return context;
}
function HeaderProvider({ children }: HeaderProviderType) {
    const [header, setLocalHeader] = useState<React.ReactNode | null>(null);
    const [headerStyles, setLocalHeaderStyles] = useState<SerializedStyles | null>(null);

    // useEffect(() => {}, []);

    const setHeader = useCallback(
        (header: React.ReactNode) => {
            setLocalHeader(header);
        },
        [header]
    );
    const setHeaderStyles = useCallback(
        (styles: SerializedStyles | null) => {
            setLocalHeaderStyles(styles);
        },
        [headerStyles]
    );

    return (
        <HeaderContext.Provider
            value={{
                header,
                headerStyles,
                setHeader,
                setHeaderStyles
            }}
        >
            {children}
        </HeaderContext.Provider>
    );
}
export { HeaderProvider, useHeader };
