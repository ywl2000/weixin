import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //标识用户是否登录
    //如果用户已登录,isLogin的值为sessionStorage中的isLogin的值,即true
    isLogin: sessionStorage.getItem('isLogin') || false,
    userId: sessionStorage.getItem('userId') || 0,
    username: sessionStorage.getItem('username') || '',
    avatar: sessionStorage.getItem('avatar') || '',
  },
  mutations: {
    login_mutation(state, payload) {
      state.isLogin = true;
      state.userId = payload.id;
      state.username = payload.username;
      state.avatar = payload.avatar;
    }
    // login_ation(state, payload) {
      
      
    //   state.username = payload.username;
       
    // }
  },
  actions: {
  },
  modules: {
  }
})
