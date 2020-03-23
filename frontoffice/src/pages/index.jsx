import React from "react";
import { Link } from "react-router-dom";
import {observer, inject} from 'mobx-react';
import {observable} from 'mobx';
import GlobalState from './globalState';

const AppState = new GlobalState();

class MainPage extends React.Component {

    render(){
    return(
    <div>
        <h3>Bem-vindo. Isto é uma página teste.</h3>
        <Link to="/login">LOGIN</Link>
    </div>);  
    }
        
}

export default MainPage;