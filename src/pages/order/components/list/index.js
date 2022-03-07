import React, { useState, useEffect } from 'react';
import Item from '../item';
import ShowLoading from '@/components/Loading';

import './index.less';
export default function (props) {
  return (
    <div className="lists">
      <div>
        {props.unFinishList.map((item, index) => (
          <Item key={index} type={props.type} order={item}></Item>
        ))}
      </div>
      <ShowLoading showLoading={props.showLoading} />
    </div>
  );
}
