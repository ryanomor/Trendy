import React from "react";
import { Link } from "react-router-dom";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import Paginations from "components/Pagination/Pagination.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Card from "components/Card/Card.jsx";

import userStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

class MusicSection extends React.Component {
  render() {
    const { classes, tracks, activePage, togglePage } = this.props;
    
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );

    let trimmedTrackList;
    if ((activePage - 1) * 11 > tracks.length) {
      trimmedTrackList = tracks.slice(0, 12);
    } else {
      trimmedTrackList = tracks.slice(((activePage - 1) * 11), ((activePage - 1) * 11 + 12));
    }
    
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}> Vibe to some new music </h2>
            <h5 className={classes.description}>
              Find new music by your favorite artists or discover some fresh tunes. <br />
              Save them to your favorites for later!
            </h5>
          </GridItem>
        </GridContainer>
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
            {trimmedTrackList.map((track, idx) =>
            <GridItem key={idx} xs={12} sm={12} md={4}>
              <Link key={idx} to="/register">
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
                      </CardBody>
                  </Card>
              </Link>
            </GridItem>
            )}
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(userStyle)(MusicSection);
