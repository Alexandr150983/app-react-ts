import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  border-radius: 24px;
  background-color: white;
  max-width: 541px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ModalContent = styled.div``;

export const ModalCloseButton = styled.button``;
