import React from "react";
import { Redirect } from "react-router-dom";
import * as lastFMService from './../../services/lastFMService';
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui components
import withStyles from "material-ui/styles/withStyles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import MusicSection from "./Sections/MusicSection.jsx";
import UserSection from "./Sections/UserSection.jsx";
// import WorkSection from "./Sections/WorkSection.jsx";

const dashboardRoutes = [];

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            tracks: []
        }
    }

    componentDidMount() {
        lastFMService.getTopTracks()
            .then(res => {
                console.log(res.data.tracks);
                this.setState({
                    tracks: res.data.tracks.track
                });
            })
            .catch(err => {
                console.log("Error:", err);
            })
    }

  render() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      return <Redirect to="/profile" />
    }
    const { classes, ...rest } = this.props;
    const { tracks } = this.state;
    
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax filter image={require("assets/img/cover.jpeg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Your Story Starts With Us.</h1>
                <h4>
                  Discover new music and artists based on your interests. <br />
                  Connect with other users with similar tastes in music. <br />
                  Find events near you that relate to your music preference.
                </h4>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <MusicSection tracks={tracks} />
            <UserSection />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(Home);