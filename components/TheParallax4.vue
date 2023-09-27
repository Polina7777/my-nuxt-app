<script setup lang="ts">
import YAML from 'js-yaml'
import { computed, reactive, ref } from 'vue'
import type { CSSProperties } from 'vue'
import { useMediaQuery, useParallax } from '@vueuse/core'
import TheCard from '../components/TheCard.vue';


const props = defineProps(['productsListBestSeller'])
const list = ref(props.productsListBestSeller)._value;
const target = ref(null)
const isMobile = useMediaQuery('(max-width: 700px)')

const parallax = reactive(useParallax(target))

const targetStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems:'center',
//   minHeight: '500px',
  transition: '.3s ease-out all',
}
const cardWindowStyle: CSSProperties = {
//   overflow: 'hidden',
// overflow: 'scroll',
  fontSize: '6rem',
  position: 'absolute',
//   top: 'calc(50% - 1em)',
//  left: 'calc(50% - 1em)',
top:'9%',
// left:'11%',
left:'3%',
  height: '30em',
  width: '210em',
  margin: 'auto',
}
const layerBase: CSSProperties = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  transition: '.3s ease-out all',
}
const containerStyle: CSSProperties = {
  margin: '3em auto',
  perspective: '300px',
}

const infoStyle = computed(() => ({
  opacity: 0.4,
  top: '20px',
  left: '40px',
  position: isMobile.value ? 'inherit' : 'absolute',
}))

const layer0 = computed(() => ({
  ...layerBase,
  transform: `translateX(${parallax.tilt * 10}px) translateY(${
    parallax.roll * 10
  }px) scale(1.33)`,
}))

const layer1 = computed(() => ({
  ...layerBase,
  transform: `translateX(${parallax.tilt * 20}px) translateY(${
    parallax.roll * 20
  }px) scale(1.33)`,
}))

const layer2 = computed(() => ({
  ...layerBase,
  transform: `translateX(${parallax.tilt * 30}px) translateY(${
    parallax.roll * 30
  }px) scale(1.33)`,
}))

const layer3 = computed(() => ({
  ...layerBase,
  transform: `translateX(${parallax.tilt * 40}px) translateY(${
    parallax.roll * 40
  }px) scale(1.33)`,
}))

const layer4 = layerBase

const cardStyle = computed(() => ({
  background: '#fff',
  height: '20rem',
  width: '78rem',
  borderRadius: '5px',
  border: '1px solid #cdcdcd',
  overflow: 'hidden',
  transition: '.3s ease-out all',
  boxShadow: '0 0 20px 0 rgba(255, 255, 255, 0.25)',
  transform: `rotateX(${parallax.roll * 20}deg) rotateY(${
    parallax.tilt * 20
  }deg)`,

}))
</script>

<template>
  <div>
    <div ref="target" :style="targetStyle">
      <pre :style="infoStyle">{{ YAML.dump(parallax) }}</pre>
      <div :style="containerStyle">
        <div :style="cardStyle">
          <div :style="cardWindowStyle">
            
 <!-- <div class="cards"> -->
  <!-- <h3>Movies</h3>
  <h1>Popular</h1> -->
  <!-- <div class="card card__one">
    <div class="card__bg"></div>
    <img class="card__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_mono.png" />
    <div class="card__text">
      <p class="card__title">Princess Mononoke</p>
    </div>
  </div>
  <div class="card card__two">
    <div class="card__bg"></div>
    <img class="card__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_chihiro.png" />
    <div class="card__text">
      <p class="card__title">Spirited Away</p>
    </div>
  </div>
  <div class="card card__three">
    <div class="card__bg"></div>
    <img class="card__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_howlcastle.png" />
    <div class="card__text">
      <p class="card__title">Howl's Moving Castle</p>
    </div>
  </div> -->

   <li v-for="(item, index) in list" :key="index" class="card">
        <TheCard :card="item"  />
      </li>

<!-- </div> -->
            <!-- <img
              :style="layer0"
              src="https://jaromvogel.com/images/design/jumping_rabbit/page2layer0.png"
              alt=""
            >
            <img
              :style="layer1"
              src="https://jaromvogel.com/images/design/jumping_rabbit/page2layer1.png"
              alt=""
            >
            <img
              :style="layer2"
              src="https://jaromvogel.com/images/design/jumping_rabbit/page2layer2.png"
              alt=""
            >
            <img
              :style="layer3"
              src="https://jaromvogel.com/images/design/jumping_rabbit/page2layer3.png"
              alt=""
            >
            <img
              :style="layer4"
              src="https://jaromvogel.com/images/design/jumping_rabbit/page2layer4.png"
              alt=""
            >   -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
html, body { height: 100%}

/* body {
  align-items: center;
  background: #642B73;
  background: linear-gradient(to bottom, #C6426E, #642B73);
  display: flex;
  font-family: 'Open Sans', sans;
  justify-content: center;
  overflow: hidden;
  perspective: 1800px;
  text-align: center;
  margin: 0 20px;
} */

h1 {
  color: #3e3e42;
  font-size:32px;
  font-weight: 800;
  letter-spacing: -1px;
  margin-bottom: 30px;
  transform: translateZ(35px);
}

h3 {
  color: #eb285d;
  font-size: 16px;
  margin-bottom: 6px;
  transform: translateZ(25px);
}

.cards {
  background: #fff;
  border-radius: 15px;
  box-shadow: 0px 10px 20px 20px rgba(0,0,0,0.17);
  display: inline-block;
  padding: 30px 35px;
  perspective: 1800px;
  text-align: left;
  transform-origin: 50% 50%;
  transform-style: preserve-3d;
  transform: rotateX(11deg) rotateY(16.5deg);
  min-width: 595px;
}

.card {
  border-radius: 15px;
  box-shadow: 5px 5px 20px -5px rgba(0,0,0,0.6);
  /* // cursor: pointer; */
  display: inline-block;
  height: 270px;
  overflow: hidden;
  perspective: 1200px;
  position: relative;
  transform-style: preserve-3d;
  transform: translatez(35px);
  transition: transform 200ms ease-out;
  /* width: 175px; */
  width: 210px;
  text-align: center;
  
  /* // &:hover {
  //   box-shadow: 5px 5px 20px -7px rgba(0,0,0,0.5);
  //   transform: translatez(60px);
  // } */
  
  &:not(:last-child) {
    margin-right: 30px;
  }
}

.card__img {
  position: relative;
  height: 100%;
  width: 101px;
}
li{
    padding: 10px 0 0 5px;
}
.card__bg {
  bottom: -50px;
  left: -50px;
  position: absolute;
  right: -50px;
  top: -50px;
  transform-origin: 50% 50%;
  transform: translateZ(-50px);
  z-index: 0;
}

.card__one {
  .card__img {
    top: 14px;
    right: -10px;
    height: 110%;
  }
  .card__bg {
    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_monobg.jpg') center / cover no-repeat;
  }
  .card__text {
    /* //background-color: #254b60; */
  }
}

.card__two {
  .card__img {
    top: 25px;
  }
  .card__bg {
    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_spirited.jpg') center / cover no-repeat;
  }
  .card__text {
    /* //background-color: #274a2e; */
  }
}

.card__three {
  .card__img {
    top: 5px;
    left: -4px;
    height: 110%;
  }
  .card__bg {
    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_howlbg.jpg') center / cover no-repeat;
  }
  .card__text {
    /* //background-color: #3e2222; */
  }
}

.card__text {
  align-items: center;
  background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.55) 100%);
  bottom: 0;
  display: flex;
  flex-direction: column; 
  height: 70px;
  justify-content: center;
  position: absolute;
  width: 100%;
  z-index: 2;
}

.card__title {
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  padding: 0 10px;
  margin-bottom: 3px;
}

.notice {
  background: gold;
  border-top-left-radius: 6px;
  bottom: 0;
  font-family: monospace;
  font-size: 14px;
  padding: 8px 10px;
  position: absolute;
  right: -20px;
}

</style>