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
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const wrapper = {
    backgroundImage: `url(${IMG.laika})`,
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
    color: "white"
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
        color: "yellow"
    }
    return (
        <Grid item container style={wrapper} md={12} alignItems="center" justifyContent="center">
            <Grid item md={2}/>
            <Grid item md={8}>
                <Title style={titleCss} noLight>
                    <span>ECOSYSTEM </span>
                    {/* <br /> decentralized <br />
              financial infrastructure */}
                </Title>
                <Des style={des}>
                    <CheckBoxIcon style={{color: "yellow"}}/> Automated Investment System: Allowing users to send BNB to
                    receive interest rates up to 20%/day.
                    We're going to use this money to buy low - cost mortgage assets from big banks and resell them at
                    higher prices to pay for investors <br/>
                    <CheckBoxIcon style={{color: "yellow"}}/> LB Auction Platform: Allowing LBNB token to aution for
                    assets, stocks, bonds, and nft collections
                    online and offline. Auctions are held monthly, q0uarterly <br/>
                    <CheckBoxIcon style={{color: "yellow"}}/> NFT & NFT market place: It is easy to buy, to collect, to
                    store and to move NFTs. These NFT we
                    launch, can be used as a certificate for investor' s contracts. We launch the collection of NFT
                    which has rewards and APY for NFT holders <br/>
                    <CheckBoxIcon style={{color: "yellow"}}/> LB Exchange: It is easy to trade, to buy, to sell, to send
                    and to receive LBNB tokens and other
                    digital tokens
                </Des>
                <Grid item md={2}/>

            </Grid>
        </Grid>
    );
}

export default ListInfo;
