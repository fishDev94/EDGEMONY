<script>
export default {
  data() {
    return {
      rightValue: 0,
    };
  },

  props: {
    list: {
      type: Object,
      required: true,
    },
  },

  mounted() {
    console.log(this.list.results);
  },

  methods: {
    onClickScroll(by) {
      if (by === "back") {
        this.rightValue = this.rightValue - 100;
      } else if (by === "next") {
        this.rightValue = this.rightValue + 100;
      }
    },
  },
};
</script>

<template>
  <div class="hero">
    <h2>{{ list.results[rightValue / 100].title }}</h2>
    <img
      :style="`right: ${rightValue}vw`"
      v-for="item in list.results"
      :src="`https://image.tmdb.org/t/p/original/${item.backdrop_path}`"
    />
    <div class="btn_scroll">
      <button
        :style="rightValue / 100 === 0 && 'opacity: 0'"
        :disabled="rightValue / 100 === 0"
        @click="onClickScroll('back')"
      >
        {{ "<" }}
      </button>
      <button
        :style="rightValue / 100 === 19 && 'opacity: 0'"
        :disabled="rightValue / 100 === 19"
        @click="onClickScroll('next')"
      >
        {{ ">" }}
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hero {
  background-color: red;
  height: 42vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
  display: flex;

  h2 {
    position: absolute;
    display: flex;
    align-items: center;
    top: 0;
    left: 100px;
    height: 100%;
    font-size: 2.4rem;
    z-index: 1;
    font-weight: bold;
    text-shadow: 0 0 12px black;
    color: rgb(242, 242, 242);
  }

  img {
    flex: 0 0 auto;
    position: relative;
    right: 0vw;
    width: 100vw;
    height: 100%;
    object-fit: cover;
    transition: all 0.25s;
  }

  .btn_scroll {
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    z-index: 1;

    button {
      width: 50px;
      background-color: rgba(0, 0, 0, 0.163);
      border: none;
      color: white;
      font-size: 1.5rem;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.25s;

      &:hover {
        background-color: rgba(0, 0, 0, 0.492);
      }

      &:active {
        background-color: rgba(0, 0, 0, 0.432);
      }
    }
  }
}
</style>
