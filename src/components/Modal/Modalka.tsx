import React, { useEffect, FC } from "react";
import IconClose from "../../assets/close.svg";
import {
  Backdrop,
  ModalCloseButton,
  ModalContainer,
  ModalContent,
} from "./Modalka.styled";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEscapeKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscapeKeyPress);
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleEscapeKeyPress);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Backdrop onClick={onClose}>
      <ModalContainer onClick={stopPropagation}>
        <ModalCloseButton type="button" onClick={onClose}>
          <img src={IconClose} alt="Close" />
        </ModalCloseButton>
        <ModalContent>{children}</ModalContent>
      </ModalContainer>
    </Backdrop>
  );
};
export default Modal;
