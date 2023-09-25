<script setup>
import { productsApi } from '../api-requests/products-api';
import place from '../static/images/place.svg'
// const props = defineProps({
// productsListSale:Array
// })
const props = defineProps(['productsListBestSeller'])


// async function getSaleProducts() {
//     const saleProducts = await productsApi.getAllSaleProducts('',this.$i18n.locale );
//       productsListSale = saleProducts;
//     };
// 
// console.log(list)

// const list = ref(props.productsListBestSeller)._value;
const list = props.productsListBestSeller;
const data = [{item:'a'},{item:'b'},{item:'c'},{item:'d'}];
const slides = ref(Array.from(list, (item,index) => {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  // Figure out contrast color for font
  const contrast = r * 0.299 + g * 0.587 + b * 0.114 > 186 ? 'black' : 'white'
console.log(item)
  return { 
    // bg: `rgb(${r}, ${g}, ${b}),`
    border:' 1px solid rgb(71, 70, 70)',
    color:'color: rgb(103, 101, 101)',
    bg: `black`, color: contrast, data:item  }
}))

</script>

<template>
  <div>
    <h2> {{ $t('listsTitle3') }} </h2>
        <hr>
    <Swiper
      :height="430"
      :modules="[SwiperAutoplay, SwiperEffectCreative]"
      :slides-per-view="1"
      :loop="true"
      :effect="'creative'"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true
      }"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1]
        },
        next: {
          translate: ['100%', 0, 0]
        }
      }"
    >
      <SwiperSlide
        v-for="(slide, idx) in slides"
        :key="idx"
       class="slide"
      >
      <div class="slide_box">
      <img :src="place" alt="place" class="place"/>
        <TheCard :card="slide.data"/>
    </div>
      </SwiperSlide>

      <!-- useSwiper() within a swiper instance -->
      <!-- <TheSwiperControls /> -->
    </Swiper>

  </div>
</template>

<style scoped>
/*DrakMode*/
.dark-mode .slide{
    background-color: rgb(40, 38, 38);
/* border:1px solid rgb(72, 69, 69); */
color:rgb(203, 191, 191);
position:relative;
}
.dark-mode .slide_box{
border:1px solid rgb(72, 69, 69);
padding: 20px;
border-radius: 10px;
padding: 20px;
position: relative;
}
/*DarkMode*/
.slide{
    background-color: rgb(255, 255, 255);
border: 1px solid rgb(71, 70, 70);
color:rgb(175, 148, 148);
position: relative;
}
.slide_box{
border: 1px solid rgb(71, 70, 70);
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  /* height: 20vh; */
  font-size: 4rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  height: 330px;
}
.swiper-wrapper {
  min-width: 100vh;
  width: 100vh;
  
}
.swiper-cards {
  width: 245px;
  height: 310px;
  align-items: center;
}
.swiper-cards .swiper-slide {
  border-radius: 6px;
  border: 1px solid rgb(121, 115, 115);
  height: 310px;
}
hr{
    margin-bottom: 20px;
}
h2{
margin: 0;
padding: 10px 0;
}
.place{
    width: 47px;
    height: 47px;
   position: absolute;
   left: 7px;
   top: 17px;
}
</style>