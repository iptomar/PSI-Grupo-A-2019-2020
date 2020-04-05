import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import './style/routes.css';
import './style/pageframe.css';
import NavBar from "./navBar";

class Routes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedIn:false,
            redirect: "/routes",
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
        if (this.state.redirect!=="/routes") {
          return (<Redirect to={this.state.redirect} />);
        }        
        
        return (
            <div id="body">
                <NavBar redirecter={this.redirecter}></NavBar>
                <div id="PageMainDiv">
                    <div className="BackgroundDiv"></div>
                    <div id="PageCenter">
                    <div id="PageCentralDiv">
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

export default Routes;