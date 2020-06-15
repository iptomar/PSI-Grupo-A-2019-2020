import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./style/imagesToValidate.css";
import "./style/pageframe.css";
import NavBar from "./navBar";

class ImagesToValidate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      redirect: "/ImagesToValidate",
      role: "",
      user: JSON.parse(sessionStorage.getItem("userData")),
      images: [],
      show: false,
      imageData: "",
      imageData2: "",
    };
    this.redirecter = this.redirecter.bind(this);
  }

  componentDidMount() {
    if (this.state.user == null) {
      this.setState({ redirect: "/" });
    } else {
      this.getImages();
    }
  }

  async getImages() {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-type", "application/json");
    var raw = JSON.stringify({
      email: this.state.user.email,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      mode: "cors",
      redirect: "follow",
    };

    let response = await fetch(
      this.props.ApiPath + "images/getnonvalidated",
      requestOptions
    );
    let data = await response.json();

    console.log(data);
    this.setState({ images: data.mesage });
  }

  redirecter(local) {
    if (local === "/Logout") {
      sessionStorage.setItem("userdata", "");
      sessionStorage.clear();
      this.setState({ redirect: "/", loggedIn: false, data: null });
    } else this.setState({ redirect: local });
  }

  async showModal(dd) {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-type", "application/json");
    var raw = JSON.stringify({
      data: dd.Path,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      mode: "cors",
      redirect: "follow",
    };

    let response = await fetch(
      this.props.ApiPath + "images/getimage",
      requestOptions
    );
    let data = await response.json();

    await this.setState({ imageData: data });

    await this.setState({ imageData2: dd });

    console.log(this.state.imageData);

    await this.setState({ show: true });
  }

  hideModal() {
    this.setState({ show: false });
  }

  async validateImage(idImage) {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-type", "application/json");
    var raw = JSON.stringify({
      email: this.state.user.email,
      id: idImage,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      mode: "cors",
      redirect: "follow",
    };

    let response = await fetch(
      this.props.ApiPath + "images/validate",
      requestOptions
    );
    let data = await response.json();
    console.log(data);
    await this.getImages();
  }

  render() {
    const showHideClassName = this.state.show
      ? "modal display-block"
      : "modal display-none";

    if (this.state.redirect !== "/ImagesToValidate") {
      return <Redirect to={this.state.redirect} />;
    }

    if (this.state.isadmin == false && sessionStorage.getItem("userData")) {
        this.setState({ redirect: "/MyPoints" });
        return (<Redirect to={this.state.redirect} />);
    }

    //Array que irá conter a lista de utilizadores
    let UI = [];

    if (this.state.images !== []) {
      this.state.images.forEach((element) => {
        UI.push(
          <tr id={element.id}>
            <td>{element.id}</td>
            <td id="details">
              <button title="Ver imagem" onClick={() => this.showModal(element)}>📝</button>
            </td>
            <td>
              <button title="Validar imagem" onClick={() => this.validateImage(element.id)}>✔️</button>
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
              <div show={this.state.show} className={showHideClassName}>
                <div className="modal-main">
                  <img
                    src={"data:image/jpg;base64," + this.state.imageData.mesage}
                    width="400"
                  ></img>
                  <p id="Legenda">{this.state.imageData2.Legenda}</p>
                  <button id="BTNClose" onClick={() => this.hideModal()}>
                    Fechar
                  </button>
                </div>
              </div>

              <div className="TitleDiv"></div>
              <p className="TitleP">Imagens por validar</p>

              <table id="UsersTable">
                <tr>
                  <th className="TableHeader">ID </th>
                  <th className="TableHeader">Ver Detalhes</th>
                  <th className="TableHeader">Validar</th>
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
                    this.setState({ redirect: "/MyPoints" });
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

export default ImagesToValidate;
