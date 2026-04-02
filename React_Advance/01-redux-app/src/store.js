import { configureStore } from "@reduxjs/toolkit";
import userReduce from './Redux/UserSlice';
import counterReduce from "./Redux/CounterSlice";

export const store = configureStore({
    reducer: {
        counter: counterReduce,
        user: userReduce,
    },
});