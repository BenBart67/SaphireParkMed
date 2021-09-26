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

const Video = () => {


    return (
        <Container style={{marginTop:180,  height:752, justifyContent: 'center'}}>
            <video  autoplay="autoplay" width='1200' muted loop="true">
            <source src="https://player.vimeo.com/external/599504614.sd.mp4?s=d2b0a6f165129db8cf1268055472c65db60a6f81&profile_id=165" type="video/mp4"/>
            </video> 
        </Container>
    )
}

export default Video
