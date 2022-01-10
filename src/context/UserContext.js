import React, {useContext, useEffect, useReducer, useState} from 'react';

import {signInWithPopup} from 'firebase/auth';
import { doc, getDoc, getDocs, onSnapshot, setDoc, updateDoc} from 'firebase/firestore';
import {auth, db,  provider, usersRef} from '../firebase';

import UserReducer, {UserinitialState} from '../reducer/UserReducer';

import {
  BUY_ITEM,
  LOAD_USER_CLOTHES,
  LOAD_USER_DATA,
  LOGIN_AUTH,
  LOGOUT_AUTH,
  OFF_LOADING,
  SET_ERROR,
  SET_LOADING,
} from '../utils/action';

const UserContext = React.createContext();

const UserProvider = ({children}) => {
  const [tempUserDoc, setUserDoc] = useState('');
  const [state, dispatch] = useReducer(UserReducer, UserinitialState);

  // LOGIN PART --------------------------------
  const loginAuth = async () => {
    try {
      const {user} = await signInWithPopup(auth, provider);
      const checkedUser = await checkUser(user.uid);

      console.log(checkUser,"check user ????  ")

      // OLD USER-----------------------
      if (user.uid === checkedUser) {
        console.log("OLD USER")
        return getSavedData(user.uid);
      
      }else if (user) {
        console.log("NEW USER")
        loginUser(user);
        return dispatch({type: LOGIN_AUTH, payload: user});
      }
    } catch (error) {
      dispatch({type: SET_ERROR, payload: error.message});
    }
  };

  const getSavedData = async (userId) => {
    const newRef = doc(db,"users",userId);

    const user = await getDoc(newRef);
      if (user.id === userId) {
        return dispatch({
          type: LOAD_USER_DATA,
          payload: user.data(),
        });
      }
  };

  const checkUser = async (id) => {
    const singleRef = doc(db,"users",id);
    const user = await getDoc(singleRef);
    console.log(user,"#####")
    return user.id;
  };

  const loginUser = async (user) => {
    const {displayName,uid, photoURL} = user;

    const userInitData = {
      userInfo: {
        name: displayName,
        photo: photoURL,
        money: 100,
        level: 1,
        happy: 0,
        health: 0,
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

    const newRef = doc(db,"users",uid);
    await setDoc(newRef, userInitData);
    dispatch({type: LOAD_USER_DATA, payload: userInitData});
  };

  // login refresh -------------------------
  const stayLogin = () => {
    auth.onAuthStateChanged((user) => {
      if (user === null || user.displayName === '') {
        dispatch({type: OFF_LOADING});
      }
      if (user) {
        getSavedData(user.uid);
        dispatch({type: LOGIN_AUTH, payload: user});
      }
    });
  };

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

  // Update User Data ------------------

  const updateUserData = async (newItems, restPrice) => {
    if (!tempUserDoc) return;
    const newUsersDoc = doc(db, 'users', tempUserDoc);
    await updateDoc(newUsersDoc, {
      boughtItem: newItems,
      userInfo: {
        ...state.loadUser.userInfo,
        money: restPrice,
      },
    });
  };
  // handle Other ------------------------------------
  const handleBtn = (id, price, newName) => {
    const productPrice = Number(price * 10);
    const userMoney = state.loadUser && Number(state.loadUser.userInfo.money);
    if (productPrice <= userMoney) {
      const popup = window.confirm('아이템을 구매하시겠습니까?');
      if (popup) {
        const newItems = {...state.loadUser.boughtItem};
        newItems[newName].push(id);
        const restPrice = userMoney - productPrice;
        dispatch({type: BUY_ITEM, payload: {newItems, restPrice}});
        updateUserData(newItems, restPrice);
      }
    } else {
      window.confirm('돈이 부족합니다. 밥을 먹이러 가시겠습니까?');
    }
  };

  // Load User clothes data;
  const userDataSnapshot = () => {
    if(tempUserDoc){
      const singleRef = doc(usersRef, tempUserDoc);
      onSnapshot(singleRef,(snapshot)=>{
        snapshot.docs.map(item=>{
          const tempData=item.data();
          console.log(item.data(),"??")
          return dispatch({type:LOAD_USER_CLOTHES,payload:tempData});
        })
      })
    }
  };

  // Use Effect --------------------------------------------

  useEffect(() => {
    stayLogin();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    userDataSnapshot();
  }, []);

  return (
    <UserContext.Provider
      value={{...state, tempUserDoc, loginAuth, logoutAuth, handleBtn}}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
export default UserProvider;