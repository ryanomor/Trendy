/* eslint-disable */
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import List from "material-ui/List";
import ListItem from "material-ui/List/ListItem";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link className={classes.navLink} to="/login"> Login </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Link className={classes.navLink} to="/register"> Sign up </Link>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
