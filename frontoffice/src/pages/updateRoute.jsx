/* Imports necessários para o correto funcionamento da página */
/* Import dos componentes React e Component do react */
import React, { Component } from "react";
/* Import componente Redirect do react router */
import { Redirect } from "react-router-dom";
/* Import do CSS da página */
import './style/updateRoute.css';
/* Import do layout da página */
import "./style/pageframe.css";
/* Import da navbar */
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
        /* Caso exista uma variável de sessão "userData" */
        if (sessionStorage.getItem("userData")) {
            /* Obter o JSON dos dados em questão */
            let data = JSON.parse(sessionStorage.getItem("userData"));
            /* Colocar os dados do utilizador no state "userdata" */
            this.setState({ userdata: data });
            /* Se tem dados do utilizador quer dizer que está autenticado */
            this.setState({ loggedIn: true });
        }
        /* Caso não exista a variável de sessão "userData" */
        else {
            /* Se tem não dados do utilizador quer dizer que não está autenticado */
            this.setState({ loggedIn: false });
        }
    }

    /* Função responsável pelo redireccionamento da página */
    redirecter(local) {
        /* Caso a variável "local" tenha o valor "/Logout" */
        if (local === "/Logout") {
            /* Remover todos os dados de userdata */
            sessionStorage.setItem("userdata", "");
            /* Limpar todas as variáveis de sessão */
            sessionStorage.clear();
            /* Definir o redirect para a página inicial, "loggedIn" para falso, indicando que o utilizador */
            /* não está autenticado e por fim "data" a null significando que não há quaisquer dados do utilizador */
            this.setState({ redirect: "/", loggedIn: false, data: null });
        }
        /* Caso a variáel "local tenha qualquer outro valor" */
        else {
            /* Definir a página para onde vai redireccionar */
            this.setState({ redirect: local });
        }

    }

    /* Função responsável pela atualização do roteiro */
    async updateRoute() {
        /* ID do utilizador */
        let userID = this.state.userdata.id;
        /* ID do roteiro */
        let id = this.state.id;
        /* Nome do roteiro */
        let nome = document.getElementById("title").value;
        /* Descrição do roteiro */
        let descricao = document.getElementById("descr").value;
        /* DIV responsável por mostrar se a alteração foi ou não bem sucedida */
        let div = document.getElementById("CreateStatusDiv");

        /* Headers da mensagem a ser enviada */
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

        /* Request options da mensagem a ser enviada */
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw, mode: 'cors',
            redirect: 'follow'
        };

        /* Enviar pedido ao servidor */
        let response = await fetch(this.props.ApiPath + "routes/update",
            requestOptions);

        /* Resposta por parte do servidor */
        let data = await response.json();

        //Caso consiga inserir, mostrar a mensagem de sucesso
        if (data.sucess === true) {
            /* Mensagem de edição do roteiro bem sucedida */
            this.setState({ EditStatus: "Roteiro alterado com sucesso!" });
            /* Cor da mensagem */
            div.style.color = "#28a745";
        }
        //Senão mostra a mensagem de erro
        else {
            /* Mensagem de falha na edição do roteiro */
            this.setState({ EditStatus: "Houve um erro ao alterar o roteiro!" });
            /* Cor da mensagem */
            div.style.color = "#dc3545";
        }
    }


    render() {
        /* Caso não exista a variável de sessão "userData", vai para a página principal */
        if (!sessionStorage.getItem("userData")) {
            this.setState({ redirect: "/" });
            return <Redirect to={this.state.redirect} />;
        }

        /* Caso o valor de redirect não seja "/UpdateRoute", redireccionar para "this.state.redirect" */
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
                                        value={this.state.nome}
                                        onChange={
                                            (e) => { this.setState({ nome: e.target.value }) }
                                        }
                                        className="TextBox"
                                    ></input>
                                </div>

                                <div className="FieldDiv">
                                    <label className="FieldLabel">Descrição</label>
                                    <textarea
                                        type="text"
                                        id="descr"
                                        value={this.state.descricao}
                                        onChange={
                                            (e) => { this.setState({ descricao: e.target.value }) }
                                        }
                                        name="descr"
                                    ></textarea>
                                </div>

                                <div id="ERButtonsDiv">
                                    <button className="ERBtts" onClick={() => { this.setState({ redirect: "/Routes" }) }} >Voltar</button>
                                    <button className="ERBtts" onClick={this.updateRoute}>Atualizar</button>
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
