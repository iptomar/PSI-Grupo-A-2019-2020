import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import ReactFileReader from 'react-file-reader';

class InsertPoint extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: "",
            success: null,
            images: [],
            imageSuccess: null
        };

    }

    async submitPoint() {
        //Obter os valores de cada componente
        let titulo = document.getElementById("title").value;
        let description = document.getElementById("descr").value;
        let tipoEdificio = document.getElementById("tipoEdif").value;
        let dataEdif = document.getElementById("date").value;
        let coordinates = document.getElementById("coordinates").value;
        //Caso algum deles não esteja preenchido não deixa
        if (titulo == "" || description == "" || tipoEdificio == "" || dataEdif == "" || coordinates == "") {
            this.setState({ success: false });
            return;
        }
        //Dados do utilizador
        let user = JSON.parse(sessionStorage.getItem("userData"));
        //Inserir o ponto
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-type", "application/json");
        var raw = JSON.stringify({
            "data": {
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
            method: "POST",
            headers: myHeaders,
            body: raw,
            mode: "cors",
            redirect: "follow"
        };

        let response = await fetch(
            "http://localhost:3000/points/insert",
            requestOptions
        )
        //Resposta por parte do server
        let data = await response.json();
        //
        console.log(data.sucess);
        //Caso consiga inserir, inserir agora as imagens
        if (data.sucess === true) {
            //Tamanho do array
            let arraySize = this.state.images.length;
            for (let index = 0; index < arraySize; index++) {
                //Obter o index da virgula
                let virgulaIndex = this.state.images[index].indexOf(',', 0);
                console.log(virgulaIndex);
                //Adicionar 1 ao valor do index obtido, pois quer-se o que está à frente
                //da virgula
                virgulaIndex += 1;
                //Obter agora a substring da imagem
                let image = this.state.images[index].substring(virgulaIndex);
                image = '"' + image + '"';
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
                            Interesse_id: 1,
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
            }
            this.setState({ success: true });
        } else {
            this.setState({ success: false });
        }
    }

    handleFiles = files => {
        //Set state imagens com os ficheiros a ser introduzidos
        this.setState({ images: files.base64 });
    }

    render() {

        return (
            <div className="inner-container">
                <Link type="button" to="/">
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
                        <label htmlFor="email">Fotografias do edificio</label>
                        <ReactFileReader base64={true} multipleFiles={true} handleFiles={this.handleFiles}>
                            <button className='btn'>Upload</button>
                        </ReactFileReader>
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
                        onClick={this.submitPoint.bind(this)}
                    >
                        Adicionar Ponto
              </button>
                </div>
                {this.state.success === true && (
                    <div>
                        <p>Ponto inserido com sucesso!</p>
                    </div>
                )}
                {this.state.success === false && (
                    <div>
                        <p>Erro! Dados mal inseridos</p>
                    </div>
                )}
            </div>
        );
    }

}

export default InsertPoint;