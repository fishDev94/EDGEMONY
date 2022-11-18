<template>
  <nav>
    <h1>Logo</h1>
    <ul>
      <li
        v-for="item in navList"
        :class="`${$route.path === item.path ? 'active' : ''}`"
        @click="handleClickLink(item.path)"
      >
        {{ item.name }}
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
          name: "Home",
          path: "/",
        },
        {
          name: "Cart",
          path: "/cart",
        },
        {
          name: "About us",
          path: "/aboutus",
        },
        {
          name: "Contact",
          path: "/contact",
        },
      ],
    };
  },

  methods: {
    handleClickLink(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  color: white;
  height: 50px;
  background-color: black;
  align-items: center;
  justify-content: space-between;

  h1 {
    margin-left: 20px;
  }

  ul {
    display: flex;
    height: 100%;

    li {
      cursor: pointer;
      padding: 0 20px;
      height: 100%;
      display: flex;
      align-items: center;
      letter-spacing: 1.5px;
      font-size: 0.8rem;

      &:hover {
        background-color: rgba(255, 255, 255, 0.505);
        color: black;
      }

      &.active {
        background-color: white;
        color: black;
      }
    }
  }
}
</style>
