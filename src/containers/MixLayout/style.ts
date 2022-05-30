import styled from "styled-components";
import Color from "style/color";
import {IMG} from "assets/img/constant";
import {Link, Paper} from "@mui/material";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 100%;
  background: #090811;
  background-image: url(${IMG.bg});
  background-size: cover;
`;

export const Head = styled.div`
  width: 100%;
  /* background-image: url("http://1.bp.blogspot.com/-xKYdDoOdGNY/WLwahZXVeYI/AAAAAAAAuNw/w3Qr5iFNJJ0io0v-6wrP5aKHabMEm4CqACK4B/s1600/flat_mountains_landscape_by_ggiuliafilippini-d8zdbco.jpg");
  background-size: cover;
  height: 220px; */
  text-align: right;
  /* font-size: larger;
  font-weight: bold; */
`;

export const Logo = styled.img`
  max-width: 200px;
`;

export const WrapperSideBar = styled.div`
  width: 100%;
  display: flex;
`;

export const LinkSideBar = styled(Link)`
  position: relative;
  color: ${Color.secondary};
  cursor: pointer;
  .title {
    display: flex;
    line-height: 1.45;
    letter-spacing: 0.11px;
    padding: 20px 10px;
    font-size: 18px;
    @media (min-width: 1024px) {
      padding: 34px 30px;
      font-size: 22px;
    }
  }
  .list-item {
    display: none;
  }
  &:hover {
    color: ${Color.titleColor};
    .list-item {
      display: block;
    }
  }
`;
export const ListItem = styled(Paper)`
  position: absolute;
  top: 81px;
  /* right: 0; */
  z-index: 99;
`;

export const DrawersHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
`;

export const StyledApp = styled.a`
  width: 70px;
  height: 40px;
  border-radius: 10px;
  background-image: linear-gradient(to right, #f8b900, #03ffff);
  border: none;
  /* padding: 9px 29px; */
  font-family: OswaldMedium;
  font-size: 13px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 40px;
  letter-spacing: 0.08px;
  text-align: center;
  color: #000;
  text-decoration: unset;
  text-transform: uppercase;
  cursor: pointer;
  @media (min-width: 768px) {
    width: 100px;
    height: 40px;
    font-size: 15px;
  }
`;
