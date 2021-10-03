import {createEffect, createEvent, createStore} from "effector";

export const fetchUsers = createEffect(async () => {
    return [
        {
            avatar: 'https://i.pravatar.cc/300',
            name: 'Анна',
            id: '1'
        },
        {
            avatar: 'https://i.pravatar.cc/300',
            name: 'Жанна',
            id: '2'
        },
        {
            avatar: 'https://i.pravatar.cc/300',
            name: 'Максим',
            id: '3'
        },
        {
            avatar: 'https://i.pravatar.cc/300',
            name: 'Павел',
            id: '4'
        },
        {
            avatar: 'https://i.pravatar.cc/300',
            name: 'Артем',
            id: '5'
        },
        {
            avatar: 'https://i.pravatar.cc/300',
            name: 'Миша',
            id: '6'
        },
        {
            avatar: 'https://i.pravatar.cc/300',
            name: 'Ирина',
            id: '7'
        }];
    // const res = await fetch(`http://137.184.97.139:3001/users?role=1`)
    // console.log(res.json());
    // return res.json();
})


export const selectUser = createEvent('selectUsers');
export const unSelectUser = createEvent('unSelectUsers');

export const $users = createStore([])
    .on(fetchUsers.doneData, (_, categories) => categories)

export const $selectedUsers = createStore([])
    .on(selectUser, (state, id) => state = [...state, id])
    .on(unSelectUser, (state, id) => state.filter(stateItem => stateItem !== id))
