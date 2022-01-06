import React from "react";
import styled from "styled-components";

import basicImage from "../image/basic.png";
import { useGlobalContext } from "../context/AppContext";

const image =
  "https://cdn.dribbble.com/users/5085092/screenshots/15704565/media/22d3003af8ef76a3f04e46313370b67d.jpg";

function GamePet() {
  const {previewList}=useGlobalContext();

  const newList  = Object.keys(previewList);

  return (
    <Wrapper back={image}>
      <div className="game__main__box">
        <img src={basicImage} alt="basic-img" />
        {newList.map((item,index)=>{
          if(previewList[item]){
            return <img key={index} src={previewList[item]} alt={item} />
          }
          return null;
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${(props) => props.back});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
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
    width:300px;
    height:300px;
  }
`;

export default GamePet;
