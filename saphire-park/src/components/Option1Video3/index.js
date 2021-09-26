import React, { useState } from "react";
import Rectangle6 from "../Rectangle6";
import "./Option1Video3.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import { width } from "@mui/system";
import zIndex from "@mui/material/styles/zIndex";

function Option1Video3(props) {



  const {
    image4,
    place,
    helloLA,
    gettyimages619265078,
    spanText,
    spanText2,
    ourServices,
    covid19Testing,
    text2,
    telemedicine,
    text3,
    gettyimages1266487294,
    gettyimages493527752,
    gettyimages1279187363,
    gettyimages1270939930,
    pexelsKarolinaGrabowska4386464,
    pexelsRfstudio3825586,
    pexelsNataliyaVaitkevich7615574,
    pexelsKlausNielsen6303590,
    pexelsJillBurrow6387845,
    text4,
    text5,
    text6,
    conciergeNursing,
    text7,
    pexelsNataliyaVaitkevich5863400,
    pexelsRfstudio3825578,
    pexelsPhoto5726706,
    pexelsTimaMiroshnichenko5407206,
    pexelsAnnaNekrashevich8533265,
    pexelsAnnaNekrashevich85332652,
    vaccines,
    diagnosticTesting,
    stdTesting,
    text8,
    andMore,
    bookNow,
    text1,
    scheduleOnline,
    firstName,
    lastName,
    address,
    city,
    ca,
    preferredContact,
    phone,
    email,
    phone2,
    submit,
    text9,
    image42,
  } = props;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


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

  const responsive ={
    mobile: {
      breakpoint: { max: 978 , min:  0},
      items: 2
    }
  }

  return (
   <div>
   <div className="container-center-horizontal">
  <div className="option-1-video-3 screen">
    <Container className="overlap-group6-1 border-1px-dove-gray">
    <text class="place-2">SAPPHIRE</text>
    <text class="surname-2">PARK MEDICAL</text>
    </Container>
    <div className="overlap-group5-1">
      <div className="image-5-1">
        <iframe
          src="https://player.vimeo.com/external/599504614.m3u8?s=0a1614217fcbbeec5e94ebfd9492c0a1922de1e9
          "
          allowfullscreen="allowfullscreen"
          mozallowfullscreen="mozallowfullscreen"
          msallowfullscreen="msallowfullscreen"
          oallowfullscreen="oallowfullscreen"
          webkitallowfullscreen="webkitallowfullscreen"
        ></iframe>
      </div>
      <h1 className="hello-la-1">HELLO L.A.</h1>
    </div>
    
    <div className="overlap-group7">
    <Container>
      <img
       
        src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/gettyimages-619265078@1x.png"
        style={{marginLeft:120, marginTop:680, height:750}}
      />
      </Container>
      <Container style={{position:'relative', top:450, left:-80}}>
      <div className="premier-concierge-me">
        <span className="span0-1 optima-regular-normal-cod-gray-28px">PREMIER CONCIERGE MEDICAL SERVICES<br /></span
        ><span className="optima-regular-normal-cod-gray-22px"
          ><br />Founded by an accomplished physician-nurse duo, our vision was simple: a boutique concierge medical
          practice that takes a personal and comprehensive approach to expertly serve your healthcare needs.
          <br /><br />Need same-day COVID-19 testing? A house call by a top doctor? A prescription refill, or even one
          delivered right to your door? We got you covered. <br /><br />We’re passionate about providing the
          highest-quality healthcare in a private, relaxed setting. And we’re committed to reducing the stress that
          often comes with seeking medical care. Because having a medical issue can be stressful enough.<br />So, what
          about our doctors, nurses, and staff? They’re all at the top of their profession and bring a wealth of
          knowledge and experience with specialties ranging from emergency medicine and gastroenterology to internal
          medicine and pediatrics. <br /><br />You can expect a high-quality, personalized approach with complete, easy
          access to your healthcare team. A team that’s more than happy to work around your busy schedule to address
          your healthcare needs, whatever they may be.</span>
      </div>
      </Container>
      
    </div>
   
    <div className="overlap-group2-1">
      <div className="rectangle-6-1"></div>
      <div className="our-services-1 optima-regular-normal-cod-gray-28px">OUR SERVICES</div>
      <div className="covid-19-testing-1 optima-regular-normal-cod-gray-20px">COVID-19&nbsp;&nbsp;TESTING</div>
      <div className="text-2 optima-regular-normal-cod-gray-20px">URGENT CARE HOUSE CALLS</div>
      <div className="telemedicine-1 optima-regular-normal-cod-gray-20px">TELEMEDICINE</div>
      <div className="text-3 optima-regular-normal-cod-gray-20px">PRIVATE LAB DRAWS <br />ADULTS &amp; PEDIATRICS</div>
      <div className="rectangle-7-1 border-1px-dove-gray"></div>
      <img
        className="getty-images-1266487294-1"
        src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/gettyimages-1266487294@1x.png"
      />
      <img
        className="getty-images-493527752-1"
        src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/gettyimages-493527752@1x.png"
      />
      <img
        className="getty-images-1279187363-1"
        src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/gettyimages-1279187363@1x.png"
      />
      <img
        className="getty-images-1270939930-1"
        src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/gettyimages-1270939930@1x.png"
      />
      <img
        className="pexels-karolina-abowska-4386464-1"
        src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/pexels-karolina-grabowska-4386464@1x.png"
      />
      <img
        className="pexels-rfstudio-3825586-1"
        src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/pexels-rfstudio-3825586@1x.png"
      />
      <img
        className="pexels-nataliya-tkevich-7615574"
        src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/pexels-nataliya-vaitkevich-7615574@1x.png"
      />
      <img
        className="pexels-klaus-nielsen-6303590"
        src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/pexels-klaus-nielsen-6303590@1x.png"
      />
      <img
        className="pexels-jill-burrow-6387845-1"
        src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/pexels-jill-burrow-6387845@1x.png"
      />
      <div className="rectangle-34 border-1px-dove-gray"></div>
      <div className="rectangle-35 border-1px-dove-gray"></div>
    </div>
    <div className="flex-row-2 optima-regular-normal-cod-gray-18px">
      <div className="text-4">INTERNAL MEDICINE CONSULTS</div>
      <div className="overlap-group10">
        <div className="text-5">GASTROENTEROLOGY CONSULTS</div>
        <div className="text-6">PHARMACY PICK-UPS AND DROP-OFFS</div>
      </div>
      <div className="overlap-group1-1">
        <div className="concierge-nursing-1">CONCIERGE NURSING</div>
        <div className="text-7">IV VITAMIN DRIPS &amp; WELLNESS SHOTS</div>
      </div>
    </div>
    <div className="flex-row-3">
      <img
        className="pexels-nataliya-tkevich-5863400-1"
        src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/pexels-nataliya-vaitkevich-5863400@1x.png"
      />
      <img
        className="pexels-1"
        src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/pexels-rfstudio-3825578@1x.png"
      />
      <img
        className="pexels-1"
        src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/pexels-photo-5726706@1x.png"
      />
      <img
        className="pexels-1"
        src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/pexels-tima-miroshnichenko-5407206@1x.png"
      />
      <div className="overlap-group9">
        <img
          className="pexels-anna-nek-shevich-8533265-1"
          src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/pexels-anna-nekrashevich-8533265@1x.png"
        />
        <img
          className="pexels-anna-nek-shevich-8533265-1"
          src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/pexels-anna-nekrashevich-8533265-1@1x.png"
        />
        <div className="rectangle-33 border-1px-dove-gray"></div>
      </div>
    </div>
    <div className="overlap-group8 optima-regular-normal-cod-gray-18px">
      <div className="vaccines-1">VACCINES</div>
      <div className="diagnostic-testing-1">DIAGNOSTIC TESTING</div>
      <div className="std-testing-1">STD TESTING</div>
      <div className="text-8">WOMEN’S &amp; MEN’S <br />SEXUAL HEALTH EXAMS</div>
      <div className="and-more-1">AND MORE</div>
    </div>
    <div className="overlap-group3-1">
      <div className="book-now-1 optima-regular-normal-cod-gray-28px">BOOK NOW</div>
      <div className="rectangle-9-1 border-1px-dove-gray"></div>
      <div className="text-1 optima-regular-normal-cod-gray-20px">CALL OR TEXT 424.402.9609</div>
    </div>
    <div className="overlap-group-1">
      <div className="flex-col-2">
        <div className="schedule-online-1 optima-regular-normal-cod-gray-28px">SCHEDULE ONLINE</div>
        <TextField id="standard-basic" label="First Name" variant="standard"  style={{width:340}}/>
        <TextField id="standard-basic" label="Last Name" variant="standard"  style={{width:340, marginLeft: 450, marginTop:-50}}/>
        <div>
          <div ></div>
          <div></div>
        </div>
        <div>
        <TextField id="standard-basic" label="Address" variant="standard"  style={{width:340, marginTop:40}}/>
        <TextField id="standard-basic" label="City" variant="standard"  style={{width:340, marginLeft: 109, marginTop:40}}/>
        <TextField id="standard-basic" label="State" variant="standard" value='CA' style={{width:40, marginLeft: 109, marginTop:40}}/>
         
        </div>
        <div >
       
        </div>
      </div>
      <div className="flex-row-8">
        <div classNameName="preferred-contact-1 optima-regular-normal-cod-gray-18px">PREFERRED CONTACT:</div>
        <div classNameName="rectangle-15-1 border-1px-dove-gray"></div>
      <FormGroup>
      <FormControlLabel control={<Checkbox/>} label="Phone" style={{marginTop:-10, marginLeft: 10}} />
      <FormControlLabel control={<Checkbox/>} label="Email" style={{marginTop:-42, marginLeft: 100}}/>
      </FormGroup>
      </div>
      <div className="flex-col-3">
      <TextField id="standard-basic" label="Phone" variant="standard"style={{width:640, marginLeft: 1, marginTop:5}}/>
      <Button variant="outlined" style={{
 borderColor:"#000000",
 color:'#000000',
 width:200,
 marginTop: 40,
 marginLeft:1,
 zIndex:1
}}
>SubmiT</Button>

      </div>
    </div>
    <div className="overlap-group4-1 border-1px-dove-gray">
      <p className="text-9">©2021, Sapphire Park Medical. All Rights Reserved.</p>
      <img
        className="image-4-3"
        src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/image-4-1@1x.png"
      />
    </div>
  </div>
</div>
<div className="container-center-horizontal">
  <div className="option-1-video-2 screen">
    <Container className="overlap-group4 border-1px-dove-gray">
    <text class="place-3">SAPPHIRE</text>
    <text class="surname-3">PARK MEDICAL</text>
    </Container>
    <div className="overlap-group5">
      <div className="rectangle-5"></div>
      <div className="rectangle-6"></div>
      <div className="image-5">
        <iframe
          style={{border: 0, pointerEvents: 'auto',width:"100%",
          height:"100%"}}
          src="https://player.vimeo.com/video/external/599504614.m3u8?autoplay=1&muted=1"
          allowfullscreen="allowfullscreen"
          mozallowfullscreen="mozallowfullscreen"
          msallowfullscreen="msallowfullscreen"
          oallowfullscreen="oallowfullscreen"
          webkitallowfullscreen="webkitallowfullscreen"
        ></iframe>
      </div>
      <div className="premier-concierge-m">
        <span className="span0 optima-regular-normal-cod-gray-18px">PREMIER CONCIERGE <br />MEDICAL SERVICES<br /></span
        ><span className="optima-regular-normal-cod-gray-22px"><br /></span><span className="span2 optima-regular-normal-cod-gray-16px"
          >Founded by an accomplished physician-nurse duo, our vision was simple: a boutique concierge medical practice
          that takes a personal and comprehensive approach to expertly serve your healthcare needs. <br /><br />Need
          same-day COVID-19 testing? A house call by a top doctor? A prescription refill, or even one delivered <p className='Morecontent'>{readMore && extraContent}</p></span><span className="optima-regular-normal-cod-gray-22px">.</span>
      </div>
      <div className="read-more"><a className="read-more-link" onClick={handleOpen}>{linkName}</a></div>
      
      <div className="our-services optima-regular-normal-cod-gray-16px">OUR SERVICES</div>
      <div className="covid-19-testing optima-regular-normal-cod-gray-14px">COVID-19&nbsp;&nbsp;TESTING</div>
      <div className="text-10 optima-regular-normal-cod-gray-14px">URGENT CARE HOUSE CALLS</div>
      <div className="telemedicine optima-regular-normal-cod-gray-14px">TELEMEDICINE</div>
      <p className="text-11 optima-regular-normal-cod-gray-14px">PRIVATE LAB DRAWS <br />ADULTS &amp; PEDIATRICS</p>
      <div className="hello-la">HELLO L.A.</div>
      <div className="rectangle-7 border-1px-dove-gray"></div>
      <div className='images'>
        
      <img
        className="getty-images-1266487294"
        src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fb065eb5d68be95fadc2d/img/gettyimages-1266487294-1@1x.png"
      />
      <img
        className="getty-images-493527752"
        src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fb065eb5d68be95fadc2d/img/gettyimages-493527752-1@1x.png"
      />
      <img
        className="getty-images-1279187363"
        src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fb065eb5d68be95fadc2d/img/gettyimages-1279187363-1@1x.png"
      />
      <img
        className="getty-images-1270939930"
        src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fb065eb5d68be95fadc2d/img/gettyimages-1270939930-1@1x.png"
      />
      <img
        className="mask-group-1"
        src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fb065eb5d68be95fadc2d/img/mask-group-1@1x.png"
      />
     
      </div>
      
      <div className="group-1">
        <div>
        <Carousel responsive={responsive} containerClass='Carousel' itemClass='Carousel-images' arrows={true} >
      <div>
          <img
           title='Internal Medicine Consults'
            src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fb065eb5d68be95fadc2d/img/pexels-karolina-grabowska-4386464-1@1x.png"
          />
          </div>
          
          <img
              
              src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fb065eb5d68be95fadc2d/img/pexels-rfstudio-3825586-1@1x.png"
            />
            <img
              
              src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fb065eb5d68be95fadc2d/img/pexels-nataliya-vaitkevich-7615574-1@1x.png"
            />
            <img
              
              src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fb065eb5d68be95fadc2d/img/pexels-klaus-nielsen-6303590-1@1x.png"
            />
            <img
             
              src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fb065eb5d68be95fadc2d/img/pexels-jill-burrow-6387845-1@1x.png"
            />
            <img
              
              src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fb065eb5d68be95fadc2d/img/pexels-nataliya-vaitkevich-5863400-1@1x.png"
            />
            <img
            
              src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fb065eb5d68be95fadc2d/img/pexels-rfstudio-3825578-1@1x.png"
            />
            <img
             
              src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fb065eb5d68be95fadc2d/img/pexels-photo-5726706-1@1x.png"
            />
            <img
            
              src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fb065eb5d68be95fadc2d/img/pexels-tima-miroshnichenko-5407206-1@1x.png"
            />
            <img
             
                src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fb065eb5d68be95fadc2d/img/pexels-anna-nekrashevich-8533265-3@1x.png"
              />

     </Carousel>
          <div>

     </div>
      
          <div className="flex-row-1 optima-regular-normal-cod-gray-12px">
            <div className="overlap-group2">
              {/* <div className="text-13">GASTROENTEROLOGY CONSULTS</div>
              <div className="text-14">PHARMACY PICK-UPS AND DROP-OFFS</div>
            </div>
            <div className="overlap-group1">
              <div className="concierge-nursing">CONCIERGE NURSING</div>
              <p className="text-15">IV VITAMIN DRIPS &amp; WELLNESS SHOTS</p>
            </div>
            <div className="overlap-group">
              <div className="vaccines">VACCINES</div>
              <div className="diagnostic-testing">DIAGNOSTIC TESTING</div>
              <div className="std-testing">STD TESTING</div>
              <p className="text-16">WOMEN’S &amp; MEN’S <br />SEXUAL HEALTH EXAMS</p>
              <div className="and-more">AND MORE</div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="rectangle-29"></div>
      
      <div className="rectangle-31 border-1px-akaroa"></div>
      <div className="rectangle-30 border-1px-akaroa"></div>
      <div className="rectangle-8"></div>
      <div className="rectangle-21"></div>
      <Container>
      <div className="book-now optima-regular-normal-cod-gray-16px">BOOK NOW</div>
      <div className="schedule-online optima-regular-normal-cod-gray-28px">SCHEDULE ONLINE</div>
      <Container style={{marginLeft:150}}>
      <TextField id="standard-basic" label="Last Name" variant="standard" style={{marginTop:1630, width:300}}/>
      <TextField id="standard-basic" label="First Name" variant="standard" style={{marginTop:1580, marginLeft:-300, width:300}}/>
      <TextField id="standard-basic" label="Address" variant="standard" style={{marginTop:1680, marginLeft:-300, width:300}}/>
      </Container>
      <div className="preferred-contact optima-regular-normal-cod-gray-14px">PREFERRED CONTACT:</div>
      <Container style={{marginLeft:450}}>
      <TextField id="standard-basic" label="City" variant="standard" style={{ marginLeft:-300, width:200}}/>
      <TextField id="standard-basic" label="State" variant="standard" value='CA' style={{width:40, marginLeft: 40,}}/>
      </Container>
      <div className="text-17 optima-regular-normal-cod-gray-14px">CALL OR TEXT 424.402.9609</div>
      </Container>
      <Container>
<Button variant="outlined" style={{
 borderColor:"#000000",
 color:'#000000',
 width:200,
 marginTop: 190,
 marginLeft:150,
 zIndex:1
}}
>SubmiT</Button>
</Container>
      <div className="rectangle-20 border-1px-dove-gray"></div>
      <img
        className="image-4-1"
        src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/image-4-1@1x.png"
      />
      <p className="text-18">
        ©2021, Sapphire Park Medical.<br />
        All Rights Reserved.
      </p>
    </div>
    <Container>
    <FormGroup>
      <FormControlLabel control={<Checkbox/>} label="Phone" style={{marginTop:-399, marginLeft:-5, paddingBottom:10, zIndex:1}}/>
      <FormControlLabel control={<Checkbox/>} label="Email" style={{marginTop:-20, marginLeft: -5, marginRight:280, zIndex:1,}}/>
      </FormGroup>
    </Container>
  </div>
</div>
<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box style={{  
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: '#fcf7ed',
  border: '2px solid #fcf7ed',
  boxShadow: 24, 
  paddingLeft: 50,      
  paddingRight: 50,  
  paddingTop: 50,      
  paddingBottom: 50,                                                                           
  p: 4,}}>
       <span className="span0-1 optima-regular-normal-cod-gray-18px" style={{marginLeft: 'auto'}}>PREMIER CONCIERGE <br/>MEDICAL SERVICES<br /></span
        ><span className="optima-regular-normal-cod-gray-16px"> 
          <br/>Founded by an accomplished physician-nurse duo, our vision was simple: a boutique concierge medical
          practice that takes a personal and comprehensive approach to expertly serve your healthcare needs.
          <br /><br />Need same-day COVID-19 testing? A house call by a top doctor? A prescription refill, or even one
          delivered right to your door? We got you covered. <br /><br />We’re passionate about providing the
          highest-quality healthcare in a private, relaxed setting. And we’re committed to reducing the stress that
          often comes with seeking medical care. Because having a medical issue can be stressful enough.<br /><br />So, what
          about our doctors, nurses, and staff? They’re all at the top of their profession and bring a wealth of
          knowledge and experience with specialties ranging from emergency medicine and gastroenterology to internal
          medicine and pediatrics. <br /><br />You can expect a high-quality, personalized approach with complete, easy
          access to your healthcare team. A team that’s more than happy to work around your busy schedule to address
          your healthcare needs, whatever they may be.</span>
        </Box>
      </Modal>
   </div>
  );
}

export default Option1Video3;
