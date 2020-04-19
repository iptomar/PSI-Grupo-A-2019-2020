import React,{Component} from "react";
import { Link, Redirect} from "react-router-dom";
import './style/navBar.css';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn : false,
            user: null
        };
        this.logout = this.logout.bind(this);
    }

    componentDidMount(){
        if (sessionStorage.getItem("userData")) {
            this.setState({loggedIn : true});
            let data = JSON.parse(sessionStorage.getItem("userData"));
            this.setState({user:data.email});
        }
        else{
            this.setState({loggedIn : false});
        }
    }

    logout(){
        this.setState({loggedIn : false});
        this.props.redirecter("/logout");
    }

    render(){

        return(
            <div id="MainNavFrame">
                <div id="ShrinkedNav">
                    <div id="Logo">
                        <img id="LogoImg" src="./assets/logo.png" alt="" 
                        onClick={()=>this.props.redirecter("/")}></img>
                        <img id="LogoText" alt=""></img>
                    </div>
                    {this.state.loggedIn?
                        <div id="NavButtons">
                            <button className="CenterNavButton" onClick={()=>this.props.redirecter("/routes")}> Roteiros </button>
                            <button className="CenterNavButton" onClick={()=>this.props.redirecter("/mypoints")}>Pontos</button>
                            {this.state.user==="admin@admin.com"?
                            <div style={{display:"flex", flexDirection:"row"}}>
                            <button className="CenterNavButton" onClick={()=>this.props.redirecter("/users")}>Utilizadores</button> 
                            <button className="CenterNavButton" onClick={()=>this.props.redirecter("/profile")}>Perfil</button>
                            </div>
                            :
                            <button className="CenterNavButton" onClick={()=>this.props.redirecter("/profile")}>Perfil</button>
                            }      
                        </div>
                    :
                        <div id="NavButtons">

                        </div>
                    }
                   
                    <div id="LogInOut">
                        {this.state.loggedIn?
                            <button className="LogInOutDiv" onClick={this.logout}>
                                <span className="NavButtonsText">Logout</span>
                                <img className="LogInOutIMG" src="./assets/logout.png" alt=""></img>
                            </button>
                        :
                            <button className="LogInOutDiv" onClick={()=>this.props.redirecter("/login")}>
                                Login
                                <img className="LogInOutIMG" src="./assets/login.png" alt=""></img>
                            </button>
                        }
                    </div>

                </div>
            </div>
        );  
    }
        
}

export default NavBar;