import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./style/createPoint.css";
import "./style/pageframe.css";
import NavBar from "./navBar";
import { findByLabelText } from "@testing-library/react";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      redirect: "/CreatePoint",
      EditStatus: "",
    };
    this.redirecter = this.redirecter.bind(this);
    this.submitPoint = this.submitPoint.bind(this);
    this.reload = this.reload.bind(this);
    this.addPolignPoint = this.addPolignPoint.bind(this);
    this.removePolignPoint = this.removePolignPoint.bind(this);
  }

  componentDidMount() {
    if (sessionStorage.getItem("userData")) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  }

  async submitPoint() {
    //Obter os valores de cada componente
    let titulo = document.getElementById("title").value;
    let description = document.getElementById("descr").value;
    let tipoEdificio = document.getElementById("tipoEdif").value;
    let dataEdif = document.getElementById("date").value;
    let x = document.getElementById("coordx").value;
    let y = document.getElementById("coordy").value;
    let pcoordinates = document.getElementById("pcoordinates").value;
    let div = document.getElementById("EditStatusDiv");
    let div2 = document.getElementById("VerifyStatusDiv");
    //Caso algum deles não esteja preenchido não deixa
    if (
      titulo == "" ||
      description == "" ||
      tipoEdificio == "" ||
      dataEdif == "" ||
      x == ""||
      y == ""||
      pcoordinates == ""
    ) {
      div2.style.color = "#dc3545";
      this.setState({ success: false, VerifyStatus: "Preencha todos os campos" });
      return;
    }
    pcoordinates=pcoordinates.replace(/\n/g,",");
    pcoordinates = pcoordinates.substring(0, pcoordinates.length - 1);
    //Dados do utilizador
    let user = JSON.parse(sessionStorage.getItem("userData"));
    //Inserir o ponto
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-type", "application/json");
    var raw = JSON.stringify({
      data: {
        titulo: titulo,
        descricao: description,
        coordenadas: x+","+y+","+pcoordinates,
        data: dataEdif,
        tipoEdif: tipoEdificio,
        user_id: user.id,
        prop_id: 1,
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
      "http://localhost:3000/points/insert",
      requestOptions
    );
    //Resposta por parte do server
    let data = await response.json();
    //
    console.log(data.sucess);
    //Caso consiga inserir, inserir agora as imagens
    if (data.sucess === true) {
      div.style.color = "#28a745";
      this.setState({
        EditStatus: "Ponto criado com sucesso!",
        VerifyStatus: "",
      });
      document.getElementById("title").value="";
    document.getElementById("descr").value="";
    document.getElementById("tipoEdif").value="";
    document.getElementById("date").value="";
    document.getElementById("coordx").value="";
    document.getElementById("coordy").value="";
    document.getElementById("pcoordinates").value="";
    } else {
      div.style.color = "#dc3545";
      this.setState({
        EditStatus: "Houve um erro ao criar o ponto!",
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
    let point = document.getElementById("apcoord");
    let listpoint = document.getElementById("pcoordinates");
    if (point.value !== "") {
      listpoint.value = listpoint.value + point.value + "\n";
      point.value = "";
    } else return;
  }
  removePolignPoint() {
    let listpoint = document.getElementById("pcoordinates");
    if (listpoint.value !== "") {
        var aux = listpoint.value.split("\n");
        listpoint.value="";
        for(let i=0; i<aux.length-2;i++){
            listpoint.value = listpoint.value + aux[i] + "\n";
        }
    } else return;
  }

  render() {
    if (this.state.redirect !== "/CreatePoint") {
      return <Redirect to={this.state.redirect} />;
    }

    return (
      <div id="body">
        <NavBar redirecter={this.redirecter}></NavBar>
        <div id="PageMainDiv">
          <div className="BackgroundDiv"></div>
          <div id="PageCenter">
            <div id="PageCentralDiv">
              <div className="TitleDiv"></div>
              <p className="TitleP">Criar ponto de interesse</p>

              <div id="PointBox">
                <div className="FieldDiv">
                  <label className="FieldLabel">Nome</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    className="TextBox"
                    onChange={this.reload}
                    onFocus={this.reload}
                  ></input>
                </div>

                <div className="FieldDiv">
                  <label className="FieldLabel">Descrição</label>
                  <textarea
                    type="text"
                    id="descr"
                    name="descr"
                    onChange={this.reload}
                    onFocus={this.reload}
                  ></textarea>
                </div>

                <div className="FieldDiv">
                  <label className="FieldLabel">Tipo de edificio</label>
                  <input
                    type="text"
                    id="tipoEdif"
                    name="tipoEdif"
                    className="TextBox"
                    onFocus={this.reload}
                    onChange={this.reload}
                  ></input>
                </div>

                <div className="FieldDiv">
                  <label className="FieldLabel">Data de enauguração</label>
                  <input
                    type="text"
                    id="date"
                    name="date"
                    className="TextBox"
                    onChange={this.reload}
                    onFocus={this.reload}
                  ></input>
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
                      id="apcoord"
                      name="apcoord"
                      className="TextBox"
                      style={{ width: "220px" }}
                      onChange={this.reload}
                      onFocus={this.reload}
                    ></input>
                    <button
                      className="CPBtts"
                      style={{ width: "140px" ,margin:"4px"}}
                      onClick={this.addPolignPoint}
                    >
                      Adicionar >
                    </button>
                    <button
                      className="CPBtts"
                      style={{ width: "140px" ,margin:"4px"}}
                      onClick={this.removePolignPoint}
                    >
                     {"< Remover"}
                    </button>
                  </div>
                  <textarea
                    type="text"
                    id="pcoordinates"
                    name="pcoordinates"
                    style={{ width: "220px" }}
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
                  <button className="CPBtts" onClick={this.submitPoint}>
                    Criar
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
