<script>
import CardFilm from "./CardFilm.vue";

export default {
  props: {
    dataFilm: Object,
  },
  components: { CardFilm },
};
</script>

<template>
  <div class="card_list">
    <CardFilm v-for="film in dataFilm.results" :dataFilm="film" />
  </div>
</template>

<style scoped lang="scss">
.card_list {
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}
</style>
