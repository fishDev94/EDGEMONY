<script>
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      searchInput: "",
      API_KEY: "4e20f22505a0317004237194ab48d928",
      searchResult: {},
    };
  },

  methods: {
    async searchData(API, search) {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API}&language=en-US&query=${search}&page=1&include_adult=false`
      );

      const data = await res.json();

      return await data;
    },

    getSearchData() {
      this.searchData(this.API_KEY, this.searchInput).then(
        (data) => (this.searchResult = data)
      );
    },

    onFilmClicked(id) {
      this.$emit("search_clicked", { setModalOpen: true, id });
      this.searchInput = "";
    },
  },

  components: {
    RouterLink,
  },
};
</script>

<template>
  <nav class="navbar">
    <header>
      <h4>Fancy Movie Vue</h4>
      <div>
        <input
          type="text"
          placeholder="Search movies"
          v-model="searchInput"
          @input="getSearchData"
        />
        <div v-if="searchInput" class="search_container">
          <ul class="search_results">
            <li
              v-for="results in searchResult.results"
              @click="onFilmClicked(results.id)"
            >
              {{ results.title }}
            </li>
          </ul>
        </div>
      </div>
    </header>
    <ul>
      <li>
        <RouterLink to="/"> Home </RouterLink>
      </li>
      <li>
        <RouterLink to="/about"> About us </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.navbar {
  background-color: rgb(34, 34, 34);
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  color: white;

  header {
    display: flex;
    align-items: center;
    gap: 20px;
    flex: 0 0 auto;
    width: 50%;

    h4 {
      font-weight: bold;
    }

    div {
      width: 80%;
      position: relative;

      input {
        border: none;
        outline: none;
        background-color: rgba(95, 95, 95, 0.493);
        color: rgba(255, 255, 255, 0.637);
        padding: 10px;
        flex: 0 0 auto;
        width: 100%;

        &::placeholder {
          font-weight: bold;
        }

        &:focus {
          &::placeholder {
            opacity: 0;
          }
        }
      }

      .search_container {
        position: absolute;
        background-color: rgb(20, 20, 20);
        width: 100%;
        z-index: 4;

        .search_results {
          display: flex;
          flex-direction: column;
          padding: 0;
          overflow-y: scroll;
          height: 400px;

          li {
            padding: 8px;
            cursor: pointer;

            &:hover {
              background-color: rgba(255, 255, 255, 0.521);
            }
          }
        }
      }
    }
  }

  ul {
    color: white;
    display: flex;
    gap: 20px;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      font-weight: bold;

      a {
        text-decoration: none;
        color: white;
        font-weight: bold;
      }
    }
  }
}
</style>
