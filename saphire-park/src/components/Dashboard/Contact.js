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
mainCon:{
width: '100vw',
zIndex:1
},

bookNow:{
backgroundColor:'#f4e8d1',
height:291,
width: '100vw',
display: 'flex',
justifyContent:'space-around',
maxWidth: '100%',
width: 'auto',
width: '100vw',
flexWrap: 'baseline',
alignItems: 'center',

}
}))

const Contact = () => {
const { bookNow, mainCon} = useStyles();
    return (
        <div className={mainCon}>
          
           
            <div className={bookNow}>
            <div style={{
            display: 'flex',
            justifyContent:'center',
            alignItems: 'center',
            flexDirection: 'column'}}>
                <Typography style={{fontSize:38,}}>BOOK NOW</Typography>
                <div style={{backgroundColor:'#000000', height:1, width:543}}></div>
                <Typography style={{paddingTop:30,fontSize:20, }}>CALL OR TEXT 424.402.9609</Typography>
                </div>
            </div>
        </div>
    )
}

export default Contact
