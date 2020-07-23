<template>
  <main>
    <title>Photo Galleries</title>
    <div class="background">
      <div class="composition-wrapper">
        <div class="composition">
          <img
            class="piece second"
            src="/src/assets/images/composition-4.jpg"
            alt=""
          />
          <img
            class="piece third"
            src="/src/assets/images/composition-2.jpg"
            alt=""
          />
          <img
            class="piece first"
            src="/src/assets/images/composition-3.jpg"
            alt=""
          />

          <img
            class="piece forth"
            src="/src/assets/images/composition-1.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="content-wrapper">
        <h1 class="main-title">Galleries that inspire.</h1>
        <a href="/#/galleries" class="btn">Check it out</a>
      </div>
    </div>
  </main>
</template>
<style scoped>
.background-video {
  width: 100%;
}
.content-wrapper {
  width: 100%;
  padding: 220px 120px;
  position: absolute;
  z-index: 3;
  top: 0;
}
main {
  height: 100vh;
  overflow: hidden;
}
.main-title {
  font-size: 5.1vw;
  font-weight: 700;
  color: #f9f9f9;
  text-shadow: 2px 2px 4px #7f848d83;
  margin-top: 10px;
  margin-bottom: 40px;
}
.composition-wrapper {
  z-index: -1;
  position: absolute;
  left: 20vw;
  top: 0;
  right: 0;
  left: 0;
  overflow: hidden;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.composition {
  position: relative;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
}
.piece {
  position: absolute;
  min-height: 100%;
}
.piece.first {
  left: 0;
  width: 25vw;
}
.piece.third {
  left: 24vw;
  width: 30vw;
}
.piece.second {
  right: 23vw;
  filter: brightness(80%);
  width: 28vw;
}
.piece.forth {
  right: 0;
  filter: brightness(90%);
  width: 29vw;
}
.btn {
  padding: 1rem 2rem;
  background: #1f1f1f;
  margin-top: 20px;
  color: #f9f9f9;
  font-weight: 700;
  font-size: 18px;
}
* {
  box-sizing: border-box;
  padding: 0;
}
@media screen and (max-width: 1200px) {
  .piece.first {
    display: none;
  }
  .piece.third {
    left: 0;
    width: 35vw;
  }
  .piece.second {
    right: 33vw;
    filter: brightness(80%);
    width: 33.5vw;
  }
  .piece.forth {
    right: 0;
    filter: brightness(90%);
    width: 33.5vw;
  }
}
@media screen and (max-width: 1100px) {
  .piece.third {
    left: 0;
    width: 55vw;
  }
  .piece.second {
    display: none;
  }
  .piece.forth {
    right: 0;
    width: 45vw;
  }
}
@media screen and (max-width: 700px) {
  .piece.third {
    right: 0;
    width: 100% !important;
  }
  .piece.second {
    display: block;
    height: 300px;
    width: 200px;
    bottom: 0;
    right: 250px;
    min-height: 200px !important;
    z-index: 9;
  }
  .piece.forth {
    right: 0;
    width: 280px;
    height: 400px;
    min-height: 55% !important;
    z-index: 7;
    bottom: 0;
  }
  .content-wrapper{
    padding: 220px 50px !important;
  }
  .main-title{
    font-size: 40px;
  }
}
@media screen and (max-width: 1400px) and (min-width: 1100px) and (min-height: 950px) {
  .piece.first {
    display: none;
  }
  .piece.third {
    left: 0;
    width: 35vw;
  }
  .piece.second {
    right: 33vw;
    filter: brightness(80%);
    width: 33.5vw;
  }
  .piece.forth {
    right: 0;
    filter: brightness(90%);
    width: 33.5vw;
  }
}
@media screen and (max-width: 900px) and (min-width: 600px) and (min-height: 900px) {
  .piece.third {
    left: -10vw;
    width: 60vw;
  }
  .piece.forth {
    right: -10vw;
    width: 60vw;
  }
}
</style>
<script>
export default {
  components: {},

  methods: {}
};
</script>
