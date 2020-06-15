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
      this.props.ApiPath + "routes/list",
      requestOptions
    ).catch((error) => console.log("error", error));
    let json = await response.json();
    this.setState({ routes: json.mesage });
  }

  async getPoints(id) {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-type", "application/json");
    var raw = JSON.stringify({ data: id });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      mode: "cors",
      redirect: "follow",
    };

    let response = await fetch(
      this.props.ApiPath + "points/search",
      requestOptions
    );
    let data = await response.json();

    if (data.mesage.length == 0) {
      this.setState({ points: [] });
    } else {
      await this.getPointsInfo(data.mesage);
    }
  }

  async getPointsInfo(pontos) {
    let newPontos = [];
    let i = pontos.length;
    let iterator = 0;
    await pontos.forEach(async (element) => {
      var myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
      myHeaders.append("Content-type", "application/json");
      var raw = JSON.stringify({ data: element.id_inter });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        mode: "cors",
        redirect: "follow",
      };

      let response = await fetch(
        this.props.ApiPath + "points/searchpoint",
        requestOptions
      );
      let data = await response.json();
      if (data.mesage.length != 0) {
        data = data.mesage[0];
        // vai buscar imagens
        requestOptions = {
          method: "GET",
          headers: myHeaders,
          mode: "cors",
          redirect: "follow",
        };
        let res = await fetch(
          this.props.ApiPath + "images/searchgetimage?id=" + data.id,
          requestOptions
        );
        let dataImg = await res.json();
        data.img = dataImg.mesage;

        newPontos.push(data);
        iterator++;
        if (i == iterator) {
          this.setState({ points: newPontos });
        }
      } else {
        iterator++;
        if (i == iterator) {
          this.setState({ points: newPontos });
        }
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

  async deleteRoute(id) {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-type", "application/json");
    var raw = JSON.stringify({ id: id });

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: raw,
      mode: "cors",
      redirect: "follow",
    };

    let response = await fetch(
      this.props.ApiPath + "routes/delete",
      requestOptions
    );

    let data = await response.json();

    await this.getRoutes();

    await this.getPoints(this.state.routeId);
  }

  //Função que irá apagar o ponto de um roteiro
  async deletePointFromRoute(idRoteiro, idPonto) {
    //Headers
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-type", "application/json");
    //Campos
    var raw = JSON.stringify({
      data: {
        idrot: idRoteiro,
        idpoint: idPonto,
      },
    });
    //Request options
    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: raw,
      mode: "cors",
      redirect: "follow",
    };
    //Enviar os dados para o nodejs
    let response = await fetch(
      this.props.ApiPath + "points/pointoutroute",
      requestOptions
    );
    //Resposta por parte do servidor
    let data = await response.json();

    //Obter os roteiros
    await this.getRoutes();
    //Obter os pontos
    await this.getPoints(this.state.routeId);
  }

  render() {
    if (this.state.redirect !== "/Routes") {
      return <Redirect to={this.state.redirect} />;
    }

    let ps = [];
    let UI = [];

    //vai buscar os roteiros
    if (this.state.routes.length !== 0) {
      this.state.routes.forEach((element) => {
        UI.push(
          <table id="UsersTable">
            <tr>
              <th className="TableHeader">{element.nome}</th>
            </tr>
            <tr>
              <td>{element.descricao}</td>
            </tr>
            <tr>
              <td>
                <button title="Ver pontos do roteiro"
                  onClick={() => {
                    this.setState({ routeId: element.id });
                    this.getPoints(element.id);
                  }}
                >
                  👁️‍🗨️
                </button>
                {element.user_id == this.state.userdata.id ? (
                  <button title="Editar roteiro"
                    onClick={() => {
                      sessionStorage.setItem("nomeRoteiro", element.nome);
                      sessionStorage.setItem(
                        "descricaoRoteiro",
                        element.descricao
                      );
                      sessionStorage.setItem("routeID", element.id);
                      this.setState({ redirect: "/UpdateRoute" });
                    }}
                  >
                    📝
                  </button>
                ) : null}
                {element.user_id == this.state.userdata.id ? (
                  <button title="Eliminar roteiro" onClick={() => this.deleteRoute(element.id)}>
                    ❌
                  </button>
                ) : null}
              </td>
            </tr>
          </table>
        );
      });
    }

    if (this.state.points.length != 0) {
      this.state.points.forEach((element) => {
        var imgArr = [];
        if (element.img.length != 0) {
          element.img.forEach(async (image) => {
            imgArr.push(
              <img src={"data:image/jpg;base64," + image.img} width="200"></img>
            );
          });
        }
        ps.push(
          <table id="UsersTable">
            <tr>
              <th className="TableHeader">
                {element.titulo} - {element.data}
              </th>
            </tr>
            <tr>
              <td>{element.descricao}</td>
            </tr>
            <tr>
              <td>{imgArr}</td>
            </tr>
            <tr>
              <td>
                <button
                  onClick={() =>
                    this.deletePointFromRoute(this.state.routeId, element.id)
                  }
                >
                  ❌
                </button>
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
              <p className="TitleP">Roteiros</p>
              <div id="RegisterRedirectDiv">
                <button
                  className="RegisterRedirectBtt"
                  onClick={() => {
                    this.setState({ redirect: "/AddRoute" });
                  }}
                >
                  Novo Roteiro
                </button>
                {this.state.userdata !== null &&
                this.state.userdata.isadmin === 1 ? (
                  <button
                  className="RegisterRedirectBtt"
                    onClick={() => {
                      this.setState({ redirect: "/RoutesToValidate" });
                    }}
                  >
                    Validar Roteiros
                  </button>
                ) : null}
                <button
                  className="RegisterRedirectBtt"
                  onClick={() => {
                    this.setState({ redirect: "/AddPointToRoute" });
                  }}
                >
                  Associar ponto a rota
                </button>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div className="gemeny">{UI}</div>
                <div className="gemeny">{ps}</div>
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
