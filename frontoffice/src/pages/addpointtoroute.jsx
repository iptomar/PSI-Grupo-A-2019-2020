import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./style/addRoute.css";
import "./style/pageframe.css";
import NavBar from "./navBar";

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      redirect: "/AddPointToRoute",
      userdata: null,
      CreateStatus: "",
      points: [],
      routes: [],
      pointId: "0",
      routeId: "0",
    };
    this.redirecter = this.redirecter.bind(this);
    this.submitRoute = this.submitRoute.bind(this);
  }

  componentDidMount() {
    if (sessionStorage.getItem("userData")) {
      let data = JSON.parse(sessionStorage.getItem("userData"));
      this.setState({ userdata: data });
      this.setState({ loggedIn: true });
      this.getPoints();
      this.getUserRoutes();
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

  async getUserRoutes() {
    let idUser = JSON.parse(sessionStorage.getItem("userData"));
    idUser = idUser.id;

    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-type", "application/json");
    var raw = JSON.stringify({
      data: {
        iduser: idUser,
      },
    });

    //Tipo de request
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      mode: "cors",
      redirect: "follow",
    };

    //Colocar os dados na base de dados
    let response = await fetch(
      this.props.ApiPath + "routes/userSearch",
      requestOptions
    );

    //Resposta por parte do server
    let data = await response.json();
    if (data.mesage.length > 0) {
      this.setState({ routes: data.mesage, routeId: "1" });
    } else {
      this.setState({ routes: data.mesage });
    }
  }

  //Função relativa à submissão do roteiro
  async submitRoute() {
    let div = document.getElementById("CreateStatusDiv"); //DIV que irá conter a resposta se o roteiro foi criado com sucesso ou não

    //Headers
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-type", "application/json");
    var raw = JSON.stringify({
      data: {
        idrot: this.state.routeId,
        idpoint: this.state.pointId,
      },
    });

    //Tipo de request
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      mode: "cors",
      redirect: "follow",
    };

    //Colocar os dados na base de dados
    let response = await fetch(
      this.props.ApiPath + "points/pointtoroute",
      requestOptions
    );

    //Resposta por parte do server
    let data = await response.json();

    //Caso consiga inserir, mostrar a mensagem de sucesso
    if (data.sucess === true) {
      div.style.color = "#28a745";
      this.setState({ CreateStatus: "Ponto associado a roteiro com sucesso!" });
    }
    //Senão mostra a mensagem de erro
    else {
      div.style.color = "#dc3545";
      this.setState({
        CreateStatus: "Houve um erro ao criar ao associar ponto a roteiro",
      });
    }
  }

  async getPoints() {
    let idUser = JSON.parse(sessionStorage.getItem("userData"));
    idUser = idUser.id;
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-type", "application/json");
    var raw = JSON.stringify({ data: idUser });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      mode: "cors",
      redirect: "follow",
    };

    let response = await fetch(
      this.props.ApiPath + "points/searchuser",
      requestOptions
    );
    let data = await response.json();
    data = data.mesage;
    if (data.length > 0) {
      this.setState({ points: data, pointId: "1" });
    } else {
      this.setState({ points: data });
    }
  }

  render() {
    if (!sessionStorage.getItem("userData")) {
      this.setState({ redirect: "/" });
      return <Redirect to={this.state.redirect} />;
    }

    if (this.state.redirect !== "/AddPointToRoute") {
      return <Redirect to={this.state.redirect} />;
    }

    let options = [];
    this.state.routes.forEach((r) => {
      options.push(<option value={r.id}>{r.nome}</option>);
    });

    let options1 = [];
    this.state.points.forEach((p) => {
      options1.push(<option value={p.id}>{p.titulo}</option>);
    });

    return (
      <div id="body">
        <NavBar redirecter={this.redirecter}></NavBar>
        <div id="PageMainDiv">
          <div className="BackgroundDiv"></div>
          <div id="PageCenter">
            <div id="PageCentralDiv">
              <div className="TitleDiv"></div>
              <p className="TitleP">Associar ponto a roteiro</p>
              <div id="RouteBox">
                {this.state.routes.length == 0 ? (
                  <p id="noRoutes">Tem que criar um roteiro primeiro</p>
                ) : (
                  <p></p>
                )}
                <select
                  id="mySelect"
                  style={{
                    borderRadius: 0,
                    height: 60,
                    width: 300,
                    backgroundColor: "#202020",
                    color: "#fff",
                    fontFamily: " Oxygen, sans-serif",
                    fontSize: 18,
                    paddingLeft: 10,
                    paddingRight: 10,
                  }}
                  onChange={() => {
                    this.setState({
                      routeId: document.getElementById("mySelect").value,
                    });
                  }}
                >
                  {options}
                </select>
                {this.state.points.length == 0 ? (
                  <p id="noPoints">Tem que criar um ponto primeiro</p>
                ) : (
                  <p></p>
                )}
                <select
                  id="mySelect1"
                  style={{
                    borderRadius: 0,
                    height: 60,
                    width: 300,
                    backgroundColor: "#202020",
                    color: "#fff",
                    fontFamily: " Oxygen, sans-serif",
                    fontSize: 18,
                    paddingLeft: 10,
                    paddingRight: 10,
                  }}
                  onChange={() => {
                    this.setState({
                      pointId: document.getElementById("mySelect1").value,
                    });
                  }}
                >
                  {options1}
                </select>

                <div id="CRButtonsDiv">
                  <button
                    className="CRBtts"
                    onClick={() => {
                      this.setState({ redirect: "/Routes" });
                    }}
                  >
                    Voltar
                  </button>
                  {this.state.routes.length != 0 &&
                  this.state.points.length != 0 ? (
                    <button className="CRBtts" onClick={this.submitRoute}>
                      Associar
                    </button>
                  ) : (
                    <p></p>
                  )}
                </div>

                <div id="CreateStatusDiv">{this.state.CreateStatus}</div>
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
