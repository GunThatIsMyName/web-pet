import {doc, onSnapshot, updateDoc} from 'firebase/firestore';
import React, {useContext, useEffect, useState} from 'react';
import {db, petStoreRef} from '../firebase';
import {useUserContext} from './UserContext';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [list, setList] = useState([]);
  const [index, setIndex] = useState(0);
  const [newName, setName] = useState('bg');
  const {tempUserDoc, loadUser} = useUserContext();
  const [isSidebarOpen, setSidebar] = useState(false);
  const [previewList, setPreviewList] = useState('');

  // shop btn click
  const handleClick = (e) => {
    const {name} = e.target.dataset;
    setName(name);
    const newIndex = list.map((item) => item.type.indexOf(name));
    setIndex(newIndex.indexOf(0));
  };

  // get Store Data
  const getData = () => {
    try {
      onSnapshot(petStoreRef, (snapshot) => {
        let tempStore = [];
        snapshot.docs.map((item) => {
          return tempStore.push({...item.data(), id: item.id});
        });
        setList(tempStore);
      });
    } catch (error) {
      return error;
    }
  };

  // handle Sidebar
  const handleSidebar = () => {
    setSidebar((prev) => !prev);
  };

  // Clothes on / Off ------------------------------

  const handleClothes = (e, img, newName) => {
    const {textContent} = e.target;
    let tempList;

    setPreviewList((item) => {
      if (textContent === '벗기') {
        if (item[newName] === img) {
          tempList = {...item, [newName]: ''};
          controlClothes(tempList);
          return {...item, [newName]: ''};
        }
      } else {
        tempList = {...item, [newName]: img};
        controlClothes(tempList);
        return {...item, [newName]: img};
      }
    });
  };

  // Clothes controller
  const controlClothes = async (tempList) => {
    const newUsersDoc = doc(db, 'users', tempUserDoc);
    await updateDoc(newUsersDoc, {
      userClothes: tempList,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (loadUser) {
      setPreviewList(loadUser.userClothes);
    }
  }, [loadUser]);

  return (
    <AppContext.Provider
      value={{
        list,
        getData,
        handleClick,
        index,
        newName,
        previewList,
        isSidebarOpen,
        handleSidebar,
        handleClothes,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export default AppProvider;
