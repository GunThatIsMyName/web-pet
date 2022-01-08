import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {useUserContext} from '../context/UserContext';
import {FaBars} from 'react-icons/fa';
import {useGlobalContext} from '../context/AppContext';

function Navbar() {
  const {user, loginAuth, logoutAuth} = useUserContext();
  const {handleSidebar} = useGlobalContext();
  const {name, photo, email} = user;
  const isLoggedIn = name !== '' && photo !== '' && email !== '';

  return (
    <Wrapper>
      <div className="navbar__list">
        <Link to="/">home</Link>
        {!isLoggedIn && <button onClick={loginAuth}>Login</button>}
        {isLoggedIn && (
          <>
            <Link to="/game">game</Link>
            <Link to="/show">show</Link>
            <button onClick={logoutAuth}>Logout</button>
          </>
        )}
      </div>

      <FaBars onClick={handleSidebar} className="navbar__icon" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: gold;
  text-align: center;
  display: flex;
  justify-content: center;
  .navbar__list {
    margin: 1rem;
    a,
    button {
      color: black;
      font-size: 1.5rem;
      font-weight: bold;
      margin: 0 1rem;
      cursor: pointer;
    }
  }
  .navbar__icon {
    display: none;
    margin: 1rem;
  }
  @media screen and (max-width: 768px) {
    justify-content: flex-end;
    .navbar__list {
      display: none;
    }
    .navbar__icon {
      display: block;
      font-size: 2rem;
      cursor: pointer;
      transition: 0.2s linear;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;
export default Navbar;
