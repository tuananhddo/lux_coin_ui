// import React, { useCallback, useState } from 'react';
// import * as S from './style';
// import { CopyToClipboard } from 'react-copy-to-clipboard';
// import useClaim from 'hooks/useClaim'
// import useBuy from 'hooks/useBuy'
// import useAddToken from 'hooks/useAddToken'
//
//
// import {
//     Mobile,
//     Default
// } from "components/Responsive";
// //Container UI
// import { makeStyles, Slider, withStyles } from '@material-ui/core';
// import { Row, Col, Containers } from "style/DefaultStyled";
// import { StyledButton } from "components";
// import { ConnectorNames } from "utils/connectorNames";
// import { connectorLocalStorageKey } from "hooks/useEagerConnect";
// import Color from "style/color";
//
//
// const useStyles = makeStyles((theme) => ({
//     container: {
//         "@media (min-width: 1024px)": {
//             paddingLeft: 0,
//             paddingRight: 0,
//         },
//     },
//     header: {
//         display: 'flex',
//         "@media (min-width: 768px)": {
//             padding: '0',
//         },
//         "@media (min-width: 1024px)": {
//             padding: '0',
//         },
//     },
//     title: {
//         marginBottom: '50px'
//     },
//     item: {
//         // backdropFilter: 'blur(30px)',
//         // padding: '0 16px',
//         minHeight: 360,
//         marginBottom: 20,
//         "@media (min-width: 768px)": {
//             padding: '10px 2px 35px 0px',
//             height: '100%',
//             "&:last-child": {
//                 paddingLeft: '2px',
//                 paddingRight: '0',
//             },
//         },
//         "@media (min-width: 1024px)": {
//             padding: '10px 20px 35px',
//             "&:last-child": {
//                 paddingLeft: '20px',
//                 paddingRight: '20px',
//             },
//         },
//     },
//     slider: {
//         // marginTop: 12,
//     }
// }));
//
//
// const PrettoSlider = withStyles({
//     root: {
//         //   color: '#7777b3',
//         color: `${Color.titleColor}`,
//         height: 16,
//     },
//     thumb: {
//         height: 28,
//         width: 28,
//         backgroundColor: '#fff',
//         border: `4px solid ${Color.titleColor}`,
//         marginTop: -6,
//         marginLeft: -10,
//         '&:focus, &:hover, &$active': {
//             boxShadow: 'inherit',
//         },
//     },
//     active: {},
//     valueLabel: {
//         left: 'calc(-50% + 4px)',
//     },
//     track: {
//         height: 16,
//         borderRadius: 30,
//         color: '#7777b3',
//     },
//     rail: {
//         height: 16,
//         borderRadius: 30,
//         color: '#7777b3',
//
//     },
// })(Slider);
//
// function Order({ account, addrInvite, login }: any): React.ReactElement {
//     const classes = useStyles();
//     const [value, setValue] = useState('0.01');
//     const [referral, setReferral] = useState('');
//     const [showReferrall, setShowReferrall] = useState(true);
//     const [copied, setIsCopy] = useState(false);
//
//     const handledChange = (e: any) => {
//         // eslint-disable-next-line no-useless-escape
//         const convertValue = e.target.value.replace(/[^0-9\.]/g, "")
//         setValue(convertValue)
//     }
//
//
//     const handledReferral = (e: any) => {
//         // eslint-disable-next-line no-useless-escape
//         const convertValue = e.target.value
//         setReferral(convertValue)
//         if (!convertValue) {
//             setShowReferrall(true)
//         }
//     }
//
//     const handleGetReferral = () => {
//         const value = `https://carswap.finance/?ref=${referral}`
//         setReferral(value)
//         setShowReferrall(false)
//     }
//
//     const handledChangeSlider = (e: any, value: any) => {
//         setValue(value.toString())
//     }
//
//     const { onClaim } = useClaim(account, addrInvite)
//     const handleClaim = useCallback(async () => {
//         try {
//             if (!account) {
//                 login(ConnectorNames.Injected);
//                 window.localStorage.setItem(connectorLocalStorageKey, ConnectorNames.Injected);
//             }
//             await onClaim()
//         } catch (e) {
//             console.error(e)
//         }
//     }, [account, login, onClaim])
//
//
//     const { onBuy } = useBuy(account, addrInvite)
//
//
//     const { onAddToken } = useAddToken()
//
//     const handleAddToken = useCallback(async () => {
//         try {
//
//             await onAddToken()
//         } catch (e) {
//             console.error(e)
//         }
//     }, [onAddToken])
//
//     return (
//         <S.Wrapper>
//             <Containers className={classes.container}>
//                 <Row >
//                     <Col className={classes.header} textAlign='left' numberCol={6}>
//                         <S.StyleTitle>
//                             pre-sale
//                         </S.StyleTitle>
//
//                     </Col>
//                     <Default>
//                         <Col className={classes.header} textAlign='left' numberCol={6} >
//                             <S.StyleTitle>
//                                 Referral Rewards
//                             </S.StyleTitle>
//                         </Col>
//                     </Default>
//
//                 </Row>
//             </Containers>
//             <S.StyleContainer >
//                 <Row  >
//                     <Col textAlign='left' className={classes.item} md={6} >
//                         <S.StyleItem>
//                             <Row justifyContent='space-between' >
//                                 <S.StyledTitleItem>
//                                     BNB Order
//                                 </S.StyledTitleItem>
//                                 <S.StyleNumberOrder onChange={handledChange} value={value} />
//                             </Row>
//
//                             <Row className={classes.slider}>
//                                 <S.StyledTitleSlider >
//                                     BNB. 0.01 - BNB. 10
//                                 </S.StyledTitleSlider>
//                                 <PrettoSlider
//                                     valueLabelDisplay="auto"
//                                     aria-label="pretto slider"
//                                     defaultValue={0.01}
//                                     value={Number(value)}
//                                     min={0.01}
//                                     step={0.01}
//                                     max={10}
//                                     onChange={handledChangeSlider}
//
//                                 />
//                             </Row>
//
//                             <S.StyledDesItem >
//                                 {/* Price listing 0.00000002$ */}
//                             </S.StyledDesItem>
//                             <S.StyledListButton>
//                                 <StyledButton
//                                     onClick={async () => {
//                                         if (!account) {
//                                             login(ConnectorNames.Injected);
//                                             window.localStorage.setItem(connectorLocalStorageKey, ConnectorNames.Injected);
//                                         }
//                                         await onBuy(value)
//                                     }}
//                                 >buy token</StyledButton>
//                                 <StyledButton
//                                     onClick={handleClaim}
//
//                                 >claim now</StyledButton>
//                                 <StyledButton onClick={handleAddToken}>add wallet</StyledButton>
//                             </S.StyledListButton>
//
//                             <S.StyledFooter >
//                                 0.01 BNB = 80.000 CDX<br />
//                                 0.1 BNB = 800.000 CDX<br />
//                                 1 BNB = 8.000.000 CDX<br />
//                                 Claim 200.000 CDX<br />
//                             </S.StyledFooter>
//                         </S.StyleItem>
//
//                     </Col>
//
//                     <Mobile>
//                         <Col className={classes.header} textAlign='left' numberCol={12}  >
//                             <S.StyleTitle>
//                                 Referral Rewards
//                             </S.StyleTitle>
//                         </Col>
//                     </Mobile>
//                     <Col textAlign='left' className={classes.item} md={6} >
//                         <S.StyleItem className='last'>
//                             <Row >
//                                 {/* <S.StyledAddress> */}
//                                 <S.StyledAddressInput onChange={handledReferral} value={referral} placeholder='Enter You BEP20 Address' />
//                                 <CopyToClipboard
//                                     text={referral}
//                                     onCopy={() => setIsCopy(true)}
//                                 >
//                                     <S.StyledCopyAddress>
//                                         {copied ? 'Copied' : 'Copy'}
//                                     </S.StyledCopyAddress>
//
//
//                                 </CopyToClipboard>
//
//                                 {/* </S.StyledAddress> */}
//                             </Row>
//                             <S.StyledGetReferral>
//                                 <StyledButton
//                                     disabled={!showReferrall}
//
//                                     onClick={handleGetReferral}>get referral link </StyledButton>
//                             </S.StyledGetReferral>
//
//                             <S.StyledFooter >
//                                 - Invite everyone to get 100% referral bonus for eachAirdrop and Presale.<br />
//                                 - Get 30% BNB & 70% CDX per referral.
//                             </S.StyledFooter>
//                         </S.StyleItem>
//
//                     </Col>
//                 </Row>
//
//             </S.StyleContainer>
//             <Row justifyContent='center'>
//                 <S.StyledDesItem >
//                     1CDX = 0.0000515$
//                 </S.StyledDesItem>
//             </Row>
//         </S.Wrapper>)
// }
//
// export default Order;
