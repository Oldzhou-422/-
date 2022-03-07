import React, { useState, useEffect } from 'react';
import AwesomeSwiper from 'react-awesome-swiper';
import "./index.less"
export default function (props) {
  const [state, setState] = useState();
  const config = {
    loop:true,
    autoplay:{
      delay:3000
    },
    pagination:{
      el:'.swiper-pagination'
    }
  }
  useEffect(() => {}, []);

  return (
    <AwesomeSwiper config={config}>
      <div className='swiper-wrapper '>
          {
            props?.imgUrl?.map((item,index)=>(
              <div className='swiper-slide' key={index}>
                <img className='swiper-img' src={item.url}></img>
              </div>
            ))
          }
      </div>
      <div className='swiper-pagination'></div>
    </AwesomeSwiper>
  )

}
