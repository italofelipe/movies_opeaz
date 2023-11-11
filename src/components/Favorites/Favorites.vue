<template>
  <div class="carousel-container">
    <h2>Movies bookmarked by you</h2>
    <div class="wrapper" id="carousel">
      <v-carousel>
        <v-carousel-item
          v-for="(favorite, index) in favoriteMovies"
          class="flicking-panel"
          :key="index"
          :src="favorite.Poster"
          @click="selectMovie(favorite.imdbID)"
        ></v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
  name: 'FavoritesComponent',
  computed: {
    ...mapGetters({ favoriteMovies: 'getFavoriteMovies' }),
  },
  methods: {
    selectMovie(imdbID: string) {
      this.$store.commit('setSelectedMovieByImdbId', imdbID);
    },
  },
});
</script>

<style scoped>
.carousel-container {
  height: 300px;
  margin: 0 2rem;
}
.carousel-image {
  height: 250px;
  user-select: none;
}
</style>
