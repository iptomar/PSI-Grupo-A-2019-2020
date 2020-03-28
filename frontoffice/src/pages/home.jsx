import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: "",
            role: ""
        };
        this.logoutFunction = this.logoutFunction.bind(this);
        this.registerFunction = this.registerFunction.bind(this);
        this.getUsersFunction = this.getUsersFunction.bind(this);
    }

    componentDidMount(){
        if(sessionStorage.getItem("userData")){
            let data = JSON.parse(sessionStorage.getItem("userData"));
            this.setState({role: data.email});
            sessionStorage.setItem("token",data.token);            
        }else{
            this.setState({redirect: "login"});
        }
    }

    logoutFunction(){
        sessionStorage.setItem("userdata","");
        sessionStorage.clear();
        this.setState({redirect: "login"});
    }

    registerFunction(){
        this.setState({redirect: "register"});
    }

    getUsersFunction(){
      this.setState({redirect: "getUsers"});
    }

    

    render() {
        // se não conseguiu ler a variável de sessão manda para o login
        if (this.state.redirect!="") {
          this.setState({redirect:""});
          return (<Redirect to={"/"+this.state.redirect} />);
        }        

        let UI =[];
        if(this.state.role==="admin@admin.com"){
          UI.push(<button type="button" className="button" onClick={this.registerFunction}>Registar</button>);
          UI.push(<button type="button" className="button" onClick={this.getUsersFunction}>Ver todos os utilizadores</button>)
        }
        
        return (

            <div>HOME PAGE
                <button type="button" className="button" onClick={this.logoutFunction}>Logout</button>
                {UI}
                
            </div>

            

        );



    }

}

export default HomePage;