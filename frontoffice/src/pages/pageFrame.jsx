import React,{Component} from "react";
import './style/pageframe.css';

class PageFrame extends Component {

    render(){
        return(
            <div id="PageMainDiv">
                <div id="PageCentralDiv">

                </div>
                <footer id="FooterDiv">
                    <p id="Footer1p">ToursTomar</p>
                    <p id="Footer2p">- Projeto desenvolvido no âmbito da cadeira de Projeto de Sistemas de Informação - Instituto Politécnico de Tomar</p>
                </footer>
            </div>
        );  
    }
        
}

export default PageFrame;