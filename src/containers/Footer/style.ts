import styled from "styled-components";
import { Col } from "style/DefaultStyled";
import Color from "style/color";
import {Link} from "@mui/material";
// import { Link } from "@material-ui/core";

export const Wrapper = styled.div`
  width: 100%;
  background-color: #181826;
  color: #cddbfe;
  text-align: left;
  padding: 45px 0;
`;

export const FooterContent = styled.div`
  width: 100%;
  padding: 60px 0 40px;
`;

export const StyledColLogo = styled(Col)`
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const StyledLogo = styled.img`
  max-width: 100%;
  width: 350px;
`;

export const StyledTitle = styled.div`
  font-family: OswaldMedium;
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: 0.1px;
  color: ${Color.primary};
  margin-bottom: 15px;
  text-align: center;
  margin-top: 25px;
  width: 100%;
  @media (min-width: 768px) {
    text-align: left;
    margin-bottom: 28px;
  }
`;

// export const StyledDes = styled.div`
//   font-size: 16px;
//   font-weight: 300;
//   font-stretch: normal;
//   font-style: normal;
//   line-height: 2.5;
//   letter-spacing: 0.08px;
//   color: #b8b8b8;
//   text-align: center;
//   @media (min-width: 768px) {
//     text-align: left;
//   }
// `;

export const StyledDes = styled(Link)`
  font-size: 14px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.5;
  letter-spacing: 0.08px;
  color: ${Color.white};
  text-align: center;
  cursor: pointer;
  display: block;
  &:hover {
    text-decoration: none;
  }

  &.mt {
      margin-right: 20px;
    }
  & img {
    width: 30px;
    margin-right: 10px;
  }
  @media (min-width: 768px) {
    text-align: left;
    &.mt {
      margin-bottom: 10px;
      margin-right: 0;
    }
  }
`;

export const ChatZalo = styled.div`
  position: fixed;
  bottom: -70px;
  left: -70px;
  width: 170px;
  height: 170px;
  z-index: 2;
  & .phonering-alo-ph-circle {
    width: 160px;
    height: 160px;
    top: -19px;
    left: 16px;
    position: absolute;
    background-color: transparent;
    border-radius: 100% !important;
    border: 2px solid rgba(30, 30, 30, 0.4);
    border: 2px solid #bfebfc 9;
    opacity: 0.1;
    animation: phonering-alo-circle-anim 1.2s infinite ease-in-out;
    transition: all 0.5s;
    transform-origin: 50% 50%;
    border-color: #bfebfc;
    opacity: 0.5;
  }

  & .phonering-alo-ph-circle-fill {
    width: 100px;
    height: 100px;
    top: 16px;
    left: 46px;
    position: absolute;
    background-color: #000;
    border-radius: 100% !important;
    border: 2px solid transparent;
    animation: phonering-alo-circle-fill-anim 2.3s infinite ease-in-out;
    transition: all 0.5s;
    transform-origin: 50% 50%;
    background-color: rgba(0, 175, 242, 0.5);
  }

  & .phonering-alo-ph-img-circle {
    width: 40px;
    height: 40px;
    top: 45px;
    left: 75px;
    position: absolute;
    background: rgba(30, 30, 30, 0.1) url(../phone-ring.png) no-repeat center
      center;
    border-radius: 100% !important;
    border: 2px solid transparent;
    animation: phonering-alo-circle-img-anim 1s infinite ease-in-out;
    transform-origin: 50% 50%;
  }

  @keyframes phonering-alo-circle-anim {
    0% {
      transform: rotate(0) scale(0.5) skew(1deg);
      opacity: 0.1;
    }

    30% {
      transform: rotate(0) scale(0.7) skew(1deg);
      opacity: 0.5;
    }

    100% {
      transform: rotate(0) scale(1) skew(1deg);
      opacity: 0.1;
    }
  }

  @keyframes phonering-alo-circle-fill-anim {
    0% {
      transform: rotate(0) scale(0.7) skew(1deg);
      opacity: 0.2;
    }

    50% {
      transform: rotate(0) scale(1) skew(1deg);
      opacity: 0.2;
    }

    100% {
      transform: rotate(0) scale(0.7) skew(1deg);
      opacity: 0.2;
    }
  }

  @keyframes phonering-alo-circle-img-anim {
    0% {
      transform: rotate(0) scale(1) skew(1deg);
    }

    10% {
      transform: rotate(-25deg) scale(1) skew(1deg);
    }

    20% {
      transform: rotate(25deg) scale(1) skew(1deg);
    }

    30% {
      transform: rotate(-25deg) scale(1) skew(1deg);
    }

    40% {
      transform: rotate(25deg) scale(1) skew(1deg);
    }

    50% {
      transform: rotate(0) scale(1) skew(1deg);
    }

    100% {
      transform: rotate(0) scale(1) skew(1deg);
    }
  }
`;
