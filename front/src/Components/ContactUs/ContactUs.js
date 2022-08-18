import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postMSG } from '../../Redux/actions/userActions'

function ContactUs() {
	const [Name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [objetMsg, setObjetMsg] = useState("")
	const dispatch=useDispatch()

  return (
    <div className='contc'>
        
        <div className="container">
	<div className="row">
			
	</div>
	<div className="row">
	
        <div className="centerP cen" style={{margin:"0px",padding:'0px'}}>
		<h1 >Contact Us</h1>
  </div>
  
	</div>
	<div className="row input-container">
			<div className="col-xs-12">
				<div className="styled-input wide">
					<input type="text" required  onChange={(e)=>setName(e.target.value)} value={Name}/>
					<label>Name</label> 
				</div>
			</div>
			<div className="col-md-6 col-sm-12">
				<div className="styled-input">
					<input type="text" required onChange={(e)=>setEmail(e.target.value)} value={email}/>
					<label>Email</label> 
				</div>
			</div>
			
			<div className="col-xs-12">
				<div className="styled-input wide">
					<textarea required onChange={(e)=>setObjetMsg(e.target.value)} value={objetMsg}></textarea>
					<label>Message</label>
				</div>
			</div>
			<div className="col-xs-12">
				<div className="btn-lrg submit-btn" onClick={()=>dispatch(postMSG({Name,email,objetMsg},setEmail(""),setName(""),setObjetMsg("")))}>Send Message</div>
			</div>
	</div>
</div>


    </div>
  )
}

export default ContactUs