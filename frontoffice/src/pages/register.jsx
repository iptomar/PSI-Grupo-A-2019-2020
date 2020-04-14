import React from 'react';
import { Link, Redirect } from "react-router-dom";
import './style/register.css';

class RegisterBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      redirect: false,
      RegisterStatus: null
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

  async submitRegister() {

    this.state.username = document.getElementById("username").value;
    this.state.password = document.getElementById("password").value;

    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json"); myHeaders.append("Content-type", "application/json");
    var raw = JSON.stringify({ "user": this.state.username, "password": this.state.password, "token": "K(+?y/(Le0lMnpP+!vZ)GQToI=WesVRXapAc21AXqXx*M8S78KTgx7i-vn)dUu?0" });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw, mode: 'cors',
      redirect: 'follow'
    };

    let response = await fetch("https://localhost:3000/users/register", requestOptions);
    let data = await response.json();
    console.log(data);

    if (data.hasOwnProperty('token')) {
      this.setState({ RegisterStatus: true });
    } else {
      this.setState({ RegisterStatus: false });
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
      return (<Redirect to={"/login"} />);
    }

    if (this.state.role !== "admin") {
      return (<Redirect to={"/home"} />);
    }

    return (

      <div className="inner-container">

        <Link type="button" to="/home">Voltar</Link>

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

            <input type="password" id="password" name="password" placeholder="Password" className="login-input" value={this.state.password} onChange={this.handleUserPasswordChange}></input>

          </div>

          <button className="login-btn" onClick={this.submitRegister.bind(this)}>Register</button>

        </div>

        {this.state.RegisterStatus === true && (<div>
          <p>Utilizador registado com sucesso!</p>
        </div>)}

        {this.state.RegisterStatus === false && (<div>
          <p>Este utilizador já existe!</p>
        </div>)}

      </div>
    );
  }

}

export default RegisterBox;