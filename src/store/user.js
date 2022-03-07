import { Http } from "@/utils"
import { Toast } from "antd-mobile" 
import { history } from "umi"
import { cookie } from "project-libs"
export default {
  state:{
    id:undefined,
    username: undefined,
    tel:undefined,
    avatar:undefined,
    sign:undefined
  },
  reducers:{
    getUserDetail(state,payload){
      return {
        ...state,
        ...payload
      }
    },
    editUserDetail(state,payload){
      return {
        ...state,
        ...payload
      }
    }
  },
  effects:{
    async getUserDetailAsync(dispatch,rootstate,payload){
      const user = await Http({
        url:'/user/detail',
        method:'post',
        body:{
          ...payload
        }
      })
      if(user){
        dispatch({
          type:'getUserDetail',
          payload:user
        })
      }
    },
    async editUserDetailAsync(dispatch,rootstate,payload){
      const res = await Http({
        url:'/user/editDetail',
        method:'post',
        body:{
          ...payload
        }
      })
      if(res){
        Toast.success("修改信息成功")
        history.push({
          pathname:'/user'
        })
      }
    },
    async loginAsync(dispatch,rootstate,payload){
      const res = await Http({
        url:'/user/login',
        body:payload
      })
      if(res){
        Toast.success("登陆成功")
        localStorage.setItem("username",res.username)
        localStorage.setItem("token",res.token)
        history.push({
          pathname:'/user',
          query:{
            username:res.username
          }
        })
      }
    },
    async registerAsync(dispatch,rootstate,payload){
      const res = await Http({
        url:'/user/register',
        body:payload
      })
      if(res){
        Toast.success("注册成功")
        cookie.set("user",res)
        history.push("/login")
      }
    },
    async logoutAsync(dispatch,rootstate,payload){
      const res = await Http({
        url:'/user/logout',
        body:payload
      })
      if(res){
        Toast.success("退出成功")
        localStorage.clear()
        location.href = "/login"
      }
    }
  }
}