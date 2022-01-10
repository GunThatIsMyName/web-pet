import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import styled from 'styled-components';
import {useUserContext} from '../../context/UserContext';
import {FaBars} from 'react-icons/fa';
import {useGlobalContext} from '../../context/AppContext';
const home = 'assets/header.png';
function Navbar() {
  const {user, logoutAuth} = useUserContext();
  const {handleSidebar} = useGlobalContext();
  const {name, photo, email} = user;
  const isLoggedIn = name !== '' && photo !== '' && email !== '';

  return (
    <Wrapper>
      <div className="navbar__list">
        <img className="navbar__list-img" src={home} alt="home_img" />
        <Link to="/">Home</Link>
        {isLoggedIn && (
          <>
            <Link to="/game">Game</Link>
            <Link to="/show">Characters</Link>
            <button onClick={logoutAuth}>Logout</button>
          </>
        )}
      </div>

      <FaBars onClick={handleSidebar} className="navbar__icon" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: var(--color-green);
  text-align: center;
  display: flex;
  padding-left: 5rem;
  .navbar__list {
    margin: 1rem;
    display: flex;
    align-items: center;
    a,
    button {
      color: var(--color-white);
      font-size: 1.5rem;
      font-weight: bold;
      margin: 0 1rem;
      padding-bottom: 0.6rem;
      border-bottom: 3px solid transparent;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      &:hover {
        transform: scale(0.95);
      }
    }
    .navbar__list-img {
      width: 60px;
      height: 60px;
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
    .navbar__icon {
      font-size: 1.3rem;
    }
  }
`;
export default Navbar;
