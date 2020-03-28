import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class GetUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      redirect: false,
      listOfUsers: []
    }
    this.teste = this.teste.bind(this);
  }

  async componentDidMount() {
    if (sessionStorage.getItem("userData")) {
      let data = JSON.parse(sessionStorage.getItem("userData"));
      this.setState({ user: data });
      this.teste();
    } else {
      this.setState({ redirect: true });
    }
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

    let UI = [];
    
    if(this.state.listOfUsers!==[]){
      this.state.listOfUsers.forEach((element)=>{
        // para aceder a uma variavel do state dentro de um componente a ser renderizado fazes dentro de {}
        UI.push(
          <div id={element.id}>
            <p>{element.name}</p>
            <p>{element.surname}</p> 
            <p>{element.email}</p> 
          </div>
        );
      })
      console.log(UI);
    }

    return (

      <div>Utilizadores
          {UI}    
      </div>

      

  );
  }

}

export default GetUsers;