<script>
export default {
  props: {
    dataFilm: Object,
  },

  methods: {
    onClick(data) {
      console.log(data);
    },
  },
};
</script>

<template>
  <div @click="() => onClick(dataFilm)" class="card_film">
    <img :src="`https://image.tmdb.org/t/p/original/${dataFilm.poster_path}`" />
  </div>
</template>

<style scoped lang="scss">
.card_film {
  flex: 0 0 auto;
  width: 20%;
  height: 300px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
