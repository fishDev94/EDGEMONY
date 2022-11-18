export default async function ({ store }) {
  await store.dispatch("products/setProductList");
}
