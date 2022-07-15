import { configureStore, createSlice } from "@reduxjs/toolkit";

let login = createSlice({
    name: 'login',
    initialState: { user: null },
    reducers: {
        setlogin(state, action) {
            state.user = action.payload
        }
    }
})
export let { setlogin } = login.actions

let loginstate = createSlice({
    name: 'state',
    initialState: { log: false },
    reducers: {
        setloginstate(state, action) {
            state.log = action.payload
        }
    }
})
export let { setloginstate } = loginstate.actions

let Mboard = createSlice({
    name: 'user',
    initialState: [
        {
            id: 'chohi',
            title: '오늘 저녁',
            content: '오늘 저녁으로 햄버거 10,600원짜리 세트를 먹었다.',
            like: false,
            likeNum: 0
        },
        {
            id: 'chohi',
            title: '오늘 아침',
            content: '출근하기 ㅈㄴ 싫다.',
            like: false,
            likeNum: 0
        },
        {
            id: 'chohi',
            title: '오늘 점심',
            content: '비 ㅈㄴ 온다.',
            like: false,
            likeNum: 0
        }
    ]
})

export default configureStore({
    reducer: {
        Mboard: Mboard.reducer,
        login: login.reducer,
        loginstate: loginstate.reducer
    }
})