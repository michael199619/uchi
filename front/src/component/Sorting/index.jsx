import React from "react";
import { SortingStyled, SortingTitle, SortingButton } from './styled'

const Sorting = () => {
    return (
        <SortingStyled>
            <SortingTitle>По популярности</SortingTitle>
            <div>
                <SortingButton>
                    <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 25L12 1M12 1L23 12M12 1L1 12" stroke="#ADADAD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </SortingButton>
                <SortingButton>
                    <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 1L12 25M12 25L1 14M12 25L23 14" stroke="#ADADAD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </SortingButton>
            </div>
        </SortingStyled>
    )
};


export default Sorting;