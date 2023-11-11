<template>
  <v-container fluid class="pl-0 pr-0">
    <v-row>
      <v-col cols="12">
        <Header />
        <MainSection />
      </v-col>
    </v-row>
    <v-row>
      <v-divider class="mt-5"></v-divider>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="8" lg="4" xl="4">
        <Favorites v-if="favoriteMovies.length > 0" />

        <h2 v-else>To see your favorite movies, search in the input above</h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import Header from '../components/Header/Header.vue';
import Favorites from '../components/Favorites/Favorites.vue';
import MainSection from '../components/Main/Main.vue';

export default Vue.extend({
  name: 'HomePage',
  components: {
    Header,
    Favorites,
    MainSection,
  },
  computed: {
    ...mapGetters({ favoriteMovies: 'getFavoriteMovies', isLoading: 'getIsLoading' }),
  },
});
</script>

<style>
* {
  font-family: 'Quicksand', sans-serif;
}
.loading {
  opacity: 0.5;
}
</style>
