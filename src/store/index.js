import { createStore } from 'vuex'

export default createStore({
  state: {
    ListeUnivers: [],
    ListeFaction: []
  },
  getters: {
  },
  mutations: {
    ListeUnivers (state, payload) {
      state.ListeUnivers = payload
    }
  },
  actions: {
    ListeUnivers (context, payload) {
      context.commit('ListeUnivers', payload.ListeUnivers)
    }
  },
  modules: {
  }
})
