import React, { useState, useEffect } from 'react';
import "./index.less"
import { List,Button,Toast } from "antd-mobile"
import { history } from "umi"
import { useStoreHook } from "think-react-store"
export default function(props){
  const { User:{ username,tel,avatar,getUserDetailAsync,logoutAsync }} = useStoreHook()
  const handleClick = ()=>{
    history.push({
      pathname:'/user/edit',
      query:{
        id:3
      }
    })
  }
  //点击退出登录
  const handleLogout = async ()=>{
    await logoutAsync()
  }
  //页面初始化加载用户详情
  useEffect(() => {
    getUserDetailAsync()
  }, [])

  return (
    <div className='user-info'>
      <div className='avatar'>
        <img src={avatar || 'https://img95.699pic.com/xsj/0f/d0/fo.jpg!/fh/300'}></img>
        <div className='tel'>{tel}</div>
        <div className='user-name'>{username}</div>
        <div className='edit' onClick={handleClick}>设置</div>
      </div>
      <List>
        <List.Item>用户协议</List.Item>
        <List.Item>常见问题</List.Item>
        <List.Item>联系客服</List.Item>
      </List>
      <Button type="warning" onClick={handleLogout}>退出登录</Button>
    </div>
  )
}