<script>
import CardFilm from "../components/CardFilm.vue";

console.log(CardFilm);

export default {
  props: {
    list: {
      type: Object,
    },
  },

  components: {
    CardFilm,
  },
};
</script>

<template>
  <main>
    <ul>
      <CardFilm v-for="film in list.results" :dataFilm="film" />
    </ul>
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
