import { createStore } from 'vuex'

export default createStore({
  state: {
    ListeUnivers: [],
    ListeFaction: [],
    idFigurine: null,
    price: 0,
    dataFigurine: [],
    listeA: null,
    listeB: null
  },
  getters: {
  },
  mutations: {
    listeA (state, payload) {
      state.listeA = payload
    },
    listeB (state, payload) {
      state.listeB = payload
    },
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
    listeA (context, payload) {
      context.commit('listeA', payload.listeA)
    },
    listeB (context, payload) {
      context.commit('listeB', payload.listeB)
    },
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
