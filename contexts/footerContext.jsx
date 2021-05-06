import React, { useState, createContext, useContext } from "react";

const FooterContext = createContext();

const FooterContextProvider = ({ children }) => {
  const [scrollCount, setScrollCount] = useState(1);

  return (
    <FooterContext.Provider value={{ scrollCount, setScrollCount }}>
      {children}
    </FooterContext.Provider>
  );
};

export const useFooter = () => useContext(FooterContext);

export default FooterContextProvider;
