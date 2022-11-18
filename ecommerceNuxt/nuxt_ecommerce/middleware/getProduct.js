export default async function ({ store }) {
  if (store.getters["products/productList"].length === 0) {
    await store.dispatch("products/setProductList");
  } else {
  }
}
