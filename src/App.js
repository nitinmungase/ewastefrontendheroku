import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/About/Footer";
import AuthService from "./services/auth.service";
import Team from "./components/About/Team";
import Blog from "./components/About/Blog";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/About/Home";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardAdmin from "./components/board-admin.component";
import Navbar from "./components/About/Navbar";
import Certificate from "./components/About/Certificate";
//import AuthVerify from "./common/auth-verify";
import EventBus from "./common/EventBus";
import Process from "./components/About/Process";

class App extends Component {
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
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/user" component={BoardUser} />
          <Route path="/admin" component={BoardAdmin} />
          <Route path="/team" component={Team} />
          <Route exact path="/certificate" component={Certificate} />
          <Route path="/blog" component={Blog} />
          <Route path="/process" component={Process} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
