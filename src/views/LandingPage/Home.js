import React from "react";
import { Redirect } from "react-router-dom";
import lastFMService from './../../services/lastFMService';
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
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

class Home extends React.Component {
  constructor() {
      super();
      this.state = {
          tracks: [],
          currPage: 1
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
      });
  }

  handleClick = number => {
    let { currPage } = this.state;
    if (number === "PREV" && currPage > 1) {
      currPage--;
      this.setState({ currPage });
    } else if (number === "NEXT" && currPage < 5) {
      currPage++;
      this.setState({ currPage });
    } else {
      this.setState({ currPage: number });
    }
  }

  render() {
    let user = localStorage.getItem("user");
    user = user ? JSON.parse(user) : "";

    if (user) {
      return <Redirect to="/profile" />
    }
    const { classes, ...rest } = this.props;
    const { tracks, currPage } = this.state;
    
    return (
      <div>
        <Header
          color="transparent"
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
                <h1 className={classes.title}>Your Journey Starts Here</h1>
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
            <MusicSection activePage={currPage} tracks={tracks} togglePage={this.handleClick}/>
            <UserSection />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(Home);