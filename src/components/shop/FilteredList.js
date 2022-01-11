import React from 'react';
import styled from 'styled-components';
import {useGlobalContext} from '../../context/AppContext';
import {useUserContext} from '../../context/UserContext';
import BuyBtnModal from './BuyBtnModal';

function FilteredList({item}) {
  const {newName, previewList, handleClothes} = useGlobalContext();
  const {loadUser,isModalOpen,handleBtn} = useUserContext();
  const {id, img, price} = item;


  if (!loadUser) {
    return null;
  }

  const list = loadUser.boughtItem[newName];
  const checkItem = previewList[newName] === img;

  return (
    <>
    {isModalOpen.state && <BuyBtnModal {...item} />}
    <Wrapper
      className={`filtered__list ${checkItem ? 'active' : null}`}
      key={id}
    >
      <div className="filtered__list-item">
        <img src={img} alt={id} />
        <h4 className="filtered__list__title"> 💰 {price}0</h4>
      </div>

      {list.includes(id) && (
        <button
          onClick={(e) => handleClothes(e, img, newName)}
          className={`shop__preview__btn ${checkItem ? null : 'active-power'}`}
        >
          {checkItem ? '벗기' : '착용하기'}
        </button>
      )}

      {!list.includes(id) && (
        <button data-btn="open" onClick={()=>handleBtn(id,price,newName)}>구매하기</button>
      )}
    </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  margin: 0.5rem 1.5rem;
  box-shadow: -1px 0px 9px -1px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -1px 0px 9px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 0px 9px -1px rgba(0, 0, 0, 0.75);
  padding: 0.5rem 0.3rem;
  border-radius: 10px;
  &.active {
    background: var(--color-yellow);
  }
  .active-power {
    background: var(--color-yellow);
    color: black;
  }
  .filtered__list-item {
    display: flex;
    img {
      width: 130px;
      height: 130px;
      border-radius: 10px;
    }
    .filtered__list__title {
      font-size: 1.6rem;
      font-weight: bold;
      color: #222;
    }
  }

  button {
    font-size: 1rem;
    font-weight: bold;
    padding: 0.3rem 1.3rem;
    margin-top: 1rem;
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

  @media screen and (max-width: 1240px) {
    margin: 0.5rem 10px;
    img {
      width: 100px;
      height: 100px;
    }
  }
`;

export default FilteredList;
