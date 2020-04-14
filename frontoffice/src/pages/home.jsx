import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            role: "",
            register: null
        };
        this.logoutFunction = this.logoutFunction.bind(this);
        this.registerFunction = this.registerFunction.bind(this);
    }

    componentDidMount(){
        if(sessionStorage.getItem("userData")){
            let data = JSON.parse(sessionStorage.getItem("userData"));
            this.setState({role: data.role})
        }else{
            this.setState({redirect: true});
        }
    }

    logoutFunction(){
        sessionStorage.setItem("userdata","");
        sessionStorage.clear();
        this.setState({redirect: true});
    }

    registerFunction(){
        this.setState({register: true});
    }

    

    render() {

        if (this.state.redirect) {
            return (<Redirect to={"/login"} />);
        }

        if (this.state.register) {
            return (<Redirect to={"/register"} />);
        }

        return (

            <div>HOME PAGE
                <button type="button" className="button" onClick={this.logoutFunction}>Logout</button>
                {this.state.role==="admin" && 
                (<button type="button" className="button" onClick={this.registerFunction}>Registar</button>)
                }
            </div>

            

        );



    }

}

export default HomePage;