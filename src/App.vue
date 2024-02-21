<script setup>
import FooterVue from "./components/FooterVue.vue";
import HeaderVue from "./components/HeaderVue.vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
</script>

<template>
  <div class="box">
    <HeaderVue />
    <router-view></router-view>
    <FooterVue />
  </div>
</template>

<style>
:root {
  font-family: "Poppins", sans-serif;
  --main-color: #e60012;
  --main-color-white: #ffffff;
  --main-color-555: #555555;
  --main-color-999: #999999;
  --main-color-666: #666666;
  --main-color-333: #333333;
  --main-color-888: #888888;
  --main-color-222: #222222;
  --main-transition: all ease 0.4s;
  --main-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

* {
  padding: 0;
  margin: 0;
  list-style: none;
}

a {
  text-decoration: none;
}

.box {
  width: 100%;
  height: 100%;
  padding-top: 150px;
}
</style>
