import React, { createContext, useState, useCallback } from "react";
import { SerializedStyles } from "@emotion/serialize";

type HeaderContextType = {
    header: React.ReactNode | null;
    is404: boolean;
    headerStyles: SerializedStyles | null;
    canvasTitle: string | null;
    setHeader: (header: React.ReactNode) => void;
    setHeaderStyles: (styles: SerializedStyles | null) => void;
    setIs404: (val: boolean) => void;
    setCanvasTitle: (val: string | null) => void;
};

type HeaderProviderType = {
    children: React.ReactNode;
};

//default context values are needed otherwise a gatsby build error will happen
const HeaderContext = createContext<HeaderContextType>({
    header: null,
    headerStyles: null,
    is404: false,
    canvasTitle: null,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setHeader: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setHeaderStyles: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setIs404: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setCanvasTitle: () => {}
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
    const [canvasTitle, setLocalCanvasTitle] = useState<string | null>(null);
    const [headerStyles, setLocalHeaderStyles] = useState<SerializedStyles | null>(null);
    const [is404, setLocalIs404] = useState<boolean>(false);

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
    const setIs404 = useCallback(
        (val: boolean) => {
            setLocalIs404(val);
        },
        [is404]
    );
    const setCanvasTitle = useCallback(
        (val: string | null) => {
            setLocalCanvasTitle(val);
        },
        [canvasTitle]
    );

    return (
        <HeaderContext.Provider
            value={{
                header,
                headerStyles,
                is404,
                canvasTitle,
                setHeader,
                setHeaderStyles,
                setIs404,
                setCanvasTitle
            }}
        >
            {children}
        </HeaderContext.Provider>
    );
}
export { HeaderProvider, useHeader };
