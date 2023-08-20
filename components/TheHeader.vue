<script lang="ts">
import logo from "../static/images/logo-header.svg";
import search from "../static/images/search.svg";
import basket from "../static/images/basket.svg";
import phone from "../static/images/phone.svg";
import whatsapp from "../static/images/whatsapp.svg";
import vk from "../static/images/vk.svg";
import plus from "../static/images/plus.svg";

export default {
  data() {
    return {
      plus: plus,
      logo: logo,
      search: search,
      basket: basket,
      phone: phone,
      whatsapp: whatsapp,
      vk: vk,
      phoneNumber: "+7 (999) 131-32-49",
      router:useRoute(),
      navScheme1: [
        {
          title: "Доставка и оплата",
          navigate: "/paymethods",
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
          title: "Распродажи",
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
      console.log(link);
      this.$router.push(link);
    },
  },
};
</script>

<template>
  <header>
    <ul>
      <li v-for="(item, index) in navScheme1" :key="index">
        <nuxt-link :to="item.navigate">{{ item.title }}</nuxt-link>
      </li>
    </ul>
    <div class="wrapper">
      <img class="logo-header" :src="logo" alt="header-logo" />
      <div class="input_wrapper">
        <input class="search_input" type="search" placeholder="Поиск товара" />
        <img :src="search" alt="search" />
        <nuxt-link to="basket">
          <img :src="basket" alt="basket" @click="navigateTo('/basket')" />
        </nuxt-link>
      </div>
      <div class="contacts_wrapper">
        <img :src="phone" alt="phone" />
        <p>{{ phoneNumber }}</p>
        <img :src="whatsapp" alt="whatsapp" />
        <img :src="vk" alt="vk" />
      </div>
    </div>
    <ul>
      <li
        v-for="(item, index) in navScheme2"
        :key="index"
        :class="item.image ? 'plus_button' : null"
      >
        <button
          :class="item.title === 'Каталог' ? 'popup_button' : 'button '"
          @click="navigateTo(item.navigate)"
        >
          {{ item.title }}
        </button>
        <img
          class="plus"
          v-if="item.image"
          :src="item.image"
          alt="item-image"
        />
      </li>
    </ul>
  </header>
</template>

<style>
* {
  box-sizing: border-box;
  font-size: 17px;
}
p {
  font-size: 17px;
}
header {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
}
.wrapper,
.contacts_wrapper,
.input_wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.wrapper {
  justify-content: space-between;
}
.logo-header {
  width: 50%;
  height: 83px;
}
img {
  width: 21px;
  height: 21px;
}
.input_wrapper {
  width: 50%;
}
.search_input {
  background: var(--color-general);
  padding: 20px;
  width: 80%;
}
ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style: none;
  text-decoration: none;
  gap: 20px;
  align-items: center;
  padding: 0;
}
a {
  text-decoration: none;
  color: var(--text-color);
}
button,
.popup_button {
  padding: 15px 40px;
  font-size: 17px;
  border-radius: 20px;
  border: none;
}
.button {
  background-color: white;
}
.popup_button {
  background-color: #efe1e1;
  color: white;
  padding-right: 60px;
}
button:active,
.popup_button {
  background-color: #b49696;
}
.plus_button {
  position: relative;
}
.plus {
  width: 20px;
  height: 20px;
  position: absolute;
  left: 115px;
  top: 15px;
}
.show_more {
  font-size: 14px;
}
</style>
