import React from 'react';

import Color from "style/color";
import {Button, IconButton} from "@mui/material";

interface Props {
    color?: any
    onClick?: () => void
}
//  const ButtonUpgrade = withStyles({
//     root: {
//         backgroundImage: 'linear-gradient(to right, #f8b900, #03ffff)',
//         // background: 'linear-gradient(135deg, #00000000 8%, #f8b900, #03ffff, #00000000 92%)',
//         clipPath: 'polygon(0% 20px,20px 0%, 100% 0%,100% 30px, 90% 100%,100% 100%, 0% 100%,0% 100%)',
//         padding: "14px 42px",
//         borderRadius: 0,
//         display: "block",
//         '&.MuiButton-outlined': {
//             // backgroundColor: "#2D88FF",
//             border: `solid 1px ${Color.secondary}`,
//             background: 'transparent',
//             '& .MuiButton-label': {
//                 color: "#fff",
//             },
//         },
//         '&:hover': {
//             opacity: 0.9,
//         },
//     },
//     label: {
//         fontFamily: "OswaldMedium",
//         fontStyle: "normal",
//         fontWeight: 500,
//         fontSize: "15px",
//         lineHeight: "22px",
//         textAlign: "center",
//         color: "#000000",
//         textTransform: "inherit",
//         letterSpacing: '0.08px',
//         "@media (min-width: 768px)": {
//             fontSize: "13px",
//             lineHeight: "18px",
//         },
//         "@media (min-width: 1024px)": {
//             fontSize: "15px",
//             lineHeight: "22px",
//         },
//     }
// })(Button);
function ButtonUpgrade(props: any): React.ReactElement {
    return <Button>Button Test</Button>
}

const Btn: React.FC<any> = ({ ...props}) => {

    return <ButtonUpgrade {...props} />


}

Btn.propTypes = {
};

export default Btn;