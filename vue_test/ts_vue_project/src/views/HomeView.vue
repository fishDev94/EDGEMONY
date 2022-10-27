<script>
import CardFilm from "../components/CardFilm.vue";
import CardList from "../components/CardList.vue";

export default {
  data() {
    return {
      API_KEY: "4e20f22505a0317004237194ab48d928",
      topRatedList: [],
    };
  },

  props: {
    list: {
      type: Object,
    },
  },

  components: {
    CardFilm,
    CardList,
  },

  methods: {
    async getList(type, API_KEY) {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}&language=en-US&page=1`
      );
      const data = res.json();
      return await data;
    },
  },

  mounted() {
    this.getList("top_rated", this.API_KEY).then(
      (res) => (this.topRatedList = res)
    );
  },
};
</script>

<template>
  <main>
    <CardList :dataFilm="topRatedList" />
  </main>
</template>

<style scoped lang="scss">
main {
  padding: 80px 0;

  ul {
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
}
</style>
