import {onSnapshot} from 'firebase/firestore';
import React, {useContext, useEffect, useState} from 'react';
import {petStoreRef} from '../firebase';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [name, setName] = useState('');

  const getData = () => {
    onSnapshot(petStoreRef, (snapshot) => {
      let tempStore = [];
      snapshot.docs.map((item) => {
        return tempStore.push({...item.data(), id: item.id});
      });
      setList(tempStore);
    });
  };

  const getFilterData = (name) => {
    const filteredData = list.find((item) => {
      if (item.type === name) {
        return item.items;
      }
    });
    const filteredItem = filteredData && filteredData.items;
    setFilteredList(filteredItem);
  };

  const handleClick = (e) => {
    setName(e.target.dataset.name);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <AppContext.Provider
      value={{list, getData, getFilterData, handleClick, filteredList, name}}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export default AppProvider;
