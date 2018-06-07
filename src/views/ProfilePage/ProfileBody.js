import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Users from "utils/Users";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
// @material-ui/icons
import People from "@material-ui/icons/People";
import Favorite from "@material-ui/icons/Favorite";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import IconButton from "components/CustomButtons/IconButton.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Card from "components/Card/Card.jsx";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import profileImage from "assets/img/faces/avatar.jpg";
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

class ProfileBody extends Component {
    render() {
        const { classes, user, friends, favorites } = this.props;
        const imageClasses = classNames(
            classes.imgRaised,
            classes.imgRoundedCircle,
            classes.imgFluid
          );
        
        return (
            <div>
            <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div>
                    <div className={classes.container}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={6}>
                                <div className={classes.profile}>
                                    <div>
                                        <img src={profileImage} alt="..." className={imageClasses} />
                                    </div>
                                    <div className={classes.name}>
                                        <h3 className={classes.title}>{`${user.firstName} ${user.lastName}`}</h3>
                                        <h4 className={classes.description}>{`${user.city}, ${user.country}`}</h4>
                                        <h5>DESIGNER</h5>
                                        <IconButton
                                            color="transparent"
                                            className={classes.margin5}
                                        >
                                            <i className={classes.socials + " fab fa-twitter"} />
                                        </IconButton>
                                        <IconButton
                                            color="transparent"
                                            className={classes.margin5}
                                        >
                                            <i className={classes.socials + " fab fa-instagram"} />
                                        </IconButton>
                                        <IconButton
                                            color="transparent"
                                            className={classes.margin5}
                                        >
                                            <i className={classes.socials + " fab fa-facebook"} />
                                        </IconButton>
                                    </div>
                                </div>
                            </GridItem>
                        </GridContainer>
                        <div className={classes.description}>
                            <p>
                                An artist of considerable range, {`${user.firstName} ${user.lastName}`} — the name taken
                                by Melbourne-raised, Brooklyn-based Nick Murphy — writes,
                                performs and records all of her own music, giving it a warm,
                                intimate feel with a solid groove structure.{" "}
                            </p>
                        </div>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                                <NavPills
                                    alignCenter
                                    color="primary"
                                    tabs={[
                                        {
                                        tabButton: "Favorites",
                                        tabIcon: Favorite,
                                        tabContent: (
                                            <GridContainer justify="center">
                                            {favorites.length < 1 ? 
                                                "You don't have any favorites yet" :
                                                favorites.map((Favorite, idx) =>
                                                    <GridItem key={idx} xs={12} sm={12} md={4}>
                                                        <Card plain>
                                                            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                                            <img src={Favorite.img} alt={`Favorite-${idx}`} className={imageClasses} />
                                                            </GridItem>
                                                            {/* <CardBody> */}
                                                            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                                            <h4 className={classes.cardTitle}>
                                                                {Favorite.song}
                                                                <br />
                                                                <small className={classes.smallTitle}> {`${Favorite.artist}`} </small>
                                                            </h4>
                                                            </GridItem>
                                                            {/* </CardBody> */}
                                                        </Card>
                                                    </GridItem>
                                            )}
                                            </GridContainer>
                                        )
                                        },
                                        {
                                            tabButton: "Friends",
                                            tabIcon: People,
                                            tabContent: (
                                                <GridContainer justify="center">
                                                {friends.length < 1 ?
                                                    "You don't have any favorites yet" :
                                                    friends.map((friend, idx) =>
                                                        <GridItem key={idx} xs={12} sm={12} md={4}>
                                                        <Card plain>
                                                            {/* <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}> */}
                                                            <img src={Users[idx]} alt={`friend-${idx}`} className={imageClasses} />
                                                            {/* </GridItem> */}
                                                            <CardBody>
                                                            <h4 className={classes.cardTitle}>
                                                                {friend.firstName}
                                                                <br />
                                                                <small className={classes.smallTitle}> {`${friend.city}, ${friend.country}`} </small>
                                                            </h4>
                                                            </CardBody>
                                                        </Card>
                                                        </GridItem>
                                                )}
                                              </GridContainer>
                                            )
                                        }
                                    ]}
                                />
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default withStyles(profilePageStyle)(ProfileBody);