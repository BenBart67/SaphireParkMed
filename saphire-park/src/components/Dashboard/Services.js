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
    servicesContainer:{
    display: 'flex',
    paddingTop:300,
    justifyContent:'center',
    flexDirection: "row",
    maxWidth: '100%',
    width: 'auto',
    width: '100vw',
    },
    titleDesk:{

    },
    topimagesDesk:{
    display: 'flex',
    justifyContent:'space-between',
    maxWidth: '100%',
    width: 'auto',
    width: '100vw',
    flexWrap: 'baseline',
    alignItems: 'center',
    
    
    },


}))

const Services = () => {
    const { titleDesk, servicesContainer, topimagesDesk, bottomimagesDesk  } = useStyles();
    return (
        <Container className={servicesContainer}>
        <Container className={topimagesDesk}>
     <Card
      style={{boxShadow:'none', }}
      >
      <CardMedia
      component='img'
        width='334'
        height='416'
       image="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/gettyimages-1266487294@1x.png"
      />
      <CardContent>
      <Typography>COVID-19 TESTING</Typography>
      </CardContent>
      </Card>

      <Card
      style={{boxShadow:'none', marginLeft:60}}
      >
      <CardMedia
      component='img'
        width='334'
        height='416'
       image="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/gettyimages-493527752@1x.png"
      />
      <CardContent>
      <Typography>URGENT CARE HOUSE CALLS</Typography>
      </CardContent>
      </Card>

      <Card
      style={{boxShadow:'none', marginLeft:60}}
      >
      <CardMedia
      component='img'
        width='334'
        height='416'
       image="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/gettyimages-1279187363@1x.png"
      />
      <CardContent>
      <Typography>TELEMEDICINE</Typography>
      </CardContent>
      </Card>

      <Card
      style={{boxShadow:'none', marginLeft:60}}
      >
      <CardMedia
      component='img'
        width='334'
        height='416'
       image="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/gettyimages-1270939930@1x.png"
       />
      <CardContent>
      <Typography>PRIVATE LABS DRAWS <br/>ADULTS &amp; PEDIATRICS</Typography>
      </CardContent>
      </Card>
      </Container>
   
        </Container>
    )
}

export default Services
