// import React from 'react';
// import * as S from './style';
// import {
//     Mobile,
//     Desktop,
//     Tablet
// } from "components/Responsive";
// //Container UI
// import { makeStyles, } from '@material-ui/core';
// import { Row, Title, } from "style/DefaultStyled";
// import roadfmap from "assets/img/roadfmap.png";
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
//         "@media (max-width: 767px)": {
//             // flexDirection: 'column-reverse'
//             "&>div": {
//                 textAlign: 'center',
//             },
//         },
//     }
// }));
//
//
// function Roadmap(): React.ReactElement {
//     const classes = useStyles();
//
//     return (<S.Wrapper id='Roadmap'>
//         <S.StyleContainer >
//             <Row justifyContent='center' >
//                 <Title className={classes.title}>
//                     Roadmap
//                 </Title>
//             </Row>
//             <S.StyledRow justifyContent='space-around' >
//                 <S.RoadmapItem className='left'>
//                     <S.RoadmapTitleItem>
//                         March 2022
//                     </S.RoadmapTitleItem>
//                     <S.RoadmapInfoItem>
//                         - Official website for smart contract launch and deployment<br />
//                         - Social media sites launched<br />
//                         - Development of the NFT platform.
//                     </S.RoadmapInfoItem>
//                 </S.RoadmapItem>
//                 <S.RoadmapItem className='center'>
//                     <S.RoadmapTitleItem>
//                         April 2022
//
//                     </S.RoadmapTitleItem>
//                     <S.RoadmapInfoItem>
//                         Start pre-sale and airdrop<br />
//                         - Register to confirm information on BSC<br />
//                         - Listed on Dapprada
//                     </S.RoadmapInfoItem>
//                 </S.RoadmapItem>
//                 <S.RoadmapItem className='right'>
//                     <S.RoadmapTitleItem>
//                         May 2022
//
//                     </S.RoadmapTitleItem>
//                     <S.RoadmapInfoItem>
//                         - Building the NFT platform<br />
//                         - Building Land Game, Track Builder<br />
//                         - High-quality artists and projects already settled in the platform<br />
//                         - Start large-scale marketing online.<br />
//
//                     </S.RoadmapInfoItem>
//                 </S.RoadmapItem>
//             </S.StyledRow>
//
//             <S.RoadmapImg src={roadfmap} alt='roadfmap' />
//             <S.StyledRow justifyContent='space-around' >
//                 <S.RoadmapItem className='leftRow'>
//                     <S.RoadmapTitleItem>
//                         June 2022
//                     </S.RoadmapTitleItem>
//                     <S.RoadmapInfoItem>
//                         - Listed on Pancakeswap May 30, 2022<br />
//                         - log list:
//                         Coinmarketcap, Coingecko, Mex, BscScan, etc.  .<br />
//                         - Arena (ranked PvP)
//
//                     </S.RoadmapInfoItem>
//                 </S.RoadmapItem>
//                 <S.RoadmapItem className='centerRow'>
//                     <S.RoadmapTitleItem>
//                         July 2022
//
//                     </S.RoadmapTitleItem>
//                     <S.RoadmapInfoItem>
//                         - Launch of swap platform, staking program and liquidity pool<br />
//                         - Breeding<br />
//                         - Gas stations & garages<br />
//                         - Tournament game<br />
//
//                     </S.RoadmapInfoItem>
//                 </S.RoadmapItem>
//                 <S.RoadmapItem className='rightRow'>
//                     <S.RoadmapTitleItem>
//                         August 2022
//                     </S.RoadmapTitleItem>
//                     <S.RoadmapInfoItem>
//                         - Deposit<br />
//                         - Administration<br />
//                         - Starting the Metaverse project<br />
//                         - More functions, more activities in planning<br />
//                         September 2022
//                         - Car Crafting Toolkit<br />
//                         - Virtual Reality (VR)<br />
//                         - Launch NFT Marketplace<br />
//                         - Ecosystem development
//                     </S.RoadmapInfoItem>
//                 </S.RoadmapItem>
//                 <Mobile>
//                     <S.RoadmapItem className='leftRow'>
//                         <S.RoadmapTitleItem>
//                             September 2022
//                         </S.RoadmapTitleItem>
//                         <S.RoadmapInfoItem>
//                             - Car Crafting Toolkit<br />
//                             - Virtual Reality (VR)<br />
//                             - Launch NFT Marketplace<br />
//                             - Ecosystem development
//                         </S.RoadmapInfoItem>
//                     </S.RoadmapItem>
//                 </Mobile>
//                 <Tablet>
//                     <S.RoadmapItem className='leftRow'>
//                         <S.RoadmapTitleItem>
//                             September 2022
//                         </S.RoadmapTitleItem>
//                         <S.RoadmapInfoItem>
//                             - Car Crafting Toolkit<br />
//                             - Virtual Reality (VR)<br />
//                             - Launch NFT Marketplace<br />
//                             - Ecosystem development
//                         </S.RoadmapInfoItem>
//                     </S.RoadmapItem>
//                 </Tablet>
//
//             </S.StyledRow >
//             <Desktop>
//                 <S.StyledRow className='mt' justifyContent="center">
//                     <S.RoadmapItem className='leftRow'>
//                         <S.RoadmapTitleItem>
//                             September 2022
//                         </S.RoadmapTitleItem>
//                         <S.RoadmapInfoItem>
//                             - Car Crafting Toolkit<br />
//                             - Virtual Reality (VR)<br />
//                             - Launch NFT Marketplace<br />
//                             - Ecosystem development
//                         </S.RoadmapInfoItem>
//                     </S.RoadmapItem>
//                 </S.StyledRow>
//             </Desktop>
//
//         </S.StyleContainer>
//
//     </S.Wrapper>)
// }
//
// export default Roadmap;
