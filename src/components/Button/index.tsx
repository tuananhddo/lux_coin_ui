import React from 'react';
// import { createStyles, makeStyles } from '@material-ui/core/styles';
// import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import {Button, IconButton} from "@mui/material";

interface Props {
    color?: any
}

function StyledButton(props: any): React.ReactElement {
    let arrProps: any = {...props};
    // const useStyles = makeStyles(() =>
    //     createStyles({
    //         customBtn: {
    //         '& > *': {
    //             background: props.color,
    //             color: props.textcolor || '#FFFFFF'
    //         },
    //         '& > *:hover': {
    //             background: props.color,
    //             filter: 'brightness(105%)',
    //             color: props.textcolor || '#FFFFFF'
    //         }
    //      },
    //         customIconBtn: {
    //             '& > *': {
    //                 color: props.color
    //         }}
    //     }),
    // );
    //   const classes = useStyles();

        const classes = {
            customBtn: {color: props.textcolor || '#FFFFFF'},
            customIconBtn: {color: props.textcolor || '#FFFFFF'}
        }


    const renderButtons =()=>{
        const arrDefauft = ["default","inherit","primary","secondary"];
        const isDefault = arrDefauft.find(item => item === props.color);
        if(!isDefault){
            delete arrProps["color"];
        }

        switch (props.type){
          case 'BUTTON':
            return <div
                // className={classes.customBtn}
            >
                    <Button {...arrProps}>{props.name}</Button>
            </div>
          case 'ICON_BUTTON':
            return <div style={classes.customIconBtn}>
                <IconButton {...arrProps}>
                    {props.iconprops}
                </IconButton>
            </div>          
          default:
            return <div style={classes.customBtn}>
                <Button {...arrProps}>{props.name}</Button>
            </div>
          }
    }
    
    return renderButtons()
}

StyledButton.propTypes = {
    handleRoute: PropTypes.func,
    href: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node,
    socialType: PropTypes.string,
    name: PropTypes.string,
    loading: PropTypes.bool,
    type: PropTypes.string,
    iconprops: PropTypes.node,
    textcolor: PropTypes.string,
    color: PropTypes.string,
    variant: PropTypes.string,
};

export default StyledButton;