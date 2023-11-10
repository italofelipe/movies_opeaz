import Vue from 'vue';
import axiosInstance from '@/http';
import Vuex from 'vuex';
import { Movie } from '@/components/types';

Vue.use(Vuex);

export default new Vuex.Store<{
  favoriteMovies: Movie[];
  isLoading: boolean;
  selectedMovie: Movie | null
}>({
  state: {
    favoriteMovies: [],
    isLoading: false,
    selectedMovie: null,
  },
  getters: {
    getIsLoading(state) {
      return state.isLoading;
    },
    getSelectedMovie(state) {
      return state.selectedMovie;
    },
  },
  mutations: {
    setFavoriteMovies(state, payload) {
      console.log('payload', payload);
      console.log('state', state);
      state.favoriteMovies = { ...state.favoriteMovies, ...payload };
    },
    setLoading(state, payload) {
      state.isLoading = payload;
    },
    setSelectedMovie(state, payload) {
      state.selectedMovie = payload;
    },
  },
  actions: {
    async fetchData({ commit }, value) {
      console.log('Valor recebido', value);
      console.log('ENVS', process.env);
      commit('setLoading', true);

      try {
        const response = await axiosInstance.get(
          `?t=${value.movieName}&apikey=${process.env.VUE_APP_API_URL_OMDB_API_KEY}`,
        );
        commit('setSelectedMovie', response.data);
        commit('setLoading', false);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    },
  },
  modules: {},
});
