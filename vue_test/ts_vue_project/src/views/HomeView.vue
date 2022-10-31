<script>
import CardFilm from "../components/CardFilm.vue";
import CardList from "../components/CardList.vue";
import Modal from "../components/Modal.vue";
import Hero from "../components/Hero.vue";

export default {
  data() {
    return {
      API_KEY: "4e20f22505a0317004237194ab48d928",
      topRatedList: [],
      topRated_ref: "",
      popularList: [],
      popularRef: "",
      upcomingList: [],
      modalVisibility: false,
      movieDetails: {},
    };
  },

  components: {
    CardFilm,
    CardList,
    Modal,
    Hero,
  },

  methods: {
    async getList(type, API_KEY) {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}&language=en-US&page=1`
      );
      const data = res.json();
      return await data;
    },

    async getMovieDetails(movie_id, API_KEY) {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
      );
      const data = await res.json();
      return await data;
    },

    onClickedFilm(filmClikedData) {
      const { setModalOpen, id } = filmClikedData;
      this.modalVisibility = setModalOpen;
      this.getMovieDetails(id, this.API_KEY).then(
        (movie) => (this.movieDetails = movie)
      );
    },

    setModalVisibility() {
      this.modalVisibility = false;
      this.movieDetails = {};
    },

    onBackClick(ref) {
      ref.scrollTo({
        top: 0,
        left: ref.scrollLeft - 600,
        behavior: "smooth",
      });
    },

    onForwardClick(ref) {
      ref.scrollTo({
        top: 0,
        left: ref.scrollLeft + 600,
        behavior: "smooth",
      });
    },

    onMountedTopRef(val) {
      this.topRated_ref = val;
    },

    onMountedPopRef(val) {
      this.popularRef = val;
    },
  },

  props: {
    list: {
      type: Object,
    },
    id: Object,
  },

  watch: {
    id: function (val, oldVal) {
      this.onClickedFilm(val);
    },
  },

  mounted() {
    this.getList("top_rated", this.API_KEY).then(
      (res) => (this.topRatedList = res)
    );

    this.getList("popular", this.API_KEY).then(
      (res) => (this.popularList = res)
    );

    this.getList("upcoming", this.API_KEY).then(
      (res) => (this.upcomingList = res)
    );
  },
};
</script>

<template>
  <main>
    <Hero :list="upcomingList" />
    <section class="list">
      <div class="header_list">
        <h2>Top Rated</h2>
        <div class="scroll_btn">
          <button @click="() => onBackClick(topRated_ref)">{{ "<" }}</button>
          <button @click="() => onForwardClick(topRated_ref)">{{ ">" }}</button>
        </div>
      </div>
      <CardList
        :dataFilm="topRatedList"
        @ref_mounted="onMountedTopRef"
        @film_clicked="onClickedFilm"
      />
    </section>

    <section class="list">
      <div class="header_list">
        <h2>Popular</h2>
        <div class="scroll_btn">
          <button @click="() => onBackClick(popularRef)">{{ "<" }}</button>
          <button @click="() => onForwardClick(popularRef)">{{ ">" }}</button>
        </div>
      </div>
      <CardList
        :dataFilm="popularList"
        @ref_mounted="onMountedPopRef"
        @film_clicked="onClickedFilm"
      />
    </section>
    <Modal
      v-if="modalVisibility"
      @set_modal_visibility="setModalVisibility"
      :movieDetails="movieDetails"
    />
  </main>
</template>

<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
  gap: 40px;
  .list {
    .header_list {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;

      h2 {
        margin-left: 40px;
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
        margin-right: 40px;

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
}
</style>
