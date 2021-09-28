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
import './Dashboard.css'

const useStyles = makeStyles(() => ({
mainContainer: {
backgroundColor: '#fcf7ed',
display: 'flex',
flexDirection: "row",
paddingTop:80,
paddingBottom:80,
paddingRight:96,
maxWidth: '100%',
minWidth:600,
width: 'auto',
width: '100vw',
flexGrow: 1,
justifyContent: 'space-between ',

}, 
paragraphDesktop: {
fontSize: 20,
flexGrow: 4,
marginLeft: 60,


},
titleDesktop:{
fontSize: 28,
display:'flex',
},
imageDesktop: {
height: 700,
marginLeft: 60

},

}))

const Paragraph = () => {
    const { mainContainer, imageDesktop, paragraphDesktop, titleDesktop  } = useStyles();

    const [readMore,setReadMore]=useState(false);
    const extraContent=<div>
        <p className="extra-content">
        right to your door? We got you covered. <br /><br />We’re passionate about providing the
            highest-quality healthcare in a private, relaxed setting. And we’re committed to reducing the stress that
            often comes with seeking medical care. Because having a medical issue can be stressful enough.<br />So, what
            about our doctors, nurses, and staff? They’re all at the top of their profession and bring a wealth of
            knowledge and experience with specialties ranging from emergency medicine and gastroenterology to internal
            medicine and pediatrics. <br /><br />You can expect a high-quality, personalized approach with complete, easy
            access to your healthcare team. A team that’s more than happy to work around your busy schedule to address
            your healthcare needs, whatever they may be.
        </p>
    </div>
    const linkName=readMore?'Read Less << ':'Read More >> '

    return (
        <Container className={mainContainer}>
               <img className={imageDesktop}
       src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/gettyimages-619265078@1x.png"/>
        <text className='paragraphDesktop'><text className='titleDesktop'>PREMIER CONCIERGE MEDICAL SERVICES<br/><br/></text>
        
          Founded by an accomplished physician-nurse duo, our vision was simple: a boutique concierge medical
          practice that takes a personal and comprehensive approach to expertly serve your healthcare needs.
          <br /><br />Need same-day COVID-19 testing? A house call by a top doctor? A prescription refill, or even one
          delivered right to your door? We got you covered. <br /><br />We’re passionate about providing the
          highest-quality healthcare in a private, relaxed setting. And we’re committed to reducing the stress that
          often comes with seeking medical care. Because having a medical issue can be stressful enough.<br />So, what
          about our doctors, nurses, and staff? They’re all at the top of their profession and bring a wealth of
          knowledge and experience with specialties ranging from emergency medicine and gastroenterology to internal
          medicine and pediatrics. <br /><br />You can expect a high-quality, personalized approach with complete, easy
          access to your healthcare team. A team that’s more than happy to work around your busy schedule to address
          your healthcare needs, whatever they may be.
          </text>
        </Container>
    )
}

export default Paragraph
