import { createSlice } from "@reduxjs/toolkit";

const initialState = { token: null, user: null };

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setTokenAndUser: (state, action) => {
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
        clearTokenAndUser: (state) => {
            state.token = null;
            state.user = null;
        }
    },
})

export const { setTokenAndUser, clearTokenAndUser } = authSlice.actions;
export default authSlice.reducer