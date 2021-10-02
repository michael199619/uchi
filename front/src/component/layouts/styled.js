import styled from "styled-components";

export const MainLoyoutStyled = styled.div`
    max-width: 1100px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr;
    margin: 0 auto;
    grid-column-gap: 50px;
    padding-top: 70px;
    
    & > aside {
        position: relative;
    }
`;
