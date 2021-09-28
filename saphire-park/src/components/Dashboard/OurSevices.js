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
import './Dashboard.css'

const useStyles = makeStyles(() => ({
    mainCon:{
    width: '100vw',
    zIndex:1,
    marginTop:170
    },
    
    bookNow:{
    height:21,
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


const OurSevices = () => {
    const { bookNow, mainCon} = useStyles();
    return (
        <div className={mainCon}>
          
           
            <div className={bookNow}>
            <div style={{
            display: 'flex',
            justifyContent:'center',
            alignItems: 'center',
            flexDirection: 'column'}}>
                <text className='optima-regular-normal-cod-gray-28px'>OUR SERVICES</text>
                <div style={{backgroundColor:'#000000', height:1, width:543}}></div>
                </div>
            </div>
        </div>
    )
}

export default OurSevices
