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
      this.$emit("set_modal_visibility");
    },

    handleSetFullScreen() {
      if (this.fullscreen) {
        this.fullscreen = false;
      } else {
        this.fullscreen = true;
      }
    },
  },

  mounted() {},

  props: {
    movieDetails: {
      type: Object,
    },
  },

  components: {
    "v-icons": MdArrowright,
  },
};
</script>

<template>
  <div class="modal">
    <div class="overlay" @click="closeModal"></div>
    <div class="modal_container" :class="fullscreen ? 'active' : ''">
      <img
        class="backdrop_path"
        :src="`https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`"
      />
      <div class="overlay_backdrop"></div>
      <div class="button_container">
        <button @click="closeModal"></button>
        <button @click="handleSetFullScreen"></button>
      </div>
      <main>
        <h2>{{ movieDetails?.title }}</h2>
        <div class="genre_rating">
          <ul>
            <li v-for="genre in movieDetails?.genres">{{ genre.name }}</li>
          </ul>
          <p>{{ movieDetails?.vote_average?.toFixed(1) }}/10 <span>★</span></p>
        </div>
        <p class="description">
          {{ movieDetails?.overview }}
        </p>
      </main>
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
    padding: 20px;
    border-radius: 10px;
    border: 1px solid rgb(70, 70, 70);
    background-color: rgb(42, 42, 42);
    width: 75%;
    height: 75%;
    transition: all 0.25s;
    overflow: hidden;

    &.active {
      width: 100%;
      height: 100%;
      border-radius: 0px;
    }

    .backdrop_path {
      position: absolute;
      top: 0;
      left: 0;
      height: 80%;
      width: 100%;
      object-fit: cover;
      opacity: 0.4;
    }

    .overlay_backdrop {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgb(42, 42, 42);
      background: -moz-linear-gradient(
        0deg,
        rgba(42, 42, 42, 1) 50%,
        rgba(121, 9, 9, 0) 100%
      );
      background: -webkit-linear-gradient(
        0deg,
        rgba(42, 42, 42, 1) 50%,
        rgba(121, 9, 9, 0) 100%
      );
      background: linear-gradient(
        0deg,
        rgba(42, 42, 42, 1) 50%,
        rgba(121, 9, 9, 0) 100%
      );
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#2a2a2a",endColorstr="#790909",GradientType=1);
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
          background-color: rgb(209, 80, 80);
        }

        &:nth-child(2) {
          background-color: rgb(99, 192, 99);
          &:hover {
            color: black;
          }
        }

        &:hover {
          color: rgba(0, 0, 0, 0.362);
          transform: scale(0.7);
        }
      }
    }
    main {
      margin-top: 30%;
      display: flex;
      flex-direction: column;
      gap: 5px;

      h2 {
        font-weight: bold;
        text-transform: uppercase;
      }

      .genre_rating {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        gap: 5px;

        ul {
          display: flex;
          gap: 10px;
          list-style: none;
          padding: 0;
          margin: 0;

          li {
            padding: 4px 10px;
            font-size: 0.8rem;
            height: max-content;
            border-radius: 8px;
            color: rgb(48, 48, 48);
            font-weight: bold;
            background-color: rgb(212, 212, 212);
          }
        }

        p {
          font-weight: bold;

          &:before {
            content: "Rating: ";
            font-weight: 100;
            opacity: 0.6;
          }

          span {
            color: gold;
          }
        }
      }

      .description {
        line-height: 28px;
        letter-spacing: 1.5px;
        overflow-y: auto;
        height: 180px;
      }
    }
  }
}

@media screen and (min-width: 736px) {
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
      overflow: hidden;

      &.active {
        width: 100%;
        height: 100%;
        border-radius: 0px;
      }

      .backdrop_path {
        position: absolute;
        top: 0;
        left: 0;
        height: 80%;
        width: 100%;
        object-fit: cover;
        opacity: 0.4;
      }

      .overlay_backdrop {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgb(42, 42, 42);
        background: -moz-linear-gradient(
          0deg,
          rgba(42, 42, 42, 1) 50%,
          rgba(121, 9, 9, 0) 100%
        );
        background: -webkit-linear-gradient(
          0deg,
          rgba(42, 42, 42, 1) 50%,
          rgba(121, 9, 9, 0) 100%
        );
        background: linear-gradient(
          0deg,
          rgba(42, 42, 42, 1) 50%,
          rgba(121, 9, 9, 0) 100%
        );
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#2a2a2a",endColorstr="#790909",GradientType=1);
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
            background-color: rgb(209, 80, 80);
          }

          &:nth-child(2) {
            background-color: rgb(99, 192, 99);
            &:hover {
              color: black;
            }
          }

          &:hover {
            color: rgba(0, 0, 0, 0.362);
            transform: scale(0.7);
          }
        }
      }
      main {
        margin-top: 30%;
        display: flex;
        flex-direction: column;
        gap: 15px;

        h2 {
          font-weight: bold;
          text-transform: uppercase;
        }

        .genre_rating {
          display: flex;
          justify-content: space-between;
          flex-direction: row;

          ul {
            display: flex;
            gap: 10px;
            list-style: none;
            padding: 0;
            margin: 0;

            li {
              padding: 4px 15px;
              border-radius: 8px;
              color: rgb(48, 48, 48);
              font-weight: bold;
              background-color: rgb(212, 212, 212);
            }
          }

          p {
            font-weight: bold;

            &:before {
              content: "Rating: ";
              font-weight: 100;
              opacity: 0.6;
            }

            span {
              color: gold;
            }
          }
        }

        p {
          line-height: 28px;
          letter-spacing: 1.5px;
        }
      }
    }
  }
}
</style>
