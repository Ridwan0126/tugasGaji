import React, { Component } from "react";
import { Login, Form, UserList, Detail } from "../../page";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edittedUser: {},
      detailUser: {},
      userList: [
        {
          id: 1,
          name: "Muhammad Abidin Syah",
          username: "Abidin@gmail.com",
          password: "Abidin22",
          role: "HRD",
          mainSalary: 5000000,
          allowance: {
            food: 20000,
            transport: 100000,
          },
        },
        {
          id: 2,
          name: "Zain Al Qufron",
          username: "zain1@gmail.com",
          password: "zain123",
          role: "Manager",
          mainSalary: 4000000,
          allowance: {
            entertaint: 1000000,
          },
        },
        {
          id: 3,
          name: "Ucup Markucup",
          username: "ucup@gmail.com",
          password: "ucup123",
          role: "Karyawan",
          mainSalary: 30000000,
          allowance: {
            food: 50000,
            transport: 150000,
          },
        },
        {
          id: 4,
          name: "Kempi Markempi",
          username: "kempi@gmail.com",
          password: "kempi123",
          role: "Karyawan",
          mainSalary: 30000000,
          allowance: {
            food: 50000,
            transport: 150000,
          },
        },
        {
          id: 5,
          name: "Mawar",
          username: "mawar@gmail.com",
          password: "mawar123",
          role: "Karyawan",
          mainSalary: 30000000,
          allowance: {
            food: 50000,
            transport: 150000,
          },
        },
      ],
    };
  }
  editUserHandler = (edittedSalary) => {
    const userCopy = this.state.userList;
    const indexForEdit = userCopy
      .map((user) => {
        return user.id;
      })
      .indexOf(edittedSalary.id);

    console.log("SALARY1", userCopy[indexForEdit].mainSalary);
    userCopy[indexForEdit].mainSalary = edittedSalary.mainsalary;
    userCopy[indexForEdit].allowance.food = edittedSalary.allowance.food;
    userCopy[indexForEdit].allowance.transport =
      edittedSalary.allowance.transport;
    userCopy[indexForEdit].allowance.entertaint =
      edittedSalary.allowance.entertaint;

    this.setState({
      userList: userCopy,
    });

    console.log("SALARY2", userCopy[indexForEdit].mainSalary);
    this.props.goToPage("userList");
  };

  editEventHandler = (id) => {
    const user = this.state.userList[id - 1];
    this.setState({
      edittedUser: user,
    });
    this.props.goToPage("form");
    this.props.onEditEvent(true);
  };

  detailEventHandler = (id) => {
    const user = this.state.userList[id - 1];
    this.setState({
      detailUser: user,
    });
    this.props.goToPage("detail");
  };

  renderPage = () => {
    const { loggedUser, page, onLogin, editStatus } = this.props;
    console.log("CURRENT detail:", this.state.detailUser);

    const filteredUserBasedRole = [];

    if (loggedUser) {
      this.state.userList.map((user, index) => {
        if (loggedUser.role === "HRD") {
          filteredUserBasedRole.push(user);
          return index;
        }

        if (
          loggedUser.role === "Manager" &&
          (user.username === loggedUser.username || user.role === "Karyawan")
        ) {
          filteredUserBasedRole.push(user);
          return index;
        }

        if (
          loggedUser.role === "Karyawan" &&
          user.username === loggedUser.username
        ) {
          filteredUserBasedRole.push(user);
          return index;
        }

        return "";
      });
    }

    if (page === "form")
      return (
        <Form
          onAddNewUser={this.addNewUserHandler}
          loggedUser={loggedUser}
          editStatus={editStatus}
          onEditUser={this.editUserHandler}
          edittedUser={this.state.edittedUser}
        />
      );

    if (page === "userList")
      return (
        <UserList
          dataUser={filteredUserBasedRole}
          loggedUser={loggedUser}
          onEditEvent={this.editEventHandler}
          onDetailEvent={this.detailEventHandler}
        />
      );

    if (page === "detail")
      return (
        <Detail
          detailUser={
            loggedUser.role !== "Karyawan"
              ? this.state.detailUser
              : filteredUserBasedRole[0]
          }
        />
      );

    return <Login onLogin={onLogin} dataUser={this.state.userList} />;
  };

  render() {
    console.log("currentUSERLIST", this.state.userList);
    return <div className="body">{this.renderPage()}</div>;
  }
}

export default Body;
