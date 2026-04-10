import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: null,
    name: "",
    email: "",
    isLoggedIn: false,
};

const userSlice = createSlice({
    name: "User",
    initialState,
    reducers: {
        logIn: (state, action) => {
            const { id, name, email } = action.payload;

            state.name = name;
            state.id = id;
            state.email = email;
            state.isLoggedIn = true;
        },

        logOut: (state) => {
            state.id = null;
            state.name = "";
            state.email = "";
            state.isLoggedIn = false;
        },

        updateUser: (state, action) => {
            Object.assign(state, action.payload);
        }
    }
});

export const { logIn, logOut, updateUser } = userSlice.actions;
export default userSlice.reducer;