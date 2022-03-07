import React, { useState, useEffect } from 'react';
import { Button, List, ImagePicker, InputItem,Toast } from 'antd-mobile';
import { useStoreHook } from "think-react-store"
import { createForm } from 'rc-form';
import { history } from "umi"
import "./index.less"
function edit(props) {
  const { getFieldProps, validateFields } = props.form;
  const { User:{ id,sign,tel,avatar,editUserDetailAsync }} = useStoreHook()
  const [files, setFiles] = useState([{url:avatar}]);
  const handleImageChange = (files) => {
    setFiles(files);
  };
  const handleSubmit = () => {
    if(!files.length){
      Toast.fail("请上传图片")
      return
    }
    validateFields((err,value)=>{
      if(err){
        Toast.fail("请补充完整信息")
        return;
      }else{
        editUserDetailAsync({
          avatar:files[0].url,
          ...value
        })
      }
    })
  };
  useEffect(() => {
  }, []);

  return (
    <div>
      <ImagePicker
        files={files}
        
        selectable={files.length < 1}
        onChange={handleImageChange}
      ></ImagePicker>
      <List>
        <List.Item>
          <InputItem
            {...getFieldProps('sign', {
              rules: [{ required: true }],
              initialValue:sign
            })}
            placeholder="请输入新签名"
          >
            签名
          </InputItem>
        </List.Item>
        <List.Item>
          <InputItem
            {...getFieldProps('tel', {
              rules: [{ required: true }],
              initialValue: tel,
            })}
            placeholder="请输入绑定手机号"
          >
            手机号
          </InputItem>
        </List.Item>
      </List>
      <Button className='btn' type="warning" onClick={handleSubmit}>
        修改
      </Button>
    </div>
  );
}
export default createForm()(edit);
