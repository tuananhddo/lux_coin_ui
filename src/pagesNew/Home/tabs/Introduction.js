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
            <Grid item md={3}/>
            <Grid item md={6} style={BGCss}>
                <Title style={titleCss} noLight>
                    <span>Introduction </span>
                    {/* <br /> decentralized <br />
              financial infrastructure */}
                </Title>
                <Des style={des}>
                    Luxury BNB - we have solid assets including shares and casino chains, bars, hotels, restaurants,
                    resorts,tourist resorts,....all over the world such as Venetian Macao – China, Grand Lisboa – Macau,
                    China, Foxwoods Resort Casino – Connecticut - USA, MGM Grand Casiono – Las Vegas, Bellagio – Las
                    Vegas, Casino de Monte Carlo – Monaco,.... We choose casinos, bars, restaurants, hotels, resorts,
                    tourism areas with good growth and with regular cash flow.
                    For many years of experience in the financial industry, we are developing a non - concentrated
                    financial ecosystem, including a professional investment system, the auction exchange, NFT
                    collections & NFT market place and cryptocurrency exchange.
                </Des>
            </Grid>
            {/*<Col md={3}></Col>*/}

        </Grid>
    );
}

export default ListInfo;
