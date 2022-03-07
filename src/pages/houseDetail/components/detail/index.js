import React, { useState, useEffect } from 'react';
import dayjs from "dayjs"
import { Button } from "antd-mobile"
import "./index.less"
export default function(props){
  const [state, setState] = useState()
  const handleOrder = ()=>{
    props?.btnClick()
  }
  const renderBtn = ()=>{
    //props.order没有id,即订单不存在
    if(!props.order?.id){
      return <Button className='info-btn' type='warning' onClick={handleOrder}>预定</Button>
    }
    //订单存在但未支付
    if(props.order?.isPayed === 0){
      return <Button className='info-btn' type='ghost' onClick={handleOrder}>取消预定</Button>
    }else{
      return <Button className='info-btn' type='host'>已支付</Button>
    }
  }
  return (
    <div className='detail-wrapper'>
      <div className='info'>
        <div className='info-pro'>简介:{props?.info?.info}</div>
        <div className='info-pro'>价格:{props?.info?.price}</div>
        <div className='info-pro'> 发布时间: {dayjs(props?.info?.publishTime).format("YYYY-MM-DD") }</div>
        <div className='info-pro'>开始出租: {dayjs(props?.info?.startTime).format("YYYY-MM-DD") }</div>
        <div className='info-pro'>结束出租: {dayjs(props?.info?.endTime).format("YYYY-MM-DD") }</div>
      </div>
      { renderBtn() }
    </div>
  )
}