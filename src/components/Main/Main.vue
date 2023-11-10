<template>
  <v-main>
    <div v-if="isLoading">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>
    <v-row>
      <v-col cols="10">
        <div v-if="selectedMovie">
          <movie-info :selectedMovie="selectedMovie" />
        </div>
      </v-col>
    </v-row>
  </v-main>
</template>

<script lang="ts">
import { mapGetters } from 'vuex';
import MovieInfo from '../MovieInfo/MovieInfo.vue';

export default {
  name: 'MainSection',
  components: {
    MovieInfo,
  },
  computed: {
    ...mapGetters({ isLoading: 'getIsLoading', selectedMovie: 'getSelectedMovie' }),
  },
};
</script>

<style></style>
