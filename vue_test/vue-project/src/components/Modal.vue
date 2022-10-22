<script>
export default {
  props: {
    serieInfo: Object,
  },

  methods: {
    onDeleteBtn() {
      this.$emit("delete", false);
    },
  },
};
</script>

<template>
  <div class="modal">
    <button @click="onDeleteBtn">X</button>
    <div class="info">
      <img :src="serieInfo.poster" alt="poster" />

      <section>
        <ul>
          <li v-for="genre in serieInfo.genres">{{ genre }}</li>
        </ul>
        <p>{{ serieInfo.description }}</p>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal {
  color: white;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: rgb(51, 51, 51);
  padding: 80px;

  button {
    position: absolute;
    top: 40px;
    left: 40px;
  }

  .info {
    display: flex;
    align-items: center;
    gap: 20px;

    img {
      height: 400px;
    }

    section {
      display: flex;
      flex-direction: column;
      gap: 20px;

      ul {
        display: flex;
        padding: 0;
        gap: 10px;

        li {
          list-style: none;
          background-color: rgba(255, 255, 255, 0.565);
          width: max-content;
          padding: 5px 10px;
          border-radius: 8px;
        }
      }
    }
  }
}
</style>
