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
                    <span>Abstract </span>
                    {/* <br /> decentralized <br />
              financial infrastructure */}
                </Title>
                <Des style={des}>
                    Nowaday, we have seen that Bitcoin has grown explosively.
                    It is faster than the growth rate of the Internet in 1997.
                    Because Blockchain technology has solved problems that the traditional system can not do, the number of people who are using Blockchain technology is growing  more and more.
                    In order to capture that opportunity, we - the development team of the project creates a stable crypto currency called LUXURY BNB – LBNB.
                    It aims to trade in LBNB's ecosystems and generate profits for investors.

                </Des>
            </Grid>
            {/*<Col md={3}></Col>*/}

        </Grid>
    );
}

export default ListInfo;
