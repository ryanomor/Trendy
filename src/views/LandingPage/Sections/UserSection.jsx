import React from "react";
import Users from "utils/Users";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";

import userStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

class UserSection extends React.Component {
  render() {
    const { classes } = this.props;

    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );

    return (
      <div className={classes.section}>
        <h2 className={classes.title}> Meet new friends  </h2>
        <div>
          <GridContainer>
            {Users.users.map((user, idx) =>
              <GridItem key={idx} xs={12} sm={12} md={4}>
                <Card plain>
                  <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                    <img src={user} alt={`user-pic-${idx}`} className={imageClasses} />
                  </GridItem>
                </Card>
              </GridItem>
            )}
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(userStyle)(UserSection);
