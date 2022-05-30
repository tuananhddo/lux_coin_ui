// /* eslint-disable react/jsx-no-target-blank */
// import React, { useState } from 'react';
// import * as S from './style';
// import { CopyToClipboard } from 'react-copy-to-clipboard';
//
// //Container UI
// import { makeStyles } from '@material-ui/core';
// import { FileCopy } from '@material-ui/icons';
// import { Row, Col, Title, Des } from "style/DefaultStyled";
// import { StyledButton } from "components";
//
// import tokenomics from "assets/img/tokenomics.png";
// import ArtBoard from "assets/img/ArtBoard.png";
// import coin2 from "assets/img/coin2.png";
//
//
// const useStyles = makeStyles((theme) => ({
//     title: {
//         marginBottom: '20px',
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
//
//         "@media (max-width: 767px)": {
//             // flexDirection: 'column-reverse'
//             "&>div": {
//                 textAlign: 'center',
//             },
//         },
//     }
// }));
//
// const dataTotal = [
//     {
//         title: 'PreSale',
//         amount: '50',
//     },
//     {
//         title: 'Team Developer',
//         amount: '5',
//     },
//     {
//         title: 'Airdrop',
//         amount: '10',
//     },
//     {
//         title: 'Marketing',
//         amount: '5',
//     },
//     {
//         title: 'List',
//         amount: '30',
//     },
// ]
// function Tokenomics(): React.ReactElement {
//     const classes = useStyles();
//     const [copied, setIsCopy] = useState(false);
//     const address = '0x4fa2e5871Dd9622c515f66A4b3230B73236E0D8d';
//
//     return (<S.Wrapper id='Tokenomics'>
//         <S.StyleContainer >
//             <Row justifyContent='center' >
//                 <Title className={classes.title}>
//                     Tokenomics
//                 </Title>
//                 <S.StyledCoin src={coin2} alt='coin' />
//
//             </Row>
//
//             <Row justifyContent='center' >
//                 <Col md={6}>
//
//                     <Des className={classes.des} >
//                         Tokenomics is an important factor that affirms the quality of the CARSWAP Project and helps develop an ecosystem with a sustainable foundation around our CARSWAP project.
//                     </Des>
//                 </Col>
//
//             </Row>
//
//             <Row className={classes.info} >
//                 <Col md={6}>
//                     <S.StyleTitle>
//                         Key Metrics
//                     </S.StyleTitle>
//                     <S.StyledInfo>
//                         <S.StyledItemInfo>
//                             Token symbol:  <span>CARDEX (CDX)</span>
//                         </S.StyledItemInfo>
//                         <S.StyledItemInfo>
//                             Total Supply: <span>110,000,000,000</span>
//                         </S.StyledItemInfo>
//                         <S.StyledItemInfo>
//                             Blockchain: <span>Binance Smart Chain</span>
//                         </S.StyledItemInfo>
//                         <S.StyledItemInfo>
//                             Auditor: <span>CertiK</span>
//                         </S.StyledItemInfo>
//                         <S.StyledItemInfo>
//                             Contract: <a
//                                 href='https://bscscan.com/address/0x4fa2e5871Dd9622c515f66A4b3230B73236E0D8d'
//                                 className='address'
//                                 // eslint-disable-next-line react/jsx-no-target-blank
//                                 target="_blank"
//                             >
//                                 0x4fa2e5871Dd9622c515f66A4b3230B73236E0D8d</a>
//                             <CopyToClipboard
//                                 text={address}
//                                 onCopy={() => setIsCopy(true)}
//                             >
//
//                                 <FileCopy className={copied ? 'active' : ''}
//                                 />
//                             </CopyToClipboard>
//                         </S.StyledItemInfo>
//                         <S.StyledItemInfo>
//                             Token type: <span>Utility, Governance</span>
//                         </S.StyledItemInfo>
//                         <S.StyledItemInfo className='mt'>
//
//                         </S.StyledItemInfo>
//                     </S.StyledInfo>
//                 </Col>
//                 <Col md={6}>
//                     <S.StyledRight src={tokenomics} alt='tokenomics' />
//                 </Col>
//             </Row>
//             <Row>
//                 <Col textAlign='center'>
//                     <S.StyledIframe
//                         src="https://www.youtube.com/embed/cZBwPCfg3Ew" title="YouTube video player"
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                         allowFullScreen
//                         frameBorder="0"
//                     >
//                     </S.StyledIframe>
//                 </Col>
//             </Row>
//             <Row className={classes.total}
//                 alignItems='center'
//             >
//                 <Col md={6}>
//                     <S.StyledRight src={ArtBoard} alt='tokenomics' />
//                 </Col>
//                 <Col md={6}>
//                     <S.StyleTitle>
//                         Total amount of 110,000,000,000
//                     </S.StyleTitle>
//                     <S.StyledTotal>
//                         {
//                             dataTotal && dataTotal.map((item, index) => {
//                                 return <S.StyledItemTotal key={index}>
//                                     {item.title}: {item.amount}%
//                                 </S.StyledItemTotal>
//                             })
//                         }
//
//                     </S.StyledTotal>
//                 </Col>
//
//             </Row>
//         </S.StyleContainer>
//
//     </S.Wrapper>)
// }
//
// export default Tokenomics;
