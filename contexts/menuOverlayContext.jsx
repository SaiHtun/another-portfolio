import React, { useState, createContext, useContext } from 'react'
import { useDarkMode } from '../Hooks/useDarkMode';

const MenuOverlayContext = createContext();

export default function MenuOverlayContextProvider(props) {
  const [openOverlay, setOpenOverlay] = useState(false);

    return (
        <MenuOverlayContext.Provider value={{openOverlay, setOpenOverlay}}>
            {props.children}
        </MenuOverlayContext.Provider>
    )
}

export const useMenuOverlay = () => useContext(MenuOverlayContext);
