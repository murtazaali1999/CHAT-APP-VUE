<template>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.peach-background {
  background-color: #ea526f;
}

.white-color {
  color: white;
}
</style>
