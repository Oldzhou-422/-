import React, { useState, useEffect } from 'react';
import Banner from './components/banner';
import Comment from './components/comment';
import Detail from './components/detail';
import Footer from './components/footer';
import { useStoreHook } from 'think-react-store';
import { useObserverHook } from "@/hook/useObserverHook"
import { history,useLocation } from 'umi';
import { Common } from "@/enum"
export default function (props) {
  const {
    houseDetail: { detail, getHouseDetailAsync, getCommentsAsync, comments ,reloadNum,setReloadNum,order,hasOrderAsync,addOrderAsync,delOrderAsync}
  } = useStoreHook();
  const { query } = useLocation()
  //处理评论区滑动触底
  useObserverHook('#'+Common.LOADING_ID,(entry)=>{
    if(entry[0].isIntersecting){
      setReloadNum()
    }
  },[])
  useEffect(() => {
    getCommentsAsync({
      method: 'post',
      houseId:query?.id
    });
  }, [reloadNum]);
  //页面初始获取民宿的详情
  useEffect(() => {
    getHouseDetailAsync({
      method: 'post',
      params: {
        id: history.location.query.id,
      },
    });
  }, []);
  //处理民宿的状态，detail中的按钮
  useEffect(()=>{
    hasOrderAsync({id:query?.id})
  },[])
  //详情页预定按钮事件处理
  const handleClick = (val)=>{
    if(order?.id){
      delOrderAsync({id:val})
      return 
    }else{
      addOrderAsync({id:val})
    }

  }
  return (
    <div>
      <Banner imgUrl={detail?.banner} />
      <Detail info={detail?.info} order={order} btnClick={()=>{handleClick(query?.id)}} />
      <Comment comments={comments} id={Common.LOADING_ID}/>
      <Footer /> 
    </div>
  );
}
