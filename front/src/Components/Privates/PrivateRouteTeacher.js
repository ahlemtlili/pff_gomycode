import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRouteTeacher = ({children}) => {
  const currentUser=JSON.parse(localStorage.getItem('user'))

  return (
    <div>
        {currentUser && currentUser.role==='enseignant'?children:<Navigate to="/AccountTeacher"/>}
    </div>
  )
}

export default PrivateRouteTeacher