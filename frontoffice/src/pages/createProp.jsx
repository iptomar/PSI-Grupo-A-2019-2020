import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import './style/addRoute.css';
import "./style/pageframe.css";
import NavBar from "./navBar";

class CProp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            redirect: "/CreateProp",
            userdata: null,
            CreateStatus: ""
        };
        this.redirecter = this.redirecter.bind(this);
        this.submitProp = this.submitProp.bind(this);

    }

    componentDidMount() {
        console.log(this.props);
        if (sessionStorage.getItem("userData")) {
            let data = JSON.parse(sessionStorage.getItem("userData"));
            this.setState({ userdata: data });
            this.setState({ loggedIn: true });
        } else {
            this.setState({ loggedIn: false });
        }
    }

    async submitProp() {

        let propName = document.getElementById("title").value; //Obter o nome do proprietario
        let propJob = document.getElementById("prof").value; //Obter a profissão do proprietario
        let id = JSON.parse(sessionStorage.getItem("userData"));
        id = id.id;



        //Headers
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-type", "application/json");
        var raw = JSON.stringify({
            "data": {
                "name": propName,
                "work": propJob,
                "user_id": id
            }
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
            this.props.ApiPath + "props/insert",
            requestOptions
        );

        //Resposta por parte do server
        let data = await response.json();
        //
        console.log(data.sucess);
    }

    redirecter(local) {
        if (local === "/Logout") {
            sessionStorage.setItem("userdata", "");
            sessionStorage.clear();
            this.setState({ redirect: "/", loggedIn: false, data: null });
        } else this.setState({ redirect: local });
    }

    render() {

        if (!sessionStorage.getItem("userData")) {
            this.setState({ redirect: "/" });
            return <Redirect to={this.state.redirect} />;
        }

        if (this.state.redirect !== "/CreateProp") {
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
                            <p className="TitleP">Criar proprietário</p>
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
                                    <label className="FieldLabel">Profissão</label>
                                    <input
                                        type="text"
                                        id="prof"
                                        name="prof"
                                        className="TextBox"
                                    ></input>
                                </div>

                                <div id="CRButtonsDiv">
                                    <button className="CRBtts" onClick={() => { this.setState({ redirect: "/props" }) }} >Voltar</button>
                                    <button className="CRBtts" onClick={()=>{this.submitProp()}}>Criar</button>
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

export default CProp;