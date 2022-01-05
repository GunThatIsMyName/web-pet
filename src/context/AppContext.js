import React, { useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const getData = () => {
    console.log("????")
  };

  useEffect(() => {
    getData();
  }, []);

  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export default AppProvider;
