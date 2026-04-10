import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./App/TodoSlice";

export const store = configureStore({
    reducer: {
        todo: TodoReducer,
    },
});