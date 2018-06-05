import React from "react";
import * as lastFMService from './../../services/lastFMService';
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui components
import withStyles from "material-ui/styles/withStyles";

// @material-ui/icons

// core components
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import discoverPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import DiscoverMusic from "./DiscoverMusic";
import ProfileNavbar from "../ProfilePage/ProfileNavbar";

class Discover extends React.Component {
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
    const { classes } = this.props;
    const { tracks } = this.state;
    
    return (
      <div>
        <ProfileNavbar />
        <Parallax filter image={require("assets/img/cover.jpeg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}> Search New Music </h1>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <DiscoverMusic tracks={tracks} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(discoverPageStyle)(Discover);