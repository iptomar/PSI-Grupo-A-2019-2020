import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";


class InsertPoint extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: "",

        };

    }

    async submitPoint() {
        let titulo = document.getElementById("title").value;
        let description = document.getElementById("descr").value;
        let tipoEdificio = document.getElementById("tipoEdif").value;
        let dataEdif = document.getElementById("date").value;

        let user = JSON.parse(sessionStorage.getItem("userData"));

        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-type", "application/json");
        var raw = JSON.stringify({
          "data":{
            "titulo": titulo,
            "descricao": description,
            "coordenadas": '0',
            "data": dataEdif,
            "tipoEdif": tipoEdificio,
            "user_id": user.id,
            "prop_id":1
          }
        });
    
        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          mode: "cors",
          redirect: "follow"
        };
    
        let response = await fetch(
          "https://localhost:3000/points/insert",
          requestOptions
        )

        let data = await response.json();
        console.log(data);
    }

    render() {
        return (
            <div className="inner-container">
                <Link type="button" to="/home">
                    Voltar
            </Link>

                <div className="header">Ponto de interesse</div>

                <div className="box">

                    <div className="input-group">
                        <label htmlFor="surname">Titulo do ponto de interesse</label>

                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Titulo"
                            className="login-input"
                        ></input>
                    </div>

                    <div className="input-group">
                        <label htmlFor="name">Descrição do ponto de interesse</label>

                        <textarea
                            id="descr"
                            name="descr"
                            placeholder="Descrição do ponto de interesse"
                            className="login-input"
                        >
                        </textarea>
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Tipo de edificio</label>

                        <input
                            type="text"
                            id="tipoEdif"
                            name="tipoEdif"
                            placeholder="Tipo de edificio"
                            className="login-input"
                        ></input>
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Data de criação do edificio</label>

                        <input
                            type="text"
                            id="date"
                            name="date"
                            placeholder="Data"
                            className="login-input"
                        ></input>
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Coordenada canto superior esquerdo (Longitude)</label>

                        <input
                            type="text"
                            id="coord1_1"
                            name="coord1_1"
                            placeholder="Coordenada"
                            className="login-input"
                        ></input>
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Coordenada canto superior esquerdo (Latitude)</label>

                        <input
                            type="text"
                            id="coord1_2"
                            name="coord1_2"
                            placeholder="Coordenada"
                            className="login-input"
                        ></input>
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Coordenada canto superior direito (Longitude)</label>

                        <input
                            type="text"
                            id="coord2_1"
                            name="coord2_1"
                            placeholder="Coordenada"
                            className="login-input"
                        ></input>
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Coordenada canto superior direito (Latitude)</label>

                        <input
                            type="text"
                            id="coord2_2"
                            name="coord2_2"
                            placeholder="Coordenada"
                            className="login-input"
                        ></input>
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Coordenada canto inferior direito (Longitude)</label>

                        <input
                            type="text"
                            id="coord3_1"
                            name="coord3_1"
                            placeholder="Coordenada"
                            className="login-input"
                        ></input>
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Coordenada canto inferior direito (Latitude)</label>

                        <input
                            type="text"
                            id="coord3_2"
                            name="coord3_2"
                            placeholder="Coordenada"
                            className="login-input"
                        ></input>
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Coordenada canto inferior esquerdo (Longitude)</label>

                        <input
                            type="text"
                            id="coord4_1"
                            name="coord4_1"
                            placeholder="Coordenada"
                            className="login-input"
                        ></input>
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Coordenada canto inferior esquerdo (Latitude)</label>

                        <input
                            type="text"
                            id="coord4_2"
                            name="coord4_2"
                            placeholder="Coordenada"
                            className="login-input"
                        ></input>
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Coordenada centro (Latitude)</label>

                        <input
                            type="text"
                            id="coord5_1"
                            name="coord5_1"
                            placeholder="Coordenada centro"
                            className="login-input"
                        ></input>
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Coordenada centro (Longitude)</label>

                        <input
                            type="text"
                            id="coord5_2"
                            name="coord5_2"
                            placeholder="Coordenada centro"
                            className="login-input"
                        ></input>
                    </div>

                    <button
                        className="login-btn"
                        onClick={this.submitPoint.bind(this)}
                    >
                        Adicionar Ponto
              </button>
                </div>


            </div>
        );
    }

}

export default InsertPoint;