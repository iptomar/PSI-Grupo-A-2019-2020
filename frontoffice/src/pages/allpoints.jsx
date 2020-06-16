import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import "./style/points.css";
import "./style/pageframe.css";
import NavBar from "./navBar";

class Points2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      redirect: "/allPoints",
      userdata: null,
      points: [],
    };
    this.redirecter = this.redirecter.bind(this);
    this.getPoints = this.getPoints.bind(this);
  }

  async componentDidMount() {
    if (sessionStorage.getItem("userData")) {
      let data = JSON.parse(sessionStorage.getItem("userData"));
      this.setState({ userdata: data });
      sessionStorage.setItem("token", data.token);
      this.setState({ loggedIn: true });
      await this.getPoints();
    } else {
      this.setState({ loggedIn: false });
    }
  }

  async getPoints() {
    //Obter todos os pontos
    let response = await fetch(
      this.props.ApiPath + "points/list"
    );
    //Resposta por parte do servidor
    let data = await response.json();
    data = data.mesage;
    this.setState({ points: data });
  }

  redirecter(local) {
    if (local === "/Logout") {
      sessionStorage.setItem("userdata", "");
      sessionStorage.clear();
      this.setState({ redirect: "/", loggedIn: false, data: null });
    } else this.setState({ redirect: local });
  }

  getPoint(point) {
    this.setState({ redirect: "PointDetails" });
    sessionStorage.setItem("point", JSON.stringify(point));
  }

  render() {
    if (this.state.redirect !== "/allPoints") {
      return <Redirect to={this.state.redirect} />;
    }

    let UI = [];

    if (this.state.points.length != 0) {
      this.state.points.forEach((point) => {
        UI.push(
          <table id="UsersTable">
            <tr>
              <th className="TableHeader">
                {point.titulo} - {point.data}
              </th>
            </tr>
            <tr>
              <td>{point.descricao}</td>
            </tr>
            <tr>
              <td>
                <button onClick={() => this.getPoint(point)}>📖</button>
              </td>
            </tr>
          </table>
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
              <p className="TitleP">Pontos</p>
              <div id="RegisterRedirectDiv">
                <button
                  className="RegisterRedirectBtt"
                  onClick={() => {
                    this.setState({ redirect: "/createPoint" });
                  }}
                >
                  Novo ponto
                </button>
                {this.state.userdata !== null &&
                this.state.userdata.isadmin === 1 ? (
                  <button
                  className="RegisterRedirectBtt"
                    onClick={() => {
                      this.setState({ redirect: "/PointsToValidate" });
                    }}
                  >
                    Validar Pontos
                  </button>
                ) : null}
                {this.state.userdata !== null &&
                this.state.userdata.isadmin === 1 ? (
                  <button
                  className="RegisterRedirectBtt"
                    onClick={() => {
                      this.setState({ redirect: "/ImagesToValidate" });
                    }}
                  >
                    Validar Imagens
                  </button>
                ) : null}
              </div>
              {UI}
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

export default Points2;
