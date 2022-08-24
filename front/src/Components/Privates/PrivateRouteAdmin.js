import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRouteAdmin = ({children}) => {
  const currentUser=JSON.parse(localStorage.getItem('user'))
  return (
    <div>
        {currentUser && currentUser.role==='admin'?children:<Navigate to="/loginAdmin"/>}
    </div>
  )
}

export default PrivateRouteAdmin