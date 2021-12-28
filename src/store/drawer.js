import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navDrawer: false,
  },
  mutations: {
    toggle(state, drawer) {
      state.navDrawer = drawer
    },
  },
})
