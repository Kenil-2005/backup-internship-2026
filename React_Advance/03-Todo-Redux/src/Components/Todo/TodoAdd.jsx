import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTodo } from "../../App/TodoSlice"

const TodoAdd = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");

    const dispatch = useDispatch();

    const handleAdd = () => {
        if (title !== "" && description !== "") {
            const id = Math.ceil(Math.random() * 1000000);

            dispatch(addTodo({
                id,
                title,
                description,
            }));

            setTitle("");
            setDescription("");
            setError('');
        } else {
            setError("Fill all detail");
        }
    }
    return (
        <div className="input-wrap">
            <input
                type="text"
                value={title}
                onChange={(e) => { setTitle(e.target.value); setError("");  }}
                placeholder="Enter Your Title" />
            <input
                type="text"
                value={description}
                onChange={(e) => { setDescription(e.target.value); setError(""); }}
                placeholder="Enter Description" />

            {
                error ?
                    (
                        <p className="error">{error}</p>
                    ) :
                    <></>
            }

            <button
                onClick={() => { handleAdd() }}>
                ADD
            </button>
        </div>
    );
}

export default TodoAdd;
