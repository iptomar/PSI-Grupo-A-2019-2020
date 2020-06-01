import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import './style/users.css';
import './style/pageframe.css';
import NavBar from "./navBar";

class RoutesToValidate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        loggedIn:false,
        redirect: "/RoutesToValidate",
        role: "",
        user:JSON.parse(sessionStorage.getItem("userData")),
        routes:[]
    };
    this.redirecter = this.redirecter.bind(this);
  }

  componentDidMount(){
    if(this.state.user==null){
      this.setState({redirect:"/"});
    }
    else{
      this.getNoVRoutes();
    }
  }

  async getNoVRoutes(){
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json"); myHeaders.append("Content-type", "application/json");
    var raw = JSON.stringify({
      "email":this.state.user.email
    });


    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw, mode: 'cors',
      redirect: 'follow'
    };

    let response = await fetch(this.props.ApiPath+"routes/getnonvalidated", requestOptions);
    let data = await response.json();
    this.setState({routes:data.mesage});
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

  async validateRoute(idRoute){
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json"); myHeaders.append("Content-type", "application/json");
    var raw = JSON.stringify({
      "email":this.state.user.email,
      "id":idRoute
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw, mode: 'cors',
      redirect: 'follow'
    };

    let response = await fetch(this.props.ApiPath+"routes/validate", requestOptions);
    let data = await response.json();
    console.log(data);
    await this.getNoVRoutes();
  }

  render() {
    if (this.state.redirect!=="/RoutesToValidate") {
      return (<Redirect to={this.state.redirect} />);
    }      
    
    //Array que irá conter a lista de utilizadores
    let UI = [];

    if(this.state.routes!==[]){
        this.state.routes.forEach((element)=>{
            UI.push(
                <tr id={element.id}>
                    <td>{element.id}</td>
                    <td>{element.nome}</td> 
                    <td>{element.descricao}</td> 
                    <td>
                    <button onClick={()=>{this.validateRoute(element.id)}}>✏️</button>
                    </td>
                </tr>
            );
        })
    }

    
    return (
        <div id="body">
            <NavBar redirecter={this.redirecter}></NavBar>
            <div id="PageMainDiv">
                <div className="BackgroundDiv"></div>
                <div id="PageCenter">
                <div id="PageCentralDiv">

                    <div className="TitleDiv"></div>
                    <p className="TitleP">Utilizadores</p>


                    <table id="UsersTable">
                       <tr>
                           <th className="TableHeader">ID </th>
                           <th className="TableHeader">Titulo</th>
                           <th className="TableHeader">Data</th>
                           <th className="TableHeader">Validar</th>
                        </tr>
                        {UI} 
                    </table>


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

export default RoutesToValidate;