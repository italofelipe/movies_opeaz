<template>
  <v-row>
    <v-col cols="3">
      <v-img :src="selectedMovie?.Poster" />
    </v-col>
    <v-col cols="9">
      <div>
        <v-row>
          <v-col cols="12">
            <div class="title-container">
              <h2 class="d-inline">{{ selectedMovie?.Title }}</h2>
              <v-icon
              @click="addToFavorites"
              :class="isAlreadyFavorite ? 'bookmarked' : 'not-bookmarked' "> mdi-heart </v-icon>
            </div>
          </v-col>
        </v-row>

        <p class="font-weight-bold">Release year: {{ selectedMovie?.Year }}</p>
        <p class="font-weight-regular mb-1">{{ selectedMovie?.Plot }}</p>
        <div class="info-wrapper">
          <p class="mr-1 mb-0 font-weight-bold">Genre</p>
          <p class="mb-0">{{ selectedMovie.Genre }}</p>
        </div>
        <div class="info-wrapper">
          <p class="mr-1 mb-0 font-weight-bold">Director:</p>
          <p class="mb-0">{{ selectedMovie.Director }}</p>
        </div>
        <div class="info-wrapper">
          <p class="mr-1 mb-0 font-weight-bold">Cast:</p>
          <p class="mb-0">{{ selectedMovie.Actors }}</p>
        </div>

        <div class="info-wrapper">
          <p class="mr-1 mb-0 font-weight-bold">IMDB Rating:</p>
          <p class="mb-0">{{ selectedMovie.imdbRating }}</p>
        </div>
        <p class="font-weight-bold" v-if="!isAlreadyFavorite">
          Wanna give your rating to this movie? Bookmark it!
        </p>
        <div v-if="isAlreadyFavorite">
          <p class="font-weight-bold">Enjoyed this movie? Rate it!</p>
          <v-rating
            v-if="!selectedMovie.userPersonalRating"
            color="warning"
            hover
            length="5"
            size="32"
            value=3
            @input="giveRating($event)"
          ></v-rating>

          <v-rating
            v-if="selectedMovie.userPersonalRating"
            color="warning"
            length="5"
            size="32"
            :value="selectedMovie.userPersonalRating"
            class="rate-given"
          >
          </v-rating>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { Movie } from '@/types';
import { mapGetters } from 'vuex';

export default Vue.extend({
  computed: {
    ...mapGetters({ isAlreadyFavorite: 'verifyIfSelectedMovieIsAlreadyFavorite' }),
  },
  name: 'MovieInfoComponent',
  props: {
    selectedMovie: Object as PropType<Movie>,
  },
  methods: {
    addToFavorites() {
      this.$store.commit('setFavoriteMovies', this.selectedMovie);
      this.$store.dispatch('hideAlert');
    },
    giveRating(rating: number) {
      this.$store.commit('setUserRating', rating);
    },
  },
});
</script>

<style>
.movie-info-container {
  display: flex;
  flex-direction: row;
  height: 450px;
  width: 100%;
}
.title-container {
  display: flex;
  align-items: center;
}
.title-container > button {
  margin-left: 1rem;
}
.info-wrapper {
  display: flex;
  margin-bottom: 6px;
}
.info-wrapper p {
  margin-bottom: 0;
}
.rate-given {
  pointer-events: none;
}
.bookmarked:before {
  color: red;
}
</style>
