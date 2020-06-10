import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import "./style/points.css";
import "./style/pageframe.css";
import NavBar from "./navBar";

class Images extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: "/Image",
      data: null,
      point: JSON.parse(sessionStorage.getItem("point")),
      images: [],
      imags: [],
    };
    this.redirecter = this.redirecter.bind(this);
    this.deleteImage = this.deleteImage.bind(this);
    this.getUserImages = this.getUserImages.bind(this);
    this.getImages = this.getImages.bind(this);
  }

  async componentDidMount() {
    await this.getUserImages();
  }

  async getUserImages() {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-type", "application/json");
    var raw = JSON.stringify({ data: this.state.point });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      mode: "cors",
      redirect: "follow",
    };

    let response = await fetch(
      this.props.ApiPath + "images/search",
      requestOptions
    );
    let data = await response.json();
    await this.getImages(data.mesage);
  }

  async getImages(images) {
    let imgArr = [];
    await images.forEach(async (img) => {
      var myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
      myHeaders.append("Content-type", "application/json");
      var raw = JSON.stringify({ data: img.Path });

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
      img.img = data.mesage;
      imgArr.push(img);
      if (imgArr.length == images.length) {
        this.setState({ images: imgArr });
      }
    });
  }

  async deleteImage(id) {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-type", "application/json");
    var raw = JSON.stringify({ data: { id: id } });

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: raw,
      mode: "cors",
      redirect: "follow",
    };

    let response = await fetch(
      this.props.ApiPath + "images/delete",
      requestOptions
    );
    let data = await response.json();

    await this.getUserImages();
  }

  redirecter(local) {
    if (local === "/Logout") {
      sessionStorage.setItem("userdata", "");
      sessionStorage.clear();
      this.setState({ redirect: "/", data: null });
    } else this.setState({ redirect: local });
  }

  render() {
    let imgs = [];
    if (this.state.redirect !== "/Image") {
      return <Redirect to={this.state.redirect} />;
    }
    if (this.state.images.length != 0) {
      this.state.images.forEach((img) => {
        imgs.push(
          <table id="UsersTable">
            <tr>
              <th className="TableHeader" colspan="2">
                {img.AutorFonte}
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <img src={"data:image/jpg;base64," + img.img} width="600"></img>
              </td>
            </tr>
            <tr>
              <td>{img.Legenda}</td>
              <td>
                <button onClick={() => this.deleteImage(img.id)}>❌</button>
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
              <p className="TitleP">Imagens do ponto</p>
              <div id="RegisterRedirectDiv">
                <button
                  className="RegisterRedirectBtt"
                  onClick={() => {
                    this.setState({ redirect: "/AddImages" });
                  }}
                >
                  Adicionar imagens
                </button>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {imgs}
                <div
                  style={{
                    padding: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
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

export default Images;
