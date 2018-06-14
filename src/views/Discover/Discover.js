import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import Genres from "utils/Genres";
import dbService from "services/dbService";
import lastFMService from './../../services/lastFMService';
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
// core components
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import discoverPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import DiscoverMusic from "./DiscoverMusic";
import DiscoverSearch from "./DiscoverSearch";
import ProfileNavbar from "../ProfilePage/ProfileNavbar";

class Discover extends React.Component {
  constructor() {
      super();

      this.options = ["Genre", "Artist", "Track", "Album", "Country"];

      this.state = {
        tracks: [],
        albums: [],
        currPage: 1,
        selectedOption: {
          option: "",
          value: ""
        },
      }
  }

  componentDidMount() {
    lastFMService.getTopTracks()
        .then(res => {
          this.setState({
              tracks: res.data.tracks.track
          });
        })
        .catch(err => {
            console.log("Error:", err);
        })
  }

  handleClick = number => {
    let { currPage, selectedOption } = this.state;
    selectedOption.value = selectedOption.value.toLowerCase();

    if (number === 0 && currPage > 1) {
      currPage--;
    } else if (number === 6 && currPage < 5) {
      currPage++;
    } else if (number !== 0 && number !== 6) {
      currPage = number;
    }

    switch (selectedOption.option) {
      case "Genre":
        lastFMService.getTopTracksByGenre(selectedOption.value, currPage)
          .then(res => {
            this.setState({
              tracks: res.data.tracks.track,
              currPage
            });
          })
          .catch(err => { console.log("Error:", err); });

        return;
      
      case "Artist":
        lastFMService.getTopTracksByArtist(selectedOption.value, currPage)
          .then(res => {
            this.setState({
              tracks: res.data.toptracks.track,
              currPage
            });
          })
          .catch(err => { console.log("Error:", err); });

        return;

      case "Track":
        lastFMService.getTopTracksByTrack(selectedOption.value)
          .then(res => {
            this.setState({
              albums: res.data.results.trackmatches.track,
              currPage
            });
          })
          .catch(err => { console.log("Error:", err); });

      return;

      case "Album":
        lastFMService.getTopTracksByAlbum(selectedOption.value, currPage)
          .then(res => {
            this.setState({
              albums: res.data.results.albummatches.album,
              currPage
            });
          })
          .catch(err => { console.log("Error:", err); });

        return;

      case "Country":
        lastFMService.getTopTracksByCountry(selectedOption.value, currPage)
          .then(res => {
            this.setState({
              tracks: res.data.tracks.track,
              currPage
            });
          })
          .catch(err => { console.log("Error:", err); });

        return;
    
      default:
        lastFMService.getTopTracks(currPage)
          .then(res => {
              this.setState({
                  tracks: res.data.tracks.track,
                  currPage
              });
          })
          .catch(err => {
              console.log("Error:", err); 
        });
        return;
    }
  }

  addFav = index => {
    const { tracks, albums } = this.state;
    const userId = JSON.parse(localStorage.getItem("user")).id;
    const track = tracks.length > 0 ? tracks[index] : albums[index];
    let tags;

    console.log("Track:", track.artist.name);

    tracks.length > 0
      ? lastFMService.getTrackTags(track)
          .then(res => {
            console.log("tags for track");
            if (!res.data.error) {
              tags = res.data.toptags.tag
                .filter(tag => !!Genres[tag.name.toLowerCase()])
                .map(tag => tag.name.toLowerCase());
            }

            const song = {
              userId,
              song: track.name,
              artist: track.artist.name || track.artist,
              img: track.image[2]["#text"],
              url: track.url,
              tags: tags ? tags.join(",") : ""
            };
        
            dbService.addFave(song)
              .then(res => {
                console.log("Added to user's faves!", res.data);
              })
              .catch(err => {
                console.log("Error:", err);
              })
          })
          .catch(err => { console.log("Error:", err) })
      : lastFMService.getAlbumTags(track)
        .then(res => {
          console.log("tags for album");
          if (!res.data.error) {
            tags = res.data.toptags.tag
              .filter(tag => !!Genres[tag.name.toLowerCase()])
              .map(tag => tag.name.toLowerCase());
          }
      
        
        const song = {
          userId,
          song: track.name,
          artist: track.artist.name || track.artist,
          img: track.image[2]["#text"],
          url: track.url,
          tags: tags ? tags.join(",") : ""
        };
    
        dbService.addFave(song)
          .then(res => {
            console.log("Added to user's faves!", res.data);
          })
          .catch(err => {
            console.log("Error:", err);
          })
      })
      .catch(err => { console.log("Error:", err) });
  }

  deleteFav = index => {
    const { tracks, albums } = this.state;
    const track = tracks.length > 0 ? tracks[index] : albums[index];
    const user = JSON.parse(localStorage.getItem("user"));

    dbService.getUsersFavorites(user)
      .then(res => {
        const targetTrack = res.data.find(favorite => favorite.song === track.name);
        
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

  inputChange = e => {
    const { selectedOption } = this.state;
    const { name, value } = e.target;

    selectedOption[name] = value;

    this.setState({ selectedOption })
  }

  submitSearch = e => {
    e.preventDefault();
    const { selectedOption } = this.state;
    selectedOption.value = selectedOption.value.toLowerCase();

    switch (selectedOption.option) {
      case "Genre":
        lastFMService.getTopTracksByGenre(selectedOption.value)
          .then(res => {
            this.setState({
              tracks: res.data.tracks.track,
              albums: []
            });
          })
          .catch(err => { console.log("Error:", err); });

        return;
      
      case "Artist":
        lastFMService.getTopTracksByArtist(selectedOption.value)
          .then(res => {
            this.setState({
              tracks: res.data.toptracks.track,
              albums: []
            });
          })
          .catch(err => { console.log("Error:", err); });

        return;

      case "Track":
        lastFMService.getTopTracksByTrack(selectedOption.value)
          .then(res => {
            console.log(res.data.results.trackmatches.track);
            this.setState({
              tracks: res.data.results.trackmatches.track,
              albums: []
            });
          })
          .catch(err => { console.log("Error:", err); });

      return;

      case "Album":
        lastFMService.getTopTracksByAlbum(selectedOption.value)
          .then(res => {
            this.setState({
              albums: res.data.results.albummatches.album,
              tracks: []
            });
          })
          .catch(err => { console.log("Error:", err); });

        return;

      case "Country":
        lastFMService.getTopTracksByCountry(selectedOption.value)
          .then(res => {
            this.setState({
              tracks: res.data.tracks.track,
              albums: []
            });
          })
          .catch(err => { console.log("Error:", err); });

        return;
    
      default:
        return;
    }
    
  }

  renderDicoverMusicComponent = () => {
    return (
      <DiscoverMusic 
        tracks={this.state.tracks}
        albums={this.state.albums}
        activePage={this.state.currPage}
        togglePage={this.handleClick} 
        addFav={this.addFav}
        deleteFav={this.deleteFav}
      />
    );
  }

  render() {
    let user = localStorage.getItem("user");
    user = user ? JSON.parse(user) : "";

    if (!user) {
      return <Redirect to="/" />
    }

    const { classes, logout } = this.props;
    
    return (
      <div>
        <ProfileNavbar logout={logout} />
        <Parallax filter image={require("assets/img/cover.jpeg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}> Search New Music </h1>
              </GridItem>
            </GridContainer>
          </div> 
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <DiscoverSearch 
              option={this.state.selectedOption}
              handleChange={this.inputChange}
              listOptions={this.options}
              handleSubmit={this.submitSearch}
            />
            <Switch>
              <Route to="/discover" render={this.renderDicoverMusicComponent} />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(discoverPageStyle)(Discover);