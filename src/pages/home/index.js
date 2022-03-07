import React, { useState, useEffect } from 'react';
import Header from "./components/header"
import Search from "./components/search"
import Commend from "./components/commend"
import { useHttpHook } from '@/hook/useHttpHook';
export default function(props){
  const [cities,setCities] = useState([])
  //利用数组的赋值解构
  //获取城市选择列表
  const [city,cityLoading] = useHttpHook({
    url:'/home/city',
    method:'post'
  })
  //获取热门民宿项目
  const [hotPro,hotLoading] = useHttpHook({
    url:'/home/hot',
    method:'post'
  });
  //处理首页城市查询接口
  useEffect(() => {
    if(city){
      const res = city.cityList.map(item=>{
        return {
           value:item.id,
           label:item.cityName
        }
      })
      setCities(res)
    }
    /*  */
  }, [city])

  return (
    <div>
      <Header/>
      {<Search city={cities} cityLoading={cityLoading}/>}
      <Commend hotPro={hotPro} hotLoading={hotLoading}/>
    </div>
  )
}