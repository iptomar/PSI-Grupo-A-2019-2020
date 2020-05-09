import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import './style/updatePoint.css';
import './style/pageframe.css';
import NavBar from "./navBar";

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedIn:false,
            redirect: "/UpdatePoint",
            EditStatus: "",
            point: JSON.parse(sessionStorage.getItem("point")),

        };
        this.redirecter = this.redirecter.bind(this);
        this.updatePoint=this.updatePoint.bind(this);
        this.reload=this.reload.bind(this);
    }

    componentDidMount(){
        if(sessionStorage.getItem("userData")){
            this.setState({loggedIn : true});            
        }else{
            this.setState({loggedIn : false});
        }
    }

    async updatePoint() {
        let titulo = document.getElementById("title").value;
        let description = document.getElementById("descr").value;
        let tipoEdificio = document.getElementById("tipoEdif").value;
        let dataEdif = document.getElementById("date").value;
        let coordinates = document.getElementById("coordinates").value;
        let div = document.getElementById("EditStatusDiv");
        let user = JSON.parse(sessionStorage.getItem("userData"));

        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json"); myHeaders.append("Content-type", "application/json");
        var raw = JSON.stringify({
            id: 1,
            data: {
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

        let response = await fetch("http://localhost:3000/points/update",
            requestOptions);

        let data = await response.json();

        console.log(data);

        if (data.sucess) {
            div.style.color="#28a745";
            this.setState({EditStatus:"Ponto atualizado com sucesso!", VerifyStatus:""})
          } else {
            div.style.color="#dc3545";
            this.setState({EditStatus:"Houve um erro ao atulizar o ponto!", VerifyStatus:""})
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
        if (this.state.redirect!=="/UpdatePoint") {
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
                        <p className="TitleP">Editar ponto de interesse</p>
      
                        <div id="PointBox">
                            <div className="FieldDiv">
                                <label className="FieldLabel">Nome</label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={this.state.point.titulo}
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
                                value={this.state.point.descricao}
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
                                value={this.state.point.tipoEdif}
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
                                value={this.state.point.data}
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
                                value={this.state.point.coordenadas}
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
                                <button className="CPBtts" onClick={ this.updatePoint} >Criar</button>
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