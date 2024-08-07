import React, { useContext } from 'react'
import { AuthContext } from '../context/authContext'
import { Navigate } from 'react-router-dom';

const RouteGuard = ({children}) => {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        return <Navigate to='/login' />
    }

    return (
        <>
            {children}
        </>
    )
}

export default RouteGuard