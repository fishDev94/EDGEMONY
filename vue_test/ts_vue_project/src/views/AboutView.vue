<script>
import Polarix from "../assets/polarix.jpg";
import MovieNextApp from "../assets/movienextapp.jpg";
import Portfolio from "../assets/portfolio.jpg";

export default {
  data() {
    return {
      Polarix,
      MovieNextApp,
      Portfolio,
    };
  },

  methods: {
    onImgClick(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<template>
  <div class="about">
    <section>
      <h2>This is my first Vue APP</h2>
      <p>
        <a
          href="https://github.com/marco94gug/EDGEMONY/tree/main/vue_test/ts_vue_project"
          target="_blank"
          >Here</a
        >
        You'll find the source code!
      </p>
    </section>
    <section>
      <h3>Here some project I made:</h3>
      <div class="gallery">
        <img
          :src="Polarix"
          alt="Polarix Next Project"
          @click="onImgClick('https://project-north.vercel.app/')"
        />
        <img
          :src="MovieNextApp"
          alt="Movie Next App"
          @click="onImgClick('https://movienextapp.vercel.app/')"
        />
        <img
          :src="Portfolio"
          alt="Portfolio"
          @click="onImgClick('https://marcoguglielmino.com/')"
        />
      </div>
    </section>
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

    section {
      display: flex;
      flex-direction: column;
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

      .gallery {
        display: flex;
        gap: 20px;
        margin-top: 20px;

        img {
          position: relative;
          width: 300px;
          height: 250px;
          object-fit: cover;
          object-position: top;
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.226);
          cursor: pointer;
          transition: all 0.25s;

          &:hover {
            z-index: 1;
            transform: scale(1.2);
          }
        }
      }
    }
  }
}
</style>
