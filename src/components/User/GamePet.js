import React from "react";
import styled from "styled-components";
import { useUserContext } from "../../context/UserContext";
import basicImage from "../../image/basic.png";

const image =
  "https://images.unsplash.com/photo-1615799998603-7c6270a45196?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80";

function GamePet({ ObjList, dataList, size }) {
  const { loadUser } = useUserContext();

  if (!loadUser) {
    return null;
  }

  let newData;
  ObjList.find((item) => {
    if (item === "bg") {
      return (newData = dataList[item]);
    }
    return null;
  });

  return (
    <Wrapper size={size} back={newData ? newData : image}>
      <div className="game__main__box">
        <img src={basicImage} alt="basic-img" />
        {ObjList.map((item, index) => {
          if (dataList[item]) {
            if (item === "bg") {
              return null;
            }
            return (
              <img
                style={{ zIndex: item === "cap" && "bag" && "ribon" ? 99 : 0 }}
                key={index}
                src={dataList[item]}
                alt={item}
              />
            );
          }
          return null;
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: ${(props) => (props.size ? `${props.size}px` : `400px`)};
  height: ${(props) => (props.size ? `${props.size}px` : `400px`)};
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${(props) => props.back});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
  z-index: 0;
  .game__main__box {
    position: relative;
    width: 50%;
    height: 50%;

    img {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }

  @media screen and (max-width: 1240px) {
    width: ${(props) => (props.size ? `${props.size * 0.7}px` : `300px`)};
    height: ${(props) => (props.size ? `${props.size * 0.7}px` : `300px`)};
  }
  @media screen and (max-width: 768px) {
  }
`;

export default GamePet;
