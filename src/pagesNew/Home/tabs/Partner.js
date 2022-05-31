import React from "react";
// import {Container} from "@material-ui/core";
// import {makeStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";
// import Group from "assets/img/Group.png";
import {Row, Col, Title, Des} from "../../../style/DefaultStyled";
import StyledButton from "../../../components/StyledButton";
// import Container from "@mui/material/Container";
import {IMG} from "../../../assets/img/constant";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const wrapper = {
    backgroundImage: `url(${IMG.laika})`,
    // backgroundImage: `url(${Group})`,
    backgroundSize: "cover",
    width: "100%",
    minHeight: 500,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
}
const BGCss = {
    // backgroundImage: `url(${IMG.banner})`,
}
const des = {
    margin: "32px 0",
    color: "red"
}

function ListInfo(props) {
    const {placement, title} = props;
    const container = {
        paddingTop: 100,
        paddingBottom: 80,
        "@media (min-width: 1024px)": {
            paddingTop: 119,
            paddingBottom: 252,
        },
    };
    const titleCss = {
        marginTop: 30,
        "@media (min-width: 1024px)": {
            marginTop: 99,
        },
    }
    return (
        <Grid item container style={wrapper} md={12}>
            <Grid item md={6}>
                <Box
                    component="img"
                    sx={{
                        height: '100%',
                        width: '100%',
                        // maxHeight: {xs: 233, md: 167},
                        // maxWidth: {xs: 350, md: 250},
                    }}
                    alt="The house from the offer."
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
                />
                {/*<Im alt="Intro" src="https://laikainu.io/images/rocket.svg" decoding="async" data-nimg="fill"*/}
                {/*     sizes="100vw"*/}
                {/*     style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;">*/}

            </Grid>
            <Grid item md={6} style={BGCss}>
                <Title style={titleCss} noLight>
                    <span>Partner </span>
                    {/* <br /> decentralized <br />
              financial infrastructure */}
                </Title>
                <Des style={des}>
                    CarDex is a decentralized exchanges are peer-to-peer (P2P)
                    marketplaces where cryptocurrency traders make transactions
                    directly without handing over management of their funds to an
                    intermediary or custodian.
                    <br/>
                    CarDex will build first car racing game with a referral system on
                    Binance Smart Chain. <br/>
                    We believe that creative gameplay and the opportunity to own
                    unique NFTs are the best way to reward and engage users.
                </Des>
                <StyledButton
                    onClick={() => window.open('https://bscscan.com/address/0x4fa2e5871Dd9622c515f66A4b3230B73236E0D8d')}>smart
                    contract</StyledButton>
            </Grid>
            {/*<Col md={3}></Col>*/}

        </Grid>
    );
}

export default ListInfo;
