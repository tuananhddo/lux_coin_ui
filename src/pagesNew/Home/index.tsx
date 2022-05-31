import {Suspense, useEffect, useState} from 'react';
import * as S from './style';

//Components UI
import Abstract from "./tabs/Abstract"
import OurVision from "./tabs/OurVision"
import Introduction from "./tabs/Introduction"
import Roadmap from "./tabs/Roadmap"
import Tokenomics from "./tabs/Tokenomics"
import Ecosystem from "./tabs/Ecosystem"
import Investment from "./tabs/Investment"
import Partner from "./tabs/Partner"

import Header from "./tabs/Header"
import * as React from "react";
import {Grid, Paper, styled} from "@mui/material";
import Footer from "../../containers/Footer";


function HomePage(): React.ReactElement {
    const Item = styled(Paper)(({theme}) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <>
            <Header/>
            <Grid container spacing={0}>
                <Abstract/>
                <Introduction/>
                <OurVision/>

                <Ecosystem/>
                <Investment/>
                <Tokenomics/>
                <Roadmap/>
                <Partner/>
            </Grid>
            <Footer/>
        </>
    )
}

export default HomePage;
