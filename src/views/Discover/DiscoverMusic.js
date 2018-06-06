import React from "react";
import { Link } from "react-router-dom";
import dbService from "services/dbService";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Card from "components/Card/Card.jsx";
import IconButton from "components/CustomButtons/IconButton.jsx";

import userStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

class MusicSection extends React.Component {
  addFav = index => {
    const userId = JSON.parse(localStorage.getItem("user")).id;
    const track = this.props.tracks[index];

    const song = {
      userId,
      song: track.name,
      artist: track.artist.name,
      img: track.image[2]["#text"]
    };

    dbService.addFave(song)
      .then(res => {
        console.log("Added to user's faves!", res.data);
      })
      .catch(err => {
        console.log("Error:", err);
      })
  }
    
  render() {
    const { classes, tracks } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}> Vibe to some new music </h2>
            <h5 className={classes.description}>
              Find new music by your favorite artists or discover some fresh tunes. <br />
              Save them to your favorites to listen to them later!
            </h5>
          </GridItem>
        </GridContainer>
        <div className={classes.section}>
          <GridContainer justify="center">
            {tracks.map((track, idx) =>
              <GridItem key={idx} xs={12} sm={12} md={4}>
                  <Card plain>
                  <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                    <img src={track.image[2]['#text']} alt={`top-track-${idx}`} className={imageClasses} />
                  </GridItem>
                    <h4 className={classes.cardTitle}>
                      {track.name}
                      <br />
                      <small className={classes.smallTitle}> {track.artist.name} </small>
                    </h4>
                    <CardBody>
                    <p className={classes.description}>
                      {track.listeners} listeners <br />
                      {track.playcount} plays
                    </p>
                    <IconButton color="primary" onClick={e => this.addFav(idx)}>
                      <Favorite className={classes.icons} />
                    </IconButton>
                    </CardBody>
                  </Card>
              </GridItem>
            )}
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(userStyle)(MusicSection);
