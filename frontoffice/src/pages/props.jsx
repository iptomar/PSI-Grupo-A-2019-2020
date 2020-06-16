import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./style/users.css";
import "./style/pageframe.css";
import NavBar from "./navBar";

class Props extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      redirect: "/props",
      role: "",
      user: JSON.parse(sessionStorage.getItem("userData")),
      routes: [],
    };
    this.redirecter = this.redirecter.bind(this);
  }

  componentDidMount() {
    if (this.state.user == null) {
      this.setState({ redirect: "/" });
    } else {
      this.getNoVRoutes();
    }
  }

  async getNoVRoutes() {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-type", "application/json");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      mode: "cors",
      redirect: "follow",
    };

    let response = await fetch(
      this.props.ApiPath + "props/list",
      requestOptions
    );
    let data = await response.json();
    this.setState({ routes: data.mesage });
  }

  redirecter(local) {
    if (local === "/Logout") {
      sessionStorage.setItem("userdata", "");
      sessionStorage.clear();
      this.setState({ redirect: "/", loggedIn: false, data: null });
    } else this.setState({ redirect: local });
  }

  render() {
    if (this.state.redirect !== "/props") {
      return <Redirect to={this.state.redirect} />;
    }

    if (this.state.isadmin == false && sessionStorage.getItem("userData")) {
      this.setState({ redirect: "/Routes" });
      return <Redirect to={this.state.redirect} />;
    }

    //Array que irá conter a lista de utilizadores
    let UI = [];

    if (this.state.routes !== [] && this.state.user.isadmin) {
      this.state.routes.forEach((element) => {
        UI.push(
          <tr id={element.id}>
            <td>{element.id}</td>
            <td>{element.name}</td>
            <td>{element.work}</td>
          </tr>
        );
      });
    } else {
      this.state.routes.forEach((element) => {
        console.log(element);
        if (element.user_id == this.state.user.id) {
          UI.push(
            <tr id={element.id}>
              <td>{element.id}</td>
              <td>{element.name}</td>
              <td>{element.work}</td>
            </tr>
          );
        }
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
              <p className="TitleP">Proprietários</p>
              <button
                className="RegisterRedirectBtt"
                onClick={() => {
                  this.setState({ redirect: "/createprop" });
                }}
              >
                Crie um proprietário
              </button>

              <table id="UsersTable">
                <tr>
                  <th className="TableHeader">ID </th>
                  <th className="TableHeader">Nome</th>
                  <th className="TableHeader">Trabalho</th>
                </tr>
                {UI}
              </table>

              <div
                id="CRButtonsDiv"
                style={{ width: 1232, justifyContent: "center" }}
              >
                <button
                  className="CRBtts"
                  onClick={() => {
                    this.setState({ redirect: "/" });
                  }}
                >
                  Voltar
                </button>
              </div>
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

export default Props;
