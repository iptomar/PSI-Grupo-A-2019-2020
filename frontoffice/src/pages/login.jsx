import React from 'react';
import './style/login.css';
import { Redirect } from "react-router-dom";

function AccountLoginFailed() {
  return <div>
          <p>Nome de utilizador ou password errada</p>
        </div>
}

class LoginBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      AccountStatus: "not-logged-in",
      redirect: false
    };
    
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handleUserPasswordChange = this.handleUserPasswordChange.bind(this);
  }

  async submitLogin() {
    this.state.username = document.getElementById("username").value;
    this.state.password = document.getElementById("password").value;

    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json"); myHeaders.append("Content-type", "application/json");
    var raw = JSON.stringify({ "user": this.state.username, "password": this.state.password });


    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw, mode: 'cors',
      redirect: 'follow'
    };

    let response = await fetch("https://localhost:3000/users/login", requestOptions);
    let data = await response.json();
    console.log(data);

    if (data.hasOwnProperty('token')) {
      sessionStorage.setItem("userData", JSON.stringify(data));
      this.setState({ AccountStatus: "logged-in", redirect: true});
    }else{
      this.setState({ AccountStatus: "bad-login" });
      console.log("erro");
    }

  }


  handleUserNameChange(event) {
    this.setState({ username: event.target.value });
  }

  handleUserPasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {

    if (this.state.redirect) {
      return (<Redirect to={"/home"} />);
    }

    if (sessionStorage.getItem("userData")) {
      return (<Redirect to={"/home"} />);
    }

    return (
      <div className="inner-container">
        <div className="header">
          Login
        </div>

        <div className="box">

          <div className="input-group">

            <label htmlFor="username">Username</label>

            <input type="text" id="username" name="username" placeholder="Nome de utilizador" className="login-input" value={this.state.username} onChange={this.handleUserNameChange}></input>

          </div>

          <div className="input-group">

            <label htmlFor="username">Password</label>

            <input type="password" id="password" name="password" placeholder="Password" className="login-input" value={this.state.password1} onChange={this.handleUserPasswordChange}></input>

          </div>

          <input type="submit" className="login-btn" onClick={this.submitLogin.bind(this)} value="Login" />

        </div>

          {this.state.AccountStatus==="bad-login" && (<AccountLoginFailed />)}

      </div>

    );

  }

}

export default LoginBox;