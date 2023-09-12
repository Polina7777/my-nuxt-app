<script lang="ts">
import logo from "../static/images/logo.svg";

export default {
  mounted() {
    const widthDevice = window.innerWidth;
    if (widthDevice < 650) {
      this.mobileVersion = true;
    }
  },
  updated() {
  this.currentLocale = this.$i18n.locale
},
  data() {
    return {
 
      // title:this.$t('aboutBoxTitle'),
      // text1:this.$t('aboutBoxText1'),
      // text2:this.$t('aboutBoxText2'),
      // text1:
      //   "KameLAb - мультибрендовый интернет-магазин косметики. Мы предлагаем вам большой выбор брендов, среди которых вы обязательно найдете то, что нужно вам.",
      // text2:
      //   "Мы сотрудничаем с официальными дистрибьюторами, поэтому вы можете быть уверены в качестве и оригинальности представленной продукции на сайте. Вы всегда можете получить бесплатную консультацию по подбору ухода от наших специалистов. Спасибо, что выбираете нас!",
      // text3:
      //   "KameLAb - мультибрендовый интернет-магазин косметики. Мы предлагаем вам большой выбор брендов, среди которых вы обязательно найдете то, что нужно вам.Мы сотрудничаем с официальными дистрибьюторами, поэтому вы можете быть уверены в качестве и оригинальности представленной продукции на сайте. Вы всегда можете получить бесплатную консультацию по подбору ухода от наших специалистов. Спасибо, что выбираете нас!",
      logo: logo,
      mobileVersion: false,
      currentLocale:this.$i18n.locale,
    };
  },
  methods: {
    navigateTo(link: any) {
      this.$router.push(link);
    },
  },
  // watch: {
  //   currentLocale: async function(){
  //     // this.title=this.$t('aboutBoxTitle');
  //     // this.text1=this.$t('aboutBoxText1');
  //     // this.text2=this.$t('aboutBoxText2');
  //   }, 
  // },
};
</script>

<template>
  <div class="wrapper">
    <p class="title">{{ $t('aboutBoxTitle') }}</p>
    <div v-if="!mobileVersion" class="info">
      <div class="text_wrapper">
        <img :src="logo" alt="logo" />
        <p class="text1">{{ $t('aboutBoxText1') }}</p>
      </div>
      <p class="text1">{{ $t('aboutBoxText2') }}</p>
    </div>
    <div v-if="mobileVersion" class="info">
      <div class="text_wrapper-mobile">
        <img :src="logo" alt="logo" />
        <p class="text1">{{ $t('aboutBoxText1') }}</p>
        <p class="text1">{{ $t('aboutBoxText2') }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  color: white;
  background: linear-gradient(
    93.24deg,
    #b49696 39.26%,
    #cfb9b9 67.15%,
    #d5c0c0 76.56%,
    #efe1e1 100%
  );
  padding: 70px;
}
/* .text_wrapper, */
.text2 {
  display: flex;
  flex-direction: column;
  width: 40%;
}
.info {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  white-space: break-spaces;
  width: 70%;
  gap: 70px;
}
.text {
  width: 90%;
}
.text2 {
  padding-top: 83px;
}
img {
  width: 80%;
  height: 140px;
}
.title,
.text1,
.text2 {
  font-size: 21px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
.text1,
.text2 {
  font-size: 17px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
@media (max-width: 490px) {
  .info {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
  }
  .wrapper {
    padding: 20px;
  }
  .text1,
  .text2 {
    font-size: 11px;
  }
}
.text_wrapper-mobile {
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
}
@media (max-width: 1130px) {
  .info {
    width: 80%;
  }
}
@media (max-width: 900px) {
  .wrapper {
    padding: 20px 0 30px;
  }
  .info {
    width: 95%;
  }
  .text1,
  .text2 {
    font-size: 14px;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }
}
@media (max-width: 610px) {
  .wrapper {
    padding: 30px;
    overflow: scroll;
    background: linear-gradient(
      48.24deg,
      #b49696 79.26%,
      #cfb9b9 97.15%,
      #d5c0c0 86.56%,
      #efe1e1 177%
    );
  }
  .text_wrapper,
  .text2 {
    display: flex;
    flex-direction: column;
  }
}
@media (max-width: 350px) {
  .wrapper {
    padding: 10px;
  }
  .info {
    width: 100%;
  }
  img {
    height: 80px;
  }
}
</style>
