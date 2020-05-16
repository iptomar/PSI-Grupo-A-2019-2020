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
            redirect: "/Users",
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
        if(local==="/Logout"){
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
    
        let response = await fetch(this.props.ApiPath+"users/delete", requestOptions);
        await this.teste();
    }
    
    async teste(){
        let response = await fetch(
            this.props.ApiPath+"users/getUsers/" + sessionStorage.getItem("token")
        ); 
    
        let dat = await response.json();
    
        this.setState({listOfUsers:dat.mesage});
    }

    render() {
        if (this.state.redirect!=="/Users") {
          return (<Redirect to={this.state.redirect} />);
        }      

        /**
         * Apenas pode ter acesso a esta página o utilizador "admin"
         */
        if(sessionStorage.getItem("token") !== "VNIMKOeoP0VBOIphd0RJGzlKytNMAREAR3mS6p4O7WCzpbZSGmg4yNUyEnkZni57"){
            this.setState({ redirect: "/"});
            return (<Redirect to={this.state.redirect} />);
        }
        
        //Array que irá conter a lista de utilizadores
        let UI = [];

        if(this.state.listOfUsers!==[]){
            this.state.listOfUsers.forEach((element)=>{
                UI.push(
                    <tr id={element.id}>
                        <td>{element.name} {element.surname}</td>
                        <td>{element.email}</td> 
                        <td>{element.age}</td> 
                        <td><i>todo...</i></td> 
                        <td>
                        <button >✏️</button>
                        <button onClick={()=> this.deleteUser(element.id)}>❌</button>
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
                        
                        <div id="RegisterRedirectDiv"> 
                            <button id="RegisterRedirectBtt"
                            onClick={()=>{this.setState({redirect: "/Register"})}}
                            >Novo utilizador</button>
                        </div>

                        <table id="UsersTable">
                           <tr>
                               <th className="TableHeader">Nome </th>
                               <th className="TableHeader">E-mail</th>
                               <th className="TableHeader">Idade</th>
                               <th className="TableHeader">Cargo</th>
                               <th className="TableHeader">Opções</th>
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