<template>
  <div id="app">
    <v-app>
      <v-container fluid class="pl-0 pr-0">
        <v-row>
          <v-col cols="12" >
            <Header />
            <MainSection />
          </v-col>
        </v-row>
        <v-row>
          <v-divider class="mt-5"></v-divider>
        </v-row>
        <v-row justify="center">
          <v-col cols="4">
            <Favorites v-if="favoriteMovies.length > 0" />

            <h2 v-else>To see your favorite movies, search in the input above</h2>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import Header from './components/Header/Header.vue';
import Favorites from './components/Favorites/Favorites.vue';
import MainSection from './components/Main/Main.vue';

export default defineComponent({
  components: {
    Header,
    Favorites,
    MainSection,
  },
  computed: {
    ...mapGetters({ favoriteMovies: 'getFavoriteMovies' }),
  },
});
</script>

<style>
* {
  font-family: 'Quicksand', sans-serif;
}
</style>
