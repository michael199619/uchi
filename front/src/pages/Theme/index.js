import React, {useEffect, useState} from "react";
import {Main, ShareButton, ModalCards, ChooseStudents, AddComment, StudentList, StudentItem, Name, Textarea, SendButton } from "./styled";
import Title from "../../component/kit/Title";
import Filters from "../../component/Filters";
import Categories from "./components/Categories";
import {filters} from "../Home";
import Modal from "../../component/Modal";
import CardMini from "../../component/ThemeCard/CardMini";
import {Avatar} from "../../component/Header/styled";
import {useStore} from "effector-react";
import {$categories, $selectedSubjects, fetchCategories} from "../../models";



const MainContent = () => {
    const [active, setActive] = useState(false);
    const selectedSubjects = useStore($selectedSubjects);
    const categories = useStore($categories);
    useEffect(() => {
        fetchCategories();
    }, [])
    return (
        <Main>
            <Title marginBottom={25}>Деепричастия</Title>
            <Filters filters={filters} />
            { categories.map(category => (
                <Categories title={category.name} key={category.id} themes={category.items} />
            )) }
            <ShareButton onClick={() => setActive(true)}>Отправить материал студенту</ShareButton>
            <Modal active={active} setActive={setActive} title={'Отправить пул материалов'}>
                <ModalCards>
                    { selectedSubjects && selectedSubjects.map(sub => <CardMini title={sub.title} image={sub.image} key={sub.id} />) }
                </ModalCards>
                <ChooseStudents>
                    <Title marginBottom={23}></Title>
                    <StudentList>
                        <StudentItem>
                            <Avatar />
                            <Name>Анна Р.</Name>
                        </StudentItem>
                        <StudentItem>
                            <Avatar />
                            <Name>Анна Р.</Name>
                        </StudentItem>
                        <StudentItem>
                            <Avatar />
                            <Name>Анна Р.</Name>
                        </StudentItem>
                        <StudentItem>
                            <Avatar />
                            <Name>Анна Р.</Name>
                        </StudentItem>
                        <StudentItem>
                            <Avatar />
                            <Name>Анна Р.</Name>
                        </StudentItem><StudentItem>
                        <Avatar />
                        <Name>Анна Р.</Name>
                    </StudentItem><StudentItem>
                        <Avatar />
                        <Name>Анна Р.</Name>
                    </StudentItem><StudentItem>
                        <Avatar />
                        <Name>Анна Р.</Name>
                    </StudentItem>
                    </StudentList>
                </ChooseStudents>
                <AddComment>
                    <Title marginBottom={16}>Добавить комментарий</Title>
                    <Textarea placeholder={'Напишите здесь пожелания по изучению материалов'}></Textarea>
                </AddComment>
                <SendButton>Отправить</SendButton>
            </Modal>
        </Main>
    )
}

export default MainContent