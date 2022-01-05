import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsController, BsShop } from "react-icons/bs";

const list = [
  { id: 1, path: "", name: "control", icon: <BsController /> },
  { id: 2, path: "shop", name: "control", icon: <BsShop /> },
];

function ControlList() {
  return (
    <Wrapper className="control__list">
      {list.map((item) => {
        const { id, path, name, icon } = item;
        return (
          <Link key={id} to={path}>
            <li>
              <p>{name}</p>
              {icon}
            </li>
          </Link>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
  background: black;
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
`;

export default ControlList;
