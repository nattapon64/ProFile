import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import React from 'react'
import Header from '../component/header'
import MainMenu from '../component/MainMenu'
import Profile from '../component/Profile'
import Performance from '../component/Performance'
import History from '../component/History'

const guestRouter = createBrowserRouter([
    {
        path: '/',
        element: <>
            <Header />
            <Outlet/>
        </>,
        children: [
            { index: true, element: <MainMenu /> },
            { path: '/MainMenu', element: <MainMenu /> },
            { path: '/Profile', element: <Profile /> },
            { path: '/Performance', element: <Performance /> },
            { path: '/History', element: <History /> },
            { path: '*', element: <p>PAGE NOT FOUND</p> },
        ]
    }
])

function Approuter() {
    return (
        <RouterProvider router={guestRouter} />
    )
}

export default Approuter