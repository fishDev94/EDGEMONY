<template>
  <section>
    <h2>
      {{ product[0]?.title }}
    </h2>
    <div class="description">
      <img :src="product[0]?.image" :alt="product[0]?.title" />
      <div>
        <p>{{ product[0]?.description }}</p>
        <p>{{ product[0]?.price }}</p>
        <button>Add to Cart</button>
      </div>
    </div>
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

    // routerAliasedName() {
    //   return this.$route.path.split("_")[0];
    // },
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

  //blablabla-blabla-blabla_9

  updated() {
    if (
      this.$route.path.split("_")[0] !==
      this.product[0].title.replaceAll(" ", "-")
    ) {
      this.$router.push(
        `${this.product[0].title.replaceAll(" ", "-")}_${this.product[0].id}`
      );
    }
  },
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 40px;
  gap: 40px;
  height: calc(100vh - 50px);

  h2 {
    font-size: 1.4rem;
  }

  .description {
    display: flex;
    align-items: center;
    gap: 20px;

    img {
      width: 200px;
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 0 40px;

      p:nth-child(2) {
        align-self: flex-end;
        font-size: 1.2rem;
        font-weight: bold;

        &::before {
          content: "€ ";
        }
      }

      button {
        background-color: rgb(167, 101, 105);
        border: none;
        color: white;
        font-weight: bold;
        padding: 8px 12px;
        width: max-content;
        align-self: flex-end;
        cursor: pointer;

        &:hover {
          background-color: rgb(184, 136, 139);
          transform: scale(1.02);
        }

        &:active {
          background-color: rgb(167, 101, 105);
          transform: scale(1);
          box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.122);
        }
      }
    }
  }
}
</style>
