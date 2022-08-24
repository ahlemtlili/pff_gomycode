import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRouteParent = ({children}) => {
  const currentUser=JSON.parse(localStorage.getItem('user'))

  return (
    <div>
        {currentUser && currentUser.role==='parent'?children:<Navigate to="/AccountParent"/>}
    </div>
  )
}

export default PrivateRouteParent