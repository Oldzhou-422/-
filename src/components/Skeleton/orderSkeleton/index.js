import React, { useState, useEffect } from 'react';
import './index.less';
export default function (props) {
  const [state, setState] = useState(Array(3).fill(1));

  useEffect(() => {}, []);

  return (
    <>
      {state.map((item, index) => (
        <div className="skeleton" key={index}>
          <img className="skeleton-img"></img>
          <div className="skeleton-info">
            <div className="skeleton-title">{}</div>
            <div className="skeleton-price">{}</div>
          </div>
          <div className="skeleton-pay"></div>
        </div>
      ))}
    </>
  );
}
