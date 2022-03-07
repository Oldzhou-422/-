import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  //关闭mock
  mock:false,
  proxy:{
    "/api":{
      "target":"http://127.0.0.1:7001/",
      "changeOrigin":true
    }
  },
  routes: [
    { path: '/', 
      component: '@/pages/index.js',
      routes:[
        { path: '/home', component: '@/pages/home/index' },
        { path: '/order', component: '@/pages/order/index',auth:true },
        { path: '/user', component: '@/pages/user/index',auth:true },
        { path: '/user/edit', component: '@/pages/user/edit/index' },
        { path: '/search', component: '@/pages/search/index' },
        { path: '/observer', component: '@/pages/observer.js' },
        { path: '/houseDetail', component: '@/pages/houseDetail/index' },
        { path: '/login', component: '@/pages/login/index' },
        { path: '/register', component: '@/pages/register/index' },
        
      ] },
    
  ],
  fastRefresh: {},
});
