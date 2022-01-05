import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useGlobalContext} from '../context/AppContext';
import {shop_list} from '../utils/helper';

function Shop() {
  const {getFilterData, filteredList, name, handleClick} = useGlobalContext();

  useEffect(() => {
    getFilterData(name);
    // eslint-disable-next-line
  }, [name]);

  return (
    <Wrapper>
      <div>
        <div className="shop_btns">
          {shop_list.map((item) => (
            <button data-name={item.name} onClick={handleClick} key={item.id}>
              {item.title}
            </button>
          ))}
        </div>
        {filteredList &&
          filteredList.map((item) => {
            const {price, id, img} = item;
            return (
              <div className="" key={id}>
                <img src={img} alt={id} width="100" />
                <h4> 💰 {price}</h4>
              </div>
            );
          })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
export default Shop;
