<template>
  <div id="app" :class="isLoading && 'loading'">
    <v-app>
      <home-view></home-view>
    </v-app>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import HomeView from './views/Home.vue';

export default defineComponent({
  components: {
    HomeView,
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
