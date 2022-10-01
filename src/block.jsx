import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import { List } from './list';
export class Block extends Component {
  state = {
    value: '',
  };
  handleChange = (evt) => {
    console.log(evt);
    this.setState({ value: evt.target.value });
  };
  handleinput = () => {
    return (
      <div className="row m-2">
        <div className="col">
          <form>
            <input
              className="col"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </form>
        </div>
        <div className="col-1 ">
          <span>
            <button
              className="badge "
              onClick={() =>
                this.props.handleAdd(this.props.arr.title, this.state.value)
              }
            >
              +
            </button>
          </span>
        </div>
      </div>
    );
  };
  changeid = (val) => {
    this.props.evthandler(this.props.arr.title, val);
  };
  render() {
    console.log(this.props.arr.title);
    return (
      <div className="col-lg-4 col-md-6 col-sm-12 mb-2" >
        <div className="card" id="cardBody">
          {/* <img className="card-img-top" src="..." alt="Card image cap"> */}
          <div className="card-body ">
            <h1 className="card-header card-title text-center ">
              {this.props.arr.title}
            </h1>
            {this.props.arr.title == 'ToDo' && this.handleinput()}
            {this.props.arr.list.map((li) => (
              <List li={li} changeid={(val) => this.changeid(val)} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
