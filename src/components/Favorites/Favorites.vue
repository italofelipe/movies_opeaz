<template>
  <v-navigation-drawer color="#09151E" permanent app>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title"> Favorites </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list dense>
      <v-list-item v-for="(favorite, index) in favorites" :key="index">
        <v-list-item-content>
          <v-list-item-title>
            {{ favorite }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
export default {
  name: 'FavoritesComponent',
  data: () => ({
    favorites: ['Shrek 1', 'Shrek 2', 'Shrek 3', 'Shrek 4'],
  }),
};
</script>

<style></style>
