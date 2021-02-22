import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText,
  makeStyles,
  Drawer,
  Link,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const DrawerComponent = () => {
  const useStyles = makeStyles((theme) => ({
    drawerContainer: {},
    iconButtonContainer: {
      marginLeft: "auto",
      color: "white",
    },

    menuIconToggle: {
      fontSize: "1.5rem",
      marginLeft: "auto",
    },
  }));

  const [openDrawer, setOpenDrawer] = useState(false);
  //Css
  const classes = useStyles();
  return (
    <>
      <Drawer
        anchor="left"
        classes={{ paper: classes.drawerContainer }}
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}
      >
        <List>
          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <Link
              style={{ textDecoration: "none" }}
              href="/home"
              color="inherit"
            >
              <ListItemText> Home</ListItemText>
            </Link>
          </ListItem>

          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <Link
              style={{ textDecoration: "none" }}
              href="/profile"
              color="inherit"
            >
              <ListItemText> Profile</ListItemText>
            </Link>
          </ListItem>

          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <Link
              style={{ textDecoration: "none" }}
              href="/about"
              color="inherit"
            >
              <ListItemText> About</ListItemText>
            </Link>
          </ListItem>

          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <Link
              style={{ textDecoration: "none" }}
              href="/contact"
              color="inherit"
            >
              <ListItemText> Contact</ListItemText>
            </Link>
          </ListItem>
        </List>
      </Drawer>
      {/* Since this is inside our toolbar we can push it to the end of the toolbar */}
      <IconButton
        className={classes.iconButtonContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.menuIconToggle} />
      </IconButton>
    </>
  );
};

export default DrawerComponent;
