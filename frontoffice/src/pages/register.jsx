import React from 'react';
import { Redirect } from "react-router-dom";
import './style/register.css';
import HomePage from "./home";

class RegisterBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      redirect: false
    };

    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handleUserPasswordChange = this.handleUserPasswordChange.bind(this);
  }

  UNSAFE_componentWillMount() {
    if (sessionStorage.getItem("userData")) {
      let data = JSON.parse(sessionStorage.getItem("userData"));
      this.setState({ role: data.role });
    } else {
      this.setState({ redirect: true });
    }
  }

  submitRegister(e) {
    fetch("https://localhost:3000/users/register/" + this.state.username + "/" + this.state.username).then(response => console.log(response));
  }

  handleUserNameChange(event) {
    this.setState({ username: event.target.value });
  }

  handleUserPasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {

    if (this.state.redirect) {
      return (<Redirect to={"/login"} />);
    }

    if (this.state.role != "admin") {
      return (<Redirect to={"/home"} />);
    }

    return (

      <div className="inner-container">

        <div className="header">
          Registar
          </div>

        <div className="box">

          <div className="input-group">

            <label htmlFor="username">Username</label>

            <input type="text" id="username" name="username" placeholder="Nome de utilizador" className="login-input" value={this.state.username} onChange={this.handleUserNameChange}></input>

          </div>

          <div className="input-group">

            <label htmlFor="username">Password</label>

            <input type="password" id="password" name="password" placeholder="Password" className="login-input" value={this.state.username} onChange={this.handleUserPasswordChange}></input>

          </div>

          <button className="login-btn" onClick={this.submitRegister.bind(this)}>Register</button>

        </div>

      </div>
    );
  }

}

export default RegisterBox;