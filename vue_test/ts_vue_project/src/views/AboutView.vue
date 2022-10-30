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
        <div class="card">
          <img
            :src="Polarix"
            alt="Polarix Next Project"
            @click="onImgClick('https://project-north.vercel.app/')"
          />
          <div class="description">
            <h4>Polarix App:</h4>
            <p>Musement API Based, Made with Next.Js</p>
          </div>
        </div>
        <div class="card">
          <img
            :src="MovieNextApp"
            alt="Movie Next App"
            @click="onImgClick('https://movienextapp.vercel.app/')"
          />
          <div class="description">
            <h4>Movie Next App:</h4>
            <p>TMDB API Based, Made with Next.Js</p>
          </div>
        </div>
        <div class="card">
          <img
            :src="Portfolio"
            alt="Portfolio"
            @click="onImgClick('https://marcoguglielmino.com/')"
          />
          <div class="description">
            <h4>Portfolio:</h4>
            <p>Made with React.Js</p>
          </div>
        </div>
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
        text-transform: uppercase;
        padding: 10px 0;
        letter-spacing: 2px;
      }

      p {
        font-weight: 200;

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

        .card {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.116);
          cursor: pointer;
          transition: all 0.25s;
          background-color: rgb(29, 29, 29);
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid rgba(107, 107, 107, 0.349);

          img {
            width: 300px;
            height: 250px;
            object-fit: cover;
            object-position: top;
          }

          &:hover {
            z-index: 1;
            transform: scale(1.15);
          }
          .description {
            display: flex;
            flex-direction: column;
            gap: 4px;
            align-items: center;
            padding: 20px 10px;

            h4 {
              font-weight: bold;
            }

            p {
              font-weight: 100;
            }
          }
        }
      }
    }
  }
}
</style>
