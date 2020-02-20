import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import basicRequest from './basicRequest'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //
  },

  mutations: {
    //
  },

  actions: {
    //
  },

  modules: {
    auth,
    basicRequest
  }
})
