import React,{Component} from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './style';

export class Heading extends Component{
     render(){
       return(
         <div className="card" id="title">
         {/* <img className="card-img-top" src="..." alt="Card image cap"> */}
         <div className="card-body text-center">
           <h1 className="card-title ">My List</h1>
           {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           <a href="#" className="btn btn-primary">Go somewhere</a> */}
         </div>
       </div>
       )
     }

}