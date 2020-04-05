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
            role: "",
            userdata:null,
        };
        this.redirecter = this.redirecter.bind(this);
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

    redirecter(local){
        if(local==="/logout"){
            sessionStorage.setItem("userdata","");
            sessionStorage.clear();
            this.setState({redirect: "/", loggedIn : false, data: null});    
        } 
        else      
        this.setState({redirect: local});
    }

    render() {
        if (this.state.redirect!=="/profile") {
          return (<Redirect to={this.state.redirect} />);
        }        
        
        return (
            <div>
                <NavBar redirecter={this.redirecter}></NavBar>
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

export default Profile;