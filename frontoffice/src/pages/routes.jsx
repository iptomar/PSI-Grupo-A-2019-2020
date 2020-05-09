import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import "./style/routes.css";
import "./style/pageframe.css";
import NavBar from "./navBar";

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      redirect: "/Routes",
      role: "",
      userdata: null,
      routes: [],
      routeId: null,
      points: [],
    };
    this.redirecter = this.redirecter.bind(this);
    this.getPoints = this.getPoints.bind(this);
  }

  componentDidMount() {
    if (sessionStorage.getItem("userData")) {
      let data = JSON.parse(sessionStorage.getItem("userData"));
      this.setState({ role: data.email });
      this.setState({ userdata: data });
      sessionStorage.setItem("token", data.token);
      this.setState({ loggedIn: true });
      this.getRoutes();
    } else {
      this.setState({ loggedIn: false });
    }
  }
  async getRoutes() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    let response = await fetch(
      "http://localhost:3000/routes/list",
      requestOptions
    ).catch((error) => console.log("error", error));
    let json = await response.json();
    this.setState({ routes: json.mesage });
    console.log(json.mesage);
  }

  async getPoints(id) {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json"); myHeaders.append("Content-type", "application/json");
    var raw = JSON.stringify({ "data": id });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw, mode: 'cors',
      redirect: 'follow'
    };

    let response = await fetch("http://localhost:3000/points/search", requestOptions);
    let data = await response.json();

    await this.getPointsInfo(data.mesage);
  }

  async getPointsInfo(pontos) {
    let newPontos = [];
    await pontos.forEach(async (element) => {
      var myHeaders = new Headers();
      myHeaders.append("Accept", "application/json"); myHeaders.append("Content-type", "application/json");
      var raw = JSON.stringify({ "data": element.id_inter });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw, mode: 'cors',
        redirect: 'follow'
      };

      let response = await fetch("http://localhost:3000/points/searchpoint", requestOptions);
      let data = await response.json();
      newPontos.push(data.mesage[0]);
      if (pontos.length == newPontos.length) {
        this.setState({ points: newPontos });
      }
    });
  }

  redirecter(local) {
    if (local === "/Logout") {
      sessionStorage.setItem("userdata", "");
      sessionStorage.clear();
      this.setState({ redirect: "/", loggedIn: false, data: null });
    } else this.setState({ redirect: local });
  }

  async deletePoint(id) {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json"); myHeaders.append("Content-type", "application/json");
    var raw = JSON.stringify({ "id": id });


    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      body: raw, mode: 'cors',
      redirect: 'follow'
    };

    let response = await fetch("http://localhost:3000/points/delete", requestOptions);
    let data = await response.json();
    await this.getRoutes();
    console.log(data);

    await this.getPoints(this.state.routeId);

  }

  render() {

    if (this.state.redirect !== "/Routes") {
      return <Redirect to={this.state.redirect} />;
    }

    let ps = []
    let UI = [];

    //vai buscar os roteiros
    if (this.state.routes.length !== 0) {
      this.state.routes.forEach((element) => {
        UI.push(
          <div
            onClick={() => {
              this.setState({ routeId: element.id });
              this.getPoints(element.id)
            }}
          >
            <h4>{element.nome}</h4>
            <h4>{element.descricao}</h4>
          </div>
        );
      });
    }

    console.log(this.state.points.length);

    if (this.state.points.length != 0) {
      this.state.points.forEach((element) => {
        console.log(element);
        ps.push(
          <div>
            <h4>{element.titulo}</h4>
            <h4>{element.descricao}</h4>
            <h4>{element.data}</h4>
          </div>
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
              <div id="routesdiv">
                <div className="gemeny">
                  {UI}
                </div>
                <div className="gemeny">
                  {ps}
                </div>
                <Link to="/Routes/addRoute">
                  <button className="btn">
                    Adicionar Roteiro
                    </button>
                </Link>
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

export default Routes;
