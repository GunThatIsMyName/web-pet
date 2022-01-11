import React from "react";
import styled from "styled-components";
import { useUserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

function BuyBtnModal() {
  const { closeModal, isModalOpen } = useUserContext();
  let Navigate = useNavigate();

  const handleClick = (e) => {
    closeModal(e);
    if (!isModalOpen.affordable) {
      Navigate("/game");
    }
  };
  return (
    <Wrapper data-btn="close" onClick={closeModal}>
      <div className="modal">
        <h1 className="modal__title">
          {isModalOpen.affordable
            ? "아이템을 성공적으로 구매 했습니다 ."
            : "돈이 부족합니다 . 일을 하러 가세요 . "}
        </h1>
        <div className="modal__btns">
          <button
            className="modal__btn yes__btn"
            data-btn="close"
            onClick={handleClick}
          >
            {isModalOpen.affordable? "🤩 무 야 호~":"😭 내 텅장 ㅠ "}
          </button>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0000001a;
  z-index: 999999;
  color: var(--color-black);
  .modal {
    width: 500px;
    height: 300px;
    border-radius: 10px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .modal__title {
      font-size: 2rem;
    }
    .modal__btns {
      width: 100%;
      display: flex;
      justify-content: space-around;
      .modal__btn {
        cursor: pointer;
        font-size: 1.5rem;
        font-weight: bold;
        padding: 6px;
        width: 30%;
        color: var(--color-black);
      }
    }
  }
  @media screen and (max-width: 768px) {
    .modal {
      width: 100%;
      height: fit-content;
      padding: 2rem 0;
      margin: 0 2rem;
      border-radius: 10px;
      background-color: white;
      gap: 3rem;
      .modal__title {
        font-size: 1.2rem;
      }
      .modal__btns {
        .modal__btn {
          font-size: 1.3rem;
        }
      }
    }
  }
`;

export default BuyBtnModal;
