<script>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";

export default {
  data() {
    return {
      API_KEY: "4e20f22505a0317004237194ab48d928",
      topRatedList: [],
    };
  },

  methods: {
    async getList(type, API_KEY) {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}&language=en-US&page=1`
      );
      const data = res.json();
      return await data;
    },

    onClick() {
      console.log(this.topRatedList);
    },
  },

  mounted() {
    this.getList("top_rated", this.API_KEY).then(
      (res) => (this.topRatedList = res)
    );
  },

  components: {
    RouterView,
    NavBar,
  },
};
</script>

<template>
  <NavBar />
  <RouterView :list="topRatedList" />
</template>

<style scoped lang="scss"></style>

<!-- top_rated <- type expample -->
