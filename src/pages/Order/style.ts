// import styled from "styled-components";
// import Order from "assets/img/Order.png";
// import comment from "assets/img/comment.png";
// import headerOrder from "assets/img/headerOrder.svg";
// import { Containers } from "style/DefaultStyled";
// import Color from "style/color";
//
// export const Wrapper = styled.div`
//   width: 100%;
//   max-width: 100%;
//   margin-top: 180px;
// `;
//
// export const StyleContainer = styled(Containers)`
//   background: url(${Order});
//   background-repeat: no-repeat;
//   background-size: contain;
//   background-position: center;
//   min-height: 300px;
//   display: flex;
//   @media (min-width: 768px) {
//   }
//   @media (min-width: 1024px) {
//     min-height: 417px;
//   }
// `;
//
// export const StyleItem = styled.div`
//   height: 100%;
//   margin: auto;
//   padding: 10px 20px;
//   background: #16151e;
//   backdrop-filter: blur(30px);
//   flex-direction: column;
//   justify-content: center;
//   display: flex;
//   &.last {
//     clip-path: polygon(0% 100%, 0% 0%, 0% 0%, 90% 0%, 170% 100%, 100% 100%);
//   }
//   @media (min-width: 768px) {
//   }
//   @media (min-width: 1024px) {
//     padding:10px 30px;
//   }
// `;
//
// export const StyleTitle = styled.div`
//   font-family: OswaldMedium;
//   font-size: 18px;
//   font-weight: 500;
//   font-stretch: normal;
//   font-style: normal;
//   line-height: 1.22;
//   letter-spacing: 0.09px;
//   text-align: left;
//   color: #000;
//
//   background: url(${headerOrder});
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center;
//
//   /* background-image: linear-gradient(to right, #f8b900, #03ffff);
//   clip-path:polygon( 0% 0%, 85% 0%, 100% 100%, 0% 100% ); */
//   padding: 14px 80px 14px 20px;
//   height: 50px;
//   min-width: 173px;
// `;
//
// export const StyleLine = styled.div`
//   background-image: linear-gradient(to bottom, #f8b900, #03ffff);
//   clip-path: polygon(0% 0%, 5px 0%, 100% 100%, 20px 100%);
//   width: 25px;
// `;
//
// export const StyledTitleItem = styled.div`
//   font-family: OswaldRegular;
//   font-size: 18px;
//   font-weight: normal;
//   font-stretch: normal;
//   font-style: normal;
//   line-height: 1.78;
//   letter-spacing: 0.09px;
//   text-align: center;
//   color: ${Color.secondary};
// `;
//
// export const StyledDesItem = styled.div`
//   font-family: OswaldRegular;
//   font-size: 15px;
//   font-weight: normal;
//   font-stretch: normal;
//   font-style: normal;
//   line-height: 1.78;
//   letter-spacing: 0.09px;
//   color: ${Color.secondary};
//   margin-top: 10px;
// `;
//
// export const StyleNumberOrder = styled.input`
//   padding: 8px 16px;
//   border-radius: 3px;
//   backdrop-filter: blur(30px);
//   background-color: #3c3b44;
//   font-family: OswaldLight;
//   border: none;
//   font-size: 16px;
//   font-weight: 300;
//   font-stretch: normal;
//   font-style: normal;
//   letter-spacing: 0.08px;
//   text-align: left;
//   color: ${Color.secondary};
//   max-width: 125px;
//   height: 40px;
// `;
//
// export const StyledTitleSlider = styled.div`
//   background: url(${comment});
//   background-repeat: no-repeat;
//   background-size: contain;
//   background-position: center;
//   height: 32px;
//   width: 125px;
//   font-size: 13px;
//   font-weight: 300;
//   font-stretch: normal;
//   font-style: normal;
//   line-height: 24px;
//   letter-spacing: 0.07px;
//   text-align: center;
//   color: #000;
//   margin-bottom: 15px;
//   @media (min-width: 768px) {
//     margin-bottom: 10px;
//   }
//   @media (min-width: 1024px) {
//   }
// `;
//
// export const StyledListButton = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-top: 15px;
//   & .MuiButtonBase-root {
//     max-width: 30%;
//     padding: 14px 0;
//     flex: 1;
//   }
//   & .MuiButton-label {
//     font-size: 13px;
//     line-height: 16px;
//   }
//
//   @media (min-width: 768px) {
//   }
//   @media (min-width: 1024px) {
//     margin-top: 25px;
//
//     & .MuiButtonBase-root {
//       padding: 14px 0;
//       max-width: 145px;
//     }
//   }
// `;
//
// export const StyledFooter = styled.div`
//   font-family: OswaldLight;
//   font-size: 13px;
//   font-weight: 300;
//   font-stretch: normal;
//   font-style: normal;
//   line-height: 1.47;
//   letter-spacing: 0.08px;
//   text-align: left;
//   color: ${Color.primary};
//   margin-top: 10px;
//   @media (min-width: 768px) {
//   }
//   @media (min-width: 1024px) {
//     font-size: 15px;
//   }
// `;
//
// export const StyledAddress = styled.div`
//   display: flex;
//   width: 100%;
//   position: relative;
//
// `;
//
// export const StyledAddressInput = styled.input`
//   padding: 8px 90px 8px 16px;
//   border-radius: 3px 0 0 3px;
//   backdrop-filter: blur(30px);
//   background-color: #3c3b44;
//   font-family: OswaldLight;
//   border: none;
//   font-size: 16px;
//   font-weight: 300;
//   font-stretch: normal;
//   font-style: normal;
//   letter-spacing: 0.08px;
//   text-align: left;
//   color: ${Color.secondary};
//   height: 40px;
//   flex: 1;
// `;
//
// export const StyledCopyAddress = styled.button`
//   position: absolute;
//   width: 90px;
//   height: 100%;
//   border-radius: 0 5px 5px 0;
//   background-image: linear-gradient(to right, #f8b900, #03ffff);
//   border: none;
//   /* padding: 9px 29px; */
//   font-family: OswaldMedium;
//   font-size: 15px;
//   font-weight: 500;
//   font-stretch: normal;
//   font-style: normal;
//   line-height: 1.47;
//   letter-spacing: 0.08px;
//   text-align: center;
//   color: #000;
//   text-transform: uppercase;
//   cursor: pointer;
//   right: 0;
//   @media (max-width: 767px) {
//     font-size: 13px;
//     width: 70px;
//
//   }
// `;
//
// export const StyledGetReferral = styled.div`
//   margin: 30px auto;
// `;
