
<script lang="ts">
import logo from '../static/images/logo-header.svg';
import search from  '../static/images/search.svg';
     import  backet from  '../static/images/backet.svg';
      import phone from  '../static/images/phone.svg';
      import whatsapp from  '../static/images/whatsapp.svg';
      import vk from  '../static/images/vk.svg';
      import plus from  '../static/images/plus.svg';
export default {
  data() {
    return {
      plus: plus,
      logo: logo,
      search: search,
      backet: backet,
      phone: phone,
      whatsapp: whatsapp,
      vk: vk,
      phoneNumber: '+7 (999) 131-32-49',
     navScheme1:[
{
    title:'Доставка и оплата',
    navigate:'/'
},
{
    title:'Вопрос-ответ',
    navigate:'/'
},
{
    title:'Контакты',
    navigate:'/'
}
],

navScheme2:[
{
    title:'Каталог',
    navigate:'/',
    image:plus
},
{
    title:'Новинки',
    navigate:'/',
    image:null
},
{
    title:'Новинки',
    navigate:'/',
    image:null
},
{
    title:'Подарочные сертификаты',
    navigate:'/',
    image:null
}
]
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
  <header>
    <ul v-for="(item,index) in navScheme1" :key="index">
        <nuxt-link :to="item.navigate">{{ item.title }}</nuxt-link>
    </ul>
    <div class="wrapper">
      <img :src="logo" alt="header-logo" />
      <div class="input_wrapper">
        <input type="search" placeholder="Поиск товара" />
        <img :src="search" alt="search" />
        <img :src="backet" alt="backet" />
      </div>
      <div class="contacts_wrapper">
        <img :src="phone" alt="phone" />
        <p>{{ phoneNumber }}</p>
        <img :src="whatsapp" alt="whatsapp" />
        <img :src="vk" alt="vk" />
      </div>
    </div>
    <ul v-for="(item,index) in navScheme2" :key="index">
        <li>
        <button @click="navigateTo(item.navigate)">{{ item.title }}</button>
        <img v-if="item.image" :src="item.image" alt="item-image"/>
        </li>
    </ul>
  </header>
</template>
