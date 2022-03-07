import React, { Component } from 'react';

export default class ErrorBoundary extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isError:false
    };
  }
  static getDerivedStateFromError(error) {
    console.log(error)
    return {
      isError:true
    }
  }
  render() {
    return (
      <div>
        <h3>服务器处理繁忙，请稍后重试!!</h3>
      </div>
    )
  }
}