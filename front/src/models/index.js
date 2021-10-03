import {createEffect, createEvent, createStore} from 'effector'
// выбранные id темы
// Знаю что в одном файле плохо, но из экономии времени так бывает)
export const removeItem = createEvent();
export const addItem = createEvent();

export const $selectedSubjects = createStore([]).on(addItem, (state, item) => state = [...state, item])
    .on(removeItem, (state, item) => state.filter(stateItem => stateItem.id !== item.id))


export const removeItemId = createEvent();
export const addItemId = createEvent();

export const $selectedSubjectsId = createStore([]).on(addItemId, (state, item) => state = [...state, item])
    .on(removeItemId, (state, item) => state.filter(stateItem => stateItem !== item))

// все темы

export const fetchSubjects = createEffect(async (params) => {
    try {
        const res = await fetch(`http://137.184.97.139:3001/find` + params)
        return res.json();
    } catch (e) {
        return [];
    }
})


export const $subjects = createStore([])
    .on(fetchSubjects.doneData, (_, subjects) => subjects)

// все предметы
export const fetchCategories = createEffect(async () => {
    try {
        const res = await fetch(`http://137.184.97.139:3001/find/subject`)
        return res.json();
    } catch (e) {
        return [];
    }

})

export const $categories = createStore([])
    .on(fetchCategories.doneData, (_, categories) => categories)

