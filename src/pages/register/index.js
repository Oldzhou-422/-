import React, { useState, useEffect } from 'react';
import { List, Button, Toast, InputItem } from 'antd-mobile';
import { useStoreHook } from 'think-react-store';
import { createForm } from 'rc-form';
import { history } from "umi"
import "./index.less"
function login(props) {
  const { getFieldProps, validateFields } = props.form;
  const {
    User: { registerAsync },
  } = useStoreHook();
  const handleRegister = () => {
    validateFields((err, value) => {
      if (err) {
        Toast.fail('请输入完整的注册信息');
        return;
      }
      if(value.password === value.password2){
        registerAsync({
          username:value.username,
          password:value.password
        });
      }else{
        Toast.fail("新密码需与确认密码一致")
        return
      }
      
    });
  };
  const handleIntoLogin = ()=>{
    history.push({
      pathname:'/login'
    })
  }
  useEffect(() => {}, []);

  return (
    <div>
      <List renderHeader={() => '用户登录'}>
          <InputItem
            placeholder="请输入用户名"
            {...getFieldProps('username', {
              rules: [{ required: true }],
            })}
          >
            用户名
          </InputItem>
          <InputItem
            placeholder="请输入新密码"
            type="password"
            {...getFieldProps('password', {
              rules: [{ required: true }],
            })}
          >
            密码
          </InputItem>
          <InputItem
            placeholder="请输入确认密码"
            type="password"
            {...getFieldProps('password2', {
              rules: [{ required: true }],
            })}
          >
            密码
          </InputItem>
      </List>
      <Button type="warning" onClick={handleRegister}>
        注册
      </Button>
      <div className='register-page' onClick={handleIntoLogin}>已有账号?请登录</div>
    </div>
  );
}
export default createForm()(login);