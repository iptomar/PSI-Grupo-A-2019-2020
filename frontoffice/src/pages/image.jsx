import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import "./style/points.css";
import "./style/pageframe.css";
import NavBar from "./navBar";

class Images extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: "/image",
      data: null,
      point: JSON.parse(sessionStorage.getItem("point")),
      images:[]
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
      "https://localhost:3000/images/search",
      requestOptions
    );
    let data = await response.json();
    await this.getImages(data.mesage);
  }

  async getImages(images) {
    let imgArr=[];
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
        "https://localhost:3000/images/getimage",
        requestOptions
      );
      let data = await response.json();
      img.img = data.mesage;
      imgArr.push(img);
      if(imgArr.length==images.length){
        this.setState({images:imgArr});
      }

    });
  }

  redirecter(local) {
    if (local === "/logout") {
      sessionStorage.setItem("userdata", "");
      sessionStorage.clear();
      this.setState({ redirect: "/", data: null });
    } else this.setState({ redirect: local });
  }

  render() {
    let imgs=[];
    if (this.state.redirect !== "/image") {
      return <Redirect to={this.state.redirect} />;
    }
    if(this.state.images.length!=0){
      this.state.images.forEach((img)=>{
        imgs.push(
          <div>
            <img src={'data:image/jpg;base64,'+img.img}></img>
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
              {imgs}
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
