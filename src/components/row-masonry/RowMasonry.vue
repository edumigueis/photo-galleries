<!--
  Copyright (c) Eduardo Migueis 2020
-->
<template>
  <main>
    <title>Row Masonry</title>
    <div class="header">
      <h1 class="main-title">Row Masonry</h1>
      <button class="copy-code btn"><a href="https://github.com/edumigueis/photo-galleries" target="_blank" rel="noopener noreferrer">Check Repo</a></button>
      <a href="/#/galleries" class="bars-btn"><i class="fas fa-bars"></i></a>
    </div>
    <div class="masonry">
      <figure class="item" v-for="(item, index) in photos" :key="index">
        <a href=""
          ><div class="image-mask">
            <img class="item-image" :src=item alt="" /></div
        ></a>
        <figcaption>
          <h5 class="caption">Gourgeous Image</h5>
        </figcaption>
      </figure>
    </div>
    <my-footer />
  </main>
</template>

<script>
import Footer from "../shared/footer/Footer.vue"
var photos = [];
export default {
    components:{
        "my-footer": Footer
    },
  data() {
    return {
      photos
    };
  },
  mounted() {
    this.randomImage(16);
  },
  methods: {
    randomImage(amount) {
      for (var i = 0; i < amount; i++) {
          let randomSize = Math.floor(Math.random() * (1000 - 300) + 300) + "x" + Math.floor(Math.random() * (1000 - 200) + 200);
        let randomNumber = Math.floor(Math.random() * 633);
        photos.push(
          `https://source.unsplash.com/collection/490175/${randomSize}/?sig=${randomNumber}`
        );
      }
    }
  }
};
</script>

<style scoped>
.masonry {
  box-sizing: border-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  flex-flow: row wrap;
  margin: 50px 0;
  padding: 0px;
}
.masonry .item {
  padding-left: calc(30px);
  padding-right: calc(30px);
  transition: 0.2s all ease-in;
  margin-left: 0;
  margin-right: 0;
}
.masonry .item:hover {
  transform: scale(1.025);
}
@media (min-width: 48em) {
  .masonry .item {
    width: 300px !important;
  }
}

@media (min-width: 26em) {
  .masonry .item {
    width: 50%;
    margin-bottom: 60px !important;
  }
}
@media (max-width: 730px) {
  .masonry .item {
    width: 100%;
    margin-bottom: 60px;
    margin-top: 0 !important;
  }
  .image-mask {
    max-width: 100% !important;
  }
}
@media (max-width: 600px) {
  .masonry .item {
    width: 100%;
    margin-bottom: 60px;
    margin: 0 !important;
  }
}
@media only screen and (min-width: 441px) and (max-width: 700px){
  .header {
  margin: 40px 70px !important;
}
}
@media only screen and (max-width: 500px){
  .header {
  margin: 40px 30px !important;
}
.masonry-wrapper{
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
.caption {
  font-size: 16px;
  color: #676767;
  font-weight: 600;
  font-style: italic;
  margin-top: 10px;
}
.item-image {
  position: absolute;
  right: 0px;
  bottom: 0px;
  left: 0px;
  transform: translateZ(0px);
  will-change: transform, opacity;
  width: 100%;
  vertical-align: bottom;
}
.image-mask {
  position: relative;
  max-width: 360px;
  height: 330px;
  overflow: hidden;
}
* {
  box-sizing: border-box;
}
.header {
  display: flex;
  margin: 0 120px;
  margin-top: 80px;
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
