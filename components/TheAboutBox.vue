<script lang="ts">
import logo from "../static/images/logo.svg";

export default {
  data() {
    return {
      title: "О магазине",
      text1:
        "KameLAb - мультибрендовый интернет-магазин косметики. Мы предлагаем вам большой выбор брендов, среди которых вы обязательно найдете то, что нужно вам.",
      text2:
        "Мы сотрудничаем с официальными дистрибьюторами, поэтому вы можете быть уверены в качестве и оригинальности представленной продукции на сайте. Вы всегда можете получить бесплатную консультацию по подбору ухода от наших специалистов. Спасибо, что выбираете нас!",
      logo: logo,
    };
  },
  methods: {
    navigateTo(link: any) {
      this.$router.push(link);
    },
  },
};
</script>

<template>
  <div class="wrapper">
    <p class="title">{{ title }}</p>
    <div class="info">
   
   
    <div class="text_wrapper">
      <img :src="logo" alt="logo" />
      <p class="text1">{{ text1 }}</p>
    
    </div>
    <p class="text2">{{ text2 }}</p>
  </div>
  </div>
</template>

<style scoped>
.wrapper{
  display: flex;
  flex-direction: column;
  color: white;
  background: linear-gradient(93.24deg, #B49696 39.26%, #CFB9B9 67.15%, #D5C0C0 76.56%, #EFE1E1 100%);
  padding: 70px;
}
.text_wrapper,.text2{
display: flex;
flex-direction: column;
width: 40%;
}
.info{
  display: flex;
  flex-direction: row;
justify-content: center;
align-items: center;
gap:70px;
}
.text2{
  padding-top:20px;
}
img{
  width: 80%;
  height: 140px;
}
.title,.text1,.text2{
  font-size: 21px;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.text1,.text2{
  font-size: 17px;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
@media (max-width: 490px) {
  .info{
  display: flex;
  flex-wrap: wrap;
gap:30px;
}
.wrapper{
  padding: 20px;

}
.text1,.text2{
  font-size: 11px;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
}
</style>