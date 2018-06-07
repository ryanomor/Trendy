import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
// material-ui components
import List from "material-ui/List";
import ListItem from "material-ui/List/ListItem";
import withStyles from "material-ui/styles/withStyles";
// core components
import Email from "@material-ui/icons/Email";
import Header from "components/Header/Header.jsx";
import Button from "components/CustomButtons/Button.jsx";
import IconButton from "components/CustomButtons/IconButton.jsx";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";

import profileImage from "assets/img/faces/avatar.jpg";
import navbarStyle from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.jsx";

class ProfileNavbar extends Component {
    render() {
        const { classes, logout, ...rest } = this.props;
        return (
            <Header
                fixed
                color="transparent"
                rightLinks={
                    <List className={classes.list}>
                        <ListItem className={classes.listItem}>
                            <Button
                                className={classes.navLink}
                                color="transparent"
                            >
                                <Link to="/discover" className={classes.link} style={{"color": "white"}}>
                                    Discover
                                </Link>
                            </Button>
                        </ListItem>
                        <ListItem className={classes.listItem}>
                            <Button
                                className={classes.navLink}
                                color="transparent"
                            >
                            <Link to="/profile" className={classes.link} style={{"color": "white"}}>
                                Favorites
                            </Link>
                    </Button>
                        </ListItem>
                        <ListItem className={classes.listItem}>
                            <IconButton
                                href="#pablo"
                                className={classes.notificationNavLink}
                                onClick={e => e.preventDefault()}
                                color="rose"
                            >
                                <Email className={classes.icons} />
                            </IconButton>
                        </ListItem>
                        <ListItem className={classes.listItem}>
                            <CustomDropdown
                                left
                                caret={false}
                                hoverColor="primary"
                                buttonText={
                                    <img
                                        src={profileImage}
                                        className={classes.img}
                                        alt="profile"
                                    />
                                }
                                buttonProps={{
                                    className:
                                        classes.navLink + " " + classes.imageDropdownButton,
                                    color: "transparent"
                                }}
                                dropdownList={[
                                    "Account",
                                    <div
                                        onClick={logout}
                                        // className={classes.navbarLink}
                                    > Sign out </div>
                                ]}
                            />
                        </ListItem>
                    </List>
                }
                changeColorOnScroll={{
                    height: 200,
                    color: "dark"
                }}
                {...rest}
            />
        );
    }
}

export default withStyles(navbarStyle)(ProfileNavbar);