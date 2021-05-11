import React, { useState, createContext, useContext } from 'react'
import { useDarkMode } from '../Hooks/useDarkMode';

const ThemeContext = createContext();

export default function ThemeContextProvider(props) {
    const [ theme, themeToggler, mountedComponent ] = useDarkMode();

    return (
        <ThemeContext.Provider value={{theme, themeToggler, mountedComponent}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);
