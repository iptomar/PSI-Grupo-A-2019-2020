import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import './style/create.css';
import './style/pageframe.css';
import NavBar from "./navBar";

class Create extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedIn:false,
            redirect: "/create",
            role: "",
            userdata:null,
        };
        this.logout = this.logout.bind(this);
        this.login = this.login.bind(this);
        this.homepage = this.homepage.bind(this);
        this.users = this.users.bind(this);
        this.create = this.create.bind(this);
        this.library = this.library.bind(this);
        this.profile = this.profile.bind(this);
    }

    componentDidMount(){
        if(sessionStorage.getItem("userData")){
            let data = JSON.parse(sessionStorage.getItem("userData"));
            this.setState({role: data.email});
            this.setState({userdata: data});
            sessionStorage.setItem("token",data.token);
            this.setState({loggedIn : true});            
        }else{
            this.setState({loggedIn : false});
        }
    }

    logout(){
        sessionStorage.setItem("userdata","");
        sessionStorage.clear();
        this.setState({redirect: "/", loggedIn : false, data: null});
    }

    login(){
        this.setState({redirect: "/login"});
    }

    homepage(){
        this.setState({redirect: "/"});
    }

    create(){
        this.setState({redirect: "/create"});
    }

    library(){
        this.setState({redirect: "/library"});
    }

    users(){
      this.setState({redirect: "/users"});
    }

    profile(){
        this.setState({redirect: "/profile"});
      }

    render() {
        if (this.state.redirect!=="/create") {
          return (<Redirect to={this.state.redirect} />);
        }        
        
        return (
            <div>
                <NavBar login={this.login}logout={this.logout}create={this.create}library={this.library}users={this.users}homepage={this.homepage}profile={this.profile}></NavBar>
                <div id="PageMainDiv">
                    <div id="PageCentralDiv">
                    </div>
                    <footer id="FooterDiv">
                        <p id="Footer1p">ToursTomar</p>
                        <p id="Footer2p">- Projeto desenvolvido no âmbito da cadeira de Projeto de Sistemas de Informação - Instituto Politécnico de Tomar</p>
                    </footer>
                </div>
                
            </div>

            

        );



    }

}

export default Create;