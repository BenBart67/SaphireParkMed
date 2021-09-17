// import React from "react";
// import "./Mobileview.css";

// function Mobileview(props) {
//   const {
//     image4,
//     place,
//     spanText,
//     spanText2,
//     spanText3,
//     spanText4,
//     readMore,
//     ourServices,
//     covid19Testing,
//     text10,
//     telemedicine,
//     text11,
//     helloLA,
//     gettyimages1266487294,
//     gettyimages493527752,
//     gettyimages1279187363,
//     gettyimages1270939930,
//     maskGroup1,
//     pexelsKarolinaGrabowska4386464,
//     text12,
//     pexelsRfstudio3825586,
//     pexelsNataliyaVaitkevich7615574,
//     pexelsKlausNielsen6303590,
//     pexelsJillBurrow6387845,
//     pexelsNataliyaVaitkevich5863400,
//     pexelsRfstudio3825578,
//     pexelsPhoto5726706,
//     pexelsTimaMiroshnichenko5407206,
//     overlapGroup3,
//     pexelsAnnaNekrashevich8533265,
//     text13,
//     text14,
//     conciergeNursing,
//     text15,
//     vaccines,
//     diagnosticTesting,
//     stdTesting,
//     text16,
//     andMore,
//     polygon1,
//     bookNow,
//     scheduleOnline,
//     firstName,
//     lastName,
//     address,
//     phone,
//     email,
//     preferredContact,
//     city,
//     ca,
//     text17,
//     submit,
//     image42,
//     text18,
//   } = props;

//   return (
//       <>
//     <div className="container-center-horizontal">
//   <div className="option-1-video-3 screen">
//     <div className="overlap-group6-1 border-1px-dove-gray">
//       <img
//         className="image-4-2"
//         src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/image-4@1x.png"
//       />
//       <div className="overlap-group11 border-1px-white"><div className="place-1">CONTACT</div></div>
//     </div>
//     <div className="overlap-group5-1">
//       <div className="image-5-1">
//         <iframe
//           style="border: 0; pointer-events: auto"
//           width="100%"
//           height="100%"
//           src="https://player.vimeo.com/video/external/599504614.m3u8?autoplay=1&muted=1"
//           allowfullscreen="allowfullscreen"
//           mozallowfullscreen="mozallowfullscreen"
//           msallowfullscreen="msallowfullscreen"
//           oallowfullscreen="oallowfullscreen"
//           webkitallowfullscreen="webkitallowfullscreen"
//         ></iframe>
//       </div>
//       <h1 className="hello-la-1">HELLO L.A.</h1>
//     </div>
//     <div className="overlap-group7">
//       <img
//         className="getty-images-619265078"
//         src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/gettyimages-619265078@1x.png"
//       />
//       <div className="premier-concierge-me">
//         <span className="span0-1 optima-regular-normal-cod-gray-28px">PREMIER CONCIERGE MEDICAL SERVICES<br /></span
//         ><span className="optima-regular-normal-cod-gray-22px"
//           ><br />Founded by an accomplished physician-nurse duo, our vision was simple: a boutique concierge medical
//           practice that takes a personal and comprehensive approach to expertly serve your healthcare needs.
//           <br /><br />Need same-day COVID-19 testing? A house call by a top doctor? A prescription refill, or even one
//           delivered right to your door? We got you covered. <br /><br />We’re passionate about providing the
//           highest-quality healthcare in a private, relaxed setting. And we’re committed to reducing the stress that
//           often comes with seeking medical care. Because having a medical issue can be stressful enough.<br />So, what
//           about our doctors, nurses, and staff? They’re all at the top of their profession and bring a wealth of
//           knowledge and experience with specialties ranging from emergency medicine and gastroenterology to internal
//           medicine and pediatrics. <br /><br />You can expect a high-quality, personalized approach with complete, easy
//           access to your healthcare team. A team that’s more than happy to work around your busy schedule to address
//           your healthcare needs, whatever they may be.</span
//         >
//       </div>
//     </div>
//     <div className="overlap-group2-1">
//       <div className="rectangle-6-1"></div>
//       <div className="our-services-1 optima-regular-normal-cod-gray-28px">OUR SERVICES</div>
//       <div className="covid-19-testing-1 optima-regular-normal-cod-gray-20px">COVID-19&nbsp;&nbsp;TESTING</div>
//       <div className="text-2 optima-regular-normal-cod-gray-20px">URGENT CARE HOUSE CALLS</div>
//       <div className="telemedicine-1 optima-regular-normal-cod-gray-20px">TELEMEDICINE</div>
//       <div className="text-3 optima-regular-normal-cod-gray-20px">PRIVATE LAB DRAWS <br />ADULTS &amp; PEDIATRICS</div>
//       <div className="rectangle-7-1 border-1px-dove-gray"></div>
//       <img
//         className="getty-images-1266487294-1"
//         src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/gettyimages-1266487294@1x.png"
//       />
//       <img
//         className="getty-images-493527752-1"
//         src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/gettyimages-493527752@1x.png"
//       />
//       <img
//         className="getty-images-1279187363-1"
//         src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/gettyimages-1279187363@1x.png"
//       />
//       <img
//         className="getty-images-1270939930-1"
//         src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/gettyimages-1270939930@1x.png"
//       />
//       <img
//         className="pexels-karolina-abowska-4386464-1"
//         src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/pexels-karolina-grabowska-4386464@1x.png"
//       />
//       <img
//         className="pexels-rfstudio-3825586-1"
//         src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/pexels-rfstudio-3825586@1x.png"
//       />
//       <img
//         className="pexels-nataliya-tkevich-7615574"
//         src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/pexels-nataliya-vaitkevich-7615574@1x.png"
//       />
//       <img
//         className="pexels-klaus-nielsen-6303590"
//         src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/pexels-klaus-nielsen-6303590@1x.png"
//       />
//       <img
//         className="pexels-jill-burrow-6387845-1"
//         src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/pexels-jill-burrow-6387845@1x.png"
//       />
//       <div className="rectangle-34 border-1px-dove-gray"></div>
//       <div className="rectangle-35 border-1px-dove-gray"></div>
//     </div>
//     <div className="flex-row-2 optima-regular-normal-cod-gray-18px">
//       <div className="text-4">INTERNAL MEDICINE CONSULTS</div>
//       <div className="overlap-group10">
//         <div className="text-5">GASTROENTEROLOGY CONSULTS</div>
//         <div className="text-6">PHARMACY PICK-UPS AND DROP-OFFS</div>
//       </div>
//       <div className="overlap-group1-1">
//         <div className="concierge-nursing-1">CONCIERGE NURSING</div>
//         <div className="text-7">IV VITAMIN DRIPS &amp; WELLNESS SHOTS</div>
//       </div>
//     </div>
//     <div className="flex-row-3">
//       <img
//         className="pexels-nataliya-tkevich-5863400-1"
//         src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/pexels-nataliya-vaitkevich-5863400@1x.png"
//       />
//       <img
//         className="pexels-1"
//         src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/pexels-rfstudio-3825578@1x.png"
//       />
//       <img
//         className="pexels-1"
//         src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/pexels-photo-5726706@1x.png"
//       />
//       <img
//         className="pexels-1"
//         src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/pexels-tima-miroshnichenko-5407206@1x.png"
//       />
//       <div className="overlap-group9">
//         <img
//           className="pexels-anna-nek-shevich-8533265-1"
//           src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/pexels-anna-nekrashevich-8533265@1x.png"
//         />
//         <img
//           className="pexels-anna-nek-shevich-8533265-1"
//           src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/pexels-anna-nekrashevich-8533265-1@1x.png"
//         />
//         <div className="rectangle-33 border-1px-dove-gray"></div>
//       </div>
//     </div>
//     <div className="overlap-group8 optima-regular-normal-cod-gray-18px">
//       <div className="vaccines-1">VACCINES</div>
//       <div className="diagnostic-testing-1">DIAGNOSTIC TESTING</div>
//       <div className="std-testing-1">STD TESTING</div>
//       <div className="text-8">WOMEN’S &amp; MEN’S <br />SEXUAL HEALTH EXAMS</div>
//       <div className="and-more-1">AND MORE</div>
//     </div>
//     <div className="overlap-group3-1">
//       <div className="book-now-1 optima-regular-normal-cod-gray-28px">BOOK NOW</div>
//       <div className="rectangle-9-1 border-1px-dove-gray"></div>
//       <div className="text-1 optima-regular-normal-cod-gray-20px">CALL OR TEXT 424.402.9609</div>
//     </div>
//     <div className="overlap-group-1">
//       <div className="flex-col-2">
//         <div className="schedule-online-1 optima-regular-normal-cod-gray-28px">SCHEDULE ONLINE</div>
//         <div className="flex-row-4 optima-regular-normal-cod-gray-18px">
//           <div className="first-name-1">FIRST NAME</div>
//           <div className="last-name-1">LAST NAME</div>
//         </div>
//         <div className="flex-row-5">
//           <div className="rectangle-1 border-1px-dove-gray"></div>
//           <div className="rectangle-11-1 border-1px-dove-gray"></div>
//         </div>
//         <div className="flex-row-6 optima-regular-normal-cod-gray-18px">
//           <div className="address-1">ADDRESS</div>
//           <div className="flex-row-item">CITY</div>
//           <div className="flex-row-item">CA</div>
//         </div>
//         <div className="flex-row-7">
//           <div className="rectangle-1 border-1px-dove-gray"></div>
//           <div className="rectangle-13-1 border-1px-dove-gray"></div>
//           <div className="rectangle-14-1 border-1px-dove-gray"></div>
//         </div>
//       </div>
//       <div className="flex-row-8">
//         <div className="preferred-contact-1 optima-regular-normal-cod-gray-18px">PREFERRED CONTACT:</div>
//         <div className="rectangle-15-1 border-1px-dove-gray"></div>
//         <div className="phone-1 optima-regular-normal-cod-gray-18px">PHONE</div>
//         <div className="rectangle-18-1 border-1px-dove-gray"></div>
//         <div className="email-1 optima-regular-normal-cod-gray-18px">EMAIL</div>
//       </div>
//       <div className="flex-col-3">
//         <div className="phone-2 optima-regular-normal-cod-gray-18px">PHONE</div>
//         <div className="rectangle-36 border-1px-dove-gray"></div>
//         <div className="overlap-group12 border-1px-black"><div className="submit-1">SUBMIT</div></div>
//       </div>
//     </div>
//     <div className="overlap-group4-1 border-1px-dove-gray">
//       <p className="text-9">©2021, Sapphire Park Medical. All Rights Reserved.</p>
//       <img
//         className="image-4-3"
//         src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/image-4-1@1x.png"
//       />
//     </div>
//   </div>
// </div>
// <div className="container-center-horizontal">
//   <div className="option-1-video-2 screen">
//     <div className="overlap-group4 border-1px-dove-gray">
//       <img
//         className="image-4"
//         src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fb065eb5d68be95fadc2d/img/image-4-2@1x.png"
//       />
//       <div className="overlap-group6 border-1px-white"><div className="place">CONTACT</div></div>
//     </div>
//     <div className="overlap-group5">
//       <div className="rectangle-5"></div>
//       <div className="rectangle-6"></div>
//       <div className="image-5">
//         <iframe
//           style="border: 0; pointer-events: auto"
//           width="100%"
//           height="100%"
//           src="https://player.vimeo.com/video/external/599504614.m3u8?autoplay=1&muted=1"
//           allowfullscreen="allowfullscreen"
//           mozallowfullscreen="mozallowfullscreen"
//           msallowfullscreen="msallowfullscreen"
//           oallowfullscreen="oallowfullscreen"
//           webkitallowfullscreen="webkitallowfullscreen"
//         ></iframe>
//       </div>
//       <div className="premier-concierge-m">
//         <span className="span0 optima-regular-normal-cod-gray-18px">PREMIER CONCIERGE <br />MEDICAL SERVICES<br /></span
//         ><span className="optima-regular-normal-cod-gray-22px"><br /></span
//         ><span className="span2 optima-regular-normal-cod-gray-16px"
//           >Founded by an accomplished physician-nurse duo, our vision was simple: a boutique concierge medical practice
//           that takes a personal and comprehensive approach to expertly serve your healthcare needs. <br /><br />Need
//           same-day COVID-19 testing? A house call by a top doctor? A prescription refill, or even one delivered right to
//           your door? We got you covered. <br /><br />We’re passionate about providing the highest-quality healthcare in
//           a private, relaxed setting. And we’re committed to reducing the stress that often comes with seeking medical
//           care. Because having a medical issue can be stressful enough.<br />So, what about our doctors, nurses, and
//           staff? They’re all at the top of their profession and bring a wealth of knowledge and experience with
//           specialties ranging from emergency medicine and gastroenterology to internal medicine and pediatrics.
//           <br /><br />You can expect a high-quality, personalized approach with complete, easy access to your healthcare
//           team. A team that’s more than happy to work around your busy schedule to address your healthcare needs,
//           whatever they may be</span
//         ><span className="optima-regular-normal-cod-gray-22px">.</span>
//       </div>
//       <div className="read-more">READ MORE</div>
//       <div className="our-services optima-regular-normal-cod-gray-16px">OUR SERVICES</div>
//       <div className="covid-19-testing optima-regular-normal-cod-gray-14px">COVID-19&nbsp;&nbsp;TESTING</div>
//       <div className="text-10 optima-regular-normal-cod-gray-14px">URGENT CARE HOUSE CALLS</div>
//       <div className="telemedicine optima-regular-normal-cod-gray-14px">TELEMEDICINE</div>
//       <p className="text-11 optima-regular-normal-cod-gray-14px">PRIVATE LAB DRAWS <br />ADULTS &amp; PEDIATRICS</p>
//       <div className="hello-la">HELLO L.A.</div>
//       <div className="rectangle-7 border-1px-dove-gray"></div>
//       <img
//         className="getty-images-1266487294"
//         src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fb065eb5d68be95fadc2d/img/gettyimages-1266487294-1@1x.png"
//       />
//       <img
//         className="getty-images-493527752"
//         src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fb065eb5d68be95fadc2d/img/gettyimages-493527752-1@1x.png"
//       />
//       <img
//         className="getty-images-1279187363"
//         src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fb065eb5d68be95fadc2d/img/gettyimages-1279187363-1@1x.png"
//       />
//       <img
//         className="getty-images-1270939930"
//         src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fb065eb5d68be95fadc2d/img/gettyimages-1270939930-1@1x.png"
//       />
//       <img
//         className="mask-group-1"
//         src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fb065eb5d68be95fadc2d/img/mask-group-1@1x.png"
//       />
//       <div className="group-1">
//         <div className="flex-col">
//           <img
//             className="pexels-karolina-abowska-4386464"
//             src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fb065eb5d68be95fadc2d/img/pexels-karolina-grabowska-4386464-1@1x.png"
//           />
//           <div className="text-12 optima-regular-normal-cod-gray-12px">INTERNAL MEDICINE CONSULTS</div>
//         </div>
//         <div className="flex-col-1">
//           <div className="flex-row">
//             <img
//               className="pexels-rfstudio-3825586"
//               src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fb065eb5d68be95fadc2d/img/pexels-rfstudio-3825586-1@1x.png"
//             />
//             <img
//               className="pexels"
//               src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fb065eb5d68be95fadc2d/img/pexels-nataliya-vaitkevich-7615574-1@1x.png"
//             />
//             <img
//               className="pexels"
//               src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fb065eb5d68be95fadc2d/img/pexels-klaus-nielsen-6303590-1@1x.png"
//             />
//             <img
//               className="pexels-jill-burrow-6387845"
//               src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fb065eb5d68be95fadc2d/img/pexels-jill-burrow-6387845-1@1x.png"
//             />
//             <img
//               className="pexels-nataliya-tkevich-5863400"
//               src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fb065eb5d68be95fadc2d/img/pexels-nataliya-vaitkevich-5863400-1@1x.png"
//             />
//             <img
//               className="pexels-rfstudio-3825578"
//               src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fb065eb5d68be95fadc2d/img/pexels-rfstudio-3825578-1@1x.png"
//             />
//             <img
//               className="pexels-photo-5726706"
//               src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fb065eb5d68be95fadc2d/img/pexels-photo-5726706-1@1x.png"
//             />
//             <img
//               className="pexels-tima-mir-ichenko-5407206"
//               src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fb065eb5d68be95fadc2d/img/pexels-tima-miroshnichenko-5407206-1@1x.png"
//             />
//             <div className="overlap-group3">
//               <img
//                 className="pexels-anna-nek-shevich-8533265"
//                 src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fb065eb5d68be95fadc2d/img/pexels-anna-nekrashevich-8533265-3@1x.png"
//               />
//             </div>
//           </div>
//           <div className="flex-row-1 optima-regular-normal-cod-gray-12px">
//             <div className="overlap-group2">
//               <div className="text-13">GASTROENTEROLOGY CONSULTS</div>
//               <div className="text-14">PHARMACY PICK-UPS AND DROP-OFFS</div>
//             </div>
//             <div className="overlap-group1">
//               <div className="concierge-nursing">CONCIERGE NURSING</div>
//               <p className="text-15">IV VITAMIN DRIPS &amp; WELLNESS SHOTS</p>
//             </div>
//             <div className="overlap-group">
//               <div className="vaccines">VACCINES</div>
//               <div className="diagnostic-testing">DIAGNOSTIC TESTING</div>
//               <div className="std-testing">STD TESTING</div>
//               <p className="text-16">WOMEN’S &amp; MEN’S <br />SEXUAL HEALTH EXAMS</p>
//               <div className="and-more">AND MORE</div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="rectangle-29"></div>
//       <img
//         className="polygon-1"
//         src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fb065eb5d68be95fadc2d/img/polygon-1@1x.png"
//       />
//       <div className="rectangle-31 border-1px-akaroa"></div>
//       <div className="rectangle-30 border-1px-akaroa"></div>
//       <div className="rectangle-8"></div>
//       <div className="rectangle-21"></div>
//       <div className="book-now optima-regular-normal-cod-gray-16px">BOOK NOW</div>
//       <div className="schedule-online optima-regular-normal-cod-gray-28px">SCHEDULE ONLINE</div>
//       <div className="first-name optima-regular-normal-cod-gray-14px">FIRST NAME</div>
//       <div className="last-name optima-regular-normal-cod-gray-14px">LAST NAME</div>
//       <div className="address optima-regular-normal-cod-gray-14px">ADDRESS</div>
//       <div className="phone optima-regular-normal-cod-gray-14px">PHONE</div>
//       <div className="email optima-regular-normal-cod-gray-14px">EMAIL</div>
//       <div className="preferred-contact optima-regular-normal-cod-gray-14px">PREFERRED CONTACT:</div>
//       <div className="city optima-regular-normal-cod-gray-14px">CITY</div>
//       <div className="ca optima-regular-normal-cod-gray-14px">CA</div>
//       <div className="text-17 optima-regular-normal-cod-gray-14px">CALL OR TEXT 424.402.9609</div>
//       <div className="rectangle-9 border-1px-dove-gray"></div>
//       <div className="rectangle-10 border-1px-dove-gray"></div>
//       <div className="rectangle-11 border-1px-dove-gray"></div>
//       <div className="rectangle-12 border-1px-dove-gray"></div>
//       <div className="rectangle-13 border-1px-dove-gray"></div>
//       <div className="rectangle-14 border-1px-dove-gray"></div>
//       <div className="rectangle-15 border-1px-dove-gray"></div>
//       <div className="rectangle-18 border-1px-dove-gray"></div>
//       <div className="rectangle-19 border-1px-black"></div>
//       <div className="submit">SUBMIT</div>
//       <div className="rectangle-20 border-1px-dove-gray"></div>
//       <img
//         className="image-4-1"
//         src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fa7bb3ba8178a69f50590/img/image-4-1@1x.png"
//       />
//       <p className="text-18">
//         ©2021, Sapphire Park Medical.<br />
//         All Rights Reserved.
//       </p>
//     </div>
//   </div>
// </div>
// </>
//   );
// }

// export default Mobileview;
