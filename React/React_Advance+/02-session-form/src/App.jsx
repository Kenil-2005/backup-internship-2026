import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LogIn from './components/LogIn';
import DashBoard from './components/DashBoard';
import { SessionProvider } from './Context/SessionContext';


const App = () => {
    return (
        <BrowserRouter>
            <SessionProvider>
                <Routes>
                    <Route path="/" element={<Navigate replace to="/login" />} />
                    <Route path='/login' element={<LogIn />} />
                    <Route path='/dashboard' element={<DashBoard />} />
                </Routes>
            </SessionProvider>
        </BrowserRouter>
    )
}

export default App
