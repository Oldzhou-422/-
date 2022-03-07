import React, { useState, useEffect } from 'react';
import { Button,Toast } from 'antd-mobile';
import { Http } from "@/utils"
import "./index.less"
export default function(props){
  const handlePay = async ()=>{
    const res = await Http({
      url:'/order/pay',
      method:'post',
      body:{
        id:props?.order?.id,
        userId:props?.order?.userId
      }
    })
    if(res){
      location.reload()
      Toast.success("支付成功")
    }
  }
  return (
    <div className='list-item'>
      <img className='item-img' src={props?.order?.house.imgs[0]?.url}></img>
      <div className='item-info'>
        <div className='item-title'>{props?.order?.house?.name}</div>
        <div className='item-price'>{props?.order?.house?.price}</div>
      </div>
      <div className='item-pay'>
        {
          props.type == "0"
           ?
          <Button type='warning' size='mini' className='btn' onClick={handlePay}>去支付</Button>:
          <span style={{color:'gray'}}>已支付</span>

        }
        
      </div>
    </div>
  )
}