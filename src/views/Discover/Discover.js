import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import lastFMService from './../../services/lastFMService';
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
// core components
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import discoverPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import DiscoverMusic from "./DiscoverMusic";
import DiscoverSearch from "./DiscoverSearch";
import ProfileNavbar from "../ProfilePage/ProfileNavbar";

class Discover extends React.Component {
  constructor() {
      super();
      this.state = {
        tracks: [],
        selectedOption: {
          option: "",
          value: ""
        },
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

  renderDicoverMusicComponent = () => {
    return <DiscoverMusic tracks={this.state.tracks} />
  }

  render() {
    let user = localStorage.getItem("user");
    user = user ? JSON.parse(user) : "";

    if (!user) {
        return <Redirect to="/" />
    }

    const { classes, logout } = this.props;
    
    return (
      <div>
        <ProfileNavbar logout={logout} />
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
          <DiscoverSearch />
          <Switch>
            <Route to="/discover" render={this.renderDicoverMusicComponent} />
          </Switch>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(discoverPageStyle)(Discover);