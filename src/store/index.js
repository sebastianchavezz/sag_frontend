// src/store/index.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    accessToken: null,
    userId: null,
    email: null,
    lastname: null,
    name: null,
  },
  mutations: {
    setAccessToken(state, token) {
      state.accessToken = token;
    },
    setUserId(state, userId) {
      state.userId = userId;
    },
    setEmail(state, email) {
      state.email = email;
    },
    setLastname(state, lastname) {
      state.lastname = lastname;
    },
    setName(state, name) {
      state.name = name;
    },
  },
  actions: {
    login({ commit }, { token, userId, email, lastname, name }) {
      commit('setAccessToken', token);
      commit('setUserId', userId);
      commit('setEmail', email); // Call mutation to set email
      commit('setLastname', lastname); // Call mutation to set lastname
      commit('setName', name); // Call mutation to set name
    },
  },
});
