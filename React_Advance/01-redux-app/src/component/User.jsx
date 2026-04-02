import { useSelector, useDispatch } from "react-redux";
import { logIn, logOut } from '../Redux/UserSlice';
import React from 'react'
import { useState } from "react";

const User = () => {
    const user = useSelector((state) => state.user);
    const isLogIn = useSelector((state) => state.user.isLoggedIn);
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        const id = Math.ceil(Math.random() * 1000000);
        if (name !== "" && email !== "") {
            dispatch(logIn({
                id: id,
                name: name,
                email: email
            }));
            setName("");
            setEmail("");
            setError("")
        } else {
            setError("Enter All Details");
        }
    }

    return (
        <div
            style={{
                marginTop: "3rem",
            }}
        >
            {isLogIn ?
                (
                    <>
                        <h1 style={{ fontSize: "2.5rem" }}>User Detail</h1>

                        <p>{user.id}</p>
                        <p>{user.name}</p>
                        <p>{user.email}</p>

                        <button
                            onClick={() => { dispatch(logOut()) }}>
                            Log Out
                        </button>
                    </>
                ) :
                (<>
                    <input
                        type="name"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                        placeholder="Enter Your Name"
                        style={{
                            display: "block",
                            marginBlockEnd: "10px",
                        }}
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        placeholder="Enter Your Email"
                        style={{
                            display: "block",
                        }}
                    />

                    {error ?
                        (<p className="error" style={{
                            display: "block",
                            color: "red",
                            fontSize: "14px",
                            margin: 0,
                            paddingBlockStart: "5px",
                        }}>
                            {error}
                        </p>) :
                        <></>
                    }

                    <button
                        onClick={() => handleLogin()}
                        style={{
                            display: "block",
                            marginBlockStart: "10px",
                        }}
                    >
                        Log In
                    </button>
                </>)
            }
        </div>
    )
}

export default User
