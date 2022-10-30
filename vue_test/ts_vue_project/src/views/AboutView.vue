<script>
export default {};
</script>

<template>
  <div class="about">
    <h2>This is my first Vue APP</h2>
    <p>
      <a
        href="https://github.com/marco94gug/EDGEMONY/tree/main/vue_test/ts_vue_project"
        target="_blank"
        >Here</a
      >
      You'll find the source code!
    </p>
  </div>
</template>

<style scoped lang="scss">
@media (min-width: 1024px) {
  .about {
    min-height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;

    h2 {
      font-weight: bold;
    }

    p {
      a {
        text-decoration: none;
        color: rgb(138, 228, 220);
        text-shadow: 0 0 4px rgba(255, 255, 255, 0.534);
        font-weight: bold;
        cursor: pointer;
      }
    }
  }
}
</style>
