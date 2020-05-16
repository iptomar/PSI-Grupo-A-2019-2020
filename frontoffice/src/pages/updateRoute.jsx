import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import './style/addRoute.css';
import "./style/pageframe.css";
import NavBar from "./navBar";

class UpdateRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            redirect: "/UpdateRoute",
            userdata: null,
            EditStatus: "",
            nome: sessionStorage.getItem("nomeRoteiro"),
            descricao: sessionStorage.getItem("descricaoRoteiro"),
            id: sessionStorage.getItem("routeID")
        };
        this.redirecter = this.redirecter.bind(this);
        this.updateRoute = this.updateRoute.bind(this);
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

    async updateRoute(){
        let userID = this.state.userdata.id;
        let id = this.state.id;
        let nome = document.getElementById("title").value;
        let descricao = document.getElementById("descr").value;
        let div = document.getElementById("CreateStatusDiv");

        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json"); myHeaders.append("Content-type", "application/json");
        var raw = JSON.stringify({
            "id": id,
            "data": {
                "nome": nome,
                "descricao": descricao,
                "user_id": userID
            }
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw, mode: 'cors',
            redirect: 'follow'
        };

        let response = await fetch(this.props.ApiPath+"routes/update",
            requestOptions);

        let data = await response.json();
        
        //Caso consiga inserir, mostrar a mensagem de sucesso
        if (data.sucess === true) {
            div.style.color="#28a745";
            this.setState({ EditStatus: "Roteiro alterado com sucesso!"})
        } 
        //Senão mostra a mensagem de erro
        else {
            div.style.color="#dc3545";
            this.setState({ EditStatus: "Houve um erro ao alterar o roteiro!"})
        }
    }


    render() {

        if(!sessionStorage.getItem("userData")){
            this.setState({ redirect: "/" });
            return <Redirect to={this.state.redirect} />;
        }

        if (this.state.redirect !== "/UpdateRoute") {
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
                            <p className="TitleP">Atualizar roteiro</p>
                            <div id="RouteBox">
                                <div className="FieldDiv">
                                    <label className="FieldLabel">Nome</label>
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        value = {this.state.nome}
                                        onChange={
                                            (e) => {this.setState({nome: e.target.value})}
                                        }
                                        className="TextBox"
                                    ></input>
                                </div>

                                <div className="FieldDiv">
                                    <label className="FieldLabel">Descrição</label>
                                    <textarea
                                        type="text"
                                        id="descr"
                                        value = {this.state.descricao}
                                        onChange={
                                            (e) => {this.setState({descricao: e.target.value})}
                                        }
                                        name="descr"
                                    ></textarea>
                                </div>

                                <div id="CRButtonsDiv">
                                    <button className="CRBtts" onClick={() => { this.setState({ redirect: "/Routes" }) }} >Voltar</button>
                                    <button className="CRBtts" onClick={ this.updateRoute}>Atualizar</button>
                                </div>

                                <div id="CreateStatusDiv">{this.state.EditStatus}</div>

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

export default UpdateRoute;
