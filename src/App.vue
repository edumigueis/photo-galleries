<!--
  Copyright (c) Eduardo Migueis 2020
-->
<template>
  <div class="corpo">
    <vue-page-transition
        name="fade-in-right"
        mode="out-in"
      >
      <!-- Add name="slide-left" or right for slide transition-->
        <router-view/>
      </vue-page-transition>
  </div>
</template>

<script>
import { routes } from "./routes";
export default {
  data() {
    return {
      routes,
    };
  },
  
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
  html,body{
    margin: 0;
    overflow-x: hidden;
    width: 100%;
    font-family: 'Lato', sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  .corpo{
    width: 100%;
    height: 100%;
    margin: 0;
  }
  a{
    text-decoration: none;
  }
  button a {
    color: #fefefe;
  }
</style>
