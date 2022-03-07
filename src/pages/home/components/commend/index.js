import React, { useState, useEffect } from 'react';
import { history } from "umi"
import './index.less';
export default function (props) {
  const [state, setState] = useState();
  const handleIntoDetail = (id)=>{
    history.push({
      pathname:'/houseDetail',
      query:{
        id
      }
    })
  }
  return (
    <div className="commend">
      <div className="title">热门民俗</div>
      <div className="commend-list">
        {
          props?.hotPro?.map((item,index) => (
          <div className="item" key={index} onClick={handleIntoDetail.bind(this,item.id)}>
            <img className="img" src={item?.imgs[0]?.url}></img>
            <div className="text">
              <div className="intro">{item.intro}</div>
              <div className="name">{item.name}</div>
              <div className="price">￥{item.price}</div>
            </div>
          </div>
        ))
      }
      </div>
    </div>
  );
}
