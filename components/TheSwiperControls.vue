<script setup lang="ts">
import arrow from "../static/images/arrow.svg";
import arrow2 from "../static/images/arrow2.svg"

const swiper = useSwiper();
</script>

<template>
  <button class="swiper_button-right" @click="swiper.slideNext()">
    <!-- Next -->
    <img :src="arrow2" alt="arrow" class="arrow"/>
  </button>
  <button class="swiper_button-left" @click="swiper.slidePrev()">
    <!-- Previous -->
    <img :src="arrow" alt="arrow" class="arrow"/>
  </button>
</template>


<style scoped>
.swiper_button-right{
position: absolute;
right: 17px;
top:131px;
z-index: 100;
background-color: transparent;
}
.swiper_button-left{
position: absolute;
left:17px;
top:131px;
z-index: 100;
background-color: transparent;
}
.arrow{
  width: 37px;
  height: 37px;
}
</style>