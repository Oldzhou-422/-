import React, { Component } from 'react';
import propTypes from "prop-types"
import { TabBar,Badge } from "antd-mobile"
import { BsArchive,BsArchiveFill,BsBagCheck,BsBagCheckFill } from "react-icons/bs"
import { IoPersonOutline,IoPersonSharp } from "react-icons/io5"
import { history } from "umi"
export default class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs:[
        {
          key:'home',
          title:'首页',
          icon:<BsArchive/>,
          badge:Badge.dot, //红点标识
          link:'/home',
          selectedIcon:<BsArchiveFill/>
        },
        {
          key:'order',
          title:'我的订单',
          icon:<BsBagCheck/>,
          badge:Badge.dot,
          link:'/order',
          selectedIcon:<BsBagCheckFill/>
        },
        {
          key:'user',
          title:'个人中心',
          icon:<IoPersonOutline/>,
          /* badge:Badge.dot */
          link:'/user',
          selectedIcon:<IoPersonSharp/>
        },
      ]
    };
  }

  render() {
    const { show,pathname } = this.props
    const { tabs } = this.state
    return (
      <TabBar hidden={!show}>{
        tabs.map(item=>(
          <TabBar.Item  
            key={item.key}
            title={item.title}
            icon={item.icon}
            onPress={()=>{history.push(item.link)}}
            selected={pathname === item.link}
            selectedIcon={item.selectedIcon}
          />
        ))
      }
      </TabBar>
    )
  }
}
MenuBar.defaultProps = {
  show:false,
  pathname:''
}
MenuBar.propTypes = {
  show:propTypes.bool,
  pathname:propTypes.string
}