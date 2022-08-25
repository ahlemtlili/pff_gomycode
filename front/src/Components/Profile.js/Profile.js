import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Profile() {
  const currentUser = useSelector(state=>state.userReducer.currentUser)
  return ( 
    <div style={{marginLeft:"750px",marginTop:"200px"}}>
   <Card style={{width:"400px"}}>
      <CardMedia
        component="img"
        height="300"
        image="https://c8.alamy.com/comp/2G106XK/male-teacher-avatar-educacion-and-school-character-profile-user-person-people-icon-isolated-vector-illustration-2G106XK.jpg"
        alt={currentUser.firstName}
      /> 
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <h4 style={{"color":"brown"}}> FirstName : </h4>{currentUser.firstName}
        </Typography>
        <Typography gutterBottom variant="h5" component="div"> 
         <h4 style={{"color":"brown"}}>LastName : </h4>{currentUser.lastName}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        <h4 style={{"color":"brown"}}>Identity card number : </h4>{currentUser.CIN}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        <h4 style={{"color":"brown"}}>Phone Number : </h4>{currentUser.numTel}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        <h4 style={{"color":"brown"}}> Email : </h4>{currentUser.email}
        </Typography>

      </CardContent>
      <CardActions>
       <Link to={`/editteacher/${currentUser._id}`}><Button size="small">Edit</Button></Link>
      </CardActions>
    </Card>
    </div>
    
  );
}