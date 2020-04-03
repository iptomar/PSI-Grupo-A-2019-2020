import React from "react";
import { Redirect } from "react-router-dom";
import './style/404.css';
import NavBar from "./navBar";
import './style/pageframe.css';

class NotFoundPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: "",
        };
        this.logout = this.logout.bind(this);
        this.login = this.login.bind(this);
        this.homepage = this.homepage.bind(this);
        this.users = this.users.bind(this);
        this.create = this.create.bind(this);
        this.library = this.library.bind(this);
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

    render() {
        if (this.state.redirect!=="") {
            return (<Redirect to={this.state.redirect} />);
        } 
        else{
            return (
                <div>
                    <NavBar login={this.login}logout={this.logout}create={this.create}library={this.library}users={this.users}homepage={this.homepage}></NavBar>
                    <div id="PageMainDiv">
                        <div id="PageCentralDiv">
                            <div id="Div404">
                                <img id="Img404" src="./assets/404.png" alt=""></img>
                            </div>
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
}

export default NotFoundPage;