<template>
  <main>
    <div class="header">
      <h1 class="main-title">Row Masonry</h1>
      <button class="copy-code btn">Copy Code</button>
      <a href="/#/galleries" class="bars-btn"><i class="fas fa-bars"></i></a>
    </div>
    <div class="masonry">
      <figure class="item">
        <a href=""
          ><div class="image-mask">
            <img
              class="item-image"
              src="https://images.pexels.com/photos/1176618/pexels-photo-1176618.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            /></div
        ></a>
        <figcaption>
          <h5 class="caption">Gourgeous Image</h5>
        </figcaption>
      </figure>
      <figure class="item">
        <a href=""
          ><div class="image-mask">
            <img
              class="item-image"
              src="https://images.pexels.com/photos/91413/pexels-photo-91413.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            /></div
        ></a>
        <figcaption>
          <h5 class="caption">Gourgeous Image</h5>
        </figcaption>
      </figure>
      <figure class="item">
        <a href=""
          ><div class="image-mask">
            <img
              class="item-image"
              src="https://images.pexels.com/photos/772478/pexels-photo-772478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            /></div
        ></a>
        <figcaption>
          <h5 class="caption">Gourgeous Image</h5>
        </figcaption>
      </figure>
      <figure class="item">
        <a href=""
          ><div class="image-mask">
            <img
              class="item-image"
              src="https://images.pexels.com/photos/772478/pexels-photo-772478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            /></div
        ></a>
        <figcaption>
          <h5 class="caption">Gourgeous Image</h5>
        </figcaption>
      </figure>
      <figure class="item">
        <a href=""
          ><div class="image-mask">
            <img
              class="item-image"
              src="https://images.pexels.com/photos/772478/pexels-photo-772478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            /></div
        ></a>
        <figcaption>
          <h5 class="caption">Gourgeous Image</h5>
        </figcaption>
      </figure>
      <figure class="item">
        <a href=""
          ><div class="image-mask">
            <img
              class="item-image"
              src="https://images.pexels.com/photos/1147124/pexels-photo-1147124.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            /></div
        ></a>
        <figcaption>
          <h5 class="caption">Gourgeous Image</h5>
        </figcaption>
      </figure>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style>
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
@media (max-width: 780px) {
  .masonry .item {
    width: 100%;
    margin-bottom: 60px;
    margin-top: 0 !important;
  }
  .image-mask {
    max-width: 420px !important;
  }
}
@media (max-width: 600px) {
  .masonry .item {
    width: 100%;
    margin-bottom: 60px;
    margin: 0 !important;
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
