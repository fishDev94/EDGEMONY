<script>
import CardFilm from "./CardFilm.vue";

export default {
  props: {
    dataFilm: Object,
  },
  components: { CardFilm },

  methods: {
    handleClickedFilm(id) {
      console.log(id);
      this.$emit("film_clicked", true);
    },
  },

  mounted() {
    this.$emit("ref_mounted", this.$refs.list);
  },
};
</script>

<template>
  <div ref="list" class="card_list">
    <CardFilm
      v-for="film in dataFilm.results"
      :dataFilm="film"
      @click="() => handleClickedFilm(film.id)"
    />
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
