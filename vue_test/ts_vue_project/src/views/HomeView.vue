<script>
import CardFilm from "../components/CardFilm.vue";
import CardList from "../components/CardList.vue";

export default {
  data() {
    return {
      API_KEY: "4e20f22505a0317004237194ab48d928",
      topRatedList: [],
      topRated_ref: "",
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

    onBackClick() {
      this.topRated_ref.scrollTo({
        top: 0,
        left: this.topRated_ref.scrollLeft - 600,
        behavior: "smooth",
      });
    },

    onForwardClick() {
      this.topRated_ref.scrollTo({
        top: 0,
        left: this.topRated_ref.scrollLeft + 600,
        behavior: "smooth",
      });
    },

    onMountedRef(val) {
      this.topRated_ref = val;
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
    <div class="header_list">
      <h2>Top Rated</h2>
      <div class="scroll_btn">
        <button @click="onBackClick">{{ "<" }}</button>
        <button @click="onForwardClick">{{ ">" }}</button>
      </div>
    </div>
    <CardList :dataFilm="topRatedList" @ref_mounted="onMountedRef" />
  </main>
</template>

<style scoped lang="scss">
main {
  padding: 80px 40px;

  .header_list {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    h2 {
      font-weight: bold;

      &::after {
        content: ":";
        font-weight: bold;
        margin-left: 4px;
      }
    }
    .scroll_btn {
      display: flex;
      gap: 5px;

      button {
        width: 30px;
        height: 30px;
        border-radius: 100%;
        border: none;
        cursor: pointer;

        &:active {
          transform: scale(0.85);
        }
      }
    }
  }
}
</style>
