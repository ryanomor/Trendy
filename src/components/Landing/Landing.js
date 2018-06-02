import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class Landing extends Component {
  render() {
    console.log(process.env);
    return (
      <div className="landing-page">

        <nav className="navbar">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav navbar-right">
                <li>
                  <Link to="/register">Sign up</Link>
                </li>
                <li>
                  <Link to="/login">login</Link>
                </li>
              </ul>
            </div>
        </nav>

        <div className="page-header header-filter">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center">
                <h1 className="title ">Welcome to Trendy</h1>
                <h4 className="title">Discover New Music, Make New Friends, Find Events</h4>
                <h5 className="description">v1.0.0</h5>
              </div>
            </div>
          </div>
          <div className="footer footer-transparent">
            <div className="container">
              <nav className="pull-left">
                <ul>
                  <li>
                    <a href="https://www.github.com/ryanomor">
                      Github
                    </a>
                  </li>
                  <li>
                    <a href="http://presentation.creative-tim.com">
                      About
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="copyright pull-right">
                &copy;
                    <script>
                      document.write(new Date().getFullYear()) // Always gets the current year
                    </script> Made with love
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;