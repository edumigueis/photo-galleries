<template>
  <main>
    <div class="header">
      <h1 class="main-title">Hexagon Grid</h1>
      <button class="copy-code btn">Copy Code</button>
      <a href="/#/galleries" class="bars-btn"><i class="fas fa-bars"></i></a>
    </div>
    <section class="hexagon-gallery">
      <div class="hex-wrapper" v-for="photo in photos" :key="photo">
        <div class="hex">
        <img :src=photo alt="some">
      </div>
      <p class="title">Gourgeous Image</p>
      </div>
      
    </section>
  </main>
</template>
<style scoped>
img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}
.hex-wrapper{
  position: relative;
}
.hex-wrapper .title{
  position: absolute;
  bottom: 25px;
  right: 10px;
  transform: rotate(-30deg);
  font-size: 16px;
  color: #676767;
  font-weight: 600;
  font-style: italic;
}
.hexagon-gallery {
  margin: 40px 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 50px;
}

.hex {
  display: flex;
  position: relative;
  width: 260px;
  height: 285px;
  margin: 20px 20px;
  background-color: transparent;
  -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
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
@media only screen and (max-width: 750px) {
  .hex {
  display: flex;
  position: relative;
  width: 300px;
  height: 325px;
}
}
@media only screen and (min-width: 441px) and (max-width: 700px){
  .header {
  margin: 40px 70px !important;
}
}
@media only screen and (max-width: 550px){
  .header {
  margin: 40px 30px !important;
}
.hexagon-gallery{
  margin: 30px 40px;
}
}
@media only screen and (max-width: 470px){
  .header {
  flex-wrap: wrap;
  height: fit-content !important;
  align-items: center;
  justify-content: center;
}
.main-title{
  width: 100%;
}
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
