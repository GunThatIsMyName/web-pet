import React from 'react';
import {useUserContext} from '../context/UserContext';

function Login() {
  const {loginAuth} = useUserContext();
  return (
    <div>
      <button onClick={loginAuth}>Log in</button>
    </div>
  );
}

export default Login;
