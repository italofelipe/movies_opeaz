<template>
  <v-row>
    <v-col cols="3">
      <v-img :src="selectedMovie?.Poster" :lazy-src="require('@/assets/placeholder.png')" />
    </v-col>
    <v-col cols="9">
      <div>
        <v-row>
          <v-col cols="12">
            <div class="title-container">
              <h2 class="d-inline">{{ selectedMovie?.Title }}</h2>
              <v-icon
                @click="addToFavorites"
                :class="isAlreadyFavorite ? 'bookmarked' : 'not-bookmarked'"
              >
                mdi-heart
              </v-icon>
            </div>
          </v-col>
        </v-row>

        <p class="font-weight-bold">Release year: {{ selectedMovie?.Year }}</p>
        <p class="font-weight-regular mb-1">{{ selectedMovie?.Plot }}</p>

        <movie-info-cell attribute="Genre" :value="selectedMovie.Genre" />
        <movie-info-cell attribute="Director" :value="selectedMovie.Director" />
        <movie-info-cell attribute="Cast" :value="selectedMovie.Actors" />
        <movie-info-cell attribute="IMDB Rating" :value="selectedMovie.imdbRating" />

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
import { mapGetters } from 'vuex';
import { Movie } from '@/types';
import MovieInfoCell from '../MovieInfoCell/MovieInfoCell.vue';

export default Vue.extend({
  components: {
    MovieInfoCell,
  },
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

<style scoped>
.title-container {
  display: flex;
  align-items: center;
}
.title-container > button {
  margin-left: 1rem;
}

.rate-given {
  pointer-events: none;
}
.bookmarked:before {
  color: red;
}
</style>
