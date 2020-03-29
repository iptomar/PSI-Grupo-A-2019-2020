import React from "react";
import { Link, Redirect} from "react-router-dom";

class MainPage extends React.Component {

    

    render(){
        if (sessionStorage.getItem("userData")) {
            return (<Redirect to={"/home"} />);
        }

        return(
        <div>
            <h3>Bem-vindo. Isto é uma página teste.</h3>
            <Link to="/login">LOGIN</Link>
        </div>);  
    }
        
}

export default MainPage;