import React, { Component,lazy,Suspense } from 'react';

export default class Lazyload extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }
  renderComponent(){
    let Lazy;
    const { component,delay,...other } = this.props
    if(!component || component.constructor.name !== 'Promise'){
      Lazy = import("./error")
    }
    Lazy = lazy(()=>{
      return new Promise(resolve=>{
        setTimeout(()=>{
          resolve(component)
        },delay)
      })
    })
    return <Lazy {...other}/>
  }
  render() {
    return (
      <div>
        <Suspense fallback={<div>加载中.....</div>}>
          {this.renderComponent()}
        </Suspense>
      </div>
    )
  }
}