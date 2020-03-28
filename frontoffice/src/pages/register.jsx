import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./style/register.css";

class RegisterBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      RegisterStatus: null,
      token: ""
    };

  }

  componentDidMount() {
    if (sessionStorage.getItem("userData")) {
      let data = JSON.parse(sessionStorage.getItem("userData"));
      if (data.email !== "admin@admin.com") {
        this.setState({ redirect: "home" });
      } else {
        this.setState({ token: data.token });
      }
    } else {
      this.setState({ redirect: "login" });
    }
  }

  async submitRegister() {
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let password = document.getElementById("password").value;
    
    if(name==""||surname==""||email==""||age==""||password==""){
      alert("Preencha todos os campos por favor");
      return ;
    }
    if(age<0 || age>150){
      alert("Preencha com uma idade válida");
      return ;
    }
    if(!email.includes("@")){
      alert("Insira um email válido");
      return ;
    }

    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-type", "application/json");
    var raw = JSON.stringify({
      name: name,
      surname: surname,
      password: password,
      email: email,
      age: age,
      tokenAdmin: this.state.token
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      mode: "cors",
      redirect: "follow"
    };

    let response = await fetch(
      "https://localhost:3000/users/register",
      requestOptions
    );
    let data = await response.json();
    console.log(data);

    if (data.sucess==true) {
      this.setState({ RegisterStatus: true });
    } else {
      this.setState({ RegisterStatus: false });
    }
  }


  render() {
    if (this.state.redirect != "") {
      this.setState({ redirect: "" });
      return <Redirect to={"/" + this.state.redirect} />;
    }

    return (
      <div className="inner-container">
        <Link type="button" to="/home">
          Voltar
        </Link>

        <div className="header">Registar</div>
      
        <div className="box">
          <div className="input-group">
            <label htmlFor="name">Name</label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nome de utilizador"
              className="login-input"
            ></input>
          </div>

          <div className="input-group">
            <label htmlFor="surname">Surname</label>

            <input
              type="text"
              id="surname"
              name="surname"
              placeholder="Apelido do utilizador"
              className="login-input"
            ></input>
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>

            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email do utilizador"
              className="login-input"
            ></input>
          </div>

          <div className="input-group">
            <label htmlFor="email">Age</label>

            <input
              type="text"
              id="age"
              name="age"
              placeholder="Idade do utilizador"
              className="login-input"
            ></input>
          </div>

          <div className="input-group">
            <label htmlFor="username">Password</label>

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="login-input"
            ></input>
          </div>

          <button
            className="login-btn"
            onClick={this.submitRegister.bind(this)}
          >
            Register
          </button>
        </div>

        {this.state.RegisterStatus === true && (
          <div>
            <p>Utilizador registado com sucesso!</p>
          </div>
        )}

        {this.state.RegisterStatus === false && (
          <div>
            <p>Este utilizador já existe!</p>
          </div>
        )}
      </div>
    );
  }
}

export default RegisterBox;
