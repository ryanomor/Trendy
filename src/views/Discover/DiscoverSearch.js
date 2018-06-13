import React from "react";
import { Redirect } from "react-router-dom";
import lastFMService from './../../services/lastFMService';
// material-ui components
import withStyles from "material-ui/styles/withStyles";
import List from "material-ui/List";
import ListItem from "material-ui/List/ListItem";
// @material-ui/icons
import Search from "@material-ui/icons/Search";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import IconButton from "components/CustomButtons/IconButton.jsx";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";

import discoverPageStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

class DiscoverSearch extends React.Component {
  render() {
    const { classes, option, handleChange, handleSubmit, listOptions } = this.props;
    
    return (
      <div className={classes.section}>
       <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.description}> Discover </h2>
              <TextField
                name="value"
                label="Search"
                type="search"
                value={option.value}
                onChange={handleChange}
                className={classes.textField}
                margin="normal"
              />
              {" "}
              <TextField
                name="option"
                select
                label={option.option ? "" : "Filter"}
                className={classes.textField}
                value={option.option || ""}
                onChange={handleChange}
                SelectProps={{
                    MenuProps: {
                    className: classes.menu,
                    },
                }}
                margin="normal"
                >
                {listOptions.map((option, idx) => (
                  <MenuItem key={idx} value={option}>
                      {option}
                  </MenuItem>
                ))}
            </TextField>
            {" "}
            <IconButton color="primary" onClick={handleSubmit}>
              <Search className={classes.searchIcon} />
            </IconButton>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
          
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(discoverPageStyle)(DiscoverSearch);