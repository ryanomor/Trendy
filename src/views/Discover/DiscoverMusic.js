import React from "react";
import { Link } from "react-router-dom";
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
import Paginations from "components/Pagination/Pagination.jsx";
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
    const { addFav, deleteFav } = this.props;

    if (favorited[index] === "rose") {
      favorited[index] = "primary";
      deleteFav(index);
      this.setState({ favorited });
    } else {
      favorited[index] = "rose";
      addFav(index);
      this.setState({ favorited });
    }
  }
    
  render() {
    const { classes, albums, tracks, activePage, togglePage } = this.props;
    const { favorited } = this.state;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    
    return (
      <div className={classes.section}>
        <Paginations
          color="info"
          pages={[
            { text: "PREV" },
            { active: activePage === 1, text: 1 },
            { active: activePage === 2, text: 2 },
            { active: activePage === 3, text: 3 },
            { active: activePage === 4, text: 4 },
            { active: activePage === 5, text: 5 },
            { text: "NEXT" }
          ]}
          onClick={togglePage}
        />
        <GridContainer justify="center">
          {albums.length > 0 ?
            albums.map((album, idx) =>
              <GridItem key={idx} xs={12} sm={12} md={4}>
                  <Card plain>
                  <Link to={album.url} target="_blank">
                  <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                    <img src={album.image[2]['#text']} alt={`album-${idx}`} className={imageClasses} />
                  </GridItem>
                    <h4 className={classes.cardTitle}>
                      {album.name}
                      <br />
                      <small className={classes.smallTitle}> {album.artist} </small>
                    </h4>
                    </Link>
                    <CardBody>
                      <IconButton 
                        color={favorited[idx] ? favorited[idx] : "primary" } 
                        onClick={e => { this.toggleIconColor(idx); }}
                      >
                        <Favorite className={classes.icons} />
                      </IconButton>
                    </CardBody>
                  </Card>
              </GridItem>
            )
          : ""}

          {tracks.length > 0 ?
            tracks.map((track, idx) =>
            <GridItem key={idx} xs={12} sm={12} md={4}>
                <Card plain>
                <Link to={track.url} target="_blank">
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={track.image[2]['#text']} alt={`top-track-${idx}`} className={imageClasses} />
                </GridItem>
                  <h4 className={classes.cardTitle}>
                    {track.name}
                    <br />
                    <small className={classes.smallTitle}> {track.artist.name} </small>
                  </h4>
                  </Link>
                  <CardBody>
                    <Link to={track.url} target="_blank">
                      <p className={classes.description}>
                        {track.listeners} listeners <br />
                        {track.playcount} plays
                      </p>
                    </Link>
                    <IconButton 
                      color={favorited[idx] ? favorited[idx] : "primary" } 
                      onClick={e => { this.toggleIconColor(idx); }}
                    >
                      <Favorite className={classes.icons} />
                    </IconButton>
                  </CardBody>
                </Card>
            </GridItem>
          ) 
          : ""}

        </GridContainer>
      </div>
    );
  }
}

export default withStyles(userStyle)(MusicSection);
