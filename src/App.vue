<template>
  <div id="app">
    <v-app>
      <v-container fluid class="pl-0 pr-0">
        <v-row>
          <v-col cols="2">
            <Favorites />
          </v-col>
          <v-col cols="10">
            <Header />
            <MainSection />
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header/Header.vue';
import Favorites from './components/Favorites/Favorites.vue';
import MainSection from './components/Main/Main.vue';

export default defineComponent({
  components: {
    Header,
    Favorites,
    MainSection,
  },
});
</script>

<style></style>
