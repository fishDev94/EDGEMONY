<script>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";

export default {
  data() {
    return {
      id: {},
    };
  },

  methods: {
    filmClicked(id) {
      this.id = id;
      console.log(id);
    },
  },

  components: {
    RouterView,
    NavBar,
  },
};
</script>

<template>
  <NavBar @search_clicked="filmClicked" />
  <RouterView :id="id" />
</template>

<style scoped lang="scss"></style>

<!-- top_rated <- type expample -->
