import React from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const PageAdmin = () => {
  return (
    <div> <div style={{"display":"flex","justifyContent":'space-around',"marginTop":"250px"}}>  
    <div ><Link type="button" class="btn btn-primary"  style={{"fontSize":"25px" , "color":"white","backgroundColor":"blue"}} to='/coursG'><FaSignInAlt/>Cours</Link></div>
   <div><Link type="button" class="btn btn-primary"  style={{"fontSize":"25px" , "color":"white","backgroundColor":"blue"}} to='/noteG'><FaSignInAlt />Note</Link></div>    
   <div><Link type="button" class="btn btn-primary"  style={{"fontSize":"25px" , "color":"white","backgroundColor":"blue"}} to='/parentsG'><FaSignInAlt />Parent</Link></div>    
   <div><Link type="button" class="btn btn-primary"  style={{"fontSize":"25px" , "color":"white","backgroundColor":"blue"}} to='/enseignantG'><FaSignInAlt />Enseignant</Link></div>    
   <div><Link type="button" class="btn btn-primary"  style={{"fontSize":"25px" , "color":"white","backgroundColor":"blue"}} to='/elevesG'><FaSignInAlt />Elèves</Link></div>    

</div>   </div>
  )
}

export default PageAdmin