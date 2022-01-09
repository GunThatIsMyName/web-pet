import React from 'react';
import styled from 'styled-components';
import FilteredList from '../components/FilteredList';
import {useGlobalContext} from '../context/AppContext';
import {useUserContext} from '../context/UserContext';
import {shop_list} from '../utils/helper';

function Shop() {
  const {list, index, handleClick, newName} = useGlobalContext();

  const {tempUserDoc} = useUserContext();

  // if (!loadUser) return null;

  if (!list[index]) {
    return null;
  }

  // ITEMS REFRESH  --------------------ITEMS REFRESH
  const {items} = list[index];

  return (
    <Wrapper>
      <div className="shop__btns">
        {shop_list.map((item) => {
          const {name, id, title} = item;
          return (
            <button
              className={newName === item.name ? 'shop-btn active' : 'shop-btn'}
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
