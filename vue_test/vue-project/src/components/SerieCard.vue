<script>
export default {
  props: {
    title: String,
    poster: String,
    serieData: Object,
  },

  methods: {
    onClick() {
      this.$emit("clicked", { value: this.serieData, boolean: true });
    },
  },
};
</script>

<template>
  <div @click="onClick">
    <img :src="poster" />
    <p>{{ title }}</p>
  </div>
</template>

<style scoped lang="scss">
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.337);
  width: 200px;
  transition: all 0.35s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100px;
  }
}
</style>
