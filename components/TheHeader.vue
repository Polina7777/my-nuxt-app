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
      openPopup:false,
      popUpList1:['Уход за лицом','Волосы','Макияж','Тело','Наборы',"Миниатюры"],
      popUpList2:['Демакияж','Очищение','Отшелушивание','Тонизирование','Сыворотки',"Кремы",'Маски','Тканевые маски','Для кожи вокруг глаз','Патчи','Для губ','Точечные средства','SPF-защита от солнца','Гаджеты и аксессуары для лица'],
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
          @click="item.title === 'Каталог' ? openPopup = true : navigateTo(item.navigate)"
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

    <Teleport to="body">
      <div v-if="openPopup" class="modal">
      <div class="popup_wrapper">
        <ul class="popup_list">
      <li v-for="(item, index) in popUpList1" :key="index">
        <p class="popup_item">{{item}}</p>
      </li>
    </ul>
    <ul class="popup_list">
      <li v-for="(item, index) in popUpList2" :key="index">
        <p class="popup_item">{{item}}</p>
      </li>
    </ul>
      </div>
        <button class="close" @click="openPopup= false">
          x
        </button>
      </div>
    </Teleport>

  </header>
</template>

<style>
* {
  box-sizing: border-box;
  font-size: 17px;
}
p {
  font-size: 17px;
  margin: 0;
}
header {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
}
.wrapper,
.contacts_wrapper,
.input_wrapper,
.popup_wrapper{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.popup_item{
  font-size: 10px;
  margin: 0;
}
.popup_list{
  font-size: 10px;
  margin: 0;
  height: 400px;
}
.popup_wrapper{
  gap: 0;
  height: 400px;
  width: 300px;
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
.popup_list{
  display: flex;
  flex-direction: column;
  background: #efe1e1;
  text-align: center;
  width: 30%;
  height: 300px;
  font-size: 10px;
}
.close{
padding: 5px;
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
