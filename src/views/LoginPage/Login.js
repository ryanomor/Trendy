import React from "react";
import { Link, Redirect } from "react-router-dom";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
import InputAdornment from "material-ui/Input/InputAdornment";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import LockOutline from "@material-ui/icons/LockOutline";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import TextField from '@material-ui/core/TextField';
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

import image from "assets/img/bg7.jpg";

class Login extends React.Component {
  constructor(props) {
    super(props);
    // Used to make the card appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      user: {}
    };
  }

  componentDidMount() {
    // A hidden class is added to the card and deleted after 700 ms so the transition appears
    setTimeout(
      () => {
        this.setState({ cardAnimaton: "" });
      },
      700
    );
  }

  handleChange = event => {
    const { name, value } = event.target;
    const { user } = this.state;

    switch (name) {
      case "email":
        user.email = value;

        this.setState({
          user
        })

        return;

      case "password":
        user.password = value;

        this.setState({
          user
        })
        
        return;

      default:
        break;
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    const { user } = this.state;

    this.props.setUser(user);
  }

  render() {
    const { classes, ...rest } = this.props;
    let user = localStorage.getItem("user");
    user = user ? JSON.parse(user) : "";

    if (user) {
      return <Redirect to="/profile" />
    }

    return (
      <div>
        <Header
          absolute
          color="transparent"
          rightLinks={<HeaderLinks />}
          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form} onSubmit={this.handleSubmit}>
                    <h3 className={classes.divider}> Login </h3>
                    <CardBody>
                    <TextField
                        required
                        name="email"
                        label="Email"
                        className={classes.textfields}
                        onChange={this.handleChange}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                  <Email className={classes.inputIconsColor}/>
                                </InputAdornment>
                            )
                          }}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        required
                        name="password"
                        label="Password"
                        type="password"
                        className={classes.textfields}
                        onChange={this.handleChange}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                  <LockOutline className={classes.inputIconsColor}/>
                                </InputAdornment>
                            )
                          }}
                        fullWidth
                        margin="normal"
                    />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button color="primary" size="lg" onClick={this.handleSubmit}>
                        Login
                      </Button>
                    </CardFooter>
                    <Link to="/register" className={classes.link}> <p> Don't have an account? </p> </Link>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <Footer whiteFont />
        </div>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(Login);
