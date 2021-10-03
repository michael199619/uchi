import styled from "styled-components";


export const Main = styled.main`
    background-color: #ffffff;
    background: #FFFFFF;
    border: 1px solid #000000;
    border-radius: 10px;
    min-height: 1000px;
    padding: 30px;
`;

export const ShareButton = styled.button`
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    background-color: #FFFFFF;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 18px 14px;
    display: block;
    margin: 70px auto 0;
    margin-top: 70px;
    &:hover {
        color: #FFFFFF;
        background-color: #000000;
    }
`;

export const ModalCards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px 16px;
    margin-bottom: 50px;
`;

export const ChooseStudents = styled.div`
    margin-bottom: 20px;
`;
export const AddComment = styled.div`
    margin-bottom: 50px;
`;
export const SendButton = styled.button`
    display: block;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    padding: 15px;
    color: #000000;
    background: #FFFFFF;
    border: 1px solid #000000;
    border-radius: 9px;
    margin: 0 auto;
`;
export const Textarea = styled.textarea`
    background: #FFFFFF;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 10px;
    min-height: 150px;
    width: 100%;
`;
export const StudentItem = styled.div`
    margin-right: 21px;
`;

export const Name = styled.p`
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #000000;
`;

export const StudentList = styled.div`
    display: flex;
    max-width: 100%;
    overflow-x: scroll;
`;