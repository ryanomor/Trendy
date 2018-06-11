import React from "react";
import { Redirect } from "react-router-dom";
import lastFMService from './../../services/lastFMService';
// material-ui components
import withStyles from "material-ui/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import discoverPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

class DiscoverSearch extends React.Component {
  render() {

    const { classes } = this.props;
    
    return (
      <div>
       <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}> Vibe to some new music </h2>
            {/* <h5 className={classes.description}>
              Find new music by your favorite artists or discover some fresh tunes. <br />
              Save them to your favorites for later!
            </h5> */}
          </GridItem>
        </GridContainer>
        {/* <GridContainer justify="flex-start">
          <GridItem xs={12} sm={12} md={8}>
            <h5 className={classes.description}>
              Find new music by your favorite artists or discover some fresh tunes. <br />
              Save them to your favorites for later!
            </h5>
          </GridItem>
        </GridContainer> */}
      </div>
    );
  }
}

export default withStyles(discoverPageStyle)(DiscoverSearch);