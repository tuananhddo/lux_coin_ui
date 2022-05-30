// import React, {useState,useEffect} from 'react';
// import { createStyles, makeStyles,useTheme } from '@material-ui/core/styles';
// import PropTypes from 'prop-types';
// import MobileStepper from '@material-ui/core/MobileStepper';
// // import Paper from '@material-ui/core/Paper';
// // import Typography from '@material-ui/core/Typography';
// // import Button from '@material-ui/core/Button';
// // import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
// // import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
// import SwipeableViews from 'react-swipeable-views';
// import { autoPlay } from 'react-swipeable-views-utils';
// import * as S from './style';
//
// const tutorialSteps = [
//   {
//     imgPath:
//       'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
//   },
//   {
//     imgPath:
//       'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
//   },
//   {
//     imgPath:
//       'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
//   },
//   {
//     imgPath:
//       'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
//   },
//   {
//     imgPath:
//       'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
//   },
// ];
//
// function Login(props) {
//   const { headElement, contentElement, footerElement , sliderImages, type, image} = props;
//   const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
//   const [dataSlider, setDataSlider] = useState(tutorialSteps);
//
//   useEffect(() =>{
//     if(sliderImages){
//       console.log(sliderImages.images);
//       setDataSlider(sliderImages.images);
//     }
//   }, [sliderImages]);
//
//   const useStyles = makeStyles(() =>
//         createStyles({
//           imageStyle: {
//             backgroundImage: `url(${image || 'https://cdn.dribbble.com/users/1818193/screenshots/5632103/jungle_zuairia_zaman_.jpg'})`
//           },
//           sliderStyle: {
//             maxWidth: '100%',
//             height: '100%',
//             flexGrow: 1,
//           },
//           img: {
//             height: '100vh',
//             objectFit:'cover',
//             display: 'block',
//             maxWidth: '100%',
//             overflow: 'hidden',
//             width: '100%',
//           }
//         })
//     );
//
//   const classes = useStyles();
//   const theme = useTheme();
//   const [activeStep, setActiveStep] = React.useState(0);
//   const maxSteps = dataSlider.length;
//
//   // const handleNext = () => {
//   //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   // };
//
//   // const handleBack = () => {
//   //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   // };
//
//   const handleStepChange = (step) => {
//     setActiveStep(step);
//   };
//
//   const renderTypeCarousel=()=>{
//     switch (type) {
//       case 'default':
//         return <S.Wrapper>
//         <S.DefaultForm>
//           <S.FormContainer>
//             <S.Header className="head-element">{headElement}</S.Header>
//             <S.Content className="content-element">{contentElement}</S.Content>
//             <S.Footer className="footer-element">{footerElement}</S.Footer>
//           </S.FormContainer>
//         </S.DefaultForm>
//       </S.Wrapper>
//       case 'image':
//         return <S.Wrapper>
//         <S.ImageForm className={classes.imageStyle}>
//           <S.FormContainer className="form-container">
//             <S.Header className="head-element">{headElement}</S.Header>
//             <S.Content className="content-element">{contentElement}</S.Content>
//             <S.Footer className="footer-element">{footerElement}</S.Footer>
//           </S.FormContainer>
//         </S.ImageForm>
//       </S.Wrapper>
//       case 'slider':
//         return <S.Wrapper>
//           <S.SliderForm>
//             <S.LeftForm className="left-form">
//               {/* <S.Slide><img src="https://cdn.dribbble.com/users/1818193/screenshots/5632103/jungle_zuairia_zaman_.jpg"/></S.Slide> */}
//               <div className={classes.sliderStyle}>
//                 <AutoPlaySwipeableViews
//                   axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//                   index={activeStep}
//                   onChangeIndex={handleStepChange}
//                   enableMouseEvents
//                 >
//                   {dataSlider.map((step, index) => (
//                     <div key={step.label}>
//                       {Math.abs(activeStep - index) <= 2 ? (
//                         <img className={classes.img} src={step.imgPath} alt={step.label} />
//                       ) : null}
//                     </div>
//                   ))}
//                 </AutoPlaySwipeableViews>
//                 <MobileStepper
//                   variant="dots"
//                   steps={maxSteps}
//                   position="static"
//                   activeStep={activeStep}
//                   // nextButton={
//                   //   <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
//
//                   //     {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
//                   //   </Button>
//                   // }
//                   // backButton={
//                   //   <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
//                   //     {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
//
//                   //   </Button>
//                   // }
//                 />
//               </div>
//             </S.LeftForm>
//             <S.RightForm className="right-form">
//               <S.FormContainer className="form-container">
//                 <S.Header className="head-element">{headElement}</S.Header>
//                 <S.Content className="content-element">{contentElement}</S.Content>
//                 <S.Footer className="footer-element">{footerElement}</S.Footer>
//               </S.FormContainer>
//             </S.RightForm>
//           </S.SliderForm>
//       </S.Wrapper>
//
//       default:
//         return <S.Wrapper>
//         <S.DefaultForm >
//           <S.FormContainer>
//             <S.Header className="head-element">{headElement}</S.Header>
//             <S.Content className="content-element">{contentElement}</S.Content>
//             <S.Footer className="footer-element">{footerElement}</S.Footer>
//           </S.FormContainer>
//         </S.DefaultForm>
//       </S.Wrapper>
//       }
//   }
//
//   return renderTypeCarousel()
// }
//
// Login.propTypes = {
//   headElement: PropTypes.any,//Header elemnt
//   contentElement: PropTypes.any,//Content element
//   footerElement: PropTypes.any,//Footer element
//   backgroundElement: PropTypes.any,
//   loading: PropTypes.bool,//loading check
//   sliderImages: PropTypes.object,
//   image: PropTypes.string,
//   type: PropTypes.string
// };
//
// export default Login;