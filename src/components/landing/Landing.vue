<template>
  <main>
    <div class="background">
       <div class="composition-wrapper">
          <div class="composition">
            <img class="piece first" src="/src/assets/images/composition-1.jpg" alt="">
            <img class="piece second" src="/src/assets/images/composition-2.jpg" alt="">
            <img class="piece third" src="/src/assets/images/composition-3.jpg" alt="">
            <video class="piece forth" src="/src/assets/images/composition-4.mp4" alt="" muted loop autoplay></video>
            <video class="full-on" src="/src/assets/images/composition-4.mp4" alt="" muted loop autoplay></video>
          </div>
        </div>
      <div class="content-wrapper">
        <h1 class="main-title">Galleries that inspire.</h1>
        <a href="/#/galleries">Check it out</a>
       
      </div>
    </div>
  </main>
</template>
<style scoped>
.background-video{
  width: 100%;
}
.content-wrapper{
  width: 100%;
  padding: 220px 120px;
  position: absolute;
  z-index: 3;
  top:0;
}
main{
  height: 100vh;
  overflow: hidden;
}
.main-title{
  font-size: 4rem;
  color: #f9f9f9;
}
.composition-wrapper{
  z-index: -1;
  position: absolute;
  left: 20vw;
  top: 0;
  right: 0;
  left: 0;
  overflow: hidden;
  height: 100vh;
}
.composition{
  position: relative;
  width: 100vw;
  height: 800px;
  max-width: 1480px;
  margin: 0 auto;
}
@media only screen and (min-width: 1900px) {
  .composition{
  height: 1300px;
  max-width: 1900px;
  margin: 0 auto;
}
}
@media only screen and (min-width: 1600px) {
  .composition{
  height: 1000px;
  max-width: 1600px;
  margin: 0 auto;
}
}
.piece{
  position: absolute;
}
.piece.first{
  right: 0;
  height: 90%;
  z-index: 1;
}
.piece.second{
  left: 0;
  height: 70%;
  z-index: 0;
}
.piece.third{
  left: 270px;
  height: 80%;
  z-index: 0;
}
.piece.forth{
  right: 350px;
  height: 100%;
  z-index: 4;
}
.full-on{
  width: 100%;
}
</style>
<script>
export default {
  components: {},

  methods: {}
};
</script>
