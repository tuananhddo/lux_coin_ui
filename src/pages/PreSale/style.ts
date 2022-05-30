import styled from "styled-components";
import {IMG} from "../../assets/img/constant";
import { Containers } from "style/DefaultStyled";
import Color from "style/color";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 100%;
  margin-top: 60px;
  position: relative;
  @media (min-width: 1024px) {
    margin-top: 165px;
  }
`;

export const StyledCoin = styled.img`
  position: absolute;
  width: 250px;
  bottom: -150px;
  left: 50%;
  transform: translateX(-50%);
  /* top: -95px; */
  /* display: none; */
  @media (min-width: 768px) {
    width: 250px;
    bottom: -130px;

    /* left: -50px; */
    /* top: -95px; */
  }
  @media (min-width: 1024px) {
    width: 309px;
    /* height: 290px; */
    /* left: 130px; */
    bottom: -185px;
    display: block;
  }
`;

export const StyleContainer = styled(Containers)`
  background-image: url(${IMG.preSale});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  /* max-width: 1150px; */
  /* padding: 40px 0; */
  padding-top: 40px;
  padding-bottom: 40px;

  @media (min-width: 768px) {
    /* padding: 70px 0; */
    padding-top: 70px;
    padding-bottom: 70px;
  }
  @media (min-width: 1024px) {
  }
`;

export const StyleTime = styled.div`
  max-width: 650px;
  margin: auto;
  padding: 20px 0;
  border-radius: 5px;
  backdrop-filter: blur(30px);
  box-shadow: 0 0 10px 0 ${Color.titleColor};
  border: solid 1px ${Color.titleColor};
  background-color: rgb(255 255 255 / 20%);
  */ @media (min-width: 768px) {
    /* padding: 70px 0; */
  }
  @media (min-width: 1024px) {
  }
`;

export const StyleItem = styled.div<{ lastItem?: boolean }>`
  font-family: OswaldRegular;
  font-size: 60px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: 0.4px;
  text-align: center;
  color: ${Color.white};
  position: relative;

  &:after {
    content: ":";
    display: ${({ lastItem }) => lastItem && "none"};
    position: absolute;
    right: 0;
    top: 0;
  }

  @media (max-width: 767px) {
    font-size: 40px;
  }

  /* width: 90%;
  max-width: 230px;
  margin: auto;
  padding: 20px 0;
  border-radius: 5px;
  backdrop-filter: blur(30px);
  box-shadow: 0 0 10px 0 ${Color.titleColor};
  border: solid 1px ${Color.titleColor};
  background-color: rgb(255 255 255 / 20%); */

  @media (min-width: 1024px) {
    /* padding: 68px 0; */
  }
`;

export const TimeNumber = styled.div`
  /* font-family: OswaldRegular;
  font-size: 60px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: 0.4px;
  text-align: center;
  color: ${Color.white}; */
  @media (max-width: 767px) {
    font-size: 40px;
  }
`;

export const TimeDes = styled.div`
  font-size: 20px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.1px;
  text-align: center;
  color: ${Color.black};
  text-transform: uppercase;
  font-family: OswaldLight;
  @media (max-width: 767px) {
    font-size: 18px;
  }
`;
