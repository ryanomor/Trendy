import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles } from "material-ui";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx";

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
          <ListItem className={classes.inlineBlock}>
              <a 
                target="_blank" 
                href="https://www.github.com/ryanomor"
                rel="noopener noreferrer"
                className={classes.block}>
                My Github
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/ryan-omoruyi"
                className={classes.block}
              >
                LinkedIn
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          Made with {" "}
          <Favorite className={classes.icon} /> {" "}
          by Ryan Omoruyi, &copy; {1900 + new Date().getYear()}
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
