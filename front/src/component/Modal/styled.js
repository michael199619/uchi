import styled, {css} from "styled-components";

export const ModalStyled = styled.div`
    display: none;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(174, 174, 174, 0.4);
    align-items: center;
    justify-content: center;
    opacity: 0;
    ${props => props.active ? css`
        display: flex;
        opacity: 1;
    ` : ''}; 
    
`;

export const ModalContent = styled.div`
    background: #FFFFFF;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 10px;
    min-width: 200px;
    min-height: 200px;
    padding: 30px;
    max-width: 626px;
    ${props => props.active ? css`
        transform: scale(1);
    ` : ''}; 
`;

export const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`;

export const ModalClose = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
`;