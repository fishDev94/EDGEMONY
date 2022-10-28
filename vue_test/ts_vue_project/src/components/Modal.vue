<script>
import { MdArrowright } from "oh-vue-icons/icons";

export default {
  data() {
    return {
      fullscreen: false,
    };
  },

  methods: {
    closeModal() {
      this.$emit("set_modal_visibility", false);
    },

    handleSetFullScreen() {
      if (this.fullscreen) {
        this.fullscreen = false;
      } else {
        this.fullscreen = true;
      }
    },
  },

  mounted() {
    console.log("modale montata");
  },

  components: {
    "v-icons": MdArrowright,
  },
};
</script>

<template>
  <div class="modal">
    <div class="overlay" @click="closeModal" />
    <div class="modal_container" :class="fullscreen ? 'active' : ''">
      <div class="button_container">
        <button @click="closeModal">X</button>
        <button @click="handleSetFullScreen">□</button>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aut
        harum, mollitia maxime quibusdam libero.
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.771);
  backdrop-filter: blur(4px);

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .modal_container {
    position: relative;
    padding: 40px;
    border-radius: 10px;
    border: 1px solid rgb(70, 70, 70);
    background-color: rgb(42, 42, 42);
    width: 75%;
    height: 75%;
    transition: all 0.25s;

    &.active {
      width: 100%;
      height: 100%;
      border-radius: 0px;
    }

    .button_container {
      position: absolute;
      top: 5px;
      left: 5px;

      button {
        border: none;
        border-radius: 100%;
        height: 22px;
        width: 22px;
        color: rgba(0, 0, 0, 0);
        font-weight: bold;
        transform: scale(0.6);
        cursor: pointer;

        &:nth-child(1) {
          background-color: rgb(190, 98, 98);
        }

        &:nth-child(2) {
          background-color: rgb(99, 177, 99);
          &:hover {
            color: black;
          }
        }

        &:hover {
          color: rgba(0, 0, 0, 0.362);
        }
      }
    }
  }
}
</style>
