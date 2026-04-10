import React, { useState } from 'react'

const CookiesStorage = () => {
    const [inputName, setInputName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = () => {
        if (inputName && email) {
            const expiryDate = new Date(Date.now() + 60000).toUTCString();

            const userData = {
                name: inputName,
                email: email
            };

            document.cookie = `user=${JSON.stringify(userData)}; expires=${expiryDate}; path=/`;
            document.cookie = "name=sessionCookies";
            setTimeout(() => {
                setInputName('');
                setEmail('');
            }, 900)
        }
    }

    // console.log(new Date());

    return (
        <div>
            <input
                type='text'
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                placeholder='Enter UserName'
                className='my-5 border p-3 w-full'
            />
            <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter Email'
                className='my-5 border p-3 w-full'
            />

            <button
                className='border p-3 mb-4  rounded-2xl bg-gray-200'
                onClick={() => handleSubmit()}>
                Submit
            </button>
        </div>
    )
}

export default CookiesStorage