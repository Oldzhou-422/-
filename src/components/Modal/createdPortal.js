import React, { Component } from 'react';
import ReactDOM  from 'react-dom';
export default class createdPortal extends Component {

  constructor(props) {
    super(props);
    this.body = document.querySelector("body")
    this.newElement = document.createElement("div")
  }
  componentDidMount() {
    this.newElement.setAttribute("id","portal-root")
    this.body.appendChild(this.newElement)
  }
  componentWillUnmount() {
    this.body.removeChild(this.newElement)
  }
  render(){
    console.log(this.props.children)
    return ReactDOM.createPortal(this.props.children,this.newElement)
  }
}