import React,{ useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import {  useSelector,useDispatch  } from 'react-redux';
import * as jwt_decode from 'jwt-decode'
const PrivateRoute = () => {
    const userData = useSelector((state) => state.auth.user);
    const token =  localStorage.getItem('token');  // Ensure token is checked from localStorage if userData is null
    const dispatch = useDispatch();
    useEffect(() => {
        // Check if token exists
        if (token) {
            try {
                // Decode the JWT token
                const decodedToken = jwt_decode (token);

                // Get the current time and token's expiration time
                const currentTime = Date.now() / 1000; // Time in seconds
                const tokenExpirationTime = decodedToken.exp;

                // If the token is expired, log the user out
                if (currentTime >= tokenExpirationTime) {
                    dispatch(logout()); // Dispatch logout to clear the state
                    localStorage.removeItem('token'); // Remove token from localStorage
                }
            } catch (error) {
                console.error("Error decoding token", error);
            }
        }
    }, [token, dispatch]);
    // If there is no token, redirect to login page
    if (!token) {
        return <Navigate to="/login" />;
    }

    // If token exists, render the Sidebar and child routes
    return (
        <Sidebar>
            <Outlet />
        </Sidebar>
    );
};

export default PrivateRoute
