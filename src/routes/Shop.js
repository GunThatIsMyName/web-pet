import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/AppContext";
import { shop_list } from "../utils/helper";

function Shop() {
  const { list, index, handleClick, newName, handlePreview, previewList } =
    useGlobalContext();

  const handleBtn = () => {
    window.confirm("이 제품을 구매하시겠습니까?");
  };

  if (!list[index]) {
    return null;
  }

  // ITEMS REFRESH  --------------------ITEMS REFRESH
  const { items } = list[index];

  return (
    <Wrapper>
        <div className="shop__btns">
          {shop_list.map((item) => {
            const { name, id, title } = item;
            return (
              <button
                className={
                  newName === item.name ? "shop-btn active" : "shop-btn"
                }
                data-name={name}
                onClick={handleClick}
                key={id}
              >
                {title}
              </button>
            );
          })}
        </div>
        <div className="shop__list">
          {items &&
            items.map((item) => {
              const { price, id, img } = item;
              return (
                <div className="filtered__list" key={id}>
                  <div className="filtered__list-item">
                    <img src={img} alt={id} />
                    <h4> 💰 {price}0</h4>
                  </div>
                  <button
                    className={`shop__preview__btn ${
                      previewList[newName] === img ? "active-power" : null
                    }`}
                    onClick={() => handlePreview(img)}
                  >
                    {previewList[newName] === img ? "옷 벗기" : "착용하기"}
                  </button>
                  <button onClick={handleBtn}>구매하기</button>
                </div>
              );
            })}
        </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;

  .shop-btn {
    padding: 0.3rem 1.3rem;
    border: 2px solid black;
    border-radius: 10px;
    margin: 2rem 0.5rem;
    font-size: 1.2rem;
    font-weight: bold;
    transition: all 0.3s linear;
    cursor: pointer;
    &:hover {
      background-color: black;
      color: white;
    }
  }
  .active {
    background-color: black;
    color: white;
  }
  .active-power {
    background-color: lightgray;
    color: white;
  }
  .filtered__list {
    margin: 0.5rem 1.5rem;
    box-shadow: -1px 0px 9px -1px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: -1px 0px 9px -1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -1px 0px 9px -1px rgba(0, 0, 0, 0.75);
    padding: 0.5rem 0.3rem;
    border-radius: 10px;

    img {
      width: 130px;
      height: 130px;
    }
    h4 {
      font-size: 1.6rem;
      font-weight: bold;
      color: #222;
    }
    .filtered__list-item {
      display: flex;
    }
    button {
      font-size: 1rem;
      font-weight: bold;
      padding: 0.3rem 1.3rem;
      border: 1px solid black;
      border-radius: 5px;
      transition: all 0.2s linear;
      cursor: pointer;
      &:hover {
        background-color: black;
        color: white;
        transform: scale(0.97);
      }
    }
  }
  .shop__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    overflow-y: auto;
  }

  @media screen and (max-width: 1240px) {
    .shop-btn {
      margin: 5px;
    }
    .shop__list {
      grid-template-columns: repeat(4, 1fr);
    }
    .filtered__list {
      margin: 0.5rem 10px;
      img {
        width: 100px;
        height: 100px;
      }
    }
  }
`;
export default Shop;
