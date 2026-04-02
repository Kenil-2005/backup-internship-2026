import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name: "Todo",
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo: ((state, action) => {
            const { id, title, description } = action.payload;

            state.todos.push({ id, title, description });
        }),
        removeTodo: ((state, action) => {
            const id  = action.payload;
            state.todos = state.todos.filter(
                (todo) => todo.id !== id
            );
        }),
    },
});

export const { addTodo, removeTodo } = TodoSlice.actions;
export default TodoSlice.reducer;