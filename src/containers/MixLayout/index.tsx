import React, {useEffect, useRef, useState} from 'react';
// import { Menu, Close } from "@material-ui/icons";
import throttle from "lodash/throttle";
import * as S from './style';

import {useNavigate} from "react-router-dom";
import menu from 'config/constants/menu';

import Footer from '../Footer';
import HeaderForm from '../Header';

import {IMG} from 'assets/img/constant';
import Sidebar from './Sidebar';
import {Menu, Close} from '@mui/icons-material';
import {Container} from "@mui/material";
import {useMediaQuery} from "react-responsive";
import Mobile from "../../components/Responsive/Mobile";
import Default from "../../components/Responsive/Default";
import Drawers from "../../components/Drawers";
import Btn from "../../components/Button";

interface Props {
    children?: any
    account?: any
}


function MixLayout(props: Props): React.ReactElement {
    const {children} = props;
    const [isDrawer, setDrawer] = useState(false);
    const navigate = useNavigate();
    const refPrevOffset = useRef(window.pageYOffset);
    const isMax425 = useMediaQuery({maxWidth: 425})

    const logoStyle = {
        maxHeight: 81,
        maxWidth: isMax425 ? 120 : 81
    }
    useEffect(() => {
        const handleScroll = () => {
            const currentOffset = window.pageYOffset;
            const element = document.getElementById("header");
            if (currentOffset >= 100) {
                element.classList.add("fixedSroll");
            } else {
                element.classList.remove("fixedSroll");
            }
        };
        const throttledHandleScroll = throttle(handleScroll, 200);

        window.addEventListener("scroll", throttledHandleScroll);
        return () => {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, []);

    return (
        <S.Wrapper>
            <HeaderForm
                color="transparent"
                position="fixed"
                leftElement={
                    <>
                        <img onClick={() => navigate('/')} style={logoStyle} src={IMG.logo} alt="logo"/>
                        {/* <div className={classes.nameCompany}>
              Công ty cổ phần viễn thông điện lực Hà Nội
            </div> */}
                    </>

                }
                // centerElement={
                //   <Default>
                //     <Sidebar />
                //   </Default>
                // }
                rightElement={
                    <>
                        <Default>
                            <Sidebar/>
                            <div style={{display: "flex"}}>

                            </div>
                        </Default>
                        <S.StyledApp href='https://app.carswap.finance' target='_blank'>
                            Demo App
                        </S.StyledApp>
                        <Mobile>
                            <Btn
                                type="ICON_BUTTON"
                                aria-label="menu"
                                color="#fff"
                                iconprops={<Menu/>}
                                onClick={() => setDrawer(!isDrawer)}
                            />
                        </Mobile>
                    </>
                }
            />
            <Drawers
                isShow={isDrawer}
                position={"left"}
                // widthdrawer={380}

                setDrawer={setDrawer}
                headItem={
                    // <S.Head>
                    //   {/* Gobit */}
                    //   <Btn
                    //       type="ICON_BUTTON"
                    //       aria-label="menu"
                    //       color="#fff"
                    //       iconprops={<Close />}
                    //       onClick={() => setDrawer(!isDrawer)}

                    //     />
                    // </S.Head>
                    <Container maxWidth='lg'>
                        <S.DrawersHeader>
                            <img onClick={() => navigate('/')} style={logoStyle} src={IMG.logo} alt="logo"/>

                            <Btn
                                type="ICON_BUTTON"
                                aria-label="menu"
                                color="#fff"
                                iconprops={<Close/>}
                                onClick={() => setDrawer(!isDrawer)}
                            />

                        </S.DrawersHeader>
                    </Container>

                }
                listItem={menu}
                // bottomItem={
                //   <Btn name="Toogle"
                //     color="primary"
                //     variant="contained"
                //   />
                // }
            />
            {children}
            <Footer/>
        </S.Wrapper>
    )
}

export default MixLayout;