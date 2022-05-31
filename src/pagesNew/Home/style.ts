import {Link, Paper} from "@mui/material";
import styled from 'styled-components'


export const Wrapper = styled.div`
  width: 100%;
  max-width: 100%;
`;

export const Head = styled.div`
  width: 100%;
  background-image: url("http://1.bp.blogspot.com/-xKYdDoOdGNY/WLwahZXVeYI/AAAAAAAAuNw/w3Qr5iFNJJ0io0v-6wrP5aKHabMEm4CqACK4B/s1600/flat_mountains_landscape_by_ggiuliafilippini-d8zdbco.jpg");
  background-size: cover;
  height: 220px;
  text-align: center;
  font-size: larger;
  font-weight: bold;
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
  color: #1b2c38;
  .title{
   padding: 30px 10px;
  }
  .list-item {
    display: none;
  }
  &:hover {
      color: #27c7cd;
    .list-item {
      display: block;
    }
  }

`;
export const ListItem = styled(Paper)`
  position: absolute;
  top: 81px;
  right: 0;
`;
