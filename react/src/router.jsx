import React from 'react';
import { BrowserRouter as Router, Route, Routes, createBrowserRouter } from 'react-router-dom';
import Dashboard from './main/Components/Dashboard';
import AnggotaPage from './main/Components/Anggota';
import BukuPage from './Main/Components/Buku';
import PeminjamanPage from './Main/Components/Peminjaman';
import Navbar from './Main/Navbar';

//import View From Guest, Login, Register
import View from './guest/View';
//Child
import Login from './guest/view/LoginPage';
import Register from './guest/view/RegisterPage';
import Guest from './guest/view/GuestPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <View/>,
        children: [
            {
                index: 'true',
                element: <Guest/>
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
        ]
    },

    {
        path: '/dashboard',
        element: <Navbar />,
        children: [
            {
                index: true, 
                element: <Dashboard />
            },
            {
                path: 'buku', 
                element: <BukuPage />
            },
            {
                path: 'anggota', 
                element: <AnggotaPage />
            },
            {
                path: 'peminjaman', 
                element: <PeminjamanPage />
            }
        ]
    }
]);

export default router;