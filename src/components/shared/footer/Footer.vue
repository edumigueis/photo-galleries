<template>
  <div id="site-footer">
    <!-- Site footer -->
    <footer class="site-footer">
      <p class="copyright">© <a href="" target="_blank" class="creator-link link" rel="noopener noreferrer">Eduardo Migueis</a> 2020.</p>
      <p class="github-link"><a href="https://google.com" class="link" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a></p>
    </footer>
  </div>
</template>
<style scoped>
.site-footer {
  background-color: transparent;
  padding: 0 100px;
  font-size: 16px;
  line-height: 24px;
  color: #4c4c4c;
  display: flex;
  position: fixed;
  z-index: 10;
  bottom: -15px;
  left: 0;
  width: 100%;
   justify-content: center;
   align-items: center;
  vertical-align: middle;
}
.github-link{
margin-left: auto;
font-size: 30px;
}
.link{
   color: #4c4c4c;
}
.link:hover{
   color: #f16a41;
}
* {
  box-sizing: border-box;
}
</style>
