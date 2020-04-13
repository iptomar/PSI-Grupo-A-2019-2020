import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";


class UpdatePoint extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: "",
            success: null
        };

    }

    async submitUpdatePoint() {
        let titulo = document.getElementById("title").value;
        let description = document.getElementById("descr").value;
        let tipoEdificio = document.getElementById("tipoEdif").value;
        let dataEdif = document.getElementById("date").value;
        let coordinates = document.getElementById("coordinates").value;
        let user = JSON.parse(sessionStorage.getItem("userData"));

        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json"); myHeaders.append("Content-type", "application/json");
        var raw = JSON.stringify({
            //ID por modificar
          id:1,
          data:{
            "titulo": titulo,
            "descricao": description,
            "coordenadas": coordinates,
            "data": dataEdif,
            "tipoEdif": tipoEdificio,
            "user_id": user.id,
            "prop_id": 1
        }
        });
    
     
    
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw, mode: 'cors',
          redirect: 'follow'
          };

        let response = await fetch("https://localhost:3000/points/update",
         requestOptions);

        let data = await response.json();

        console.log(data);

        if (data.sucess === true) {
            this.setState({ success: true });
        } else {
            this.setState({ success: false });
        }
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
                        <label htmlFor="email">Coordenadas</label>

                        <input
                            type="text"
                            id="coordinates"
                            name="coordinates"
                            placeholder="Coordenadas"
                            className="login-input"
                        ></input>
                    </div>

                    <button
                        className="login-btn"
                        onClick={this.submitUpdatePoint.bind(this)}
                    >
                        Atualizar Ponto
              </button>
                </div>
                {this.state.success === true && (
                    <div>
                        <p>Update efetuado com sucesso!</p>
                    </div>
                )}
                {this.state.success === false && (
                    <div>
                        <p>Erro! Update não efetuado!</p>
                    </div>
                )}
            </div>
        );
    }

}

export default UpdatePoint;