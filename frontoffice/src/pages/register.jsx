import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import './style/register.css';
import './style/pageframe.css';
import NavBar from "./navBar";

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedIn:false,
            redirect: "/Register",
            VerifyStatus: "",
            EditStatus: "",
            userdata:null,
            isadmin: true

        };
        this.redirecter = this.redirecter.bind(this);
        this.fixText=this.fixText.bind(this);
        this.register=this.register.bind(this);
        this.reload=this.reload.bind(this);
    }

    componentDidMount(){
        if(sessionStorage.getItem("userData")){
            let data = JSON.parse(sessionStorage.getItem("userData"));
            this.setState({userdata: data});
            this.setState({isadmin: data.isadmin });
            this.setState({loggedIn : true});          
        }else{
            this.setState({loggedIn : false});
            this.setState({isadmin: false });
        }
    }

    async register() {
        let name = document.getElementById("name").value;
        let surname = document.getElementById("surname").value;
        let age = document.getElementById("age").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let div = document.getElementById("RegisterStatusDiv");
        let update ={};
    
        console.log(isadmin);

        if(name===""|| surname==="" || age===""|| email===""|| password===""){
          div.style.color="#dc3545";
          this.setState({VerifyStatus:"Preencha todos os campos"});
          return;
        }

        if(isNaN(age) || (age<0 || age>150)){
          this.setState({VerifyStatus:"A idade especificada não é válida"});
          return;
        }

        if(!email.includes("@")){
          this.setState({VerifyStatus:"O email especificado não é válido"});
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
          age: age
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          mode: "cors",
          redirect: "follow"
        };

        let response = await fetch(
            this.props.ApiPath+"users/register",
          requestOptions
        );
        let data = await response.json();
          
        if (data.sucess) {
            div.style.color="#28a745";
            this.setState({EditStatus:"Registado com sucesso!", VerifyStatus:""})
          } else {
            div.style.color="#dc3545";
            this.setState({EditStatus:"Houve um erro ao registar utilizador!", VerifyStatus:""})
        }

      }

    redirecter(local){
        if(local==="/Logout"){
            sessionStorage.setItem("userdata","");
            sessionStorage.clear();
            this.setState({redirect: "/", loggedIn : false, data: null});    
        } 
        else      
        this.setState({redirect: local});
    }

    fixText(){
        this.setState({AccountStatus:""})
        let txt=document.getElementById("email").value;
        txt=txt.trim();
        txt=txt.toLowerCase();
        document.getElementById("email").value=txt;
    }

    reload(){
        this.setState({
            EditStatus:"",
            VerifyStatus:""
        })
    }

    render() {
        if (this.state.redirect!=="/Register") {
          return (<Redirect to={this.state.redirect} />);
        }        
        
        /**
        * Apenas pode ter acesso a esta página o utilizador "admin"
        */
       if (this.state.isadmin == false && sessionStorage.getItem("userData")) {
        this.setState({ redirect: "/" });
        return (<Redirect to={this.state.redirect} />);
        }

        return (
            <div id="body">
                <NavBar redirecter={this.redirecter}></NavBar>
                <div id="PageMainDiv">
                    <div className="BackgroundDiv"></div>
                    <div id="PageCenter">
                    <div id="PageCentralDiv">
                        <div className="TitleDiv"></div>
                        <p className="TitleP">Novo Utilizador</p>
      
                        <div id="ProfileBox">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Nome"
                                className="TextBox"
                                onChange={
                                    this.reload
                                }
                            ></input>
                            <input
                                type="text"
                                id="surname"
                                name="surname"
                                placeholder="Apelido"
                                className="TextBox"
                                onChange={
                                    this.reload
                                }
                            ></input>

                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Email"
                                className="TextBox"
                                onFocus={this.fixText} 
                                onChange={
                                    this.fixText,
                                    this.reload
                                }
                            ></input>

                            <input
                                type="text"
                                id="age"
                                name="age"
                                placeholder="Idade"
                                className="TextBox"
                                onChange={
                                    this.reload
                                }
                            ></input>

                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                                className="TextBox"
                                onChange={
                                    this.reload
                                }
                            ></input>

                            <div id="VerifyStatusDiv">{this.state.VerifyStatus}</div>
                            
                            <div id="RegButtonsDiv">
                            <button className="RegisterBtts" onClick={()=>{this.setState({redirect: "/Users"})}} >Voltar</button>
                            <button className="RegisterBtts" onClick={ this.register} >Registar</button>
                            </div>

                            <div id="RegisterStatusDiv">{this.state.EditStatus}</div>

                        </div>

                        

                    </div>
                    <footer id="FooterDiv">
                        <p id="Footer1p">ToursTomar</p>
                        <p id="Footer2p">- Projeto desenvolvido no âmbito da cadeira de Projeto de Sistemas de Informação - Instituto Politécnico de Tomar</p>
                    </footer>
                    </div>
                    <div className="BackgroundDiv"></div>
                </div>
                
            </div>
        );
    }
}

export default Register;
