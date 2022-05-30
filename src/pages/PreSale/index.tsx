import React, {useEffect, useState} from 'react';
import * as S from './style';
import Countdown, {zeroPad, calcTimeDelta, formatTimeDelta} from 'react-countdown';
//Container UI
import {Row, Col, Title, Des} from "style/DefaultStyled";
// import coin from 'assets/img/coin.png';
// import coinG from 'assets/img/coin.gif';
import {IMG} from '../../assets/img/constant';
import {useMediaQuery} from "react-responsive";

function PreSale(): React.ReactElement {
    const isMin768 = useMediaQuery({minWidth: 768})

    const titleCss = {
        marginBottom: isMin768 ? '50px' : '30px'
    }
    const desCss = {
        marginTop: isMin768 ? '50px' : '30px',
        marginBottom: isMin768 ? '40px' : '20px'
    }
    // const classes = useStyles();

    // const [time, setTime] = useState<any>({});
    // const [timeNow, setTimeNow] = useState(0);
    // const [valueTime, setValueTime] = useState(0);


    // const expired_date_coupon = '05-27-2022';
    // const valueTime =new Date(expired_date_coupon)
    // const valueTimeNow = Date.now()
    // const secondsToTime = (secs: number) => {
    //     const time = secs / 1000;
    //     let days = Math.floor(time / (60 * 60 * 24));
    //     let hours = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
    //     let minutes = Math.floor((time % (60 * 60)) / 60);
    //     let seconds = Math.floor(time % 60);

    //     let obj = {
    //         d: days,
    //         h: hours,
    //         m: minutes,
    //         s: seconds,
    //     };
    //     return obj;
    // };
    // console.log(`timeNow`, timeNow)
    // useEffect(() => {
    //     const expired_date = new Date(expired_date_coupon).getTime();
    //     const nowTime = new Date().getTime();
    //     const distance = expired_date - nowTime;
    //     if (distance > 0) {
    //         setTimeNow(distance);
    //     }
    // }, [expired_date_coupon]);
    // useEffect(() => {
    //     // exit early when we reach 0
    //     if (!timeNow) return;

    //     // save intervalId to clear the interval when the
    //     // component re-renders
    //     const intervalId = setInterval(() => {
    //         const result = secondsToTime(timeNow);
    //         setTimeNow(timeNow - 1000);
    //         setTime(result);
    //     }, 1000);

    //     // clear interval on re-render to avoid memory leaks
    //     return () => clearInterval(intervalId);
    // }, [timeNow]);
    const renderer = ({days, hours, minutes, seconds}) => (
        <Row>
            <Col numberCol={3}>
                <S.StyleItem>
                    <S.TimeNumber>
                        {zeroPad(days)}
                    </S.TimeNumber>
                    <S.TimeDes>
                        Days
                    </S.TimeDes>
                </S.StyleItem>
            </Col>
            <Col numberCol={3}>
                <S.StyleItem>
                    <S.TimeNumber>
                        {zeroPad(hours)}
                    </S.TimeNumber>
                    <S.TimeDes>
                        hours
                    </S.TimeDes>
                </S.StyleItem>
            </Col>
            <Col numberCol={3}>
                <S.StyleItem>
                    <S.TimeNumber>
                        {zeroPad(minutes)}

                    </S.TimeNumber>
                    <S.TimeDes>
                        minutes
                    </S.TimeDes>
                </S.StyleItem>
            </Col>
            <Col numberCol={3}>
                <S.StyleItem lastItem>
                    <S.TimeNumber>
                        {zeroPad(seconds)}
                    </S.TimeNumber>
                    <S.TimeDes>
                        seconds
                    </S.TimeDes>
                </S.StyleItem>
            </Col>
        </Row>

    );

    return (<S.Wrapper id='Pre-sale'>
        <S.StyledCoin src={IMG.coinGif} alt='coin'/>

        <S.StyleContainer>
            <Row justifyContent='center'>

                <Title styles={titleCss} noLight={true}>
                    PRE-SALE starting in
                </Title>
            </Row>
            <S.StyleTime>
                <Countdown
                    date={1655312400000}
                    renderer={renderer}

                />
                {/* <Col numberCol={3}>
                        <S.StyleItem>
                            <S.TimeNumber>
                                {time.d || 0}
                            </S.TimeNumber>
                            <S.TimeDes>
                                Days
                            </S.TimeDes>
                        </S.StyleItem>
                    </Col>
                    <Col numberCol={3}>
                        <S.StyleItem >
                            <S.TimeNumber>
                                {time.h || 0}
                            </S.TimeNumber>
                            <S.TimeDes>
                                hours
                            </S.TimeDes>
                        </S.StyleItem>
                    </Col>
                    <Col numberCol={3}>
                        <S.StyleItem >
                            <S.TimeNumber>
                                {time.m || 0}
                            </S.TimeNumber>
                            <S.TimeDes>
                                minutes
                            </S.TimeDes>
                        </S.StyleItem>
                    </Col>
                    <Col numberCol={3}>
                        <S.StyleItem lastItem>
                            <S.TimeNumber>
                                {time.s || 0}
                            </S.TimeNumber>
                            <S.TimeDes>
                                seconds
                            </S.TimeDes>
                        </S.StyleItem>
                    </Col> */}

            </S.StyleTime>
            {/* <Row >
                <Col numberCol={3}>
                    <S.StyleItem >
                        <S.TimeNumber>
                            {time.d || 0}
                        </S.TimeNumber>
                        <S.TimeDes>
                            Days
                        </S.TimeDes>
                    </S.StyleItem>
                </Col>
                <Col numberCol={3}>
                    <S.StyleItem >
                        <S.TimeNumber>
                            {time.h || 0}
                        </S.TimeNumber>
                        <S.TimeDes>
                            hours
                        </S.TimeDes>
                    </S.StyleItem>
                </Col>
                <Col numberCol={3}>
                    <S.StyleItem >
                        <S.TimeNumber>
                            {time.m || 0}
                        </S.TimeNumber>
                        <S.TimeDes>
                            minutes
                        </S.TimeDes>
                    </S.StyleItem>
                </Col>
                <Col numberCol={3}>
                    <S.StyleItem >
                        <S.TimeNumber>
                            {time.s || 0}
                        </S.TimeNumber>
                        <S.TimeDes>
                            seconds
                        </S.TimeDes>
                    </S.StyleItem>
                </Col>
            </Row> */}

            <Row justifyContent='center'>
                <Des className={desCss}>
                    {/* Token Listing Price 1 CDX = 0.00006 USD. */}
                    &nbsp;
                </Des>
            </Row>
        </S.StyleContainer>

    </S.Wrapper>)
}

export default PreSale;
