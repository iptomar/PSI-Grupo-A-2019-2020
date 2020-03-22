import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
    return(
        <div>
            <h3>Bem-vindo. Isto é uma página teste.</h3>
            <Link to="/login">LOGIN</Link>
        </div>
    )
}

export default MainPage;