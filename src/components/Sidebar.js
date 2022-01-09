import React from 'react';
import {FaTimes} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {useGlobalContext} from '../context/AppContext';
import {useUserContext} from '../context/UserContext';

function Sidebar() {
  const {isSidebarOpen, handleSidebar} = useGlobalContext();
  const {user, loginAuth, logoutAuth} = useUserContext();
  const {name, photo, email} = user;
  const isLoggedIn = name !== '' && photo !== '' && email !== '';

  return (
    <Wrapper className={isSidebarOpen && 'active'}>
      <div className="sidebar">
        <FaTimes onClick={handleSidebar} className="navbar__icon" />
        <div className="sidebar__box">
          <Link to="/">home</Link>
          {isLoggedIn ? (
            <>
              <Link to="/game">game</Link>
              <Link to="/show">show</Link>
              <button onClick={logoutAuth}>Logout</button>
            </>
          ) : (
            <button onClick={loginAuth}>Login</button>
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
  background-color: gold;
  transition: 0.3s linear;
  z-index:999;
  &.active {
    transform: translateX(0);
  }
  .sidebar {
    margin: 2rem;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default Sidebar;
