<script>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";

export default {
  data() {
    return {};
  },

  methods: {},

  components: {
    RouterView,
    NavBar,
  },
};
</script>

<template>
  <NavBar />
  <RouterView />
</template>

<style scoped lang="scss"></style>

<!-- top_rated <- type expample -->
