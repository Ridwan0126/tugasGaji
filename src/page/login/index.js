import React, { Component } from "react";
import "../page.css";
import { Input } from "../../component";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocusUsername: false,
      isFocusPassword: false,
      userConfig: {
        username: "",
        password: "",
      },
    };
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    const keyUsername = e.target[0].name;
    const keyPassword = e.target[1].name;
    let userInput = {
      name: "",
      [keyUsername]: e.target[0].value,
      [keyPassword]: e.target[1].value,
    };
    console.log(this.state.userConfig[keyUsername]);

    const { dataUser } = this.props;

    console.log("cek login :", userInput[keyUsername]);
    for (let i = 0; i < dataUser.length; i++) {
      console.log("pemanggilan data :", dataUser[i][keyUsername]);
      if (
        userInput[keyUsername] === dataUser[i][keyUsername] &&
        userInput[keyPassword] === dataUser[i][keyPassword]
      ) {
        // console.log("ceklogged",userInput)
        userInput["name"] = dataUser[i]["name"];
        userInput["role"] = dataUser[i]["role"];
        this.props.onLogin(userInput);
        return alert("Login Successfully, klik OK untuk Masuk ke Menu!!!");
      }
    }
    return alert("username atau password salah, silahkan cek lagi!!!");
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

  render() {
    console.log("data fokus ke", this.state.isFocusUsername);
    return (
      <React.Fragment>
        <form onSubmit={this.onSubmitHandler} className="bgform">
          <Input
            focusState={this.state}
            name="Username"
            placeholder="Username"
            typeTx="text"
          />

          <Input
            focusState={this.state}
            name="Password"
            focus={this.focusHandler}
            blur={this.blurHandler}
            typeTx="password"
          />

          <button className="button" type="submit">
            Sign In
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Login;
