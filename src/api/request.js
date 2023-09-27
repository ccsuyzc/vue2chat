//  对axios进行二次封装
import axios from "axios"

// 引入进度条
import nProgress from "nprogress"
// 引入进度条样式
import "nprogress/nprogress.css"
// 导入store
import store from "@/store";
const requists = axios.create({
    //  baseURL:'/api',  //默认在请求的路径上加上/api
     timeout:5000   //设置请求超时时间
})

//设置请求拦截器
requists.interceptors.request.use((req)=>{
  nProgress.start()
  return req
})

// 设置响应拦截器
requists.interceptors.response.use((res)=>{
  nProgress.done()
    return res.data;
},(err)=>{
   return err
})

export default requists