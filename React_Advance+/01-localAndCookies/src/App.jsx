import './App.css'
import React from 'react'
import LocaStorage from './components/LocaStorage'
import CookiesStorage from './components/CookiesStorage'

const App = () => {
    return (
        <>
            <div className='h-screen flex justify-center '>
                <div className="container">
                    <LocaStorage />
                    <CookiesStorage />
                </div>
            </div>
        </>
    )
}

export default App
