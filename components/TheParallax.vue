
<script>
import VueParallax from 'vue-parallax-js';

export default {
  components: {
    VueParallax,
  },
};
</script>


<template>
    <div class="parallax-container">
     <!-- <vue-parallax :speed="0.5"> -->
<VueParallax>
        <!-- Вставьте контент, который вы хотите сделать с эффектом параллакса -->
        <div class="parallax-content">
          <h1>Заголовок с параллаксом</h1>
          <p>Текст с параллаксом</p>
        </div>
      <!-- </vue-parallax> -->
    </VueParallax>
    </div>
  </template>
  

  
  <style scoped>
  /* Стили для контейнера с параллаксом */
  .parallax-container {
    width: 100%;
    height: 400px; /* Установите желаемую высоту контейнера с параллаксом */
    overflow: hidden;
  }
  
  /* Стили для содержимого с параллаксом */
  .parallax-content {
    text-align: center;
    padding: 100px 0;
    background-color: #f0f0f0;
  }
  
  /* Стили для текста с параллаксом */
  h1,
  p {
    margin: 0;
  }
  </style>