<script>
import CardFilm from "./CardFilm.vue";

export default {
  props: {
    dataFilm: Object,
  },
  components: { CardFilm },

  mounted() {
    this.$emit("ref_mounted", this.$refs.list);
  },
};
</script>

<template>
  <div ref="list" class="card_list">
    <CardFilm v-for="film in dataFilm.results" :dataFilm="film" />
  </div>
</template>

<style scoped lang="scss">
.card_list {
  padding: 10px 40px;
  display: flex;
  gap: 10px;
  overflow-x: scroll;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
