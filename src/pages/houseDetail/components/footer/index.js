import React, { useState, useEffect } from 'react';
import { Button,Toast } from 'antd-mobile';
import { Modal,Input } from "antd"
import { useStoreHook } from "think-react-store"
import { useLocation } from "umi"
import './index.less';
export default function (props) {
  const [modalVisible, setModalVisible] = useState(false)
  const [commentValue, setCommentValue] = useState('')
  const { query } = useLocation() 
  const { houseDetail :{ addNewComment,msg,setReloadNum } } = useStoreHook()
  const { TextArea } = Input
  useEffect(() => {
    if(msg !== ""){
      setReloadNum()
      Toast.success("评论成功")
    }
  }, [msg]);
  const handleConfirmComment = ()=>{
    if(commentValue){
      //发表评论接口
      addNewComment({
        method:'post',
        commentValue,
        houseId:query?.id
      })
      setModalVisible(false)
    }else{
      Toast.fail('请输入评论信息')
    }
  }
  const handleValueChange = (e)=>{
    setCommentValue(e.target.value)
  }
  return (
    <div className="footer-wrapper">
      <span className="text">一起来评论一下吧~</span>
      <Button
        type="primary"
        size="small"
        style={{ width: '20%' }}
        onClick={() => {
          setModalVisible(true)
        }}
      >
        评论
      </Button>
      <Modal 
        visible={modalVisible}
        title="写下您的看法~"
        onCancel={()=>{
          setModalVisible(false)
        }}
        footer={[
          <Button key={''} onClick={handleConfirmComment} type='primary' style={{width:'10rem'}}> 
            发表评论
          </Button>
        ]}
      >
        <TextArea 
          autoSize={{maxRows:6,minRows:4}}
          value={commentValue} 
          onChange={handleValueChange}
          showCount={true}
          ></TextArea>
      </Modal>
    </div>
  );
}
