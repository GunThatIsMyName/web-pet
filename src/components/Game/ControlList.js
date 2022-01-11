import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import styled from 'styled-components';
import {todoList} from '../../utils/helper';

function ControlList() {
  const {pathname} = useLocation();
  const currentRoute = pathname.substring(6);
  return (
    <Wrapper className="control__list">
      {todoList.map((item) => {
        const {id, path, name, icon} = item;
        return (
          <Link key={id} to={path}>
            <li className={currentRoute === path ? 'active' : null}>
              {icon}
              <p>{name}</p>
            </li>
          </Link>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  background: var(--color-yellow);
  color: var(--color-main);
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  border-radius: 10px;
  a {
    color: var(--color-grey);
    margin: 10px 0;
    text-transform: uppercase;
    margin: 1rem 2rem;
    p {
      margin: 0.3rem 0;
    }
    &:hover {
      svg {
        transform: scale(1.1);
      }
    }
    .active {
      border: 2px solid white;
      border-radius: 10px;
      font-size: 1.2rem;
    }

    svg {
      transition: all 0.3s linear;
      font-size: 2rem;
    }
  }
`;

export default ControlList;
