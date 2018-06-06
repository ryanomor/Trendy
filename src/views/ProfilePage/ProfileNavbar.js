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
                                onClick={e => <Redirect to="/discover" />}
                                color="transparent"
                            >
                                <Link to="/discover" className={classes.link} style={{"color": "white"}}>
                                    Discover
                                </Link>
                            </Button>
                        </ListItem>
                        <ListItem className={classes.listItem}>
                            <Button
                                href="#pablo"
                                className={classes.navLink}
                                onClick={e => e.preventDefault()}
                                color="transparent"
                            >
                                Favorites
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
                                onClick={() => logout()}
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
                                    <Link 
                                        to="/"
                                        onClick={logout} 
                                        style={{"color": "#333"}} // hover color #FFF
                                    > Sign out </Link>
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