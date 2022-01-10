import React from 'react';
import styled from 'styled-components';


import basicImage from "../../image/basic.png";

const image =
  'https://cdn.dribbble.com/users/5085092/screenshots/15704565/media/22d3003af8ef76a3f04e46313370b67d.jpg';

function GamePet({ObjList,dataList,size}) {

  return (
    <Wrapper size={size} back={image}>
      <div className="game__main__box">
        <img src={basicImage} alt="basic-img" />
        {ObjList.map((item, index) => {
          if (dataList[item]) {
            return (
              <img
                style={{zIndex: item === 'cap' && 'bag' && 'ribon' ? 99 : 0}}
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
  width: ${props=>props.size?`${props.size}px`:`400px`};
  height: ${props=>props.size?`${props.size}px`:`400px`};
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${(props) => props.back});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
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
    width: ${props=>props.size?`${props.size *0.7}px`:`300px`};
  height: ${props=>props.size?`${props.size * 0.7}px`:`300px`};
  }
  @media screen and (max-width: 768px) {
  }
`;

export default GamePet;
