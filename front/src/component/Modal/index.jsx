import React from "react";
import {ModalStyled, ModalContent, ModalHeader, ModalClose} from "./styled";
import Title from "../kit/Title";


const Modal = ({ active, setActive, children, title }) => {
    return (
        <ModalStyled active={active} onClick={() => setActive(false)}>
            <ModalContent active={active} onClick={(e) => e.stopPropagation()}>
                <ModalHeader>
                    <Title>{title}</Title>
                    <ModalClose onClick={() => setActive(false)}>X</ModalClose>
                </ModalHeader>
                {children}
            </ModalContent>
        </ModalStyled>
    );
};

export default Modal;