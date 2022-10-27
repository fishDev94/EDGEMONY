<script>
import { RouterLink } from "vue-router";

export default {
  data() {
    return {};
  },

  methods: {},

  components: {
    RouterLink,
  },
};
</script>

<template>
  <nav class="navbar">
    <h4>Fancy Movie Vue</h4>
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
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  color: white;

  h4 {
    font-weight: bold;
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
