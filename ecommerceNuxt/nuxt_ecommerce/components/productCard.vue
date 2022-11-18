<template>
  <div>
    <div class="overlay" />
    <img :src="image" :alt="title" />
    <h3>{{ title }}</h3>
  </div>
</template>

<script>
export default {
  name: "productCard",

  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  gap: 10px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.218);
  overflow: hidden;
  height: 100%;
  position: relative;
  padding: 0 10px;

  img {
    width: 100px;
    object-fit: contain;
  }

  h3 {
    margin: 10px;
    font-size: 0.8rem;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
  }
}
</style>
