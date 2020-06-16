import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./style/updatePoint.css";
import "./style/pageframe.css";
import NavBar from "./navBar";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      redirect: "/UpdatePoint",
      EditStatus: "",
      point: JSON.parse(sessionStorage.getItem("point")),
      proprietarios: [],
      proprietarioId: JSON.parse(sessionStorage.getItem("point")).prop_id,
    };
    this.redirecter = this.redirecter.bind(this);
    this.updatePoint = this.updatePoint.bind(this);
    this.reload = this.reload.bind(this);
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

  async updatePoint() {
    let titulo = document.getElementById("title").value;
    let description = document.getElementById("descr").value;
    let tipoEdificio = document.getElementById("tipoEdif").value;
    let dataEdif = document.getElementById("date").value;
    let x = document.getElementById("coordx").value;
    let y = document.getElementById("coordy").value;
    let pcoordinates = document.getElementById("pcoordinates").value;
    let div = document.getElementById("EditStatusDiv");
    let user = JSON.parse(sessionStorage.getItem("userData"));
    pcoordinates = pcoordinates.replace(/\n/g, ",");
    pcoordinates = pcoordinates.replace(/[\(\)]+/g, "");
    pcoordinates = pcoordinates.substring(0, pcoordinates.length - 1);

    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-type", "application/json");
    var raw = JSON.stringify({
      id: 1,
      data: {
        titulo: titulo,
        descricao: description,
        coordenadas: x + "," + y + "," + pcoordinates,
        data: dataEdif,
        tipoEdif: tipoEdificio,
        user_id: user.id,
        prop_id: this.state.proprietarioId,
      },
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      mode: "cors",
      redirect: "follow",
    };

    let response = await fetch(
      this.props.ApiPath + "points/update",
      requestOptions
    );

    let data = await response.json();

    if (data.sucess) {
      div.style.color = "#28a745";
      this.setState({
        EditStatus: "Ponto atualizado com sucesso!",
        VerifyStatus: "",
      });
    } else {
      div.style.color = "#dc3545";
      this.setState({
        EditStatus: "Houve um erro ao atulizar o ponto!",
        VerifyStatus: "",
      });
    }
  }

  redirecter(local) {
    if (local === "/Logout") {
      sessionStorage.setItem("userdata", "");
      sessionStorage.clear();
      this.setState({ redirect: "/", loggedIn: false, data: null });
    } else this.setState({ redirect: local });
  }

  reload() {
    this.setState({
      EditStatus: "",
      VerifyStatus: "",
    });
  }

  addPolignPoint() {
    let pointx = document.getElementById("apcoordx");
    let pointy = document.getElementById("apcoordy");
    let listpoint = document.getElementById("pcoordinates");
    if (pointx.value !== "" && pointy.value !== "") {
      listpoint.value =
        listpoint.value + "(" + pointx.value + "," + pointy.value + ")" + "\n";
      pointx.value = "";
      pointy.value = "";
    } else return;
  }
  removePolignPoint() {
    let listpoint = document.getElementById("pcoordinates");
    if (listpoint.value !== "") {
      var aux = listpoint.value.split("\n");
      listpoint.value = "";
      for (let i = 0; i < aux.length - 2; i++) {
        listpoint.value = listpoint.value + aux[i] + "\n";
      }
    } else return;
  }

  render() {
    if (this.state.redirect !== "/UpdatePoint") {
      return <Redirect to={this.state.redirect} />;
    }

    let options = [];
    if (this.state.proprietarios.length > 0) {
      this.state.proprietarios.forEach((r) => {
        options.push(<option value={r.id}>{r.name}</option>);
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
              <p className="TitleP">Editar ponto de interesse</p>

              <div id="PointBox">
                <div className="FieldDiv">
                  <label className="FieldLabel">Nome</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={this.state.point.titulo}
                    className="TextBox"
                    onChange={
                      (this.reload,
                      (e) => {
                        this.setState({ point: e.target.value });
                      })
                    }
                    onFocus={this.reload}
                  ></input>
                </div>

                <div className="FieldDiv">
                  <label className="FieldLabel">Descrição</label>
                  <textarea
                    type="text"
                    id="descr"
                    name="descr"
                    value={this.state.point.descricao}
                    onChange={
                      (this.reload,
                      (e) => {
                        this.setState({ point: e.target.value });
                      })
                    }
                    onFocus={this.reload}
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
                    onFocus={this.reload}
                    onChange={
                      (this.reload,
                      (e) => {
                        this.setState({ point: e.target.value });
                      })
                    }
                  ></input>
                </div>

                <div className="FieldDiv">
                  <label className="FieldLabel">Data de enauguração</label>
                  <input
                    type="text"
                    id="date"
                    name="date"
                    value={this.state.point.data}
                    className="TextBox"
                    onChange={
                      (this.reload,
                      (e) => {
                        this.setState({ point: e.target.value });
                      })
                    }
                    onFocus={this.reload}
                  ></input>
                </div>

                <div className="FieldDiv">
                  <label className="FieldLabel">Proprietário do Edifício</label>
                  <select
                    id="mySelect"
                    style={{
                      borderRadius: 0,
                      height: 60,
                      width: 510,
                      backgroundColor: "#202020",
                      color: "#fff",
                      fontFamily: " Oxygen, sans-serif",
                      fontSize: 18,
                      paddingLeft: 10,
                      paddingRight: 10,
                      marginLeft: 20,
                      marginRight: 20,
                    }}
                    onChange={() => {
                      this.setState({
                        proprietarioId: document.getElementById("mySelect")
                          .value,
                      });
                    }}
                  >
                    {options}
                  </select>
                </div>

                <div className="FieldDiv">
                  <label className="FieldLabel">Coordenada X</label>
                  <input
                    type="text"
                    id="coordx"
                    name="coordx"
                    className="TextBox"
                    onChange={this.reload}
                    onFocus={this.reload}
                  ></input>
                </div>

                <div className="FieldDiv">
                  <label className="FieldLabel">Coordenada Y</label>
                  <input
                    type="text"
                    id="coordy"
                    name="coordy"
                    className="TextBox"
                    onChange={this.reload}
                    onFocus={this.reload}
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
                  >
                    <input
                      type="text"
                      id="apcoordx"
                      name="apcoordx"
                      placeholder="X"
                      className="TextBox"
                      style={{ width: "220px" }}
                      onChange={this.reload}
                      onFocus={this.reload}
                    ></input>
                    <input
                      type="text"
                      id="apcoordy"
                      name="apcoordy"
                      placeholder="Y"
                      className="TextBox"
                      style={{ width: "220px" }}
                      onChange={this.reload}
                      onFocus={this.reload}
                    ></input>
                    <button
                      className="CPBtts"
                      style={{ width: "140px", margin: "4px" }}
                      onClick={this.addPolignPoint}
                    >
                      Adicionar >
                    </button>
                    <button
                      className="CPBtts"
                      style={{ width: "140px", margin: "4px" }}
                      onClick={this.removePolignPoint}
                    >
                      {"< Remover"}
                    </button>
                  </div>
                  <textarea
                    type="text"
                    id="pcoordinates"
                    name="pcoordinates"
                    style={{ width: "220px", height: "300px" }}
                    disabled={true}
                  ></textarea>
                </div>

                <div id="VerifyStatusDiv">{this.state.VerifyStatus}</div>

                <div id="CPButtonsDiv">
                  <button
                    className="CPBtts"
                    onClick={() => {
                      this.setState({ redirect: "/MyPoints" });
                    }}
                  >
                    Voltar
                  </button>
                  <button className="CPBtts" onClick={this.updatePoint}>
                    Guardar
                  </button>
                </div>

                <div id="EditStatusDiv">{this.state.EditStatus}</div>
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

export default Profile;
