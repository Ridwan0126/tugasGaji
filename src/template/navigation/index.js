import React, { Component } from "react";
import { Menu } from "../../component";
import "./nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedUser: {
        name: "",
        username: "",
        password: "",
      },
    };
  }

  componentDidMount() {
    const { loggedUser } = this.props;
    this.setState({ loggedUser: loggedUser });
  }

  showUserListAfterLogin = () => {
    //for page UserList ONLY
    const { goToPage, loginStatus, loggedUser } = this.props;

    if (loginStatus && loggedUser.role !== "Employee") {
      return (
        <Menu
          isActivePage={this.checkActivePage("userList")}
          redirect={() => goToPage("userList")}
        >
          User List
        </Menu>
      );
    }

    return "";
  };

  showPageAfterLogin = () => {
    //for page login, logut, register/edit
    const { goToPage, loginStatus, loggedUser, editStatus } = this.props;
    console.log("Edit in nav", editStatus);
    if (loginStatus && loggedUser.role === "HRD")
      return (
        <>
          <Menu
            isActivePage={this.checkActivePage("logout")}
            redirect={() => goToPage("logout")}
          >
            Logout
          </Menu>
        </>
      );

    if (loginStatus)
      return (
        <>
          <Menu
            isActivePage={this.checkActivePage("logout")}
            redirect={() => goToPage("logout")}
          >
            Logout
          </Menu>
        </>
      );

    return (
      <>
        {/* <Menu
          isActivePage={this.checkActivePage("login")}
          redirect={() => goToPage("login")}
        >
          Login
        </Menu> */}
      </>
    );
  };
  getUser = () => {
    const { loggedUser, loginStatus } = this.props;
    if (loginStatus)
      return (
        <div className="welcome">
          {`Hallo  ${String(loggedUser.name)}`} {`, Anda`}
          {` `}
          {`Login Sebagai ${String(loggedUser.role)}.`}
        </div>
      );

    return (
      <div className="welcome">
        Hallo Enginner, Silahkan Login Dahulu......
        <hr />
      </div>
    );
  };

  checkActivePage = (activePage) => {
    const { page } = this.props;
    if (activePage === page) return "active";

    return "";
  };

  render() {
    const { loggedUser } = this.props;
    console.log("cekk", loggedUser);
    return (
      <>
        <div className="nav">
          {this.showPageAfterLogin()}
          {this.showUserListAfterLogin()}
        </div>
        {this.getUser()}
      </>
    );
  }
}

export default Nav;
