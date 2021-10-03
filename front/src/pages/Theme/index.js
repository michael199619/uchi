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
import {$selectedSubjects, $subjects, $types, fetchSubjects, reset} from "../../models";
import {$selectedUsers, $users, fetchUsers, selectUser, unSelectUser} from "../../models/users";



const MainContent = () => {
    const [typesParams, setTypesParams] = useState([]);
    const [message, setMessage] = useState('');
    const [params, setParams] = useState('');
    const [q, setQ] = useState('');
    const [active, setActive] = useState(false);
    const selectedSubjects = useStore($selectedSubjects);
    const subjects = useStore($subjects);
    const users = useStore($users);
    const selectedUsers = useStore($selectedUsers);
    const types =useStore($types);

    const handleSubmit = (e) => {
      e.preventDefault();
      alert('Данные отправленны!');
      setMessage('');
      setActive(false);
      reset();
    }

    const handleText = (e) => {
      setMessage(e.target.value);
    }

    const handleUserClick = (id) => {
        selectedUsers.includes(id);
      if (selectedUsers.includes(id)) {
          unSelectUser(id)
      } else {
          selectUser(id)
      }
    }

    useEffect(() => {

        setParams(window.location.search);
        const typesParam = [];
        types.forEach(type => typesParam.push('&categoriesIds=' + type.id))
        if (params && typesParam) {
            fetchSubjects(params + typesParam.join(''));
        }
        fetchUsers();
    }, [params, types])
    useEffect(() => {
        params && params.replace('?', '').split('&').forEach(
            function(e){
                const a = e.split('=');
                if (a[0] === 'q') {
                    setQ(decodeURIComponent(a[1]));
                }
            },
        );
    }, [params])

    return (
        <Main>
            <Title marginBottom={25}>{q}</Title>
            <Filters filters={filters} />
            { subjects.map((category, index) => (
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
                        {users.map(user => (
                            <StudentItem onClick={() => handleUserClick(user.id)} key={user.id} selected={selectedUsers.includes(user.id)}>
                                <Avatar style={{ backgroundImage: 'url(' + user.avatar + ')' }} />
                                <Name>{user.name}</Name>
                            </StudentItem>
                            ))
                        }
                    </StudentList>
                </ChooseStudents>
                <AddComment onSubmit={handleSubmit}>
                    <Title marginBottom={16}>Добавить комментарий</Title>
                    <Textarea placeholder={'Напишите здесь пожелания по изучению материалов'} onChange={handleText} value={message} />
                    <SendButton>Отправить</SendButton>
                </AddComment>

            </Modal>
        </Main>
    )
}

export default MainContent