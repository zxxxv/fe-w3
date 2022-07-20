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

export default configureStore({
    reducer: {
        login: login.reducer,
        loginstate: loginstate.reducer
    }
})