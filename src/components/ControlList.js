import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { BsController, BsShop } from "react-icons/bs";

const list = [
  { id: 1, path: "", name: "control", icon: <BsController /> },
  { id: 2, path: "shop", name: "shop", icon: <BsShop /> },
];

function ControlList() {
  const { pathname } = useLocation();
  const currentRoute = pathname.substring(6);
  return (
    <Wrapper className="control__list">
      {list.map((item) => {
        const { id, path, name, icon } = item;
        return (
          <Link key={id} to={path}>
            <li className={currentRoute === path ? "active" : null}>
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
  background: var(--color-ligrey);
  color: var(--color-main);
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  a {
    color: var(--color-grey);
    margin: 10px 0;
    text-transform: uppercase;
    .active {
      color: var(--color-brightmain);
      font-size: 1.2rem;
    }
    &:hover {
      svg {
        transform: scale(1.1);
      }
    }
    svg {
      font-size: 2rem;
    }
  }
`;

export default ControlList;
