import { signInWithPopup } from "firebase/auth";
import { addDoc, getDocs } from "firebase/firestore";
import React, { useContext, useEffect, useReducer, useState } from "react";
import { isCompositeComponentWithType } from "react-dom/cjs/react-dom-test-utils.development";
import { auth, petStoreRef, provider, usersRef } from "../firebase";
import UserReducer, { UserinitialState } from "../reducer/UserReducer";

import {
  LOAD_USER_DATA,
  LOGIN_AUTH,
  LOGOUT_AUTH,
  OFF_LOADING,
  SET_ERROR,
  SET_LOADING,
} from "../utils/action";

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, UserinitialState);

  console.log(state.loadUser,"##")
  const loginAuth = async () => {
    const checkedUser= await checkUser();
    try {
      const { user } = await signInWithPopup(auth, provider);
      
      // OLD USER-----------------------
      if(user.uid === checkedUser){
        getSavedData(user.uid);
        return;
      };

      
      // NEW USER------------------------
      if (user) {
        loginUser(user);
        dispatch({ type: LOGIN_AUTH, payload: user });
      }
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error.message });
    }
  };

  const getSavedData=async(userId)=>{
    const user = await getDocs(usersRef);
    user.docs.map((item) => {
      const {userInfo:{id}}=item.data();
      if(id===userId){
        return dispatch({type:LOAD_USER_DATA,payload:item.data()})
      }
      return null;
    });
    
  }

  const checkUser=async()=>{
    let userId;
    const doc = await getDocs(usersRef);
    doc.docs.map((item) => {
      const {userInfo:{id}}=item.data();
      console.log(item.id,"check user ID!@")
      return userId=id;
    });
    return userId;
  }

  const loginUser = async (user) => {
    const { displayName, uid, photoURL } = user;
    const userInitData={
      userInfo: {
        name: displayName,
        id: uid,
        photo: photoURL,
        money: 10,
        level: 1,
      },
      userClothes: {
        hair: "",
        cap: "",
        bag: "",
        acc: "",
        glass: "",
        ribon: "",
        tshirts: "",
      },
      boughtItem: [{ type: "", items: [{ id: "", price: "", img: "" }] }],
    }
    await addDoc(usersRef,userInitData );

    dispatch({type:LOAD_USER_DATA,payload:userInitData});
  };

  const logoutAuth = async () => {
    dispatch({ type: SET_LOADING });
    try {
      await auth.signOut();
      dispatch({ type: LOGOUT_AUTH });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error.message });
    }
  };

  const stayLogin = () => {
    auth.onAuthStateChanged((user) => {
      if (user === null || user.displayName === "") {
        dispatch({ type: OFF_LOADING });
      }
      if (user) {
        getSavedData(user.uid);
        dispatch({ type: LOGIN_AUTH, payload: user });
      }
    });
  };

  useEffect(() => {
    stayLogin();
  }, []);

  return (
    <UserContext.Provider value={{ ...state, loginAuth, logoutAuth }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
export default UserProvider;
