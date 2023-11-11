<template>
  <div class="info-wrapper">
    <p class="mr-1 mb-0 font-weight-bold">{{ attribute }}:</p>
    <p class="mb-0">{{ value }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'MovieInfoComponent',
  props: {
    attribute: String,
    value: String,
  },
});
</script>

<style scoped>
  .info-wrapper {
  display: flex;
  margin-bottom: 6px;
}
.info-wrapper p {
  margin-bottom: 0;
}
</style>
