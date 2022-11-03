<script>
export default {
  data() {
    return {
      name: "Hello World",
    };
  },
};
</script>

<template>
  <div>
    <h1>{{ name }}</h1>
    <NuxtLink to="/">Home Page</NuxtLink>
  </div>
</template>

<style scoped lang="scss">
div {
  h1 {
    color: red;
  }
}
</style>
