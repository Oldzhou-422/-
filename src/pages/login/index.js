import React, { useState, useEffect } from 'react';
import { List, Button, Toast, InputItem } from 'antd-mobile';
import { useStoreHook } from 'think-react-store';
import { createForm } from 'rc-form';
import { history } from "umi"
import "./index.less"
function login(props) {
  const { getFieldProps, validateFields } = props.form;
  const {
    User: { loginAsync },
  } = useStoreHook();
  const handleLogin = () => {
    validateFields((err, value) => {
      if (err) {
        Toast.fail('请输入登录信息');
        return;
      }
      loginAsync(value);
    });
  };
  const handleIntoRegister = ()=>{
    history.push({
      pathname:'/register'
    })
  }
  useEffect(() => {}, []);

  return (
    <div>
      <List renderHeader={() => '用户登录'}>
        <List.Item>
          <InputItem
            placeholder="请输入用户名"
            {...getFieldProps('username', {
              rules: [{ required: true }],
            })}
          >
            用户名
          </InputItem>
        </List.Item>
        <List.Item>
          <InputItem
            placeholder="请输入密码"
            type="password"
            {...getFieldProps('password', {
              rules: [{ required: true }],
            })}
          >
            密码
          </InputItem>
        </List.Item>
      </List>
      <Button type="warning" onClick={handleLogin}>
        登录
      </Button>
      <div className='register-page' onClick={handleIntoRegister}>未有账号?请注册</div>
    </div>
  );
}
export default createForm()(login);
