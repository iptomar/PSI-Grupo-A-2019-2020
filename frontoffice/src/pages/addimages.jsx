import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import "./style/points.css";
import "./style/pageframe.css";
import NavBar from "./navBar";
import ReactFileReader from 'react-file-reader';

class AddImages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: "/AddImage",
      data: null,
      point: JSON.parse(sessionStorage.getItem("point")),
      images: [],
      imags: []
    };
    this.redirecter = this.redirecter.bind(this);
  }

  async addIMGS() {
    //Obter o nome do autor e legenda da imagem
    let autorImagem = document.getElementById("autor").value;
    let legendaImagem = document.getElementById("legenda").value;
    //Tamanho do array
    let id = this.state.point;
    console.log(id);
    let arraySize = this.state.imags.length;
    for (let index = 0; index < arraySize; index++) {
      //Obter o index da virgula
      let virgulaIndex = this.state.imags[index].indexOf(',', 0);
      console.log(virgulaIndex);
      //Adicionar 1 ao valor do index obtido, pois quer-se o que está à frente
      //da virgula
      virgulaIndex += 1;
      //Obter agora a substring da imagem
      let image = this.state.imags[index].substring(virgulaIndex);
      console.log(image);
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
        redirect: "follow"
      };

      let response = await fetch(
        "http://localhost:3000/images/insert",
        requestOptions
      )
      //Resposta por parte do server
      let data = await response.json();

      console.log(data);

      window.location.reload();
    }
  }

  handleFiles = files => {
    //Set state imagens com os ficheiros a ser introduzidos
    this.setState({ imags: files.base64 });
    this.addIMGS();
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
        "http://localhost:3000/images/getimage",
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

    return (
      <div id="body">
        <NavBar redirecter={this.redirecter}></NavBar>
        <div id="PageMainDiv">
          <div className="BackgroundDiv"></div>
          <div id="PageCenter">
            <div id="PageCentralDiv">
              <br />
              <Link type="button" to="/Image">
                Voltar
              </Link>
              <div className="input-group">
                <label htmlFor="email">Fotografias do edificio</label>
                <label htmlFor="email">Legenda</label>
                <input type="text" id="legenda" name="legenda" placeholder="Legenda da imagem" className="LoginInput" />
                <label htmlFor="email">Nome do autor da imagem</label>
                <input type="text" id="autor" name="autor" placeholder="Nome do autor da imagem" className="LoginInput" />
                <ReactFileReader base64={true} multipleFiles={true} handleFiles={this.handleFiles}>
                  <button className='btn'>Upload</button>
                </ReactFileReader>
              </div>

              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>{imgs}</div>
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
