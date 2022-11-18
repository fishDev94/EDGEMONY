<template>
  <section>
    <h2>
      {{ product[0]?.title }}
    </h2>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "productPage",
  data() {
    return {
      product: {},
    };
  },
  computed: {
    ...mapGetters("products", ["productList"]),
  },

  mounted() {
    const id = Number(this.$route.path.split("_")[1]);

    if (typeof id !== NaN && id) {
      this.product = this.productList.filter(
        (e) => Number(e.id) === Number(this.$route.path.split("_")[1])
      );
    } else {
      this.$router.push("/");
    }
  },
};
</script>
