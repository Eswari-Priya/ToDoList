import React,{Component} from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
export class List extends Component{
  render(){
    return(
    <div className="card justify-content-center d-flex  m-2">
    <div className="row ">
      <p className="col-8 m-3 ">{this.props.li}</p>
      <span className="col-1 "><button id='Done' className="d-flex flex-row-reverse " onClick={() => this.props.changeid(this.props.li)}>Done</button></span>
    </div></div>)
  }
}