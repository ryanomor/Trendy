import React from "react";
import { Link } from "react-router-dom";
import dbService from "services/dbService";
import lastFMService from "services/lastFMService";
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
  constructor() {
    super();
    this.state = {
      favorited: [],
    }
  }

  toggleIconColor = index => {
    let { favorited } = this.state;

    if (favorited[index] === "rose") {
      favorited[index] = "primary";
      this.deleteFav(index);
      this.setState({ favorited });
    } else {
      favorited[index] = "rose";
      this.addFav(index);
      this.setState({ favorited });
    }
  }

  addFav = index => {
    const userId = JSON.parse(localStorage.getItem("user")).id;
    const track = this.props.tracks[index];
    // const trackTags = lastFMService.getTrackTags(track).then(res => {
    //   console.log(res.data.toptags.tag);
    // });

    const song = {
      userId,
      song: track.name,
      artist: track.artist.name,
      img: track.image[2]["#text"],
      // tags: trackTags.join(",")
    };

    dbService.addFave(song)
      .then(res => {
        console.log("Added to user's faves!", res.data);
      })
      .catch(err => {
        console.log("Error:", err);
      })
  }

  deleteFav = (index) => {
    const track = this.props.tracks[index];
    const user = JSON.parse(localStorage.getItem("user"));

    dbService.getUsersFavorites(user)
      .then(res => {
        const targetTrack = res.data.find(favorite => favorite.song === track.name);
        console.log(targetTrack);
        dbService.deleteFavorite(targetTrack)
          .then(res => {
            console.log("Successfully deleted from user's faves!", res.data);
          })
          .catch(err => {
            console.log("Error:", err);
          })
      })
      .catch(err => {
        console.log("Error:", err)
      });
  }
    
  render() {
    const { classes, tracks } = this.props;
    const { favorited } = this.state;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    
    return (
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
                  <IconButton 
                    color={favorited[idx] ? favorited[idx] : "primary" } 
                    onClick={e => { this.toggleIconColor(idx); }}
                  >
                    <Favorite className={classes.icons} />
                  </IconButton>
                  </CardBody>
                </Card>
            </GridItem>
          )}
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(userStyle)(MusicSection);
