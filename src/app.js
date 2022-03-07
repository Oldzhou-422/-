import { cookie } from "project-libs"
import { history } from "umi"
export function onRouteChange(route){
  const nowPath = route.routes[0].routes.filter(item=>{
    return item.path === route.location.pathname
  })
  const isLogin = localStorage.getItem('token')
  if(nowPath && /* nowPath[0].auth */  !isLogin){
    history.push("/login")
  }
}