import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    gamer: null,
    color: 'red'
  },
  mutations: {
    
    setGamer(state, gamer) {
      state.gamer = gamer;
    },

    set(state, {key, value}) {
      state[key] = value
    }
  },
  actions: {
    setGamer({ commit }, gamer) {
      commit('setGamer', gamer);
    },
    set({commit}, options) {
      commit('set', options);
    }
  },
});
