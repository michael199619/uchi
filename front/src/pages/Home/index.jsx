import React, {useEffect} from "react";
import {FilterThemeCell, FilterLettersCell, SortingCell, HeaderStyled, BodyStyled} from './styled';
import Filters from "../../component/Filters";
import AlphabetFilter from "../../component/AlphabetFilter";
import Sorting from "../../component/Sorting";
import SubjectCard from "../../component/SubjectCard";
import {fetchSubjects, $subjects, fetchCategories, $categories} from "../../models";
import {useStore} from "effector-react";

export const filters = [
    {
        id: 1,
        name: 'Видео',
    },
    {
        id: 2,
        name: 'Аудион',
    },
    {
        id: 3,
        name: 'Статьи',
    },
    {
        id: 4,
        name: 'Презинтации',
    }
]



const Home = () => {
    const categories = useStore($categories);
    useEffect(() => {
        fetchCategories();
    }, []);

    const subjects = useStore($subjects)

    return (
        <>
            <HeaderStyled>
                <FilterThemeCell>
                    <Filters filters={filters} />
                </FilterThemeCell>
                <FilterLettersCell>
                    <AlphabetFilter />
                </FilterLettersCell>
                <SortingCell>
                    <Sorting />
                </SortingCell>
            </HeaderStyled>
            <BodyStyled>
                { categories.map(category => (
                    <SubjectCard key={category.id} name={category.name} categoryId={category.id} tags={category.tags} />
                )) }
            </BodyStyled>
        </>

    )
};

export default Home;
