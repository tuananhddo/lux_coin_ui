import React from 'react';
import PropTypes from 'prop-types';
import {AppBar, Container, Grid, Toolbar} from "@mui/material";
import {Row} from "../../style/DefaultStyled";


interface Props {
    leftbar?: any,
    centerbar?: any,
    rightbar?: any,
    style?: any
}


function AppBars(props: Props) {
    const leftBarCss = {
        display: 'flex',
        alignItems: 'center'
    }

    const rightBarCss = {
        display: 'flex',
        alignItems: 'center'
    }

    const centerBarCss = {
        display: 'flex',
        alignItems: 'center'
    }

    const {leftbar, rightbar, centerbar, ...rest} = props;
    // const useStyles = makeStyles(() =>
    //   createStyles({
    //     root: {
    //       flexGrow: 1,
    //       '& .MuiPaper-outlined': {
    //         border: 0,
    //       }
    //     },
    //     appBar: {
    //       // top: 19,
    //     },
    //     toolbar: {
    //       display: 'flex',
    //       justifyContent: 'space-between',
    //       '@media (max-width: 767px)': {
    //         paddingLeft: 16,
    //         paddingRight: 16,
    //       },
    //     },
    //     leftbar: {
    //       display: 'flex',
    //       alignItems: 'center'
    //     },
    //     centerbar: {
    //       display: 'flex',
    //       alignItems: 'center'
    //     },
    //     rightbar: {
    //       display: 'flex',
    //       alignItems: 'center'
    //     },
    //   })
    // );
    //
    // const classes = useStyles();
    const classes = {
        toolbar: "",
        root: ""
    }
    return <Grid item className={classes.root}>
        <AppBar variant='outlined' className={`custom`} {...rest}>
            <Container maxWidth='lg'>
                <Toolbar className={classes.toolbar}>
                    <div style={leftBarCss}>
                        {props.leftbar}
                    </div>
                    <div style={centerBarCss}>
                        {props.centerbar}
                    </div>
                    <div style={rightBarCss}>
                        {props.rightbar}
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    </Grid>
}

// AppBars.propTypes = {
//   leftbar: PropTypes.node,
//   centerbar: PropTypes.node,
//   rightbar: PropTypes.node
// };

export default AppBars;