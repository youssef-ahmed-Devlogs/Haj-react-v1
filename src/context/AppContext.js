import React, { useEffect, useState } from "react";

const AppContext = React.createContext();

const AppState = ({ children }) => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    console.log("Header: ", headerHeight);
    console.log("Footer: ", footerHeight);
  }, [headerHeight, footerHeight]);

  return (
    <AppContext.Provider
      value={{ headerHeight, footerHeight, setHeaderHeight, setFooterHeight }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppState };
