import {createEffect, createEvent, createStore} from 'effector'
// выбранные id темы
// Знаю что в одном файле плохо, но из экономии времени так бывает)
export const removeItem = createEvent();
export const addItem = createEvent();
export const reset = createEvent();
export const $selectedSubjects = createStore([]).on(addItem, (state, item) => state = [...state, item])
    .on(removeItem, (state, item) => state.filter(stateItem => stateItem.id !== item.id))
    .on(reset, (state, item) => state = [])


export const removeItemId = createEvent();
export const addItemId = createEvent();

// это глобал ресет всего сущего


export const $selectedSubjectsId = createStore([])
    .on(addItemId, (state, item) => state = [...state, item])
    .on(removeItemId, (state, item) => state.filter(stateItem => stateItem !== item))
    .on(reset, (state, item) => state = [])

// все темы

export const fetchSubjects = createEffect(async (params) => {
    return  [
        {
            id: 1,
            name: 'видео',
            items: [
                {
                    id: 1,
                    title: 'Как правильно использовать деепричастия',
                    link: 'wikipedia.org/somearticle',
                    linkTitle: 'понятный русский',
                    rating: 4,
                    image: 'https://my-dict.ru/media/a/2018/10/26/5e09e5db3a19360952295aff/0_5e1bbfb7e626c1.02388105.png'
                },
                {
                    id: 2,
                    title: 'Как правильно использовать деепричастия',
                    link: 'wikipedia.org/somearticle',
                    linkTitle: 'понятный русский',
                    rating: 4,
                    image: 'https://my-dict.ru/media/a/2018/10/26/5e09e5db3a19360952295aff/0_5e1bbfb7e626c1.02388105.png'
                },
                {
                    id: 3,
                    title: 'Как правильно использовать деепричастия',
                    link: 'wikipedia.org/somearticle',
                    linkTitle: 'понятный русский',
                    rating: 4,
                    image: 'https://my-dict.ru/media/a/2018/10/26/5e09e5db3a19360952295aff/0_5e1bbfb7e626c1.02388105.png'
                }
            ]
        },
        {
            id: 2,
            name: 'Презинтации',
            items: [
                {
                    id: 4,
                    title: 'Как правильно использовать деепричастия',
                    link: 'wikipedia.org/somearticle',
                    linkTitle: 'понятный русский',
                    rating: 4,
                    image: 'https://my-dict.ru/media/a/2018/10/26/5e09e5db3a19360952295aff/0_5e1bbfb7e626c1.02388105.png'
                },
                {
                    id: 6,
                    title: 'Как правильно использовать деепричастия',
                    link: 'wikipedia.org/somearticle',
                    linkTitle: 'понятный русский',
                    rating: 4,
                    image: 'https://my-dict.ru/media/a/2018/10/26/5e09e5db3a19360952295aff/0_5e1bbfb7e626c1.02388105.png'
                },
                {
                    id: 5,
                    title: 'Как правильно использовать деепричастия',
                    link: 'wikipedia.org/somearticle',
                    linkTitle: 'понятный русский',
                    rating: 4,
                    image: 'https://my-dict.ru/media/a/2018/10/26/5e09e5db3a19360952295aff/0_5e1bbfb7e626c1.02388105.png'
                }
            ]
        },
        {
            id: 3,
            name: 'Статьи',
            items: [
                {
                    id: 7,
                    title: 'Как правильно использовать деепричастия',
                    link: 'wikipedia.org/somearticle',
                    linkTitle: 'понятный русский',
                    rating: 4,
                    image: 'https://my-dict.ru/media/a/2018/10/26/5e09e5db3a19360952295aff/0_5e1bbfb7e626c1.02388105.png'
                },
                {
                    id: 8,
                    title: 'Как правильно использовать деепричастия',
                    link: 'wikipedia.org/somearticle',
                    linkTitle: 'понятный русский',
                    rating: 4,
                    image: 'https://my-dict.ru/media/a/2018/10/26/5e09e5db3a19360952295aff/0_5e1bbfb7e626c1.02388105.png'
                },
                {
                    id: 9,
                    title: 'Как правильно использовать деепричастия',
                    link: 'wikipedia.org/somearticle',
                    linkTitle: 'понятный русский',
                    rating: 4,
                    image: 'https://my-dict.ru/media/a/2018/10/26/5e09e5db3a19360952295aff/0_5e1bbfb7e626c1.02388105.png'
                }
            ]
        }
    ]
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

