import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import "./style/points.css";
import "./style/pageframe.css";
import NavBar from "./navBar";
import ReactFileReader from "react-file-reader";

class AddImages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: "/AddImage",
      data: null,
      point: JSON.parse(sessionStorage.getItem("point")),
      images: [],
      imags: [],
    };
    this.redirecter = this.redirecter.bind(this);
    this.addIMGS = this.addIMGS.bind(this);
  }

  async addIMGS() {
    //Obter o nome do autor e legenda da imagem
    let autorImagem = document.getElementById("autor").value;
    let legendaImagem = document.getElementById("legenda").value;
    //Tamanho do array
    let id = this.state.point;
    let arraySize = this.state.imags.length;
    for (let index = 0; index < arraySize; index++) {
      //Obter o index da virgula
      let virgulaIndex = this.state.imags[index].indexOf(",", 0);

      //Adicionar 1 ao valor do index obtido, pois quer-se o que está à frente
      //da virgula
      virgulaIndex += 1;
      //Obter agora a substring da imagem
      let image = this.state.imags[index].substring(virgulaIndex);

      //Mandar a imagem para o servidor
      var myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
      myHeaders.append("Content-type", "application/json");

      var raw = JSON.stringify({
        data: {
          dados: {
            Path: "",
            Legenda: legendaImagem,
            AutorFonte: autorImagem,
            Interesse_id: id,
            usersid: 1,
          },
          imagem: image,
        },
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        mode: "cors",
        redirect: "follow",
      };

      //Enviar o POST para o servidor
      let response = await fetch(
        this.props.ApiPath + "images/insert",
        requestOptions
      );
      //Resposta por parte do server
      let data = await response.json();

      //Caso tenha enviado as imagens com sucesso
      if (data.sucess == true) {
        alert("Imagens inseridas com sucesso");
      } 
      //Caso contrário
      else {
        alert("Ocorreu um erro na inserção das imagens");
      }

      //Redirect para as imagens
      this.setState({ redirect: "/Image" });

    }
  }

  handleFiles = (files) => {
    //Set state imagens com os ficheiros a ser introduzidos
    this.setState({ imags: files.base64 });
  };

  redirecter(local) {
    if (local === "/Logout") {
      sessionStorage.setItem("userdata", "");
      sessionStorage.clear();
      this.setState({ redirect: "/", data: null });
    } else this.setState({ redirect: local });
  }

  render() {
    let imgs = [];

    if (this.state.redirect !== "/AddImage") {
      return <Redirect to={this.state.redirect} />;
    }

    if (this.state.imags.length !== 0) {
      this.state.imags.forEach((img) => {
        imgs.push(<img style={{ margin: "8px" }} src={img} width="300"></img>);
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
              <p className="TitleP">Nova Foto</p>
              <div id="PointBox">
                <input
                  type="text"
                  id="legenda"
                  name="legenda"
                  placeholder="Legenda"
                  className="TextBox"
                  onChange={this.reload}
                ></input>

                <input
                  type="text"
                  id="autor"
                  name="autor"
                  placeholder="Autor"
                  className="TextBox"
                  onChange={this.reload}
                ></input>

                <ReactFileReader
                  base64={true}
                  multipleFiles={true}
                  handleFiles={this.handleFiles}
                >
                  <button className="CPBtts">Upload</button>
                </ReactFileReader>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    flexWrap: "wrap",
                    margin: "20px",
                  }}
                >
                  {imgs}
                </div>
                <div id="CPButtonsDiv">
                  <button
                    className="CPBtts"
                    onClick={() => {
                      this.setState({ redirect: "/Image" });
                    }}
                  >
                    Voltar
                  </button>
                  <button onClick={this.addIMGS} className="CPBtts">
                    Guardar
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

export default AddImages;
