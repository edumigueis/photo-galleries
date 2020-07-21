<template>
  <main>
    <div class="wrapper">
      <div class="grid">
        <div class="block">
          <div class="img-mask">
            <img src="" alt="" />
          </div>
          <p>Grid</p>
        </div>
        <div class="block">
          <div class="img-mask">
            <img src="" alt="" />
          </div>
          <p>Masonry</p>
        </div>
        <div class="block">
          <div class="img-mask">
            <img src="" alt="" />
          </div>
          <p>Row Masonry</p>
        </div>
        <div class="block">
          <div class="img-mask">
            <img src="" alt="" />
          </div>
          <p>Hexagon Grid</p>
        </div>
        <div class="block">
          <div class="img-mask">
            <img src="" alt="" />
          </div>
          <p>No Gutter Grid</p>
        </div>
        <div class="block">
          <div class="img-mask">
            <img src="" alt="" />
          </div>
          <p>No gutter masonry</p>
        </div>
        <div class="block">
          <div class="img-mask">
            <img src="" alt="" />
          </div>
          <p>Grid</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
}
.wrapper {
  padding: 50px 100px;
}
.block p {
  font-size: 16px;
  color: #676767;
  font-weight: 600;
  font-style: italic;
}
</style>
