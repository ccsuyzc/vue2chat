import Vue from 'vue'
import Vuex from 'vuex'
import Chat from './Chat/index.js'
import Drawing from './Chat/index.js'
import Music from './Chat/index.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
    newdata(state) {
      let i2 = state.Chat.defaultRole.filter((i) => {
        return i.id == state.Chat.isShowID
      })
      let i1 = state.Chat.userDefined.filter((i) => {
        return i.id == state.Chat.isShowID
      })
      if(i1.length){
        return i1
      }else{
        return i2
      }
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Chat,
    Drawing,
    Music
  }
})

