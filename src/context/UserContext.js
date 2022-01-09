import React, {useContext, useEffect, useReducer, useState} from 'react';

import {signInWithPopup} from 'firebase/auth';
import {addDoc, doc, getDocs, updateDoc} from 'firebase/firestore';
import {auth, db, provider, usersRef} from '../firebase';

import UserReducer, {UserinitialState} from '../reducer/UserReducer';

import {
  BUY_ITEM,
  LOAD_USER_DATA,
  LOGIN_AUTH,
  LOGOUT_AUTH,
  OFF_LOADING,
  SET_ERROR,
  SET_LOADING,
} from '../utils/action';

const UserContext = React.createContext();

const UserProvider = ({children}) => {
  const [tempUserDoc,setUserDoc]=useState("");
  const [state, dispatch] = useReducer(UserReducer, UserinitialState);


  // LOGIN PART --------------------------------
  const loginAuth = async () => {
    const checkedUser = await checkUser();
    try {
      const {user} = await signInWithPopup(auth, provider);

      // OLD USER-----------------------
      if (user.uid === checkedUser) {
        getSavedData(user.uid);
        return;
      }

      // NEW USER------------------------
      if (user) {
        loginUser(user);
        dispatch({type: LOGIN_AUTH, payload: user});
      }
    } catch (error) {
      dispatch({type: SET_ERROR, payload: error.message});
    }
  };

  const getSavedData = async (userId) => {
    const user = await getDocs(usersRef);
    user.docs.map((item) => {
      const {
        userInfo: {id},
      } = item.data();
      if (id === userId) {
        return dispatch({type: LOAD_USER_DATA, payload: item.data()});
      }
      return null;
    });
  };

  const checkUser = async () => {
    let userId;
    const doc = await getDocs(usersRef);
    doc.docs.map((item) => {
      const {
        userInfo: {id},
      } = item.data();
      saveUserDocId(item.id);
      return (userId = id);
    });
    return userId;
  };

  const loginUser = async (user) => {
    const {displayName, uid, photoURL} = user;

    const userInitData = {
      userInfo: {
        name: displayName,
        id: uid,
        photo: photoURL,
        money: 100,
        level: 1,
        happy:0,
        health:0,
      },
      userClothes: {
        hair: '',
        cap: '',
        bag: '',
        acc: '',
        glass: '',
        ribon: '',
        tshirts: '',
      },
      boughtItem: {
        hair: [],
        cap: [],
        bag: [],
        acc: [],
        glass: [],
        ribon: [],
        tshirts: [],
      },
    };
    await addDoc(usersRef, userInitData);

    dispatch({type: LOAD_USER_DATA, payload: userInitData});
  };

  const stayLogin = () => {
    auth.onAuthStateChanged((user) => {
      if (user === null || user.displayName === '') {
        dispatch({type: OFF_LOADING});
      }
      if (user) {
        console.log(user,"user");
        getSavedData(user.uid);
        dispatch({type: LOGIN_AUTH, payload: user});
      }
    });
  };


  // login refresh -------------------------
  const saveUserDocId=(id)=>{
    setUserDoc(id)
  }

  // Logout part -----------------------------

  const logoutAuth = async () => {
    dispatch({type: SET_LOADING});
    try {
      await auth.signOut();
      dispatch({type: LOGOUT_AUTH});
    } catch (error) {
      dispatch({type: SET_ERROR, payload: error.message});
    }
  };


  const updateUserData=async(newItems,restPrice)=>{
    console.log(newItems,restPrice,"@@");

    const newUsersDoc = doc(db, "users", );

    await updateDoc(usersRef,{

    })
  }

  // handle Other ------------------------------------
  const handleBtn = (id, price, newName) => {
    const productPrice = Number(price * 10);
    const userMoney = state.loadUser && Number(state.loadUser.userInfo.money);
    if (productPrice <= userMoney) {
      const popup = window.confirm('아이템을 구매하시겠습니까?');
      if(popup){
        console.log(popup,"예스");
        console.log(id,"id")
        const newItems = {...state.loadUser.boughtItem};
        newItems[newName].push(id);
        const restPrice = userMoney - productPrice;
        dispatch({type: BUY_ITEM, payload: {newItems, restPrice}});
        // updateUserData(newItems,restPrice);
      }
    } else {
      window.confirm('돈이 부족합니다. 밥을 먹이러 가시겠습니까?');
    }
  };


  // Use Effect --------------------------------------------

  useEffect(() => {
    stayLogin();
  }, []);

  return (
    <UserContext.Provider value={{...state, loginAuth, logoutAuth, handleBtn}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
export default UserProvider;
