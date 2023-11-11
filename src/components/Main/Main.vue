<template>
  <v-main>
    <div v-if="isLoading">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>
    <v-alert v-if="isAlertVisible" dense type="success">Added to bookmarks!</v-alert>
    <v-row align="center" justify="center">
      <v-col cols="10">
        <div v-if="errorFetchingData">
          <h3>Oops, looks like your movie went to Azkhaban! What about trying another one?</h3>
        </div>

        <div v-else-if="selectedMovie">
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
    ...mapGetters({
      isLoading: 'getIsLoading',
      selectedMovie: 'getSelectedMovie',
      isAlertVisible: 'getIsAlertVisible',
      errorFetchingData: 'getErrorFetchingData',
    }),
  },
};
</script>

<style></style>
