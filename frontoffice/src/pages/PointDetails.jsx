import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./style/pointdetails.css";
import "./style/pageframe.css";
import NavBar from "./navBar";

class PointDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      redirect: "/UpdatePoint",
      point: JSON.parse(sessionStorage.getItem("point")),
      proprietarios: [],
    };
    this.redirecter = this.redirecter.bind(this);
    this.getOwners = this.getOwners.bind(this);
  }

  componentDidMount() {
    if (sessionStorage.getItem("userData")) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
    let aux = this.state.point.coordenadas.split(",");
    let x = document.getElementById("coordx");
    let y = document.getElementById("coordy");
    let pcoordinates = document.getElementById("pcoordinates");
    x.value = aux[0];
    y.value = aux[1];
    for (let i = 2; i < aux.length; i += 2) {
      pcoordinates.value += "(" + aux[i] + "," + aux[i + 1] + ")\n";
    }
    this.getOwners();
  }

  async getOwners() {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-type", "application/json");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      mode: "cors",
      redirect: "follow",
    };
    let user = JSON.parse(sessionStorage.getItem("userData"));
    let response = await fetch(
      this.props.ApiPath + "props/list",
      requestOptions
    ).catch((error) => console.log("error", error));
    let json = await response.json();
    let array = json.mesage;
    let aux = [];

    array.forEach((element) => {
      if (element.user_id === user.id) {
        aux.push(element);
      }
    });
    this.setState({ proprietarios: aux });
  }

  redirecter(local) {
    if (local === "/Logout") {
      sessionStorage.setItem("userdata", "");
      sessionStorage.clear();
      this.setState({ redirect: "/", loggedIn: false, data: null });
    } else this.setState({ redirect: local });
  }

  render() {
    if (this.state.redirect !== "/UpdatePoint") {
      return <Redirect to={this.state.redirect} />;
    }
    let proprietario = "";
    this.state.proprietarios.forEach((element) => {
      if (element.id === this.state.point.prop_id) {
        proprietario = element.name;
      }
    });

    return (
      <div id="body">
        <NavBar redirecter={this.redirecter}></NavBar>
        <div id="PageMainDiv">
          <div className="BackgroundDiv"></div>
          <div id="PageCenter">
            <div id="PageCentralDiv">
              <div className="TitleDiv"></div>
              <p className="TitleP">Informações sobre ponto de interesse</p>

              <div id="PointBox">
                <div className="FieldDiv">
                  <label className="FieldLabel">Nome</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={this.state.point.titulo}
                    className="TextBox"
                    disabled="true"
                  ></input>
                </div>

                <div className="FieldDiv">
                  <label className="FieldLabel">Descrição</label>
                  <textarea
                    type="text"
                    id="descr"
                    name="descr"
                    value={this.state.point.descricao}
                    disabled="true"
                  ></textarea>
                </div>

                <div className="FieldDiv">
                  <label className="FieldLabel">Tipo de edificio</label>
                  <input
                    type="text"
                    id="tipoEdif"
                    name="tipoEdif"
                    value={this.state.point.tipoEdif}
                    className="TextBox"
                    disabled="true"
                  ></input>
                </div>

                <div className="FieldDiv">
                  <label className="FieldLabel">Data de inauguração</label>
                  <input
                    type="text"
                    id="date"
                    name="date"
                    value={this.state.point.data}
                    className="TextBox"
                    disabled="true"
                  ></input>
                </div>

                <div className="FieldDiv">
                  <label className="FieldLabel">Autor/es do Edifício</label>
                  <input
                    type="text"
                    id="date"
                    name="date"
                    value={proprietario}
                    className="TextBox"
                    disabled="true"
                  ></input>
                </div>

                <div className="FieldDiv">
                  <label className="FieldLabel">Coordenada X</label>
                  <input
                    type="text"
                    id="coordx"
                    name="coordx"
                    className="TextBox"
                    disabled="true"
                  ></input>
                </div>

                <div className="FieldDiv">
                  <label className="FieldLabel">Coordenada Y</label>
                  <input
                    type="text"
                    id="coordy"
                    name="coordy"
                    className="TextBox"
                    disabled="true"
                  ></input>
                </div>

                <div className="FieldDiv">
                  <label className="FieldLabel">Coordenadas do polígno</label>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  ></div>
                  <textarea
                    type="text"
                    id="pcoordinates"
                    name="pcoordinates"
                    style={{ width: "220px", height: "300px" }}
                    disabled={true}
                  ></textarea>
                </div>

                <div id="CPButtonsDiv">
                  <button
                    className="CPBtts"
                    onClick={() => {
                      this.setState({ redirect: "/MyPoints" });
                    }}
                  >
                    Voltar
                  </button>
                </div>
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

export default PointDetails;
