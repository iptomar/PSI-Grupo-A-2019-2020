import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import './style/addRoute.css';
import "./style/pageframe.css";
import NavBar from "./navBar";

class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            redirect: "/AddRoute",
            userdata: null,
            CreateStatus: ""
        };
        this.redirecter = this.redirecter.bind(this);
        this.submitRoute = this.submitRoute.bind(this);
    }

    componentDidMount() {
        if (sessionStorage.getItem("userData")) {
            let data = JSON.parse(sessionStorage.getItem("userData"));
            this.setState({ userdata: data });
            this.setState({ loggedIn: true });
        } else {
            this.setState({ loggedIn: false });
        }
    }

    redirecter(local) {
        if (local === "/Logout") {
            sessionStorage.setItem("userdata", "");
            sessionStorage.clear();
            this.setState({ redirect: "/", loggedIn: false, data: null });
        } else this.setState({ redirect: local });
    }

    //Função relativa à submissão do roteiro
    async submitRoute() {
        let RouteName = document.getElementById("title").value; //Obter o nome do roteiro
        let RouteDescription = document.getElementById("descr").value; //Obter a descrição do roteiro
        let RouteUser = this.state.userdata.id; //Obter o ID do utilizador que está a criar o roteiro
        let div = document.getElementById("CreateStatusDiv"); //DIV que irá conter a resposta se o roteiro foi criado com sucesso ou não

        //Headers
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-type", "application/json");
        var raw = JSON.stringify({
            "data": {
                "nome": RouteName,
                "descricao": RouteDescription,
                "user_id": RouteUser
            }
        });

        //Tipo de request
        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            mode: "cors",
            redirect: "follow"
        };

        //Colocar os dados na base de dados
        let response = await fetch(
            this.props.ApiPath+"routes/insert",
            requestOptions
        )

        //Resposta por parte do server
        let data = await response.json();

        //Caso consiga inserir, mostrar a mensagem de sucesso
        if (data.sucess === true) {
            div.style.color="#28a745";
            this.setState({ CreateStatus: "Roteiro criado com sucesso!"})
        } 
        //Senão mostra a mensagem de erro
        else {
            div.style.color="#dc3545";
            this.setState({ CreateStatus: "Houve um erro ao criar o roteiro!"})
        }
    }

    render() {

        if(!sessionStorage.getItem("userData")){
            this.setState({ redirect: "/" });
            return <Redirect to={this.state.redirect} />;
        }

        if (this.state.redirect !== "/AddRoute") {
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
                            <p className="TitleP">Criar roteiro</p>
                            <div id="RouteBox">
                                <div className="FieldDiv">
                                    <label className="FieldLabel">Nome</label>
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        className="TextBox"
                                    ></input>
                                </div>

                                <div className="FieldDiv">
                                    <label className="FieldLabel">Descrição</label>
                                    <textarea
                                        type="text"
                                        id="descr"
                                        name="descr"
                                    ></textarea>
                                </div>

                                <div id="CRButtonsDiv">
                                    <button className="CRBtts" onClick={() => { this.setState({ redirect: "/Routes" }) }} >Voltar</button>
                                    <button className="CRBtts" onClick={ this.submitRoute}>Criar</button>
                                </div>

                                <div id="CreateStatusDiv">{this.state.CreateStatus}</div>

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

export default Routes;
