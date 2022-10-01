import React,{Component} from "react";
import "./style.css";
import {Heading} from './Heading';
import {Blocks} from './blocks';
import 'bootstrap/dist/css/bootstrap.css';
import './style'
export class App extends Component {
  render(){
      return(<div >
        <Heading/>
        <Blocks/>
      </div>)
  }
}


