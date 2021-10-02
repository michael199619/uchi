import React from "react";
import {FilterItem, FiltersStyled, FilterButton} from "./styled";

const Filters = ({ filters }) => {

    return (
        <FiltersStyled>
            {filters.map(filter => <FilterItem key={filter.id}>{filter.name}
            <FilterButton>
                X
            </FilterButton>
        </FilterItem>)}
        </FiltersStyled>
    )
}

export default Filters;