import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout/index.vue'
import Chat from '../views/Chat/index.vue'
Vue.use(VueRouter)

// 在根本上解决编程式路由重复点击报错的问题

// 1.先缓存原始的push和replace的原型函数
const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.Replace

// 2.重写push
VueRouter.prototype.push = function (location, ok, no) {
  if (ok === undefined && no === undefined) {
    return originalPush.call(this, location).catch(() => { })
  } else {
    return originalPush.call(this, location, ok, no)
  }
}

// 3.重写replace
VueRouter.prototype.replace = function (location, ok, no) {
  if (ok === undefined && no === undefined) {
    return originalReplace.call(this, location).catch(() => { })
  } else {
    return originalReplace.call(this, location, ok, no)
  }
}

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: '/chatneko',
    children: [
      {
      path: 'chatneko',
      name: 'chatneko',
      component: Chat,
    },
    {
      path: 'drawing',
      name: 'drawing',
      component: () => import('../views/Drawing/index.vue')
    }]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
