import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Header from './Header';
import Video from './Video';
import Paragraph from './Paragraph';
import Services from './Services';
import Services2 from './Services2';
import Contact from './Contact';
import SubmitForm from './SubmitForm';
import Footer from './Footer';
import './Dashboard.css'
import OurSevices from './OurSevices';



const Dashboard = () => {
    return (
        <Container style={{justifyContent: 'center', maxWidth: '100%',
        width: '100vw', overflowX: 'hidden', padding:0 }}>
           <Header/>
           <Video/> 
           <Paragraph/>
           <OurSevices/>
           <Services/>
           <Services2/>
           <Contact/>
           <SubmitForm/>
           <Footer/>
        </Container>
    )
}

export default Dashboard
