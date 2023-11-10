<template>
  <v-app-bar class="mb-10">
    <v-row>
      <v-col cols="10">
        <v-form @submit.prevent="searchMovie" class="mt-5">
          <v-text-field label="To start, type a movie name" v-model="inputValue"> </v-text-field>
        </v-form>
      </v-col>
      <v-col cols="2">
        <v-btn
          class="mt-5"
          type="submit"
          rounded
          color="primary"
          @click="searchMovie"
          :disabled="!inputValue"
        >
          Search
        </v-btn>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HeaderComponent',
  data: () => ({
    inputValue: '',
  }),
  methods: {
    searchMovie() {
      this.$store.dispatch('fetchData', { movieName: this.inputValue });
    },
  },
});
</script>

<style></style>
