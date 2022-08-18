import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllCours } from '../../Redux/actions/coursActions'
import { getCurrentuser } from '../../Redux/actions/userActions'
import CoursParentCard from '../CoursParentCard/CoursParentCard'
import Button from 'react-bootstrap/Button';

const CoursParent = () => {
    const cours = useSelector(state=>state.coursReducer.cours)
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllCours());
      dispatch(getCurrentuser());
    }, []);
    return (
      <div>
  
    <div style={{display:"flex",justifyContent:"space-evenly",flexWrap:'wrap', "paddingTop":"200px"}}>
    {cours.map(el=><CoursParentCard el={el} key={el._id}/>)}
</div>
<Link to="/pageParent">
<Button variant="info" style={{"marginTop":"100px","width":"130px","height":"50px","fontSize":"30px"}}>
      Retour
    </Button>
  </Link>
</div>
)
  
}

export default CoursParent
