import React from 'react';
import styled from 'styled-components';
import {GamePet} from '..';
import {medalList} from '../../utils/helper';

function ShowItem({clothesList, userClothes, userInfo}) {
  return (
    <Wrapper>
      {/* Resusable Components */}
      <GamePet ObjList={clothesList} dataList={userClothes} size={300} />

      {/* Show User Info  */}
      <div className="show__user">
        <div className="show__user__header">
          <h1 className="show__user__name">{userInfo.name} 님 </h1>
          <img
            src={userInfo.photo}
            className="show__user__photo"
            alt="show__user__photo"
          />
        </div>
        <div className="show__user__level">
          {medalList(userInfo.level)} level {userInfo.level}
        </div>
        <div>
          <span className="show__user__level">💰 {userInfo.money} 메소</span>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  background: var(--color-white);
  color: var(--color-black);
  .show__user {
    padding: 5px;
    .show__user__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .show__user__name {
        font-size: 1.4rem;
        font-weight: bold;
      }
      .show__user__photo {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }
    .show__user__level {
      font-size: 1.3rem;
      word-spacing: 10px;
      margin: 0.5rem;
    }
  }
`;

export default ShowItem;
