import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./style/users.css";
import "./style/pageframe.css";
import NavBar from "./navBar";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      redirect: "/Users",
      user: null,
      //old
      listOfUsers: [],
    };
    this.redirecter = this.redirecter.bind(this);
    //old
    this.getUsers = this.getUsers.bind(this);
    this.loadUserdata = this.loadUserdata.bind(this);
    this.makeAdmin = this.makeAdmin.bind(this);
    this.makeNotAdmin = this.makeNotAdmin.bind(this);
  }

  async loadUserdata() {
    if (sessionStorage.getItem("userData")) {
      let data = JSON.parse(sessionStorage.getItem("userData"));
      await this.setState({ user: data });
      sessionStorage.setItem("token", data.token);
      await this.setState({ loggedIn: true });
      //old
      this.getUsers();
    } else {
      this.setState({ loggedIn: false });
    }
  }

  redirecter(local) {
    if (local === "/Logout") {
      sessionStorage.setItem("userdata", "");
      sessionStorage.clear();
      this.setState({ redirect: "/", loggedIn: false, data: null });
    } else this.setState({ redirect: local });
  }

  async deleteUser(id) {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-type", "application/json");
    var raw = JSON.stringify({ user: this.state.user.token, id: id });

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: raw,
      mode: "cors",
      redirect: "follow",
    };

    let response = await fetch(
      this.props.ApiPath + "users/delete",
      requestOptions
    );
    await this.getUsers();
  }

  async makeAdmin(user) {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-type", "application/json");
    var raw = JSON.stringify({ user: user, email: this.state.user.email });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      mode: "cors",
      redirect: "follow",
    };

    let response = await fetch(
      this.props.ApiPath + "users/giveadmin",
      requestOptions
    );
    await this.getUsers();
  }

  async makeNotAdmin(user) {
      
    if (user!=="admin@admin.com") {
      var myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
      myHeaders.append("Content-type", "application/json");
      var raw = JSON.stringify({ user: user, email: this.state.user.email });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        mode: "cors",
        redirect: "follow",
      };

      let response = await fetch(
        this.props.ApiPath + "users/removeadmin",
        requestOptions
      );
      await this.getUsers();
    }
  }

  async getUsers() {
    let response = await fetch(
      this.props.ApiPath + "users/getUsers/" + sessionStorage.getItem("token")
    );

    let dat = await response.json();

    this.setState({ listOfUsers: dat.mesage });
  }

  async componentDidMount() {
    await this.loadUserdata();
  }

  render() {
    if (this.state.redirect !== "/Users") {
      return <Redirect to={this.state.redirect} />;
    }

    /**
     * Apenas pode ter acesso a esta página o utilizador "admin"
     */
    if (this.state.user !== null) {
      if (this.state.user.isadmin !== 1) {
        this.setState({ redirect: "/" });
        return <Redirect to={this.state.redirect} />;
      }
    }

    //Array que irá conter a lista de utilizadores
    let UI = [];

    if (this.state.listOfUsers !== []) {
      this.state.listOfUsers.forEach((element) => {
        UI.push(
          <tr id={element.id}>
            <td>
              {element.name} {element.surname}
            </td>
            <td>{element.email}</td>
            <td>{element.age}</td>
            <td>{element.isadmin === 1 ? "Sim" : "Não"}</td>
            <td>
              {element.isadmin === 1 ? (
                <button title="Remover cargo Administrador" onClick={() => this.makeNotAdmin(element.email)}>
                  ⬇️
                </button>
              ) : (
                <button title="Promover a Administrador"onClick={() => this.makeAdmin(element.email)}>
                  ⬆️
                </button>
              )}

              <button title="Eliminar utilizador" onClick={() => this.deleteUser(element.id)}>❌</button>
            </td>
          </tr>
        );
      });
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
                <button
                  className="RegisterRedirectBtt"
                  onClick={() => {
                    this.setState({ redirect: "/Register" });
                  }}
                >
                  Novo utilizador
                </button>
              </div>

              <table id="UsersTable">
                <tr>
                  <th className="TableHeader">Nome </th>
                  <th className="TableHeader">E-mail</th>
                  <th className="TableHeader">Idade</th>
                  <th className="TableHeader">Administrador</th>
                  <th className="TableHeader">Opções</th>
                </tr>
                {UI}
              </table>
            </div>
            <footer id="FooterDiv">
              <p id="Footer1p">ToursTomar</p>
              <p id="Footer2p">
                - Projeto desenvolvido no âmbito da cadeira de Projeto de
                Sistemas de Informação - Instituto Politécnico de Tomar
              </p>
            </footer>
          </div>
          <div className="BackgroundDiv"></div>
        </div>
      </div>
    );
  }
}

export default Users;
