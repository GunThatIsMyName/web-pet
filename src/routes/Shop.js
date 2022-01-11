import React from 'react';
import styled from 'styled-components';
import {FilteredList} from '../components';
import {useGlobalContext} from '../context/AppContext';
import {shop_list} from '../utils/helper';

function Shop() {
  const {list, index, handleClick, newName} = useGlobalContext();
  if (!list[index]) {
    return null;
  }

  // ITEMS REFRESH  --------------------ITEMS REFRESH
  const {items} = list[index];

  return (
    <Wrapper>
      <div className="shop__btn__list">
        {shop_list.map((item) => {
          const {name, id, title} = item;
          return (
            <button
              className={
                newName === item.name ? 'shop-btn active-btn' : 'shop-btn'
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
            return <FilteredList key={item.id} item={item} />;
          })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  .shop__btn__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }
  .shop-btn {
    padding: 0rem 1.3rem;
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
  .active-btn {
    background: black;
    color: white;
  }
  .shop__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    overflow-y: auto;
  }

  @media screen and (max-width: 1240px) {
    .shop-btn {
      margin: 5px;
    }
  }

  @media screen and (max-width: 600px) {
    .shop__btn__list {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    .shop__list {
      justify-content: center;
    }
    .shop-btn {
      padding: 0.2rem 0.6rem;
      font-size: 1rem;
    }
  }
`;
export default Shop;
