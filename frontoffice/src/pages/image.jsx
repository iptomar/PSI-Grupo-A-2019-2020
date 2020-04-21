import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import "./style/points.css";
import "./style/pageframe.css";
import NavBar from "./navBar";
import ReactFileReader from 'react-file-reader';

class Images extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: "/Image",
      data: null,
      point: JSON.parse(sessionStorage.getItem("point")),
      images: [],
      imags: []
    };
    this.redirecter = this.redirecter.bind(this);
  }

  async componentDidMount() {
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
      "http://localhost:3000/images/search",
      requestOptions
    );
    let data = await response.json();
    await this.getImages(data.mesage);
  }

  async addImages() {
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
            Legenda: "Legenda",
            AutorFonte: "AutorFonte",
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
    this.addImages();
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
    if (this.state.redirect !== "/Image") {
      return <Redirect to={this.state.redirect} />;
    }
    if (this.state.images.length != 0) {
      this.state.images.forEach((img) => {
        imgs.push(
          <div>
            <h4>{img.AutorFonte}</h4>
            <img src={"data:image/jpg;base64," + img.img} width="500"></img>
            <p>{img.Legenda}</p>
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
              <br />
              <Link type="button" to="/mypoints">
                Voltar
              </Link>
              <div className="input-group">
                <label htmlFor="email">Fotografias do edificio</label>
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

export default Images;
