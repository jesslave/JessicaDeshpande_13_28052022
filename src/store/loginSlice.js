import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: "credentials",
    initialState: {
        isLogged: false,
        authorization: null
    },
    reducers: {
        login: (state, action) => {
            state.isLogged = true
            state.authorization = action.payload.token
        },
        logout: (state) => {
            state.isLogged = false
            state.authorization = null
        }
    }
})

export const { login, logout } = loginSlice.actions
export default loginSlice.reducer