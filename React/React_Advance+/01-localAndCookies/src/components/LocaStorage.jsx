import React, { useState } from 'react'

const LocaStorage = () => {


    const [inputData, setInputData] = useState("");
    const [data, setData] = useState([]);

    const setDataToLocal = () => {
        if (inputData) {
            const existing = JSON.parse(localStorage.getItem("myData")) || [];
            existing.push(inputData);
            localStorage.setItem("myData", JSON.stringify(existing));
            setInputData('');
        }
    }

    const getDataFromLocal = () => {
        const stored = JSON.parse(localStorage.getItem("myData")) || [];
        setData(stored);
    }

    const clearLocal = () => {
        localStorage.removeItem("myData");
        setData([]);
    }

    return (
        <>
            <div className="set-data-wrapper">
                <input
                    type="text"
                    value={inputData}
                    onChange={(e) => setInputData(e.target.value)}
                    placeholder="Enter Some Data"
                    className='border w-full my-12 p-2'
                />
                <button
                    onClick={() => setDataToLocal()}
                    className='border p-3 mb-4  rounded-2xl bg-gray-200'
                >
                    Set Data
                </button>
            </div>
            <div className="get-data-wrapper">
                <button
                    onClick={() => getDataFromLocal()}
                    className='border p-3 m-4 ms-0 rounded-2xl bg-gray-200'
                >
                    Get Data
                </button>
                <button
                    onClick={() => clearLocal()}
                    className='border p-3 m-4 rounded-2xl bg-gray-200'
                >
                    Clear Data
                </button>

                <div className="show-data-wrapper">
                    <ul>
                        {data?.map((item, index) => {
                            return (
                                <li key={index}>{(index + 1)}   {item}</li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default LocaStorage
