import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import companyLogo from "../../images/logo.gif";
import EventBus from "../../common/EventBus";
import AuthService from "../../services/auth.service";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }

    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser, showAdminBoard } = this.state;

    return (
      <><header>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              <img src={companyLogo} alt="logo" height={125} />
            </Link>
            <Link to={"/"} className="navbar-brand mr-5">
              <h2>E-WASTE COLLECTION</h2>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                {currentUser ? (
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link to={"/home"} className="btn btn-success ml-2">
                        HOME
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to={"/profile"}
                        className="btn btn-success ml-2"
                      >
                        {currentUser.username}
                      </Link>
                    </li>
                    {showAdminBoard && (
                      <li className="nav-item">
                        <Link
                          to={"/admin"}
                          className="btn btn-success ml-2"
                        >
                          ADMIN BOARD
                        </Link>
                      </li>
                    )}
                    {currentUser && (
                      <li className="nav-item">
                        <Link to={"/user"} className="btn btn-success ml-2">
                          DASHBOARD
                        </Link>
                      </li>
                    )}
                    <li className="nav-item">
                      <Link
                        to={"/certificate"}
                        className="btn btn-success ml-2"
                      >
                        CERTIFICATE
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to={"/login"}
                        onClick={this.logOut}
                        className="btn btn-success ml-2"
                      >
                        LOGOUT
                      </Link>
                    </li>
                  </ul>
                ) : (
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link to={"/home"} className="btn btn-success ml-2">
                        HOME
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to={"/login"} className="btn btn-success ml-2">
                        LOGIN
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to={"/register"}
                        className="btn btn-success ml-2"
                      >
                        SIGN UP
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to={"/team"} className="btn btn-success ml-2">
                        MEET TEAM
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </nav></header>
      </>
    );
  }
}

export default Navbar;
