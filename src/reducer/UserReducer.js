import {
  LOGIN_AUTH,
  LOGOUT_AUTH,
  OFF_LOADING,
  SET_ERROR,
  SET_LOADING,
} from '../utils/action';

export const UserinitialState = {
  user: {
    name: '',
    photo: '',
    id: '',
  },
  error: {
    state: false,
    text: '',
  },
  loading: true,
};

const UserReducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {...state, loading: true};

    case OFF_LOADING:
      return {...state, loading: false};

    case SET_ERROR:
      return {...state, error: {state: true, text: action.payload}};

    case LOGIN_AUTH:
      const {displayName, photoURL, uid} = action.payload;
      return {
        ...state,
        loading: false,
        error: {
          state: false,
          text: '',
        },
        user: {
          ...state.user,
          name: displayName,
          photo: photoURL,
          id: uid,
        },
      };

    case LOGOUT_AUTH:
      return {
        ...state,
        loading: false,
        user: {...state.user, name: '', photo: ''},
      };

    default:
      throw new Error(`not matched any ${action.type}`);
  }
};

export default UserReducer;
