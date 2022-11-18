<template>
  <div>
    <h1>Prova</h1>
    <ul>
      <li
        v-for="item in productList"
        @click="handleProductClicked(item.title, item.id)"
      >
        <productCard
          :title="item.title"
          :image="item.image"
          :price="item.price"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "IndexPage",

  middleware: ["getProduct"],

  computed: {
    ...mapGetters("products", ["productList"]),
  },

  methods: {
    handleProductClicked(title, id) {
      const routeAliased = title.replaceAll(" ", "-");
      this.$router.push(`${routeAliased}_${id}`);
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  h1 {
    color: red;
  }

  ul {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 10px;
    padding: 40px;
    height: 80vh;
    overflow-y: scroll;
  }
}
</style>
