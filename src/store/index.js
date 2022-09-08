import { createStore } from 'vuex'

export default createStore({
  state: {
    ListeUnivers: [],
    ListeFaction: [],
    idFigurine: null,
    price: 0,
    dataFigurine: [],
    listeAlpha: [],
    listeBravo: []
  },
  getters: {
  },
  mutations: {
    ListeUnivers (state, payload) {
      state.ListeUnivers = payload
    },
    idFigurine (state, payload) {
      state.idFigurine = payload
    },
    dataFigurine (state, payload) {
      state.dataFigurine = payload
    },
    price (state, payload) {
      state.price = payload
    }
  },
  actions: {
    ListeUnivers (context, payload) {
      context.commit('ListeUnivers', payload.ListeUnivers)
    },
    idFigurine (context, payload) {
      context.commit('idFigurine', payload.idFigurine)
    },
    dataFigurine (context, payload) {
      context.commit('dataFigurine', payload.dataFigurine)
    },
    price (context, payload) {
      context.commit('price', payload.price)
    }
  },
  modules: {
  }
})
