import React from "react";
import styled from "styled-components";
import basicImage from "../image/basic.png";
import basicImage1 from "../image/C12.png";
import basicImage2 from "../image/T01.png";

const image =
  "https://cdn.dribbble.com/users/5085092/screenshots/15704565/media/22d3003af8ef76a3f04e46313370b67d.jpg";

function GameMain() {
  return (
    <Wrapper back={image} className="game__main">
      <div className="game__main__box">
        <img src={basicImage} alt="basic-img" />
        <img src={basicImage1} alt="basic-img" />
        <img src={basicImage2} alt="basic-img" />
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
`;

export default GameMain;
