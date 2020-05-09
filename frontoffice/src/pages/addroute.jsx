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
        };
        this.redirecter = this.redirecter.bind(this);
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

    render() {

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
                                    <button className="CRBtts">Criar</button>
                                </div>

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
