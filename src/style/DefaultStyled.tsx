import styled from 'styled-components'
import Color from "style/color";
// import light from "assets/img/light.png";
import {IMG} from "../assets/img/constant";
import {Button, Container} from "@mui/material";


export const Containers = styled(Container)`
  max-width: 1140px;
  /* padding-left: 0;
  padding-right: 0; */
  @media (min-width: 1024px) {
    /* padding-left: 0;
    padding-right: 0; */
  }
`;

export const Row = styled.div<{ alignItems?: string, justifyContent?: string }>`
  display: flex;
  align-items: ${({ alignItems }) => alignItems ?? 'stretch'};
  justify-content: ${({ justifyContent }) => justifyContent ?? 'flex-start'};
  flex-wrap: wrap;
  width: 100%;
  position: relative;

`;

export const Col = styled.div<{ numberCol?: number, textAlign?: string, md?: number }>`
  flex: ${({ numberCol }) => numberCol ? `0 0 ${numberCol / 12 * 100}%` : '1 1 100%'};
  max-width: ${({ numberCol }) => numberCol ? `${numberCol / 12 * 100}%` : '100%'};
  text-align: ${({ textAlign }) => textAlign ? textAlign : 'left'};
  
  @media (min-width: 768px) {
    flex: ${({ md }) => md && `0 0 ${md / 12 * 100}%`};
    max-width: ${({ md }) => md && `${md / 12 * 100}%`};
  }

  @media (min-width: 1024px) {
  }

`;

export const Title = styled.h1<{noLight?: boolean}>`
  font-family: OswaldMedium;
  font-size: 28px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  text-align: left;
  color: ${Color.titleColor};
  text-transform: uppercase;
  position: relative;
  span {
    color: ${Color.white};
  };
  &:before{
    content: '';
    height: ${({ noLight }) => noLight !== true && '18px' };
    width: 508px;
    max-width: 100vw;
    position: absolute;
    background: url(${IMG.light});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    transform: translate(-50%, 0);
    left: 50%;
    top: -10px;
  }
  &:after{
    content: '';
    height: ${({ noLight }) => noLight !== true && '18px' };
    width: 508px;
    max-width: 100vw;
    position: absolute;
    background: url(${IMG.light});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    transform: translate(-50%, 0);
    left: 50%;
    bottom: -15px;
  }
  @media (min-width: 768px) {
    font-size: 34px;
  }
  @media (min-width: 1024px) {
    font-size: 50px;
  }
`;

export const Des = styled.h3`
  font-size: 16px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: 0.1px;
  color: ${Color.primary};
  span {
    color: ${Color.white};
  }
  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 1024px) {
    font-size: 20px;
  }
`;

export const StyledButton = styled(Button)`
  
`;