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

export const fetchSubjects = createEffect(async () => {
    // const res = await fetch(`https://example.com/users/`)
    // return res.json();
    return [
        {
            id: 1,
            name: 'Русский язык',
            themes: [
                {
                    id: 1,
                    name: 'деепричастия',
                },
                {
                    id: 2,
                    name: 'наречия',
                },
                {
                    id: 3,
                    name: 'существительные',
                },
                {
                    id: 4,
                    name: 'глаголы',
                },
                {
                    id: 5,
                    name: 'местоимения',
                },
                {
                    id: 6,
                    name: 'местоимения',
                },
                {
                    id: 7,
                    name: 'глаголы',
                },
                {
                    id: 8,
                    name: 'глаголы',
                }
            ]
        },
        {
            id: 2,
            name: 'Алгебра',
            themes: [
                {
                    id: 1,
                    name: 'деепричастия',
                },
                {
                    id: 2,
                    name: 'наречия',
                },
                {
                    id: 3,
                    name: 'существительные',
                },
                {
                    id: 4,
                    name: 'глаголы',
                },
                {
                    id: 5,
                    name: 'местоимения',
                },
                {
                    id: 6,
                    name: 'местоимения',
                },
                {
                    id: 7,
                    name: 'глаголы',
                },
                {
                    id: 8,
                    name: 'глаголы',
                }
            ]
        }
    ]
})


export const $subjects = createStore([])
    .on(fetchSubjects.doneData, (_, subjects) => subjects)


export const fetchCategories = createEffect(async () => {
    // const res = await fetch(`https://example.com/users/`)
    // return res.json();
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
            id: 3,
            name: 'Статьи',
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
        }
    ]
})

export const $categories = createStore([])
    .on(fetchCategories.doneData, (_, categories) => categories)