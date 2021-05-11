import React, { useState, createContext, useContext } from "react";
import { useRouter } from "next/router";

const FooterContext = createContext();

const FooterContextProvider = ({ children }) => {
  const { route } = useRouter();

  const [countOne, setCountOne] = useState(1);
  const [countTwo, setCountTwo] = useState(1);
  const [countThree, setCountThree] = useState(1);

  const pageNumber = {
    "/": 2,
    "/story": 3,
    "/projects": 3,
  };

  const chooseCount = {
    "/": countOne,
    "/story": countTwo,
    "/projects": countThree
  };

  const chooseSetCount = {
    "/": setCountOne,
    "/story": setCountTwo,
    "/projects": setCountThree,
  };

  const page = pageNumber[route];

  const scrollCount = chooseCount[route];
  const setScrollCount = chooseSetCount[route];

  return (
    <FooterContext.Provider value={{ scrollCount, setScrollCount, page }}>
      {children}
    </FooterContext.Provider>
  );
};

export const useFooter = () => useContext(FooterContext);

export default FooterContextProvider;
