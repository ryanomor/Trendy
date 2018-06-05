import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import * as dbService from "./../../services/dbService";
// components
import ProfileNavbar from "./ProfileNavbar";
import ProfileBody from "./ProfileBody";
import Footer from "components/Footer/Footer.jsx";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      userFavorites: [],
      friendship: [],
      friendList: []
    }
  }

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user")); // Get user obj from local storage

    dbService.getUsersFriends(user)
      .then(res => {
        let friendList = [];
        res.data.forEach(friendship => {
          dbService.getFriendById(friendship)
            .then(res => {
              friendList.push(res.data);
              this.setState({
                friendList
              })
            })
        });
        this.setState({
          friendship: res.data,
        })
      })
      .catch(err => {
        console.log("Error:", err);
      })

      dbService.getUsersFavorites(user)
      .then(res => {
        this.setState({
          userFavorites: res.data
        })
      })
      .catch(err => {
        console.log("Error:", err);
      })
  }

  render() {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        return <Redirect to="/" />
    }
    console.log(this.state);
    const { userFavorites, friendship, friendList } = this.state;

    return(
      <div>
        <ProfileNavbar
          logout={this.props.logout} 
        />
        <ProfileBody 
          user={user}
          friends={friendList}
          favorites={userFavorites}
        />
        <Footer />
      </div>
    );
  }
}

export default Profile;