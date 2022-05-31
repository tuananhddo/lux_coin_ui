import React from "react";
// import {Container} from "@material-ui/core";
// import {makeStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";
// import Group from "assets/img/Group.png";
import {Row, Col, Title, Des} from "../../style/DefaultStyled";
import StyledButton from "../StyledButton";
import Container from "@mui/material/Container";
import {IMG} from "../../assets/img/constant";

const wrapper = {
    // backgroundImage: `url(${IMG.banner})`,
    // backgroundImage: `url(${Group})`,
    // backgroundSize: "auto",
    width: "100%",
    minHeight: 500,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
}
const des = {
    margin: "32px 0",
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
        <div style={wrapper} id="Home">
            <Container
                // maxWidth="md"
                className={container}
            >
                <Row>
                    <Col md={6}>
                        <Title className={titleCss} noLight>
                            <span>Welcome To CARSWAPA </span>
                            {/* <br /> decentralized <br />
              financial infrastructure */}
                        </Title>
                        <Des className={des}>
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
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ListInfo;
