import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/common'
import tags from './modules/tags'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    tags,
    common
  },


  getters: {

  },

  state:{

  },

  actions:{
  }
})
export default store
