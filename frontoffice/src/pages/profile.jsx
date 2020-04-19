import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import './style/profile.css';
import './style/pageframe.css';
import NavBar from "./navBar";

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedIn:false,
            redirect: "/profile",
            VerifyStatus: "",
            EditStatus: "",
            userdata:null,
            token: ""

        };
        this.redirecter = this.redirecter.bind(this);
        this.fixText=this.fixText.bind(this);
        this.edit=this.edit.bind(this);
        this.reload=this.reload.bind(this);
    }

    componentDidMount(){
        if(sessionStorage.getItem("userData")){
            let data = JSON.parse(sessionStorage.getItem("userData"));
            this.setState({userdata: data});
            this.setState({token: data.token });
            this.setState({loggedIn : true});            
        }else{
            this.setState({loggedIn : false});
        }
    }

    async edit() {
        let name = document.getElementById("name").value;
        let surname = document.getElementById("surname").value;
        let age = document.getElementById("age").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let div = document.getElementById("EditStatusDiv");
        let update ={};
    
        if(isNaN(age) || (age<0 || age>150)){
          this.setState({VerifyStatus:"A idade especificada não é válida"});
          return;
        }
    
        if(name===""&&surname===""&& age===""&& email===""&& password==="" ){
            div.style.color="#dc3545";
            this.setState({EditStatus:"Nenhum campo alterado"});
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
    
        let response = await fetch("http://localhost:3000/users/update", requestOptions);
        let data = await response.json();
          
        if (data.sucess) {
            div.style.color="#28a745";
            this.setState({EditStatus:"Perfil atualizado com sucesso!", VerifyStatus:""})
          } else {
            div.style.color="#dc3545";
            this.setState({EditStatus:"Houve um erro ao atulizar o seu perfil!", VerifyStatus:""})
        }

      }

    redirecter(local){
        if(local==="/logout"){
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
        if (this.state.redirect!=="/profile") {
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
                        <p className="TitleP">Perfil</p>
      
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
                                disabled="disabled"
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

                            <button
                                id="SaveBtt"
                                onClick={ this.edit}
                            >Guardar</button>

                            <div id="EditStatusDiv">{this.state.EditStatus}</div>

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

export default Profile;