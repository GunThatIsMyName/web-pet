import React from 'react';
import {FaTimes} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {useGlobalContext} from '../../context/AppContext';
import {useUserContext} from '../../context/UserContext';
import {home} from '../../utils/helper';

function Sidebar() {
  const {isSidebarOpen, handleSidebar} = useGlobalContext();
  const {user, logoutAuth} = useUserContext();
  const {name, photo, email} = user;
  const isLoggedIn = name !== '' && photo !== '' && email !== '';

  return (
    <Wrapper className={isSidebarOpen && 'active'}>
      <div className="sidebar">
        <img className="sidebar__img" src={home} alt="sidebar-img" />
        <FaTimes onClick={handleSidebar} className="navbar__icon" />
        <div className="sidebar__box">
          <Link onClick={handleSidebar} to="/">
            Home
          </Link>
          {isLoggedIn && (
            <>
              <Link onClick={handleSidebar} to="/game">
                Game
              </Link>
              <Link onClick={handleSidebar} to="/show">
                Characters
              </Link>
              <button onClick={logoutAuth}>Logout</button>
            </>
          )}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateX(-100%);
  background-color: var(--color-green);
  transition: 0.3s linear;
  z-index: 999;
  &.active {
    transform: translateX(0);
  }
  .sidebar__img {
    width: 70px;
  }
  .sidebar {
    margin: 2rem;
    .navbar__icon {
      font-size: 2.3rem;
      transition: all 0.3s ease-in-out;
      border-radius: 10px;
      cursor: pointer;
      &:hover {
        background: black;
      }
    }
    .sidebar__box {
      margin-top: 5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      a,
      button {
        margin: 1.5rem 0;
        font-size: 2rem;
        font-weight: bold;
        color: var(--color-white);
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        &:hover {
          transform: scale(0.97);
          color: black;
        }
      }
    }
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default Sidebar;
