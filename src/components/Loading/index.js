import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import { Common } from "@/enum"
import "./index.less"
export default function(props){
  const [state, setState] = useState()

  useEffect(() => {

  }, [])

  return (
    <div id={ Common.LOADING_ID }>
      { props.showLoading ?
       <div className='loading' >loading...</div>:<div className='loading'>没有更多数据~</div>
      }
    </div>
  )
}