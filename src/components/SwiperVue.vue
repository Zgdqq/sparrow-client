<template>
  <div class="lb">
    <swiper :modules="modules" :slides-per-view="1" :space-between="50" navigation :pagination="{ clickable: true }"
      @swiper="onSwiper" @slideChange="onSlideChange">
      <swiper-slide><img src="../../public/img/logo.png" alt=""></swiper-slide>
      <swiper-slide><img src="../../public/img/logo.png" alt=""></swiper-slide>
      <swiper-slide><img src="../../public/img/logo.png" alt=""></swiper-slide>
    </swiper>
  </div>
</template>
<script>

</script>
<script setup>
// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css/bundle';

const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
};
</script>

<style scoped>
.lb {
  width: 100%;
  height: 700px;
}

.lb>.swiper {
  width: 100%;
  height: 100%;

}

.lb>.swiper img {
  width: 100%;
  height: 100%;
}
</style>