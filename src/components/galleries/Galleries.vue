<template>
  <main>
    <div class="wrapper">
      <div class="grid">
        <div class="block">
          <a href="/#/grid">
            <div class="img-mask">
              <img
                src="/src/assets/images/grid.png"
                alt="Grid Gallery"
              />
            </div>
            <p>Grid</p>
          </a>
        </div>
        <div class="block">
          <a href="/#/masonry">
            <div class="img-mask">
              <img
                src="/src/assets/images/masonry.png"
                alt="Masonry Gallery"
              />
            </div>
            <p>Masonry</p>
          </a>
        </div>
        <div class="block">
          <a href="/#/row-masonry">
            <div class="img-mask">
              <img
                src="/src/assets/images/row-masonry.png"
                alt="Row Masonry Gallery"
              />
            </div>
            <p>Row Masonry</p>
          </a>
        </div>
        <div class="block">
          <a href="/#/row-masonry">
            <div class="img-mask">
              <img
                src="/src/assets/images/row-masonry.png"
                alt="Row Masonry Gallery"
              />
            </div>
            <p>Hexagon Grid</p>
          </a>
        </div>
        <div class="block">
          <a href="/#/row-masonry">
            <div class="img-mask">
              <img
                src="/src/assets/images/row-masonry.png"
                alt="Row Masonry Gallery"
              />
            </div>
            <p>No Gutter Grid</p>
          </a>
        </div>
        <div class="block">
          <a href="/#/row-masonry">
            <div class="img-mask">
              <img
                src="/src/assets/images/row-masonry.png"
                alt="Row Masonry Gallery"
              />
            </div>
            <p>No gutter masonry</p>
          </a>
        </div>
        <div class="block">
          <a href="/#/row-masonry">
            <div class="img-mask">
              <img src="" alt="" />
            </div>
            <p>Grid</p>
          </a>
        </div>
      </div>
    </div>
    <my-footer />
  </main>
</template>

<script>
import Footer from "../shared/footer/Footer.vue";
export default {
  components: {
    "my-footer": Footer
  }
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  grid-gap: 40px;
}
.wrapper {
  padding: 50px 100px;
  background-color: #f0f0f0;
}
.block p {
  font-size: 16px;
  color: #676767;
  font-weight: 600;
  font-style: italic;
}
.img-mask{
  height: 240px;
  overflow: hidden;
}
.img-mask img {
  width: 100%;
  object-fit: cover;
  min-height: 100%;
}
* {
  box-sizing: border-box;
}
</style>
