import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import dbService from "./../../services/dbService";
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
    let user = localStorage.getItem("user"); // Get user obj from local storage
    user = user ? JSON.parse(user) : "";

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

  unFriend = index => {
    let { friendship, friendList } = this.state;

    dbService.deleteUsersFriend(friendship[index])
      .then(res => {
        console.log("Unfriended", friendList[index].firstName);

        friendList = friendList.filter((friend, idx) => idx !== index);
        this.setState({ friendList });
      })
      .catch(err => {
        console.log("Error:", err);
      });
    console.log("Unfriending... :(");
  }

  unFavorite = index => {
    let { userFavorites } = this.state;

    dbService.deleteFavorite(userFavorites[index])
      .then(res => {
        console.log("Unfavorited", userFavorites[index].song);

        userFavorites = userFavorites.filter((favorite, idx) => idx !== index);
        this.setState({ userFavorites });
      })
      .catch(err => {
        console.log("Error:", err);
      });

    console.log("Unfavoriting... :(");
  }

  render() {
    let user = localStorage.getItem("user");
    user = user ? JSON.parse(user) : "";

    if (!user) {
        return <Redirect to="/" />
    }
    
    const { userFavorites, friendList } = this.state;

    return(
      <div>
        <ProfileNavbar
          logout={this.props.logout} 
        />
        <ProfileBody 
          user={user}
          friends={friendList}
          favorites={userFavorites}
          unFriend={this.unFriend}
          unFavorite={this.unFavorite}
        />
        <Footer />
      </div>
    );
  }
}

export default Profile;