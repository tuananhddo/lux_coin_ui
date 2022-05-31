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
                    <span>Our Vision </span>
                    {/* <br /> decentralized <br />
              financial infrastructure */}
                </Title>
                <Des style={des}>
                    Traditional trading systems and traditional investment systems do not work efficiently so that we
                    create a decentralized financial ecosystem. Luxury BNB is where investors can make sure to deposits
                    and receive cash flow by 20% per day.
                    After the negative influence of the Covid-19, the bank is liquidating the enterprise's mortgage
                    assets at cheap prices. We call for a large amount of capital to collect all of these assets. This
                    property includes cars, real estate, enterprise shares, corporate bonds,...We can resell these
                    assets to gain profits over 200%.
                    Along with that, we develope the LBNB token which is used in Luxury BNB’s ecosystem. LBNB can be
                    used to deal with the assets that we' ve acquired from banks and contributed equity investments to
                    the casino business systems, restaurants, hotels that we own, as well as to pay for transaction fees
                    in luxury bnb

                </Des>
            </Grid>
            {/*<Col md={3}></Col>*/}

        </Grid>
    );
}

export default ListInfo;
