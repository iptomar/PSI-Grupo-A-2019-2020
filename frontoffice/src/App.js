import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: "",
      isLoginOpen: true,
      isRegisterOpen: false
    };
  }

  showLoginBox() {
    this.setState({ isRegisterOpen: false, isLoginOpen: true });
  }

  showRegisterBox() {
    this.setState({ isRegisterOpen: true, isLoginOpen: false });
  }

  render() {
    return (
      <div className="root-container">

        <div className="box-controller">
          <div className="controller" onClick={this.showLoginBox.bind(this)}>
            Login
          </div>
          <div className="controller" onClick={this.showRegisterBox.bind(this)}>
            Register
          </div>
        </div>
        <div className="box-container">

          {this.state.isLoginOpen && <LoginBox />}
          {this.state.isRegisterOpen && <RegisterBox />}
        </div>
      </div>
    );
  }
}

class LoginBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handleUserPasswordChange = this.handleUserPasswordChange.bind(this);
  }

  async submitLogin() {
    console.log(document.getElementById("username").value);
    console.log(document.getElementById("password").value);
    var myHeaders = new Headers();

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://localhost:3000/users/login/admin/admin", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    //fetch("https://localhost:3000/users/login/" + this.state.username + "/"+ this.state.username).then(response => console.log(response));
  }

  handleUserNameChange(event) {
    this.setState({ username: event.target.value });
  }

  handleUserPasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {

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

            <input type="password" id="password" name="password" placeholder="Password" className="login-input" value={this.state.password} onChange={this.handleUserPasswordChange}></input>

          </div>

          <input type="submit" className="login-btn" onClick={this.submitLogin.bind(this)} value="Login" />

        </div>

      </div>
    );
  }

}

class RegisterBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handleUserPasswordChange = this.handleUserPasswordChange.bind(this);
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



export default App;
