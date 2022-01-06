import {signInWithPopup} from 'firebase/auth';
import React, {useContext, useEffect, useReducer} from 'react';
import {auth, provider} from '../firebase';
import UserReducer, {UserinitialState} from '../reducer/UserReducer';
import {
  LOGIN_AUTH,
  LOGOUT_AUTH,
  OFF_LOADING,
  SET_ERROR,
  SET_LOADING,
} from '../utils/action';

const UserContext = React.createContext();

const UserProvider = ({children}) => {
  const [state, dispatch] = useReducer(UserReducer, UserinitialState);

  const loginAuth = async () => {
    try {
      const {user} = await signInWithPopup(auth, provider);
      if (user) {
        dispatch({type: LOGIN_AUTH, payload: user});
      }
    } catch (error) {
      dispatch({type: SET_ERROR, payload: error.message});
    }
  };

  const logoutAuth = async () => {
    dispatch({type: SET_LOADING});
    try {
      await auth.signOut();
      dispatch({type: LOGOUT_AUTH});
    } catch (error) {
      dispatch({type: SET_ERROR, payload: error.message});
    }
  };

  const stayLogin = () => {
    auth.onAuthStateChanged((user) => {
      if (user === null || user.displayName === '') {
        dispatch({type: OFF_LOADING});
      }
      if (user) {
        dispatch({type: LOGIN_AUTH, payload: user});
      }
    });
  };

  useEffect(() => {
    stayLogin();
  }, []);

  return (
    <UserContext.Provider value={{...state, loginAuth, logoutAuth}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
export default UserProvider;
