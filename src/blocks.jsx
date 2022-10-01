import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Block } from './block';
import './style'
export class Blocks extends Component {
  state = {
    things: [
      { title: 'ToDo', list: ['Say hi'] },
      { title: 'InProgress', list: [] },
      { title: 'Completed', list: [] },
    ],
  };
  evthandler = (id, val) => {
    let thngs = [];
    for (let i of this.state.things) {
      thngs.push({ ...i });
    }
    let ob = thngs.filter((thng) => thng.title == id);
    let ind = 0;
    for (let i = 0; i < 3; i++) {
      if (thngs[i].title == id) {
        ind = i;
      }
    }
    console.log(thngs, ind, id, ob);
    if (id == 'ToDo') {
      thngs[ind].list = thngs[ind].list.filter((li) => li != val);
      thngs[ind + 1].list.push(val);
    } else {
      thngs[ind].list = thngs[ind].list.filter((li) => li != val);
      thngs[ind + 1].list.push(val);
    }
    this.setState({ things: thngs });
  };
  addTolist = (id, val) => {
    let thngs = [];
    for (let i of this.state.things) {
      thngs.push({ ...i });
    }
    let ind = this.state.things.filter((thng) => thng.title == id);
    // console.log(thngs[ind], ind[0].list);
    ind[0].list.push(val);
    this.setState({ things: thngs });
  };
  render() {
    return (
      <div className="container mt-5 ">
        <div className="row d-flex justify-content-center" >
          {this.state.things.map((ob) => (
            <Block
              arr={ob}
              evthandler={this.evthandler}
              handleAdd={this.addTolist}
            />
          ))}
        </div>
        {/* // <div className="col-lg-4 col-md-6 col-sm-12 mb-2">
          //     <Block/>
          // </div>
          // <div className="col-lg-4 col-md-6 col-sm-12 mb-2">
          //     <Block/>
          // </div> */}
      </div>
    );
  }
}
