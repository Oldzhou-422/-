import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd-mobile';
import { useObserverHook } from '@/hook/useObserverHook';
import { Http } from '@/utils';
import List from './components/list';
import { Common } from '@/enum';
import { Skeleton } from '@/components/Skeleton';
import './index.less';
export default function (props) {
  const [page, setPage] = useState(Common.PAGE_INFO);
  const [unFinishList, setUnFinishList] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  const [isPayed, setIsPayed] = useState(0);
  const tabs = [
    {
      title: '未支付',
      sub: 0,
    },
    {
      title: '已支付',
      sub: 1,
    },
  ];
  useEffect(() => {
    fetchOrder(1);
  }, []);
  const fetchOrder = async (pageNum) => {
    const res = await Http({
      url: '/order/getList',
      method: 'post',
      body: {
        ...page,
        pageNum,
        isPayed,
      },
    });
    if (res.length !== 0 && res.length <= page.pageSize) {
      setUnFinishList(res);
      setShowLoading(false);
    } else {
      setShowLoading(false);
    }
  };
  useObserverHook(
    '#' + Common.LOADING_ID,
    async (entry) => {
      if (entry[0].isIntersecting) {
        const res = await Http({
          url: '/order/getList',
          method: 'post',
          body: {
            ...page,
            pageNum: page.pageNum + 1,
            isPayed,
          },
        });
        if (res.length !== 0 && unFinishList.length !== 0 && res.length <= page.pageSize) {
          setUnFinishList([...unFinishList, ...res]);
          setShowLoading(false)
        }else{
          setShowLoading(false)
        }
      }
    },
    null
  );
  useEffect(()=>{
    //切换tabs栏时（type值修改时）需要做的事情
    /* 
      清空订单列表
      showLoading重新设置未true(无论之前是否为true)
      将page值设置未初始值 
      再发送一次从第一页开始的网络请求 
     */
    setUnFinishList([])
    setShowLoading(true)
    setPage(Common.PAGE_INFO)
    fetchOrder(1)
  }, [isPayed])
  //监听tab栏修改
  const handleTabsChange = (e)=>{
    setIsPayed(e.sub)
  }
   

  return (
    <div className="order">
      <Tabs className="tabs" tabs={tabs} onChange={handleTabsChange}>
        {unFinishList?.length !== 0 ? (
          <div>
            <List
              type="0"
              unFinishList={unFinishList}
              showLoading={showLoading}
            ></List>
          </div>
        ) : (
          <Skeleton></Skeleton>
        )}

        {unFinishList ? (
          <div>
            <List
              type="1"
              unFinishList={unFinishList}
              showLoading={showLoading}
            ></List>
          </div>
        ) : (
          <Skeleton></Skeleton>
        )}
      </Tabs>
    </div>
  );
}
