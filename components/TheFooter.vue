<script lang="ts">
import logo from "../static/images/logo-header.svg";
import phone from "../static/images/phone.svg";
import whatsapp from "../static/images/whatsapp.svg";
import vk from "../static/images/vk.svg";
import plus from "../static/images/plus.svg";
export default {
  data() {
    return {
      plus: plus,
      logo: logo,
      phone: phone,
      whatsapp: whatsapp,
      vk: vk,
      phoneNumber: "+7 (999) 131-32-49",
      navScheme1: [
        {
          title: "Доставка и оплата",
          navigate: "/",
        },
        {
          title: "Вопрос-ответ",
          navigate: "/",
        },
        {
          title: "Контакты",
          navigate: "/",
        },
      ],

      navScheme2: [
        {
          title: "Каталог",
          navigate: "/",
          image: plus,
        },
        {
          title: "Новинки",
          navigate: "/",
          image: null,
        },
        {
          title: "Новинки",
          navigate: "/",
          image: null,
        },
        {
          title: "Подарочные сертификаты",
          navigate: "/",
          image: null,
        },
      ],
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
  <footer>
    <ul>
      <li v-for="(item, index) in navScheme2" :key="index">
        <NuxtLink :to="item.navigate">{{ item.title }} </NuxtLink>
      </li>
    </ul>
    <ul>
      <li v-for="(item, index) in navScheme1" :key="index">
        <nuxt-link :to="item.navigate">{{ item.title }}</nuxt-link>
      </li>
    </ul>
    <div class="contacts_wrapper">
      <p>{{ phoneNumber }}</p>
      <img :src="whatsapp" alt="whatsapp" />
      <img :src="vk" alt="vk" />
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: #efe1e1;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
ul,
.contacts_wrapper {
  display: flex;
  flex-direction: column;
}
</style>
