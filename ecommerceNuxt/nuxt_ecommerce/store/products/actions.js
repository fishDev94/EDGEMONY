import { SET_PRODUCT_LIST } from "./mutations";

export default {
  async setProductList({ commit }) {
    // onloading: true
    try {
      const productList = await this.$axios.$get(
        "https://fakestoreapi.com/products"
      );
      // save data on store
      commit(SET_PRODUCT_LIST, productList);
    } catch (error) {
      console.log(error);
      // error
    }
    // onloading: false
  },
};
