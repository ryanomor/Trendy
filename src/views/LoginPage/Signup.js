import React from "react";
import { Link, Redirect } from "react-router-dom";
import Countries from "utils/Countries";
// material-ui components
import Radio from "material-ui/Radio";
import withStyles from "material-ui/styles/withStyles";
import InputAdornment from "material-ui/Input/InputAdornment";
import FormControlLabel from "material-ui/Form/FormControlLabel";
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import LockOutline from "@material-ui/icons/LockOutline";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

import image from "assets/img/bg7.jpg";

class Signup extends React.Component {
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
      500
    );
  }

  handleRadio = event => {
    const { user } = this.state;
    user.gender = event.target.value;
    this.setState({ 
        user 
    });
  }

  handleChange = event => {
    const { user } = this.state;
    const { name, value } = event.target;

    switch (name) {
        case "first":
            user.firstName = value;
            this.setState({
                user
            });
            return;

        case "last":
            user.lastName = value;
            this.setState({
                user
            });
            return;

        case "email":
            user.email = value;
            this.setState({
                user
            });
            return;

        case "pass":
            user.password = value;
            this.setState({
                user
            });
            return;

        case "city":
            user.city = value;
            this.setState({
                user
            });
            return;

        case "country":
            user.country = value;
            this.setState({
                user
            });
            return;
        
        default:
            return;
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    const { user } = this.state;

    this.props.createUser(user);
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
                    <h3 className={classes.divider}> Signup </h3>
                    <CardBody>
                    <TextField
                        required
                        name="first"
                        label="First name"
                        className={classes.textfields}
                        onChange={this.handleChange}
                        fullWidth
                        margin="normal"
                        />
                    <TextField
                        required
                        name="last"
                        label="Last name"
                        className={classes.textfields}
                        onChange={this.handleChange}
                        fullWidth
                        margin="normal"
                    />
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
                        name="pass"
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
                    <TextField
                        name="city"
                        label="City"
                        type="search"
                        required
                        value={this.state.user.city}
                        onChange={this.handleChange}
                        className={classes.textField}
                        helperText="Please enter your city"
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        required
                        name="country"
                        select
                        label={this.state.user.country ? "" : "Country"}
                        className={classes.textField}
                        value={this.state.user.country || ""}
                        onChange={this.handleChange}
                        SelectProps={{
                            MenuProps: {
                            className: classes.menu,
                            },
                        }}
                        helperText="Please select your country"
                        fullWidth
                        margin="normal"
                        >
                        {Countries.countries.map((country, idx) => (
                            <MenuItem key={idx} value={country}>
                                {country}
                            </MenuItem>
                        ))}
                    </TextField>
                    <div className={classes.title}>
                    <h5> Gender </h5>
                    </div>
                    <div
                    className={
                        classes.checkboxAndRadio +
                        " " +
                        classes.checkboxAndRadioHorizontal
                    }
                    >
                    <FormControlLabel
                        label="M"
                        control={
                            <Radio
                                checked={this.state.user.gender === "M"}
                                onChange={this.handleRadio}
                                value="M"
                                icon={
                                    <FiberManualRecord
                                        className={classes.radioUnchecked}
                                    />
                                    }
                                checkedIcon={
                                    <FiberManualRecord className={classes.radioChecked} />
                                    }
                                classes={{
                                    checked: classes.radio
                                }}
                            />
                        }
                        classes={{
                            label: classes.label
                        }}
                    />
                    <FormControlLabel
                        label="F"
                        control={
                            <Radio
                                checked={this.state.user.gender === "F"}
                                onChange={this.handleRadio}
                                value="F"
                                icon={
                                <FiberManualRecord
                                    className={classes.radioUnchecked}
                                />
                                }
                                checkedIcon={
                                <FiberManualRecord className={classes.radioChecked} />
                                }
                                classes={{
                                checked: classes.radio
                                }}
                            />
                        }
                        classes={{
                        label: classes.label
                        }}
                    />
                    </div>
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button color="primary" size="lg" onClick={this.handleSubmit}>
                        Signup
                      </Button>
                    </CardFooter>
                    <Link to="/login" className={classes.link}> <p> Have an account? </p> </Link>
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

export default withStyles(loginPageStyle)(Signup);
