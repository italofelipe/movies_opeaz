import Vue from 'vue';
import axiosInstance from '@/http';
import Vuex from 'vuex';
import { Movie } from '@/types';

Vue.use(Vuex);

export default new Vuex.Store<{
  errorFetchingData: boolean;
  favoriteMovies: Movie[];
  isLoading: boolean;
  selectedMovie: Movie | null;
  isAlertVisible: boolean;
}>({
  state: {
    errorFetchingData: false,
    favoriteMovies: [],
    isLoading: false,
    isAlertVisible: false,
    selectedMovie: null,
  },
  getters: {
    getIsLoading(state) {
      return state.isLoading;
    },
    getSelectedMovie(state) {
      return state.selectedMovie;
    },
    getFavoriteMovies(state) {
      return state.favoriteMovies;
    },
    getIsAlertVisible(state) {
      return state.isAlertVisible;
    },
    getErrorFetchingData(state) {
      return state.errorFetchingData;
    },
  },
  mutations: {
    setFavoriteMovies(state, payload) {
      state.favoriteMovies = [...state.favoriteMovies, payload];
      state.isAlertVisible = true;
    },
    setLoading(state, payload) {
      state.isLoading = payload;
    },
    setSelectedMovie(state, payload) {
      state.selectedMovie = payload;
    },
    setAlertVisibility(state, isVisible) {
      state.isAlertVisible = isVisible;
    },
    setSelectedMovieByImdbId(state, imdbId) {
      state.selectedMovie = state.favoriteMovies.find((movie) => movie.imdbID === imdbId) ?? null;
    },
    setErrorFetchingData(state, payload) {
      state.errorFetchingData = payload;
    },
  },
  actions: {
    async fetchData({ commit }, value) {
      commit('setLoading', true);
      commit('setErrorFetchingData', false);

      try {
        const response = await axiosInstance.get<Movie>(
          `?t=${value.movieName}&apikey=${process.env.VUE_APP_API_URL_OMDB_API_KEY}`,
        );
        commit('setSelectedMovie', response.data);
        commit('setLoading', false);
        if (response.data.Error) {
          commit('setErrorFetchingData', true);
        }
      } catch (error) {
        commit('setErrorFetchingData', true);
      }
    },
    hideAlert({ commit }) {
      setTimeout(() => {
        commit('setAlertVisibility', false);
      }, 3000);
    },
  },
  modules: {},
});
