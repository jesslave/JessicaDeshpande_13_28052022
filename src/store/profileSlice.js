import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
    name: "credentials",
    initialState: {
        firstName: ""
    },
    reducers: {
        provide: (state, action) => {
            state.firstName = action.payload
        }
    }
})

export const { provide } = profileSlice.actions
export default profileSlice.reducer