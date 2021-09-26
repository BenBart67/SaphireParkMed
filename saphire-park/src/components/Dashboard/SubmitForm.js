import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import { makeStyles } from "@material-ui/core";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';


const useStyles = makeStyles(() => ({
FormContainer:{
    display: 'flex',
    justifyContent:'space-around',
    maxWidth: '100%',
    width: 'auto',
    width: '100vw',
    maxHeight: '100%',
    flexWrap: 'wrap',
    alignContent: 'center',
    paddingTop:90
   
},
Formcontrol:{
display: 'flex',
justifyContent:'space-around',
maxWidth: '100%',
width: 'auto',
width: '100vw',
flexWrap: 'baseline',
alignItems: 'center',
paddingTop:60
},
Formcontrol2:{
display: 'flex',
justifyContent:'space-around',
maxWidth: '100%',
width: 'auto',
width: '100vw',
flexWrap: 'baseline',
alignItems: 'center',
marginTop:40
},
Buttoncontainer:{
display: 'flex',
justifyContent:'space-around',
maxWidth: '100%',
width: 'auto',
width: '100vw',
flexWrap: 'baseline',
alignItems: 'center',
paddingTop:140
}


}))

const SubmitForm = () => {
    const { FormContainer, Formcontrol,Formcontrol2, Buttoncontainer } = useStyles();
    return (
        <Container style={{height:587, backgroundColor:'#fcf7ed', maxWidth: '100%',
        width: 'auto',
        width: '100vw',
        padding:0}}>
     <Container className={FormContainer}> 
        <Typography style={{fontSize:28}}>SCHEDULE ONLINE</Typography>
        <Container className={Formcontrol}>     
        <TextField id="standard-basic" label="First Name" variant="standard" style={{ width:400}}/>
        <TextField id="standard-basic" label="Last Name" variant="standard" style={{width:500}}/>
        </Container>
        <Container className={Formcontrol2}>
        <TextField id="standard-basic" label="Address" variant="standard" style={{ width:400, marginLeft:40 }}/>
        <TextField id="standard-basic" label="City" variant="standard" style={{ width:300, marginLeft:120}}/>
        <TextField id="standard-basic" label="State" variant="standard" value='CA' style={{width:40}}/>
        </Container>
        <Container style={{paddingTop: 50, marginLeft:120}}>
        <Button variant="outlined" style={{
        borderColor:"#000000",
        color:'#000000',
        width:200,
        zIndex:1,
        display: 'flex',
        }}
>SubmiT</Button>
</Container>

      </Container>

        </Container>
    )
}

export default SubmitForm
