<script>
export default {
  props: {
    dataFilm: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div class="card_film">
    <img
      :src="`https://image.tmdb.org/t/p/original/${dataFilm.poster_path}`"
      alt="cardimg"
    />
  </div>
</template>

<style scoped lang="scss">
.card_film {
  flex: 0 0 auto;
  width: 200px;
  height: 300px;
  overflow: hidden;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.263);
  cursor: pointer;
  transition: all 0.25s;

  &:hover {
    transform: scale(1.04);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
