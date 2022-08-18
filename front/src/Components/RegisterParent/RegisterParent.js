import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {signupUser} from '../../Redux/actions/userActions'
function RegisterParent() {
    const [firstName, setFisrtName] = useState("")
    const [lastName, setLastName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPasswod] = useState("") 
  const [CIN, setCIN] = useState("")
  const [numTel, setNumTel] = useState("")


const dispatch=useDispatch() 
const navigate=useNavigate()
  return (
    <div>
         <form >
            <div className="input-boxes">
              <div className="input-box">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Enter your first name" required onChange={(e)=>setFisrtName(e.target.value)} value={firstName}/>
              </div>
              <div className="input-box">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Enter your last name " required onChange={(e)=>setLastName(e.target.value)} value={lastName}/>
              </div>
              <div className="input-box">
                <i className="fas fa-envelope"></i>
                <input type="text" placeholder="Enter your email" required onChange={(e)=>setEmail(e.target.value)} value={email}/>
              </div>
              <div className="input-box">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Enter your password" required onChange={(e)=>setPasswod(e.target.value)} value={password}/>
              </div>
              <div className="input-box">
                <i className="fas fa-user"></i>
                <input type="number" placeholder="Enter your identity card number " required onChange={(e)=>setCIN(e.target.value)} value={CIN}/>
              </div>
              <div className="input-box">
                <i className="fas fa-user"></i>
                <input type="number" placeholder="Enter your phone number " required onChange={(e)=>setNumTel(e.target.value)} value={numTel}/>
              </div>
              <div className="button input-box">
                <input  value="Sumbit" onClick={()=>{dispatch(signupUser({firstName,lastName,email,password,numTel,CIN}, navigate));alert("Go to login page")}}/>
              </div>
              <div className="text sign-up-text">Already have an account? <label htmlFor="flip">Login now</label></div>
            </div>
      </form>
    </div>
  )
}

export default RegisterParent;