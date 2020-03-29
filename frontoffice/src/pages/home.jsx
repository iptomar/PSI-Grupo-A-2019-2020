import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: "/home",
            role: ""
        };
        this.logoutFunction = this.logoutFunction.bind(this);
        this.registerFunction = this.registerFunction.bind(this);
        this.getUsersFunction = this.getUsersFunction.bind(this);
        this.editUsersFunction = this.editUsersFunction.bind(this);
    }

    componentDidMount(){
        if(sessionStorage.getItem("userData")){
            let data = JSON.parse(sessionStorage.getItem("userData"));
            console.log(data);
            this.setState({role: data.email});
            sessionStorage.setItem("token",data.token);            
        }else{
            this.setState({redirect: "/login"});
        }
    }

    logoutFunction(){
        sessionStorage.setItem("userdata","");
        sessionStorage.clear();
        this.setState({redirect: "/"});
    }

    registerFunction(){
        this.setState({redirect: "/register"});
    }

    editUsersFunction(){
        this.setState({redirect: "/editUser"});
    }

    getUsersFunction(){
      this.setState({redirect: "/getUsers"});
    }

    

    render() {
        // se não conseguiu ler a variável de sessão manda para o login
        if (this.state.redirect!="/home") {
          return (<Redirect to={this.state.redirect} />);
        }        

        let UI =[];
            UI.push(<button type="button" className="button" onClick={this.logoutFunction}>Logout</button>);
            UI.push(<button type="button" className="button" onClick={this.editUsersFunction}>Alterar dados</button>);
        if(this.state.role==="admin@admin.com"){
            UI.push(<button type="button" className="button" onClick={this.registerFunction}>Registar</button>);
            UI.push(<button type="button" className="button" onClick={this.getUsersFunction}>Ver todos os utilizadores</button>)
        }
        
        return (

            <div>HOME PAGE
                {UI}
                
            </div>

            

        );



    }

}

export default HomePage;