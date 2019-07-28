import React, { Component } from 'react';
import dbService from '../../services/dbService';
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
import discoverPageStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

class DiscoverFriends extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recommendedFriends: [],
        }
    }

    // Get User's Favorites by querying the endpoint /faves/:id where id is userId
    // Go through list of Favorites to grab artist name

    // check Favorites table if artist is in Favorites
    // Use User id to find User name
    // Recommend that User
    componentDidMount() {
        const { recommendedFriends } = this.state;
        const { friendsFaves } = this.props;
        friendsFaves.forEach(fave => {
            console.log('Fave:', fave);
            console.log({id: fave.userId})
            dbService
                .getUserById({id: fave.userId})
                .then(res => {
                    console.log(res.data);
                    const user = res.data;
                    const friend = {
                        userId: user.id,
                        name: user.firstname + " " + user.lastname,
                    };

                    recommendedFriends.push(friend);
                })
                .catch(err => console.log('Error:', err));
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                {this.state.recommendedFriends.join(', ')}
            </div>
        );
    }
}

export default withStyles(discoverPageStyle)(DiscoverFriends);
