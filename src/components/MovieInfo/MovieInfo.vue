<template>
  <div class="movie-info-container">
    <div>
      <v-img :src="selectedMovie?.Poster" />
    </div>
    <div>
      <h3>{{ selectedMovie?.Title }}</h3>
      <p class="bold">{{ selectedMovie?.Year }}</p>
      <p class="font-weight-regular">{{ selectedMovie?.Plot }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue';
import { Movie } from '../types';

export default {
  name: 'MovieInfoComponent',
  props: {
    selectedMovie: Object as PropType<Movie>,
  },
};
</script>

<style>
.movie-info-container {
  display: flex;
  flex-direction: row;
  height: 450px;
  width: 100%;
}
</style>
