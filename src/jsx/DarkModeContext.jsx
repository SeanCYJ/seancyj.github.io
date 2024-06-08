import React, {createContext, useEffect, useState} from "react";

export const DarkModeContext = createContext();

export const DarkModeProvider = ({children}) => {
    const [darkTheme, setTheme] = useState(true);

    useEffect(() => {
        if (darkTheme) {
            document.body.classList.add('dm');
        } else {
            document.body.classList.remove('dm');
        }
    }, [darkTheme]);

    const ToggleDM = () => {
        console.log("toggled");
        setTheme(!darkTheme);
    }

    return(
        <>
            <DarkModeContext.Provider value = {{darkTheme, ToggleDM}}>
                {children}
            </DarkModeContext.Provider>
        </>
    )
};

