import React, {useEffect} from "react";
import {FilterItem, FiltersStyled, FilterButton} from "./styled";
import {$types, fetchTypes, removeType} from "../../models";
import {useStore} from "effector-react";

const Filters = ({ filters }) => {

    const types = useStore($types);
    useEffect(() => {
        fetchTypes();
    }, [])

    const deleteTypeHandle = (id) => {
        removeType(id);
    }

    return (
        <FiltersStyled>
            {types.map(type => <FilterItem key={type.id}>{type.name}
            <FilterButton onClick={() => deleteTypeHandle(type.id)}>
                X
            </FilterButton>
        </FilterItem>)}
        </FiltersStyled>
    )
}

export default Filters;