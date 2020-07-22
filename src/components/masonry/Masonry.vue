<template>
  <main>
    <div class="header">
      <h1 class="main-title">Masonry</h1>
      <button class="copy-code btn">Copy Code</button>
      <a href="/#/galleries" class="bars-btn"><i class="fas fa-bars"></i></a>
    </div>
    <div class="masonry-wrapper">
      <div class="masonry">
        <div class="block" v-for="photo in photos" :key="photo">
          <div class="image-mask">
            <img :src="photo" alt="" />
          </div>
          <p class="description">Beautiful Image</p>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
.masonry-wrapper{
  margin: 0 70px;
}
@media only screen and (min-width: 1650px){
  .masonry{
  column-count: 4 !important;
  }
}
@media only screen and (min-width: 2050px){
  .masonry-wrapper{
  margin: 0 auto;
  max-width: 2000px;
}
}
@media only screen and (min-width: 500px) and (max-width: 850px){
  .masonry{
  column-count: 2 !important;
}
}
@media only screen and (max-width: 500px){
  .masonry{
  column-count: 1 !important;
}
}
.masonry{
  column-count: 3;
  column-gap: 0;
  width: 100%;
  margin: 0 auto;
}
.block{
  break-inside: avoid;
  padding: 20px;
}
.image-mask img{
  width: 100%;
  transition: 0.4s all ease;
}
.description{
  font-size: 16px;
  color: #676767;
  font-weight: 600;
  font-style: italic;
  margin-top: 10px;
}
*{
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
