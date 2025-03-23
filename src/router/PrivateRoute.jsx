import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
const PrivateRoute = () => {
    const token = localStorage.getItem("token");
    return (
        <>
            {
                token ? <Sidebar>
                         <Outlet />
                    </Sidebar>
                    : <Navigate to="/login" />
            }

        </>
    )
}

export default PrivateRoute
