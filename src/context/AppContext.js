import { onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { petStoreRef } from "../firebase";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [list,setList]=useState([]);

  const getData = () => {
    onSnapshot(petStoreRef,(snapshot)=>{
      let tempStore=[];
      snapshot.docs.map(item=>{
        return tempStore.push({...item.data(),id:item.id});
      })
      setList(tempStore);
    })
  };

  useEffect(() => {
    getData();
  }, []);

  return <AppContext.Provider value={{list}}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export default AppProvider;
