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
import ultrasound from './Services2imgs/ultrasounddesk.png';
import appt from './Services2imgs/appt.png';


const useStyles = makeStyles(() => ({
service2container:{
  display: 'flex',
  justifyContent:'space-around',
  maxWidth: '100%',
  width: 'auto',
  width: '100vw',
  flexWrap: 'wrap'
 
  
},

bottomimagesDesk:{
  display: 'flex',
  justifyContent:'space-around',
  maxWidth: '100%',
  width: 'auto',
  width: '100vw',
  maxHeight: '100%',
  height:'100vh',
  flexWrap: 'wrap',
  alignItems: 'center'
 
},
label:{
  display: 'flex',
  justifyContent:'space-around',
  maxWidth: '100%',
  width: 'auto',
  width: '100vw',
  maxHeight:'100%',
  height:'100vh',
  flexWrap:'wrap',
  alignItems:'center',
 marginTop:-700
}


}))


const Services2 = () => {
    const {bottomimagesDesk, service2container, label } = useStyles();

    return (
        <Container className={service2container}>
    <Container className={service2container, bottomimagesDesk}>
      <Card
      style={{boxShadow:'none'}}
      >
      <CardMedia
      component='img'
        width='238'
        height='211'
       image="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/pexels-karolina-grabowska-4386464@1x.png"
      />
      <CardContent>
      <Typography>INTERNAL MEDICINE <br/>CONSULTS</Typography>
      </CardContent>
      </Card>

      <Card
      style={{boxShadow:'none'}}
      >
      <CardMedia
      component='img'
        width='238'
        height='211'
       image={ultrasound}
      />
      <CardContent>
      <Typography>GASTROENTEROLOGY <br/>CONSULTS</Typography>
      </CardContent>
      </Card>

      <Card
      style={{boxShadow:'none'}}
      >
      <CardMedia
      component='img'
        width='238'
        height='211'
       image="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/pexels-nataliya-vaitkevich-7615574@1x.png"
      />
      <CardContent>
      <Typography>PHARMACY PICK-UPS <br/>AND DROP-OFFS </Typography>
      </CardContent>
      </Card>
  
      <Card
      style={{boxShadow:'none'}}
      >
      <CardMedia
      component='img'
        width='238'
        height='211'
       image="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/pexels-klaus-nielsen-6303590@1x.png"
      />
      <CardContent>
      <Typography>CONCIERGE <br/>NURSING</Typography>
      </CardContent>
      </Card>

      <Card
      style={{boxShadow:'none'}}
      >
      <CardMedia
      component='img'
        width='238'
        height='211'
       image="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/pexels-jill-burrow-6387845@1x.png"
      />
      <CardContent>
      <Typography>IV VITAMIN DRIPS &amp;<br/> WELLNESS SHOTS</Typography>
      </CardContent>
      </Card>

      <Card
      style={{boxShadow:'none'}}
      >
      <CardMedia
      component='img'
        width='238'
        height='211'
       image="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/pexels-nataliya-vaitkevich-5863400@1x.png"
      />
      <CardContent>
      <Typography>VACCINES</Typography>
      </CardContent>
      </Card>

      <Card
      style={{boxShadow:'none'}}
      >
      <CardMedia
      component='img'
        width='238'
        height='211'
       image="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/pexels-rfstudio-3825578@1x.png"
      />
      <CardContent>
      <Typography>DIAGNOSTIC TESTING</Typography>
      </CardContent>
      </Card>

      <Card
      style={{boxShadow:'none'}}
      >
      <CardMedia
      component='img'
        width='238'
        height='211'
       image="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/pexels-photo-5726706@1x.png"
      />
      <CardContent>
      <Typography>STD TESTING</Typography>
      </CardContent>
      </Card>


      <Card
      style={{boxShadow:'none', height:275}}
      >
      <CardMedia
      component='img'
        width='238'
        height='211'
       image="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/pexels-tima-miroshnichenko-5407206@1x.png"
      />
      <CardContent>
      <Typography>WOMEN'S &amp; MEN'S<br/> SEXUAL HEALTH EXAMS</Typography>
      </CardContent>
      </Card>

      <Card
      style={{boxShadow:'none', width:237}}
      >
      <CardMedia
      component='img'
        width='238'
        height='211'
       image={appt}
      />
      <CardContent>
      <Typography>AND MORE</Typography>
      </CardContent>
      </Card>


      </Container>
      {/* <Container className={label}>
        <Typography>INTERNAL MEDICINE CONSULTS</Typography>
        <Typography>GASTROENTEROLOGY <br/>CONSULTS</Typography>
        <Typography>PHARMACY PICK-UPS <br/>AND DROP-OFFS </Typography>
        <Typography>CONCIERGE NURSING</Typography>
        <Typography>IV VITAMIN DRIPS &amp;<br/> WELLNESS SHOTS </Typography>
        <Typography>VACCINES</Typography>
        <Typography>DIAGNOSTIC TESTING</Typography>
        <Typography>STD TESTING</Typography>
        <Typography>WOMEN'S &amp; MEN'S<br/> SEXUAL HEALTH EXAMS</Typography>
        <Typography>AND MORE</Typography>
      </Container> */}
      </Container>
    )
}

export default Services2
