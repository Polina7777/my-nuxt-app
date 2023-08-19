
<script lang="ts">
import logo from '../static/images/logo.svg';

export default {
  data() {
    return {
    title:'О магазине',
    text1:'KameLAb - мультибрендовый интернет-магазин косметики. Мы предлагаем вам большой выбор брендов, среди которых вы обязательно найдете то, что нужно вам.',
    text2:'Мы сотрудничаем с официальными дистрибьюторами, поэтому вы можете быть уверены в качестве и оригинальности представленной продукции на сайте. Вы всегда можете получить бесплатную консультацию по подбору ухода от наших специалистов. Спасибо, что выбираете нас!',
   logo:logo,
    };
  },
  methods:{
    navigateTo(link:any){
        this.$router.push(link)
    }
  }
};
</script>

<template>
  <div>
    <p class="title">{{ title }}</p>
    <img :src="logo" alt="logo"/>
    <div class="text_wrapper">
    <p class="about">{{ text1 }}</p>
    <p class="about">{{ text2 }}</p>
</div>
</div>
</template>