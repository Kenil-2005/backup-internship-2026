import React from 'react';
import { useSelector, useDispatch } from "react-redux"
import { removeTodo } from "../../App/TodoSlice"

const TodoList = () => {

    const todos = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch();

    return (
        <ul className="list-wrap">
            {todos?.map((item) => {
                return (
                    <li key={item.id} className="list-item">
                        <div className="list-item-left">
                            <h3>{item.title}</h3>
                            <span>{item.description}</span>
                        </div>
                        <div className="list-item-right">
                            <button
                                onClick={() => dispatch(removeTodo(item.id))}>
                                Remove</button>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}

export default TodoList;
