import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class GetUsers extends Component{
  state={
    user: null,
    redirect:false
  }
  
  constructor(props){
    super(props);
  }

  componentDidMount(){
    if (sessionStorage.getItem("userData")) {
      let data = JSON.parse(sessionStorage.getItem("userData"));
      this.setState({ user: data });
    } else{
      this.setState({redirect:true});
    }
  }

  render(){
    let UI=[]
    return <div>{UI}</div>
  }

}

export default GetUsers;