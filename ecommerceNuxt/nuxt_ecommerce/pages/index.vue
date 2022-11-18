<template>
  <div>
    <h1>Prova</h1>
    <button @click="prov()">click</button>
    <h2 v-for="item in productList">{{ item.title }}</h2>
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
    prov() {
      console.log(this.productList);
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  h1 {
    color: red;
  }
}
</style>
