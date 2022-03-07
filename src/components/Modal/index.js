import React, { Component } from 'react';
import CreatedPortal from './createdPortal';
import { Icon } from 'antd-mobile';
export default class Modal extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }
  onClose = ()=>{
    this.props.onCloseModal()
  }
  render() {
    let { showModal } = this.props
    const Style = {
      outDiv:{},
    }
    return (
     <>
      {
        showModal ? 
       
          <CreatedPortal>
            <div style={}>
              Modal组件
              {this.props.children}
              <Icon type='cross' onClick={this.handleCloseModal} onClick={this.onClose}></Icon>
            </div>
          </CreatedPortal>
        :null
      }
     </>
    )
  }
}