import React, { useState, useEffect, memo } from 'react';
import { Picker } from 'antd-mobile';
import { List, Calendar, Button } from 'antd-mobile';
import { history } from 'umi';
import dayjs from 'dayjs';
import './index.less';
function Search(props) {
  const [selectedCity, setSelectedCity] = useState(['1']);
  //时间state模块
  const [timeVisible, setTimeVisible] = useState(false);
  const [confirmTime, setConfirmTime] = useState('');
  //选择城市点击确认时触发的事件
  const handleCityChange = (v) => {
    setSelectedCity(v);
  };
  //处理日历选择器展示与消失
  const handleShowCalenar = () => {
    setTimeVisible(!timeVisible);
  };
  //处理日历选择完成的时间，对时间进行格式化处理
  const handleTimeConfirm = (start, end) => {
    setConfirmTime(
      dayjs(start).format('YYYY-MM-DD') + '~' + dayjs(end).format('YYYY-MM-DD'),
    );
    setTimeVisible(!timeVisible);
  };

  const handleClickSearch = () => {
    history.push({
      pathname: '/search',
      query: {
        startTime: confirmTime.split('~')[0],
        endTime: confirmTime.split('~')[1],
        selectedCity,
      },
    });
  };
  useEffect(() => {
  }, []);

  return (
    <div className="search">
      {/* 城市查询模块 */}
      <div className="search-city">
        {props.cityLoading ? (
          <></>
        ) : (
          <Picker
            title="城市"
            cols={1}
            data={props.city}
            value={selectedCity}
            onChange={handleCityChange}
          >
            <List.Item>选择城市</List.Item>
          </Picker>
        )}
      </div>

      {/* 预定民宿时间模块 */}
      <div className="search-time">
        <div className="time" onClick={handleShowCalenar}>
          <div>预定时间</div>
          <div>{confirmTime === '' ? '请选择预定日期' : confirmTime}</div>
        </div>
        <Calendar
          title="预定时间"
          visible={timeVisible}
          onCancel={handleShowCalenar}
          onConfirm={handleTimeConfirm}
        />
      </div>
      <Button
        className="btn"
        fill="solid"
        type="warning"
        size="middle"
        onClick={handleClickSearch}
      >
        搜索
      </Button>
    </div>
  );
}
function areEqual(oldProps, newProps) {
  if (
    oldProps.city === newProps.city &&
    oldProps.cityLoading === newProps.cityLoading
  ) {
    return true;
  } else {
    return false;
  }
}
export default memo(Search, areEqual);
