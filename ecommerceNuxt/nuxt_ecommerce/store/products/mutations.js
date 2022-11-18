export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";

export default {
  [SET_PRODUCT_LIST]: (state, payload) => {
    state.productList = payload;
  },
};
