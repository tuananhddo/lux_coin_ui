import React from 'react';
import { Containers, Row, Col } from "style/DefaultStyled";
import menu from 'config/constants/menu';

import * as S from './style';
// import LOGO_2 from 'assets/img/constant';
// import TWITTER from 'assets/img/constant';
import {IMG} from "../../assets/img/constant";

interface Props {
  leftElement?: any,
  centerElement?: any,
  rightElement?: any,
  styleCustom?: any,
  color?: any
}

// const useStyles = makeStyles((theme) => ({
//   info: {
//     marginTop: 30,
//   },
//   list: {
//     display: 'flex',
//     flexDirection: 'column',
//     marginBottom: 20,
//     flexWrap: "wrap",
//     "&:last-child": {
//       flexDirection: 'row',
//       justifyContent: 'center'
//     },
//     "@media (min-width: 768px)": {
//       marginBottom: 0,
//       "&:last-child": {
//         flexDirection: 'column',
//         justifyContent: 'flex-start'
//       },
//     }
//   },
//
// }));

function Footer(props: Props): React.ReactElement {
  // const classes = useStyles();
  const classes = {
    info: "",
    list: ""
  }
  return (
    <S.Wrapper>
      <Containers>
        <Row>
          <S.StyledColLogo md={6} >
            <S.StyledLogo src={IMG.logo2} alt='logo2' />
          </S.StyledColLogo>
          <Col md={6}>
            <Row className={classes.info}>
              <Col md={6}>
                <S.StyledTitle>
                  Product & Service
                </S.StyledTitle>

                {
                  menu.map((item: any, index:number) => {
                    return <S.StyledDes key={index}
                      href={item.link ? `${item.link}` : '#'}
                      target={item?.newTab && "_blank"}
                      download={item?.download}
                    >
                      {item.label}
                    </S.StyledDes>
                  })
                }

              </Col>

              <Col md={6} className={classes.list}>
              <S.StyledTitle>
                  Follow Us
                </S.StyledTitle>
                <S.StyledDes
                  href={'https://t.me/carswapcommunity1221'}
                  target="_blank"
                  className='mt'
                >
                  <img src={IMG.telegram} />
                  Telegram
                </S.StyledDes>
                <S.StyledDes
                  href={'https://twitter.com/CarswapFinance?t=kk2KMTX-KKiEqI7Xo1zyhA&s=09'}
                  target="_blank"
                >
                  <img src={IMG.twitter} />
                  Twiter
                </S.StyledDes>
              </Col>
              {/* <Col md={4}>
                <S.StyledTitle>
                  Support
                </S.StyledTitle>
                <S.StyledDes>
                  FAQs
                </S.StyledDes>
                <S.StyledDes>
                  Support
                </S.StyledDes>
              </Col> */}
            </Row>

          </Col>
        </Row>
      </Containers>
      {/* <S.ChatZalo>
        <div className="phonering-alo-ph-circle"></div>
        <div className="phonering-alo-ph-circle-fill"></div>
        <a href="http://zalo.me/691594366836515685">
          <div className="phonering-alo-ph-img-circle"></div>
        </a>
      </S.ChatZalo> */}
    </S.Wrapper>
  )
}

// Header.propTypes = {
//   leftElement: PropTypes.any,//left elemnt
//   centerElement: PropTypes.any,//center element
//   rightElement: PropTypes.any,//right element
//   styleCustom: PropTypes.any,//styleCustom
//   loading: PropTypes.bool,//loading check
// };

export default Footer;