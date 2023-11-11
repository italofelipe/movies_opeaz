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
  alert: {
    isVisible: boolean;
    context: 'ADD' | 'REMOVE' | null;
  };
}>({
  state: {
    errorFetchingData: false,
    favoriteMovies: [],
    isLoading: false,
    alert: {
      isVisible: false,
      context: null,
    },
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
      return state.alert;
    },
    getErrorFetchingData(state) {
      return state.errorFetchingData;
    },
    verifyIfSelectedMovieIsAlreadyFavorite(state) {
      const movieExistsOrNot = state.favoriteMovies.find(
        (movie) => movie.imdbID === state.selectedMovie?.imdbID,
      );
      return !!movieExistsOrNot;
    },
  },
  mutations: {
    setFavoriteMovies(state, payload) {
      const existingIndex = state.favoriteMovies.findIndex(
        (movie) => movie.imdbID === payload.imdbID,
      );

      if (existingIndex !== -1) {
        state.favoriteMovies.splice(existingIndex, 1);
        state.alert = {
          isVisible: true,
          context: 'REMOVE',
        };
      } else {
        state.favoriteMovies = [...state.favoriteMovies, payload];
        state.alert = {
          isVisible: true,
          context: 'ADD',
        };
      }
    },
    setLoading(state, payload) {
      state.isLoading = payload;
    },
    setSelectedMovie(state, payload) {
      state.selectedMovie = { ...payload, userPersonalRating: 0 };
    },
    setAlertVisibility(state, isVisible) {
      state.alert = { context: null, isVisible };
    },
    setSelectedMovieByImdbId(state, imdbId) {
      const existingMovie = state.favoriteMovies.find((movie) => movie.imdbID === imdbId);
      if (!existingMovie) {
        state.selectedMovie = null;
      } else {
        state.selectedMovie = { ...existingMovie };
      }
    },
    setErrorFetchingData(state, payload) {
      state.errorFetchingData = payload;
    },
    setUserRating(state, payload) {
      state.selectedMovie = { ...state.selectedMovie, userPersonalRating: payload } as Movie;

      const index = state.favoriteMovies.findIndex(
        (movie) => movie.imdbID === state.selectedMovie?.imdbID,
      );
      if (index !== -1) {
        state.favoriteMovies[index].userPersonalRating = payload;
      }
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
