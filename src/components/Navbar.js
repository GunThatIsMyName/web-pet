import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {useUserContext} from '../context/UserContext';

function Navbar() {
  const {user, loginAuth, logoutAuth} = useUserContext();
  const {name, photo, email} = user;
  const isLoggedIn = name !== '' && photo !== '' && email !== '';

  return (
    <Wrapper>
      <Link to="/">home</Link>
      {!isLoggedIn && <button onClick={loginAuth}>Login</button>}
      {isLoggedIn && (
        <>
          <Link to="/game">game</Link>
          <Link to="/show">show</Link>
          <button onClick={logoutAuth}>Logout</button>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: gold;
  height: 3rem;
  text-align: center;
  a,
  button {
    color: black;
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0 1rem;
    cursor: pointer;
  }
`;
export default Navbar;
