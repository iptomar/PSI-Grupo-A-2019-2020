import React,{Component} from "react";
import {Link} from "react-router-dom";
import "./style/users.css";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      EditUser: null,
      token: ""
    };
  }

  componentDidMount() {
      let data = JSON.parse(sessionStorage.getItem("userData"));
      this.setState({ token: data.token });
  }

  async submitEdit() {
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let password = document.getElementById("password").value;
    let update ={};
    
    if(email!==""&&!email.includes("@")){
      alert("Insira um email válido");
      return ;
    }

    if(isNaN(parseInt(age)) && (age<0 || age>150)){
      alert("Insira uma idade válida");
      return;
    }

    name !== "" ? update.name = name : console.log(); 
    surname !== "" ? update.surname = surname : console.log();
    email !== "" ? update.email = email : console.log(); 
    age !== "" ? update.age = age : console.log();
    password !== "" ? update.password = password : console.log();
    
    
    
    

    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json"); myHeaders.append("Content-type", "application/json");
    var raw = JSON.stringify({
      user:this.state.token,
      data:update
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw, mode: 'cors',
      redirect: 'follow'
      };

    let response = await fetch("https://localhost:3000/users/update", requestOptions);
    let data = await response.json();
      console.log(data);

    if (data.sucess===true) {
        this.setState({ EditUser: true });
      } else {
        this.setState({ EditUser: false });
    }
  }


  render() {
    return (
      <div className="inner-container">
        <Link type="button" to="/">
          Voltar
        </Link>

        <div className="header">Editar dados</div>
      
        <div className="box">
          <div className="input-group">
            <label htmlFor="name">Name</label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nome"
              className="login-input"
            ></input>
          </div>

          <div className="input-group">
            <label htmlFor="surname">Surname</label>

            <input
              type="text"
              id="surname"
              name="surname"
              placeholder="Apelido"
              className="login-input"
            ></input>
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>

            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              className="login-input"
            ></input>
          </div>

          <div className="input-group">
            <label htmlFor="email">Age</label>

            <input
              type="text"
              id="age"
              name="age"
              placeholder="Idade"
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
            onClick={this.submitEdit.bind(this)}
          >
            Guardar
          </button>
        </div>

        {this.state.EditUser === true && (
          <div>
            <p>Utilizador registado com sucesso!</p>
          </div>
        )}

        {this.state.EditUser === false && (
          <div>
            <p>Erro ao editar dados!</p>
          </div>
        )}
      </div>
    );
  }
}

export default Profile;
