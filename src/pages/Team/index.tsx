// import React from 'react';
// import * as S from './style';
//
// //Container UI
// import { makeStyles } from '@material-ui/core';
// import { MailOutline, Twitter } from '@material-ui/icons';
// import { Row, Title, Col } from "style/DefaultStyled";
// import avatar1 from "assets/img/avatar/1.png";
// import avatar2 from "assets/img/avatar/2.png";
// import avatar3 from "assets/img/avatar/3.png";
// import team1 from "assets/img/team1.jpg";
// import team2 from "assets/img/team2.jpg";
// import team3 from "assets/img/team3.jpg";
// import Telegram from 'assets/img/Telegram.png';
//
//
// const useStyles = makeStyles((theme) => ({
//     title: {
//         // marginBottom: '120px',
//     },
//     des: {
//         textAlign: 'center',
//         // marginTop: '30px',
//         marginBottom: '20px',
//         "@media (min-width: 768px)": {
//             // marginTop: '50px',
//             // marginBottom: '40px',
//         },
//     },
//     info: {
//         "@media (max-width: 767px)": {
//             flexDirection: 'column-reverse'
//         },
//     },
//     total: {
//         marginTop: 112,
//         "@media (max-width: 767px)": {
//             // flexDirection: 'column-reverse'
//             "&>div": {
//                 textAlign: 'center',
//             },
//         },
//     }
// }));
//
// const dataTeam = [
//     {
//         name: 'Marcus',
//         title: 'Project CEO',
//         icon: avatar1,
//         linkTele: 'https://t.me/carswapcommunity1221',
//         link: 'https://twitter.com/CarswapFinance',
//     },
//     {
//         name: 'Laverinenko ',
//         title: 'Project CFO',
//         icon: avatar2,
//         linkTele: 'https://t.me/carswapcommunity1221',
//         link: 'https://twitter.com/CarswapFinance',
//     },
//     {
//         name: 'Karina',
//         title: 'Project CTO',
//         icon: avatar3,
//         linkTele: 'https://t.me/carswapcommunity1221',
//         link: 'https://twitter.com/CarswapFinance',
//     },
//     {
//         name: 'Andreas Akaras',
//         title: 'Advisor',
//         icon: team1,
//         link: 'https://twitter.com/CarswapFinance',
//         linkTele: 'https://t.me/carswapcommunity1221',
//         bgr: true,
//     },
//     {
//         name: 'Lisel Hintz',
//         title: 'Project Designer',
//         icon: team2,
//         link: 'https://twitter.com/CarswapFinance',
//         linkTele: 'https://t.me/carswapcommunity1221',
//         bgr: true,
//     },
//     {
//         name: 'Gonul Tol',
//         title: 'Project Marketing Director',
//         icon: team3,
//         link: 'https://twitter.com/CarswapFinance',
//         linkTele: 'https://t.me/carswapcommunity1221',
//         bgr: true,
//     },
// ]
//
// function Team(): React.ReactElement {
//     const classes = useStyles();
//
//     return (<S.Wrapper id='Team'>
//         <S.StyleContainer >
//             <Row justifyContent='center' >
//                 <Title className={classes.title}>
//                     TEAM
//                 </Title>
//             </Row>
//             <Row justifyContent='space-between' >
//                 {
//                     dataTeam && dataTeam.map((item: any, index: number) => {
//                         return <Col md={4} key={index}>
//                             <S.Item>
//                                 {
//                                     item.bgr ? <S.StyledBgr style={{ backgroundImage: `url(${item?.icon})` }}
//                                     /> :
//                                         <S.Avatar src={item.icon} alt='avatar' />
//
//                                 }
//                                 <S.Name>
//                                     {item.name}
//                                 </S.Name>
//                                 <S.StyledDes>
//                                     {item.title}
//
//                                 </S.StyledDes>
//                                 <S.StyledListBtn>
//                                     <S.StyledBtn href={item?.link} target="_blank">
//                                         <Twitter />
//                                     </S.StyledBtn>
//                                     <S.StyledBtn  href={item?.linkTele} target="_blank">
//                                         <img src={Telegram} />
//                                     </S.StyledBtn>
//                                 </S.StyledListBtn>
//                             </S.Item>
//                         </Col>
//                     })
//                 }
//
//             </Row>
//         </S.StyleContainer>
//
//     </S.Wrapper>)
// }
//
// export default Team;
