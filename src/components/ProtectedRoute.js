import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const {user}=useContext(AuthContext);

    // if user is null redirect to login page
    if(!user){
        return <Navigate to="/login"/>
    } 
    // if user is true return to child page
    return children;
  return (
    <div></div>
  )
}

export default ProtectedRoute;