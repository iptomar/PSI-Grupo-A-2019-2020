import React from 'react';
import './style/login.css';
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AccountStatus: "",
      redirect:""
    };
    this.fixText=this.fixText.bind(this);
    this.submitLogin=this.submitLogin.bind(this);
    this.homepage=this.homepage.bind(this);
  }

  async submitLogin() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(email==="" || password===""){
      this.setState({AccountStatus:"Email ou password em falta"})
      return;
    }

    if(!email.includes("@")){
      this.setState({AccountStatus:"Email inválido"})
      return;
    }

    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json"); myHeaders.append("Content-type", "application/json");
    var raw = JSON.stringify({ "email": email, "password": password });


    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw, mode: 'cors',
      redirect: 'follow'
    };

    let response = await fetch(this.props.ApiPath+"users/login", requestOptions);
    let data = await response.json();
    console.log(data);
    data = data.mesage;

    if (data.hasOwnProperty('token')) {
      sessionStorage.setItem("userData", JSON.stringify(data));
      this.setState({redirect:"/"});
    }else{
      this.setState({AccountStatus:"Email inexistente ou password incorreta"})
    }

  }

  fixText(){
    this.setState({AccountStatus:""})
    let txt=document.getElementById("email").value;
    txt=txt.trim();
    txt=txt.toLowerCase();
    document.getElementById("email").value=txt;
  }

  homepage(){
    this.setState({redirect:"/"})
  }

  render() {

    if (sessionStorage.getItem("userData")||this.state.redirect==="/") {
      return (<Redirect to={"/"} />);
    }

    return (
      <div id="LoginMainDiv">
        <div id="LoginBackDiv">
          <div id="BackBtt" onClick={this.homepage}>
            <img id="BackImg" src="./assets/back.png" alt=""></img>
          </div>
        </div>
        <div id= "LoginInnerDiv">
          
          <img id="LoginLogoImg" src="./assets/logo.png" alt=""></img>
          <div id="LoginText"> Login </div>

          <div id="LoginStatusDiv">{this.state.AccountStatus}</div>
          
          <input type="text" id="email" name="email" placeholder="Email" className="LoginInput" onFocus={this.fixText} onChange={this.fixText}/>

          <input type="password" id="password" name="password" placeholder="Password" className="LoginInput" onFocus={this.fixText}/>
      
          <input id="LoginBtt" type="submit" value="Login" onClick={this.submitLogin}/>

        </div>
      </div>
    );
  }
}

export default Login;