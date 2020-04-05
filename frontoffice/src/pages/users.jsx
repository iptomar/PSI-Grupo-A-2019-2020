import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import './style/users.css';
import './style/pageframe.css';
import NavBar from "./navBar";

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedIn:false,
            redirect: "/users",
            role: "",
            user:null,
            //old
                listOfUsers: []
        };
        this.redirecter = this.redirecter.bind(this);
        //old
            this.teste = this.teste.bind(this);
    }

    componentDidMount(){
        if(sessionStorage.getItem("userData")){
            let data = JSON.parse(sessionStorage.getItem("userData"));
            this.setState({role: data.email});
            this.setState({user: data});
            sessionStorage.setItem("token",data.token);
            this.setState({loggedIn : true});   
            //old
            this.teste();
            
        }else{
            this.setState({loggedIn : false});
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

    async deleteUser(id){
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json"); myHeaders.append("Content-type", "application/json");
        var raw = JSON.stringify({ "user": this.state.user.token, "id": id });
    
    
        var requestOptions = {
          method: 'DELETE',
          headers: myHeaders,
          body: raw, mode: 'cors',
          redirect: 'follow'
        };
    
        let response = await fetch("https://localhost:3000/users/delete", requestOptions);
        let data = await response.json();
        await this.teste();
    }
    
    async teste(){
        let response = await fetch(
          "https://localhost:3000/users/getUsers/" + sessionStorage.getItem("token")
        ); 
    
        let dat = await response.json();
    
        this.setState({listOfUsers:dat.mesage});
        console.log(this.state.listOfUsers);
    }

    render() {
        if (this.state.redirect!=="/users") {
          return (<Redirect to={this.state.redirect} />);
        }      
        
        let UI = [];

        if(this.state.listOfUsers!==[]){
            this.state.listOfUsers.forEach((element)=>{
                UI.push(
                    <tr id={element.id}>
                        <td>{element.name} {element.surname}</td>
                        <td>{element.email}</td> 
                        <td>{element.age}</td> 
                        <td>todo</td> 
                        <td>
                        <button onClick={()=> this.deleteUser(element.id)}>Deletar</button>
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
                               <th className="TableFields">Nome </th>
                               <th className="TableFields">E-mail</th>
                               <th className="TableFields">Idade</th>
                               <th className="TableFields">Cargo</th>
                               <th className="TableFields">Opções</th>
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

export default Users;