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
          currPage: 1,
          // pages: 
      }
  }

  componentDidMount() {
    lastFMService.getTopTracks(this.state.currPage, 12) // 12 is the limit of objects from the Db
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

    if (number === 0 && currPage > 1) { // the index of the PREV and NEXT buttons are 0 and 6 respectively
      currPage--;
    } else if (number === 6 && currPage < 5) {
      currPage++;
    } else if (number !== 0 && number !== 6) {
      currPage = number;
    } else if (number === 6 && currPage === 5) {
      return;
    } else if (number === 0 && currPage === 1) {
      return;
    }

    lastFMService.getTopTracks(currPage, 12) // 12 is the limit of objects from the Db
      .then(res => {
          console.log(res.data.tracks);
          this.setState({
              tracks: res.data.tracks.track,
              currPage
          });
      })
      .catch(err => {
          console.log("Error:", err); 
      });
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
            <MusicSection 
              tracks={tracks} 
              activePage={currPage} 
              togglePage={this.handleClick}
            />
            <UserSection />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(Home);