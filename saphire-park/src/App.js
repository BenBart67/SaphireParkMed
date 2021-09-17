import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Option1Video3 from "./components/Option1Video3";





function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|option-1-video-3)">
          <Option1Video3 {...option1Video3Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const option1Video3Data = {
    image4: "https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/image-4@1x.png",
    place: "CONTACT",
    helloLA: "HELLO L.A.",
    gettyimages619265078: "https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/gettyimages-619265078@1x.png",
    spanText: <>PREMIER CONCIERGE MEDICAL SERVICES<br /></>,
    spanText2: <><br />Founded by an accomplished physician-nurse duo, our vision was simple: a boutique concierge medical practice that takes a personal and comprehensive approach to expertly serve your healthcare needs. <br /><br />Need same-day COVID-19 testing? A house call by a top doctor? A prescription refill, or even one delivered right to your door? We got you covered. <br /><br />We’re passionate about providing the highest-quality healthcare in a private, relaxed setting. And we’re committed to reducing the stress that often comes with seeking medical care. Because having a medical issue can be stressful enough.<br />So, what about our doctors, nurses, and staff? They’re all at the top of their profession and bring a wealth of knowledge and experience with specialties ranging from emergency medicine and gastroenterology to internal medicine and pediatrics. <br /><br />You can expect a high-quality, personalized approach with complete, easy access to your healthcare team. A team that’s more than happy to work around your busy schedule to address your healthcare needs, whatever they may be.</>,
    ourServices: "OUR SERVICES",
    covid19Testing: "COVID-19  TESTING",
    text2: "URGENT CARE HOUSE CALLS",
    telemedicine: "TELEMEDICINE",
    text3: <>PRIVATE LAB DRAWS <br />ADULTS &amp; PEDIATRICS</>,
    gettyimages1266487294: "https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/gettyimages-1266487294@1x.png",
    gettyimages493527752: "https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/gettyimages-493527752@1x.png",
    gettyimages1279187363: "https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/gettyimages-1279187363@1x.png",
    gettyimages1270939930: "https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/gettyimages-1270939930@1x.png",
    pexelsKarolinaGrabowska4386464: "https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/pexels-karolina-grabowska-4386464@1x.png",
    pexelsRfstudio3825586: "https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/pexels-rfstudio-3825586@1x.png",
    pexelsNataliyaVaitkevich7615574: "https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/pexels-nataliya-vaitkevich-7615574@1x.png",
    pexelsKlausNielsen6303590: "https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/pexels-klaus-nielsen-6303590@1x.png",
    pexelsJillBurrow6387845: "https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/pexels-jill-burrow-6387845@1x.png",
    text4: "INTERNAL MEDICINE CONSULTS",
    text5: "GASTROENTEROLOGY CONSULTS",
    text6: "PHARMACY PICK-UPS AND DROP-OFFS",
    conciergeNursing: "CONCIERGE NURSING",
    text7: "IV VITAMIN DRIPS & WELLNESS SHOTS",
    pexelsNataliyaVaitkevich5863400: "https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/pexels-nataliya-vaitkevich-5863400@1x.png",
    pexelsRfstudio3825578: "https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/pexels-rfstudio-3825578@1x.png",
    pexelsPhoto5726706: "https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/pexels-photo-5726706@1x.png",
    pexelsTimaMiroshnichenko5407206: "https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/pexels-tima-miroshnichenko-5407206@1x.png",
    pexelsAnnaNekrashevich8533265: "https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/pexels-anna-nekrashevich-8533265@1x.png",
    pexelsAnnaNekrashevich85332652: "https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/pexels-anna-nekrashevich-8533265-1@1x.png",
    vaccines: "VACCINES",
    diagnosticTesting: "DIAGNOSTIC TESTING",
    stdTesting: "STD TESTING",
    text8: <>WOMEN’S &amp; MEN’S <br />SEXUAL HEALTH EXAMS</>,
    andMore: "AND MORE",
    bookNow: "BOOK NOW",
    text1: "CALL OR TEXT 424.402.9609",
    scheduleOnline: "SCHEDULE ONLINE",
    firstName: "FIRST NAME",
    lastName: "LAST NAME",
    address: "ADDRESS",
    city: "CITY",
    ca: "CA",
    preferredContact: "PREFERRED CONTACT:",
    phone: "PHONE",
    email: "EMAIL",
    phone2: "PHONE",
    submit: "SUBMIT",
    text9: "©2021, Sapphire Park Medical. All Rights Reserved.",
    image42: "https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/image-4-1@1x.png",
};

