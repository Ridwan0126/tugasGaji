import React, { Component } from "react";
import "../page.css";
import { Input } from "../../component";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocusName: false,
      isFocusUsername: false,
      isFocusPassword: false,
      isFocusConfirmPassword: false,
      isFocusMainSalary: false,
      isFocusFood: false,
      isFocusTransport: false,
      isFocusEntertaint: false,
      userNew: {
        name: "",
        username: "",
        password: "",
        confirmpassword: "",
        role: "",
        mainsalary: 0,
        allowance: {
          food: 0,
          transport: 0,
          entertaint: 0,
        },
      },
    };
  }

  componentDidMount() {
    const { editStatus } = this.props;
    if (editStatus) {
      this.setState({
        isFocusMainSalary: true,
        isFocusFood: true,
        isFocusTransport: true,
        isFocusEntertaint: true,
      });
    }
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    const { editStatus, edittedUser } = this.props;

    if (!editStatus) {
      //for Register NEW USER

      let userInputNew = {
        [e.target[0].name]: e.target[0].value,
        [e.target[1].name]: e.target[1].value,
        [e.target[2].name]: e.target[2].value,
        [e.target[3].name]: e.target[3].value,
        [e.target[4].name]: e.target[4].value,
        [e.target[5].name]: e.target[5].value,
      };
      // eslint-disable-next-line no-undef
      console.log(this.state.userNew);

      if (userInputNew[e.target[2].name] === userInputNew[e.target[3].name]) {
        this.setState({ userNew: userInputNew });
        this.props.onAddNewUser(userInputNew);
        return alert("Input Data Berhasil :)");
      } else {
        return alert("Data salah!!!!!");
      }
    } //for EDIT SALARY

    let salaryInputNew = {
      id: edittedUser.id,
      [e.target[0].name]: parseInt(e.target[0].value),
      allowance: {
        [e.target[1].name]: parseInt(e.target[1].value),
        [e.target[2].name]: parseInt(e.target[2].value),
        [e.target[3].name]: parseInt(e.target[3].value),
      },
    };

    this.props.onEditUser(salaryInputNew);
    return alert("Edit Data Sukses : )");
  };

  focusHandler = (e) => {
    this.setState({ [e.target.id]: true });
  };
  blurHandler = (e) => {
    const value = e.target.value;
    if (value === "") {
      this.setState({ [e.target.id]: false });
    }
  };

  renderPage = () => {
    const { editStatus, edittedUser } = this.props;
    console.log("edit status", editStatus);

    if (editStatus)
      return (
        <>
          <h2>Edit Gaji : {edittedUser.name}</h2>

          <Input
            focusState={this.state}
            name="MainSalary"
            focus={this.focusHandler}
            blur={this.blurHandler}
            typeTx="text"
            defaultValue={edittedUser.mainSalary}
          />

          <Input
            focusState={this.state}
            name="Food"
            focus={this.focusHandler}
            blur={this.blurHandler}
            typeTx="text"
            defaultValue={edittedUser.allowance.food}
          />

          <Input
            focusState={this.state}
            name="Transport"
            focus={this.focusHandler}
            blur={this.blurHandler}
            typeTx="text"
            defaultValue={edittedUser.allowance.transport}
          />

          <Input
            focusState={this.state}
            name="Entertaint"
            focus={this.focusHandler}
            blur={this.blurHandler}
            typeTx="text"
            defaultValue={edittedUser.allowance.entertaint}
          />

          <button className="button" type="submit">
            Save
          </button>
        </>
      );

    return (
      <>
        <h2>Tambah Data</h2>

        <Input
          focusState={this.state}
          name="Name"
          focus={this.focusHandler}
          blur={this.blurHandler}
          typeTx="text"
          defaultValue={editStatus.name}
        />

        <Input
          focusState={this.state}
          name="Username"
          focus={this.focusHandler}
          blur={this.blurHandler}
          typeTx="text"
          defaultValue={editStatus.username}
        />

        <Input
          focusState={this.state}
          name="Password"
          focus={this.focusHandler}
          blur={this.blurHandler}
          typeTx="password"
          defaultValue={editStatus.password}
        />

        <Input
          focusState={this.state}
          name="ConfirmPassword"
          focus={this.focusHandler}
          blur={this.blurHandler}
          typeTx="password"
          defaultValue={editStatus.password}
        />

        <Input
          focusState={this.state}
          name="role"
          focus={this.focusHandler}
          blur={this.blurHandler}
          typeTx="text"
          defaultValue={editStatus.role}
        />

        <Input
          focusState={this.state}
          name="mainSalary"
          focus={this.focusHandler}
          typeTx="text"
          defaultValue={editStatus.mainSalary}
        />

        <button className="button" type="submit">
          Input Data
        </button>
      </>
    );
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.onSubmitHandler} className="bgform">
          {this.renderPage()}
        </form>
      </React.Fragment>
    );
  }
}

export default Form;
