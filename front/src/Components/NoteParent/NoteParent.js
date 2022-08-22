import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { getOnePupil } from '../../Redux/actions/noteActions';
import { getCurrentuser } from '../../Redux/actions/userActions';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function NoteP() {
    const noteseleve = useSelector(state=>state.noteReducer.noteseleve)
    const dispatch = useDispatch();
    React.useEffect(() => {
      dispatch(getOnePupil());
      dispatch(getCurrentuser());
    }, []);
  return (
    <div>
    <TableContainer component={Paper} >
    <h1 style={{ "color":"blueviolet","textAlign":"center","marginBottom":"45px"}}>Here are your student's Marks : <br/> </h1>
      <Table sx={{ minWidth: 650}} aria-label="caption table">
               <TableHead>
          <TableRow style={{}}>
            <TableCell style={{"fontSize":"25px" ,"color":"brown"}}>Name Of Subject</TableCell>
            <TableCell align="left" style={{"fontSize":"25px","color":"brown" }}>Note</TableCell>
            <TableCell align="left" style={{"fontSize":"25px","color":"brown" }}>Enseignant</TableCell>
            <TableCell align="left" style={{"fontSize":"25px","color":"brown" }}>Elève</TableCell>
            <TableCell align="left" style={{"fontSize":"25px","color":"brown" }}>classe</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
        {noteseleve.map((el) => (

            <TableRow key={el._id}>
              <TableCell component="th" scope="row" style={{"fontSize":"20px","color":"blue" }}>
              {el.nameMatiere}
              </TableCell>
              <TableCell align="left" style={{"fontSize":"20px" }}>{el.note}</TableCell>
              <TableCell align="left" style={{"fontSize":"20px" }}>{el.enseignant.firstName}  {el.enseignant.lastName}</TableCell>
              <TableCell align="left" style={{"fontSize":"20px" }}>{el.children.firstName}  {el.children.lastName}</TableCell>
              <TableCell align="left" style={{"fontSize":"20px" }}>{el.children.classe}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

     <Link to="/pageParent">
     <Button variant="info" style={{"marginTop":"100px","width":"130px","height":"50px","fontSize":"30px"}}>
           Retour
         </Button>
       </Link></div>
  );
}