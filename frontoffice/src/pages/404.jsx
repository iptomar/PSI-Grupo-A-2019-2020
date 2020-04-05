import React from "react";
import { Redirect } from "react-router-dom";
import './style/404.css';
import NavBar from "./navBar";
import './style/pageframe.css';

class NotFoundPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: "",
        };
        this.redirecter = this.redirecter.bind(this);
    }

    redirecter(local){
        if(local==="/logout"){
            sessionStorage.setItem("userdata","");
            sessionStorage.clear();
            this.setState({redirect: "/", loggedIn : false, data: null});    
        } 
        else      
        this.setState({redirect: local});
    }

    render() {
        if (this.state.redirect!=="") {
            return (<Redirect to={this.state.redirect} />);
        } 
        else{
            return (
                <div>
                    <NavBar redirecter={this.redirecter}></NavBar>
                    <div id="PageMainDiv">
                        <div id="PageCentralDiv">
                            <div id="Div404">
                                <img id="Img404" src="./assets/404.png" alt=""></img>
                            </div>
                        </div>
                        <footer id="FooterDiv">
                            <p id="Footer1p">ToursTomar</p>
                            <p id="Footer2p">- Projeto desenvolvido no âmbito da cadeira de Projeto de Sistemas de Informação - Instituto Politécnico de Tomar</p>
                        </footer>
                    </div>
                </div>
            );
        }
    }
}

export default NotFoundPage;