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
                            <div className="CenterNavButton" onClick={()=>this.props.redirecter("/routes")}>
                                <p className="NavButtonsText">Roteiros</p>
                            </div>
                            <div className="CenterNavButton" onClick={()=>this.props.redirecter("/mypoints")}>
                                <p className="NavButtonsText">Pontos</p>
                            </div>
                            {this.state.user==="admin@admin.com"?
                            <div style={{display:"flex", flexDirection:"row"}}>
                            <div className="CenterNavButton" onClick={()=>this.props.redirecter("/users")}>
                                <p className="NavButtonsText">Utilizadores</p>
                            </div> 
                            <div className="CenterNavButton" onClick={()=>this.props.redirecter("/profile")}>
                                <p className="NavButtonsText">Perfil</p>
                            </div>
                            </div>
                            :
                            <div className="CenterNavButton" onClick={()=>this.props.redirecter("/profile")}>
                                <p className="NavButtonsText">Perfil</p>
                            </div>
                            }      
                        </div>
                    :
                        <div id="NavButtons">

                        </div>
                    }
                   
                    <div id="LogInOut">
                        {this.state.loggedIn?
                            <div className="LogInOutDiv" onClick={this.logout}>
                                <span className="NavButtonsText">Logout</span>
                                <img className="LogInOutIMG" src="./assets/logout.png" alt=""></img>
                            </div>
                        :
                            <div className="LogInOutDiv" onClick={()=>this.props.redirecter("/login")}>
                                <span className="NavButtonsText">Login</span>
                                <img className="LogInOutIMG" src="./assets/login.png" alt=""></img>
                            </div>
                        }
                    </div>

                </div>
            </div>
        );  
    }
        
}

export default NavBar;