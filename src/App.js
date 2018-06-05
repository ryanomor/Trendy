import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import * as dbService from "./services/dbService";
import Home from "views/LandingPage/Home";
import Discover from "views/Discover/Discover";
import Profile from "views/ProfilePage/Profile";
import Signup from "views/LoginPage/Signup";
import Login from "views/LoginPage/Login";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
    }

    createUser = newUser => {
        dbService
            .getUserByEmail(newUser)
            .then(res => {
                if (!res.data.user) {
                    dbService.createUser(newUser)
                        .then(res => {
                            const user = res.data
                            this.setState({
                                user: newUser
                            })
                        });
                }
            })
            .catch(err => {
                console.log("Error:", err);
            });
    }

    setUser = currUser => {
        dbService
            .getUserByEmail(currUser)
            .then(res => {
                const user = res.data;
                
                if(user.password === currUser.password) {
                    localStorage.setItem("user", JSON.stringify(user));

                    this.setState({
                        user
                    });
                }
            })
            .catch(err => {
                console.log("Error:", err);
            })
    }

    logout = () => {
        localStorage.setItem("user", "");

        this.setState({
            user: {}
        });
    }

    renderDiscover = () => {
      return <Discover />
    }

    renderProfile = () => {
      return <Profile logout={this.logout} />
    }

    renderLogin = () => {
      return <Login setUser={this.setUser} />
    }

    renderSignup = () => {
      return <Signup createUser={this.createUser} />
    }

    render() {
        const { user } = this.state;
        console.log("User State:", user);
        localStorage.key(0) ? console.log("User Storage:", JSON.parse(localStorage.getItem("user"))) : "";

        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/discover" render={this.renderDiscover} />
                <Route path="/profile" render={this.renderProfile} />
                <Route path="/login" render={this.renderLogin} />
                <Route path="/register" render={this.renderSignup} />
            </Switch>
        );
    }
}

export default App;
