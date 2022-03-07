import { Http } from '@/utils';
import { Common } from '@/enum';
export default {
  state: {
    detail: {},
    comments: [],
    page: Common.PAGE_INFO,
    reloadNum: 0,
    msg: '',
    order:null
  },
  reducers: {
    setOrder(state,payload){
      return {
        ...state,
        order:payload
      }
    },
    getDetail(state, payload) {
      return {
        ...state,
        detail: payload,
      };
    },
    getComments(state, payload) {
      return {
        ...state,
        comments: payload,
      };
    },
    setPageInfo(state, payload) {
      return {
        ...state,
        page: payload,
      };
    },
    setReloadNum(state, payload) {
      return {
        ...state,
        reloadNum: state.reloadNum + 1,
      };
    },
    addComment(state, payload) {
      return {
        ...state,
        msg: payload,
      };
    },
  },
  effects: {
    async getHouseDetailAsync(dispatch, rootstate, payload) {
      const res = await Http({
        url: '/house/detail',
        body: payload.params,
        method: payload.method,
      });
      dispatch({
        type: 'getDetail',
        payload: res,
      });
    },
    async getCommentsAsync(dispatch, rootstate, payload) {
      const {
        houseDetail: { comments, page },
      } = rootstate;
      const res = await Http({
        url: '/house/getcomments',
        method: payload.method,
        body: {
          ...payload.params,
          pageNum: page.pageNum,
          houseId:payload.houseId
        },
      });
      dispatch({
        type: 'getComments',
        payload: [...comments, ...res],
      });
      dispatch({
        type: 'setPageInfo',
        payload: {
          ...page,
          pageNum: page.pageNum + 1,
        },
      });
    },
    async addNewComment(dispatch, rootstate, payload) {
      const res = await Http({
        url: '/house/addcomment',
        method: payload.method,
        body: {
          commentValue: payload.commentValue,
          houseId:payload.houseId
        },
      });
      if (res !== {}) {
        dispatch({
          type: 'addComment',
          payload: res.msg,
        });
      }
    },
    async hasOrderAsync(dispatch,rootstate,payload){
      const res = await Http({
        url:'/house/hasOrder',
        body:payload
      })
      dispatch({
        type:'setOrder',
        payload:res
      })
    },
    async addOrderAsync(dispatch,rootstate,payload){
      const res = await Http({
        url:'/house/addOrder',
        body:payload
      })
      console.log(res)
      dispatch({
        type:'setOrder',
        payload:res
      })
    },
    async delOrderAsync(dispatch,rootstate,payload){
      const res = await Http({
        url:'/house/delOrder',
        body:payload
      })
      dispatch({
        type:'setOrder',
        payload:res
      })
    }
  },
};
