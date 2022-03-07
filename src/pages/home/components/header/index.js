import React, { useState, useEffect,memo } from 'react';
import { Link } from "umi"
import { cookie } from "project-libs"
import "./index.less"
function Header(props){
  const [username, setUsername] = useState(localStorage.getItem("username"))
  return (
    <div className='header'>
      <div className='title'>阿周民俗</div>
      <div className='login'>
      {
        username ? 
        username : 
        <><Link to='/login'>登录</Link> | <Link to='/register'>注册</Link></>
      }
      </div>
    </div>
  )
}
//memo的主要作用：在页面初始化的情况下判断函数组件的props是否有发生变化引致重新渲染。如果没有则返回false，避免页面初始化重复渲染
export default memo(Header)