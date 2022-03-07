import React, { useState, useEffect } from 'react';
import { useObserverHook } from "@/hook/useObserverHook"
import { history } from "umi"
export default function(props){
  const [state, setState] = useState()
  useObserverHook("#block",(entry)=>{
   console.log(entry)
  })
  return (
    <div>
      observer
      <div id='block' style={{width:"100px",height:'100px',background:'red',marginTop:'1000px'}}>block</div>
      <button onClick={()=>{history.push("/home")}}>首页</button>
    </div>
  )
}