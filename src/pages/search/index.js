import React, { useState, useEffect } from 'react';
import { SearchBar, ActivityIndicator } from 'antd-mobile';
import { useHttpHook } from '@/hook/useHttpHook';
import { useObserverHook } from '@/hook/useObserverHook';
import { useImgHook } from '@/hook';
import { Common } from '@/enum';
import Loading from '@/components/Loading';
import './index.less';
export default function (props) {
  const [pageInfo, setPageInfo] = useState({ ...Common.PAGE_INFO });
  //定义搜索框value
  const [value, setValue] = useState('');

  //定义searchSubmit的值
  const [searchSubmitvalue, setSearchSubmitvalue] = useState('');
  const [showLoading, setShowLoading] = useState(true);
  const [houseList, setHouseList] = useState([]);
  //懒加载的hook
  useObserverHook(
    '#loading',
    (entry) => {
      if (!housesLoading && entry[0].isIntersecting && showLoading) {
        setPageInfo({
          ...pageInfo,
          pageNum: pageInfo.pageNum + 1,
        });
      }
    },
    null,
  );

  //图片懒加载的hook
  useImgHook('.img', (entry) => {}, null);
  //通过监听pageNum和searchSubmitvalue的数据变化来发送请求
  const [houses, housesLoading] = useHttpHook({
    url: '/house/search',
    body: {
      ...pageInfo,
      searchValue: searchSubmitvalue,
    },
    watch: [pageInfo.pageNum, searchSubmitvalue],
  });
  useEffect(() => {
    if (!housesLoading && houses) {
      if (houses.length && searchSubmitvalue === '') {
        //接口过来的数组有值才拼接
        setHouseList([...houseList, ...houses]);
        //还有一个例外的情况,当最后一组数据返回的长度小于pageSize的时候，也要将showLoading改为false
        if (houses.length < pageInfo.pageSize) {
          setShowLoading(false);
        }
      } else {
        //没有则说明到列表尽头了，动态绑定loading元素
        setShowLoading(false);
      }
    }
  }, [housesLoading]);
  useEffect(()=>{
    if(searchSubmitvalue){
      setHouseList(houses)
    }
  },[houses])
  //搜索框事件处理
  const handleValueChange = (value) => {
    setValue(value);
  };
  const handleCancle = () => {
    setValue('');
  };
  const handleSubmit = (val) => {
    setSearchSubmitvalue(val);
    //立刻把输入框里的值清空
    setValue('');
  };

  return (
    <div>
      {/* 搜索模块 */}
      <SearchBar
        placeholder="搜索民宿"
        value={value}
        onChange={handleValueChange}
        onCancel={handleCancle}
        onSubmit={handleSubmit}
      />
      {/* 搜索民宿结果模块 */}
      {!housesLoading && houseList ? (
        <div className="house-list">
          {houseList.length &&
            houseList.map((item, index) => (
              <div className="item" key={index}>
                <img
                  className="img"
                  src="src/asset/img/loading"
                  real-src={item?.imgs[0]?.url}
                ></img>
                <div className="text">
                  <div className="title">{item.name}</div>
                  <div className="intro">{item.intro}</div>
                  <div className="price">￥{item.price}</div>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <ActivityIndicator toast />
      )}
      <div id={Common.LOADING_ID}>
        <Loading showLoading={showLoading} />
      </div>
    </div>
  );
}
