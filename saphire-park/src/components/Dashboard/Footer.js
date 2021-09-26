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
import Grid from '@mui/material/Grid';

const Footer = () => {
    return (
        <footer style={{backgroundColor:'black', height:83}}>
            <Box>
                <Container>
                    <Typography style={{color:'white'}}> 
                        ©2021, Sapphire Park Medical.<br />
                        All Rights Reserved.
                    </Typography>
                </Container>
            </Box>
        </footer>
    )
}

export default Footer
