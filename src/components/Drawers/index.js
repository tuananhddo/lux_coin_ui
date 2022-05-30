import React, { memo } from "react";
import PropTypes from "prop-types";
// import * as S from './style';
import clsx from "clsx";
// import { Stars } from "@material-ui/icons";
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";

function Drawers(props) {
  const {
    isShow,
    position,
    widthdrawer,
    setDrawer,
    headItem,
    listItem,
    bottomItem,
  } = props;

  // const useStyles = makeStyles({
  //   customDrawer: {
  //     "& .MuiDrawer-paper": {
  //       color: "#fff",
  //       height: "auto",
  //       backdropFilter: 'saturate(1) blur(20px) ',
  //       backgroundColor: '#ffffff00',
  //       // top: 80,
  //     },
  //   },
  //   list: {
  //     width: widthdrawer || "100vw",
  //     "& .MuiListItem-root": {
  //       // borderBottom: "1px solid #f8b900",
  //       border: "0",
  //       "&:first-child": {
  //         // borderTop: "1px solid #f8b900",
  //       },
  //     },
  //     "& .MuiListItemIcon-root": {
  //       color: "#fff",
  //     },
  //   },
  //   fullList: {
  //     width: "auto",
  //   },
  // });
  //
  // const classes = useStyles();
  const  classes = {
    list : "",
    customDrawer: "",
    fullList: "",
  }
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {listItem &&
          listItem.map((v, i) => (
            <ListItem button component="a" href={v.link} key={i} divider>
              {/* <ListItemIcon color="#fff">{v.icon ?? <Stars />}</ListItemIcon> */}
              <ListItemText primary={v.label} />
            </ListItem>
          ))}
      </List>
    </div>
  );

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawer(open);
  };

  return (
    <Drawer
      className={classes.customDrawer}
      anchor={position}
      open={isShow}
      onClose={toggleDrawer(false)}
      ModalProps={{
        container: document.getElementById("root"),
        style: { position: "absolute" },
      }}
    >
      {headItem}
      {list(position)}
      {bottomItem}
    </Drawer>
  );
}

Drawers.propTypes = {
  isShow: PropTypes.any, // isShow drawer
  widthdrawer: PropTypes.number, // width drawer
  position: PropTypes.string, // position drawer
  setDrawer: PropTypes.func, // change show drawer status
  headItem: PropTypes.any, // head item
  listItem: PropTypes.array, // list item
  bottomItem: PropTypes.any, // bottomItem item
  loading: PropTypes.bool,
};

export default memo(Drawers);
