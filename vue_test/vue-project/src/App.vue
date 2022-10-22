<script>
import { watchEffect } from "vue";
import SerieCard from "./components/SerieCard.vue";
import Modal from "./components/Modal.vue";

export default {
  data() {
    watchEffect(async () => {
      this.value = await fetch("https://edgemony-backend.herokuapp.com/series")
        .then((res) => res.json())
        .then((data) => data);
      console.log(this.value);
    });
    return {
      title: "Hello world",
      value: [],
      serieInfo: {},
      isVisible: false,
    };
  },
  methods: {
    onClickChild(data) {
      const { value, boolean } = data;
      this.serieInfo = value;
      this.isVisible = boolean;
    },

    onModalClose(value) {
      this.isVisible = value;
    },

    onClick() {
      console.log("cliccato");
    },
  },
  components: { SerieCard, Modal },
};
</script>

<template>
  <main>
    <h1>{{ title }}</h1>
    <button @click="onClick">Clicca</button>
    <Modal v-if="isVisible" :serieInfo="serieInfo" @delete="onModalClose" />
    <h2>Series List:</h2>
    <div class="MyFilm">
      <SerieCard
        @clicked="onClickChild"
        v-for="serie in value"
        :title="serie.title"
        :poster="serie.poster"
        :serieData="serie"
      />
      <!-- <div v-for="serie in value">
        <img :src="serie.poster" />
        <p>{{ serie.title }}</p>
      </div> -->
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  h1 {
    color: red;
  }

  .MyFilm {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px 0;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.337);
      width: 200px;

      img {
        width: 100px;
      }
    }
  }
}
</style>
