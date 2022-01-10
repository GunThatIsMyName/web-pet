import { getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ShowItem from "../components/Show/ShowItem";
import { usersRef } from "../firebase";

function Show() {
  const [displayList, setDisplay] = useState([]);

  const getUsersData = async () => {
    let newList = [];
    const docs = await getDocs(usersRef);
    docs.docs.map((item) => {
      const { userClothes, userInfo } = item.data();
      return newList.push({ id: item.id, userInfo, userClothes });
    });
    setDisplay(newList);
  };

  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <Wrapper>
      <h1 className="show__title">유저 목록</h1>

      <div className="show__box">
        <main className="show__list">
          {displayList.length > 1 &&
            displayList.map((item) => {
              const clothesList = Object.keys(item.userClothes);
              return (
                <ShowItem key={item.id} {...item} clothesList={clothesList} />
              );
            })}
        </main>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin: 3rem auto;
  .show__title {
    font-size: 2rem;
    text-align: center;
  }
  .show__box {
    display: flex;
    justify-content: center;
    .show__list {
      max-width: 1200px;
      margin: 4rem 2rem;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 3rem;
    }
  }

  @media screen and (max-width: 768px) {
    .show__box {
      .show__list {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
  @media screen and (max-width: 480px) {
    .show__box {
      .show__list {
        grid-template-columns: 1fr;
      }
    }
  }
`;

export default Show;
