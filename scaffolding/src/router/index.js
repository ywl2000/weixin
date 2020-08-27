import Vue from 'vue'
import VueRouter from 'vue-router'



//注册的路由
import Register from '../views/Register.vue'
//登陆的路由
import Longin from '../views/Longin.vue'
// 微信
import WeChat from '../views/WeChat.vue'
// 通讯录
import address from '../views/address.vue'
// 发现
import discover from '../views/discover.vue'
// 我
import me from '../views/me.vue'

//朋友圈
import Friend from '../views/Friend.vue'
import search from '../components/demo/search.vue'
import pay from '../components/demo/pay.vue'



import Wveuie from '../views/Wveuie.vue'
import Wvew from '../views/Wvew.vue'
import Details from '../views/Details.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/wveuie',
    component: Wveuie,
    meta: {
      showTab: false//如果需要显示就加上这个
    }
  },

  {
    path: '/wvew',
    component: Wvew
  },
  {
    path: '/friend',
    component: Friend
  },
  {
    path: '/',
    component: Longin,
    meta: {
      showTab: false//如果需要显示就加上这个
    }
  },
  {
    path: '/pay',
    component: pay
  },
  {
    path: '/search',
    component: search
  },
  {
    path: '/me',
    component: me,
    name: 'me',
    meta: {
      showTab: true//如果需要显示就加上这个
    }
  },
  {
    // 发现
    path: '/discover',
    component: discover,
    name: 'discover',
    meta: {
      showTab: true//如果需要显示就加上这个
    }
  },
  {
    // 通讯录
    path: '/address',
    component: address,
    name: 'address',
    meta: {
      showTab: true//如果需要显示就加上这个
    }
  },
  {
    // 微信
    path: '/wechat',
    component: WeChat,
    name: 'wechat',
    meta: {
      showTab: true//如果需要显示就加上这个
    }
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/details',
    component: Details
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
