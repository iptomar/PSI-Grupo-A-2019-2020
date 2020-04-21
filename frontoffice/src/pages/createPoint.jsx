import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import './style/createPoint.css';
import './style/pageframe.css';
import NavBar from "./navBar";

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedIn:false,
            redirect: "/CreatePoint",
            EditStatus: ""

        };
        this.redirecter = this.redirecter.bind(this);
        this.submitPoint=this.submitPoint.bind(this);
        this.reload=this.reload.bind(this);
    }

    componentDidMount(){
        if(sessionStorage.getItem("userData")){
            this.setState({loggedIn : true});            
        }else{
            this.setState({loggedIn : false});
        }
    }

    async submitPoint() {
        //Obter os valores de cada componente
        let titulo = document.getElementById("title").value;
        let description = document.getElementById("descr").value;
        let tipoEdificio = document.getElementById("tipoEdif").value;
        let dataEdif = document.getElementById("date").value;
        let coordinates = document.getElementById("coordinates").value;
        let div = document.getElementById("EditStatusDiv");
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
            div.style.color="#28a745";
            this.setState({EditStatus:"Ponto criado com sucesso!", VerifyStatus:""})
        } else {
            div.style.color="#dc3545";
            this.setState({EditStatus:"Houve um erro ao criar o ponto!", VerifyStatus:""})
        }
    }

    redirecter(local){
        if(local==="/Logout"){
            sessionStorage.setItem("userdata","");
            sessionStorage.clear();
            this.setState({redirect: "/", loggedIn : false, data: null});    
        } 
        else      
        this.setState({redirect: local});
    }

    reload(){
        this.setState({
            EditStatus:"",
            VerifyStatus:""
        })
    }

    render() {
        if (this.state.redirect!=="/CreatePoint") {
          return (<Redirect to={this.state.redirect} />);
        }        
        
        return (
            <div id="body">
                <NavBar redirecter={this.redirecter}></NavBar>
                <div id="PageMainDiv">
                    <div className="BackgroundDiv"></div>
                    <div id="PageCenter">
                    <div id="PageCentralDiv">
                        <div className="TitleDiv"></div>
                        <p className="TitleP">Criar ponto de interesse</p>
      
                        <div id="PointBox">
                            <div className="FieldDiv">
                                <label className="FieldLabel">Nome</label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    className="TextBox"
                                    onChange={
                                        this.reload,
                                        (e) => {this.setState({point: e.target.value})}
                                    }
                                    onFocus={
                                        this.reload
                                    }
                                ></input>
                            </div>

                            <div className="FieldDiv">
                                <label className="FieldLabel">Descrição</label>
                                <textarea
                                type="text"
                                id="descr"
                                name="descr"
                                onChange={
                                    this.reload,
                                    (e) => {this.setState({point: e.target.value})}
                                }
                                onFocus={
                                    this.reload
                                }
                            ></textarea>
                            </div>
                            

                            <div className="FieldDiv">
                                <label className="FieldLabel">Tipo de edificio</label>
                                <input
                                type="text"
                                id="tipoEdif"
                                name="tipoEdif"
                                className="TextBox"
                                onFocus={this.reload} 
                                onChange={
                                    this.reload,
                                    (e) => {this.setState({point: e.target.value})}
                                }
                            ></input>
                            </div>
                            
                            <div className="FieldDiv">
                                <label className="FieldLabel">Data de enauguração</label>
                                <input
                                type="text"
                                id="date"
                                name="date"
                                className="TextBox"
                                onChange={
                                    this.reload,
                                    (e) => {this.setState({point: e.target.value})}
                                }
                                onFocus={
                                    this.reload
                                }
                            ></input>
                            </div>
                            
                            <div className="FieldDiv">
                                <label className="FieldLabel">Coordenadas</label>
                                <textarea
                                type="text"
                                id="coordinates"
                                name="coordinates"
                                onChange={
                                    this.reload,
                                    (e) => {this.setState({point: e.target.value})}
                                }
                                onFocus={
                                    this.reload
                                }
                            ></textarea>
                            </div>
                            
                            <div id="VerifyStatusDiv">{this.state.VerifyStatus}</div>

                            <div id="CPButtonsDiv">
                                <button className="CPBtts" onClick={()=>{this.setState({redirect: "/MyPoints"})}} >Voltar</button>
                                <button className="CPBtts" onClick={ this.submitPoint} >Criar</button>
                            </div>
                                
                            <div id="EditStatusDiv">{this.state.EditStatus}</div>

                        </div>

                        

                    </div>
                    <footer id="FooterDiv">
                        <p id="Footer1p">ToursTomar</p>
                        <p id="Footer2p">- Projeto desenvolvido no âmbito da cadeira de Projeto de Sistemas de Informação - Instituto Politécnico de Tomar</p>
                    </footer>
                    </div>
                    <div className="BackgroundDiv"></div>
                </div>
                
            </div>
        );
    }
}

export default Profile;