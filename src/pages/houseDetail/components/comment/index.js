import React, { useState, useEffect } from 'react';
import './index.less';
import Loading from "@/components/Loading"
export default function (props) {
  return (
    <div className="comment-wrapper">
      <div className="title">评论专区</div>
      <div className="comment-list">
        {props?.comments?.map((item, index) => (
          <div className="item" key={index}>
            <img className="avatar" src={item.user.avatar}></img>
            <div className="user-info">
              <div className="name">{item.user.username}</div>
              <div className="text">{item.msg}</div>
            </div>
          </div>
        ))}
        <Loading id={props.id}/>
      </div>
    </div>
  );
}
