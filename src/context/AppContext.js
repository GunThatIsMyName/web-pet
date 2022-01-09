import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { db, petStoreRef } from "../firebase";
import { useUserContext } from "./UserContext";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const imageList = {
    hair: "",
    cap: "",
    tshirts: "",
    bag: "",
    acc: "",
    glass: "",
    ribon: "",
  };
  const [list, setList] = useState([]);
  const [index, setIndex] = useState(0);
  const [newName, setName] = useState("hair");

  const [previewList, setPreviewList] = useState(imageList);

  const [isSidebarOpen, setSidebar] = useState(false);
  const { tempUserDoc, loadUser } = useUserContext();

  const handleClick = (e) => {
    const { name } = e.target.dataset;
    setName(name);
    const newIndex = list.map((item) => item.type.indexOf(name));
    setIndex(newIndex.indexOf(0));
  };

  const getData = () => {
    try {
      onSnapshot(petStoreRef, (snapshot) => {
        let tempStore = [];
        snapshot.docs.map((item) => {
          return tempStore.push({ ...item.data(), id: item.id });
        });
        setList(tempStore);
      });
    } catch (error) {
      return error;
    }
  };

  const handlePreview = (data) => {
    setPreviewList((prev) => {
      if (prev[newName] === data) {
        return { ...prev, [newName]: "" };
      }
      return { ...prev, [newName]: data };
    });
  };

  const handleSidebar = () => {
    setSidebar((prev) => !prev);
  };

  // Clothes on / Off ------------------------------

  const handleClothes = (e, img, id, newName) => {
    const { textContent } = e.target;
    handlePreview(img);
    if (textContent === "착용하기") {
      onClothes(img, newName);
    } else {
      offClothes(newName);
    }
  };

  const onClothes = async (img, newName) => {
    if (!tempUserDoc) return;
    const newUsersDoc = doc(db, "users", tempUserDoc);

    await updateDoc(newUsersDoc, {
      userClothes: {
        ...loadUser.userClothes,
        [newName]: img,
      },
    });
  };

  const offClothes = async (newName) => {
    if (!tempUserDoc) return;
    const newUsersDoc = doc(db, "users", tempUserDoc);

    await updateDoc(newUsersDoc, {
      userClothes: {
        ...loadUser.userClothes,
        [newName]: "",
      },
    });
  };

  useEffect(() => {
    getData();
  }, []);

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
