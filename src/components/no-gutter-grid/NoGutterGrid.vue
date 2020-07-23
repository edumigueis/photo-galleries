<template>
  <main>
    <div class="header">
      <h1 class="main-title">Grid</h1>
      <button class="copy-code btn">Copy Code</button>
      <a href="/#/galleries" class="bars-btn"><i class="fas fa-bars"></i></a>
    </div>
    <div class="grid-wrapper">
      <div class="grid">
        <div class="block" v-for="photo in photos" :key="photo">
          <div class="image-mask">
            <img :src="photo" alt="" />
          </div>
          <div class="overlay">
            <p class="description">Beautiful Image</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
.grid-wrapper {
  margin: 30px 70px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0;
  width: 100%;
}
@media only screen and (min-width: 701px) and (max-width: 950px) {
  .grid {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}
@media only screen and (max-width: 700px) {
  .grid {
    grid-template-columns: repeat(1, 1fr) !important;
  }
}
@media only screen and (min-width: 441px) and (max-width: 700px){
  .header {
  margin: 40px 70px !important;
}
}
@media only screen and (max-width: 440px){
  .header {
  margin: 40px 30px !important;
}
.grid-wrapper{
  margin: 30px 40px;
}
}
.image-mask {
  width: 100%;
  overflow: hidden;
  height: 300px;
}
.image-mask img {
  width: 100%;
  object-fit: cover;
  min-height: 100%;
}
.block .overlay .description {
  font-size: 22px;
  color: #c5c5c5;
  font-weight: 600;
  font-style: italic;
  margin-left: 22px;
  opacity: 0;
  transition: 0.1s opacity ease-out;
  position: absolute;
  bottom: 16px;
}
.block {
  position: relative;
}
.overlay {
  height: 0;
  background: #1f1f1faa;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transition: 0.3s height ease-in-out;
}
.block:hover > .overlay {
  height: 300px;
}
.block:hover > .overlay > .description {
  opacity: 1;
}
* {
  box-sizing: border-box;
}
.header {
  display: flex;
  margin: 40px 120px;
  height: 40px;
}
.main-title {
  text-align: left;
  margin: 0;
}
.btn {
  padding: 0.7rem 1.7rem;
  background: #1f1f1f;
  margin-top: 20px;
  color: #f9f9f9;
  font-weight: 700;
  font-size: 18px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-left: auto !important;
  margin: 0;
}
.fas {
  font-size: 47px;
  width: 40px;
  height: 40px;
  color: #1f1f1f;
  vertical-align: baseline;
  margin: 0;
}
.bars-btn {
  height: 40px;
  margin-left: 20px !important;
  margin: 0;
}
</style>
<script>
import Footer from "../shared/footer/Footer.vue";
var photos = [];
export default {
  components: {
    "my-footer": Footer
  },
  data() {
    return {
      photos
    };
  },
  mounted() {
    this.randomImage(12);
  },
  destroyed() {
    this.photos = [];
  },
  methods: {
    randomImage(amount) {
      for (var i = 0; i < amount; i++) {
        let randomSize =
          Math.floor(Math.random() * (900 - 300) + 300) +
          "x" +
          Math.floor(Math.random() * (900 - 300) + 300);
        let randomNumber = Math.floor(Math.random() * 633);
        photos.push(
          `https://source.unsplash.com/collection/490175/${randomSize}/?sig=${randomNumber}`
        );
      }
    }
  }
};
</script>
