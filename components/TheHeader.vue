<script lang="ts">
import logo from "../static/images/logo-header.svg";
import search from "../static/images/search.svg";
import basket from "../static/images/basket.svg";
import phone from "../static/images/phone.svg";
import whatsapp from "../static/images/whatsapp.svg";
import vk from "../static/images/vk.svg";
import plus from "../static/images/plus.svg";
import burger from "../static/images/burger.svg";
import { data } from "../static/data";
import { IClickPopUpValue } from "static/interfaces";
import ThePopUpMenu from "@/components/ThePopUpMenu.vue";
import TheLanguageButton from "@/components/TheLanguageButton.vue";
export default {
  props: {
    value: String,
    popUpValue: Object,
  },
  emits: ["input", "click"],
  components: { ThePopUpMenu, TheLanguageButton },
  beforeUpdate() {
    (this.navScheme1 = [
      {
        // title: "Доставка и оплата",
        title: this.$t("navScheme1Title1"),
        navigate: "/paymethods",
      },
      {
        // title: "Вопрос-ответ",
        title: this.$t("navScheme1Title2"),
        navigate: "/questions",
      },
      {
        // title: "Контакты",
        title: this.$t("navScheme1Title3"),
        navigate: "/contacts",
      },
    ]),
      (this.navScheme2 = [
        {
          // title: "Каталог",
          title: this.$t("navScheme2Title1"),
          navigate: "/",
          image: plus,
        },
        {
          // title: "Новинки",
          title: this.$t("navScheme2Title2"),
          navigate: "/new",
          image: null,
        },
        {
          // title: "Распродажи",
          title: this.$t("navScheme2Title3"),
          navigate: "/sale",
          image: null,
        },
        {
          // title: "Подарочные сертификаты",
          title: this.$t("navScheme2Title4"),
          navigate: "/giftcard",
          image: null,
        },
      ]);
  },
  mounted() {
    this.authListener();
    const widthDevice = window.innerWidth;
    if (widthDevice < 650) {
      this.mobileVersion = true;
    }
  },
  data() {
    return {
      popUpList1: data.popUpList1,
      popUpList2: data.popUpList2,
      openAuthModal: false,
      openRegModal: false,
      // navScheme1: data.navScheme1,
      // navScheme2: data.navScheme2,
      navScheme1: [
        {
          // title: "Доставка и оплата",
          title: this.$t("navScheme1Title1"),
          navigate: "/paymethods",
        },
        {
          // title: "Вопрос-ответ",
          title: this.$t("navScheme1Title2"),
          navigate: "/questions",
        },
        {
          // title: "Контакты",
          title: this.$t("navScheme1Title3"),
          navigate: "/contacts",
        },
      ],
      navScheme2: [
        {
          // title: "Каталог",
          title: this.$t("navScheme2Title1"),
          navigate: "/",
          image: plus,
        },
        {
          // title: "Новинки",
          title: this.$t("navScheme2Title2"),
          navigate: "/new",
          image: null,
        },
        {
          // title: "Распродажи",
          title: this.$t("navScheme2Title3"),
          navigate: "/sale",
          image: null,
        },
        {
          // title: "Подарочные сертификаты",
          title: this.$t("navScheme2Title4"),
          navigate: "/giftcard",
          image: null,
        },
      ],
      mobileVersion: false,
      plus: plus,
      logo: logo,
      search: search,
      basket: basket,
      phone: phone,
      whatsapp: whatsapp,
      vk: vk,
      burger: burger,
      phoneNumber: "+7 (999) 131-32-49",
      router: useRoute(),
      openPopup: false,
      showMobileMenu: false,
      internalValue: this.value,
      internalPopUpValue: this.popUpValue,
      clickPopUpValue: { title: "", open: false },
      isLoggedIn: false,
    };
  },
  methods: {
    navigateTo(link: string) {
      this.$router.push(link);
    },
    updateValue(event: any) {
      this.$emit("input", event.target.value);
    },
    updatePopUpValue(data: IClickPopUpValue) {
      this.openPopup = false;
      this.showMobileMenu = false;
      this.internalPopUpValue = data;
      console.log(this.internalPopUpValue);
      this.$emit("click", this.internalPopUpValue);
    },
    updateClickPopUpValue(data: string) {
      if (!this.clickPopUpValue.open) {
        this.clickPopUpValue.title = data;
        this.clickPopUpValue.open = true;
      } else {
        this.clickPopUpValue.title = "";
        this.clickPopUpValue.open = false;
      }
    },
    popUpOpen() {
      navigateTo("/");
      this.openPopup = !this.openPopup;
    },
    mobileMenuOpen() {
      this.showMobileMenu = true;
    },
    authListener() {
      const user = localStorage.getItem("jwt");
      console.log(user);
      if (!user) {
        return (this.isLoggedIn = false);
      } else {
        return (this.isLoggedIn = true);
      }
    },
    signOut() {
      this.$router.push("/");
      localStorage.removeItem("jwt");
      localStorage.removeItem("userData");
      return (this.userData = null);
    },
  },
};
</script>
<template>
  <header v-if="!mobileVersion">
    <div class="header_buttons">
      <TheLanguageButton />
      <button class="sign" v-show="!isLoggedIn" @click="openAuthModal = true">
        Sign In
      </button>
      <button class="sign" v-show="!isLoggedIn" @click="openRegModal = true">
        Sign Up
      </button>
      <button class="sign" v-show="isLoggedIn" @click="signOut()">
        Sign Out
      </button>
      <nuxt-link>
        <button class="profile" v-show="isLoggedIn" @click="navigateTo('/user')">
          Profile
        </button></nuxt-link>
        <!-- <nuxt-link to="favorites"> -->
          <button class="fav_button" @click="navigateTo('/favorites')">
        <img class="like"  src="https://www.svgrepo.com/show/408364/heart-love-like-favorite.svg"/>
      </button>
        <!-- </nuxt-link> -->
      <Teleport to="body">
        <TheAuthModal
          :openAuthModal="openAuthModal"
          @close="openAuthModal = false"
        />
      </Teleport>
      <Teleport to="body">
        <TheRegisterModal
          :openRegModal="openRegModal"
          @close="openRegModal = false"
        />
      </Teleport>
    </div>
    <ul class="nav">
      <li v-for="(item, index) in navScheme1" :key="index">
        <nuxt-link :to="item.navigate">{{ item.title }}</nuxt-link>
      </li>
    </ul>
    <div class="header-wrapper">
      <img
        class="logo-header"
        :src="logo"
        alt="header-logo"
        @click="navigateTo('/')"
      />
      <div class="input_wrapper">
        <input
          class="search_input"
          :placeholder="$t('searchInputPlaceholder')"
          :value="value"
          @input="updateValue"
        />
        <img class="search_img" :src="search" alt="search" />
        <nuxt-link to="basket">
          <img :src="basket" alt="basket" @click="navigateTo('/basket')" />
        </nuxt-link>
      
      </div>
      <div class="contacts_wrapper">
        <img :src="phone" alt="phone" />
        <p class="phone">{{ phoneNumber }}</p>
        <img :src="whatsapp" alt="whatsapp" />
        <img :src="vk" alt="vk" />
      </div>
    </div>
    <ul class="navigation">
      <li
        v-for="(item, index) in navScheme2"
        :key="index"
        :class="item.image ? 'plus_button' : null"
      >
        <button
          :class="
            item.title === 'Каталог' || item.title === 'Catalog'
              ? 'popup_button'
              : 'button'
          "
          @click="
            item.title === 'Каталог' ? popUpOpen() : navigateTo(item.navigate)
          "
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
      <ThePopUpMenu
        :openPopup="openPopup"
        @close="openPopup = false"
        :updatePopUpValue="updatePopUpValue"
      />
    </Teleport>
  </header>
  <header v-if="mobileVersion">
    <img
      class="burger"
      :src="burger"
      alt="burger"
      @click="mobileMenuOpen"
      :updatePopUpValue="updatePopUpValue"
    />
    <TheLanguageButton />
    <Teleport to="body">
      <TheMobileMenu
        :showMobileMenu="showMobileMenu"
        :updatePopUpValue="updatePopUpValue"
        :isLoggedIn="isLoggedIn"
        :signOut="signOut"
        @close="showMobileMenu = false"
      />
    </Teleport>
    <img
      class="logo-header"
      :src="logo"
      alt="header-logo"
      @click="navigateTo('/')"
    />
    <div class="wrapper header-wrapper">
      <div class="input_wrapper">
        <input class="search_input" placeholder="Поиск товара" :value="value" />
        <img class="search_img" :src="search" alt="search" />
        <nuxt-link to="basket">
          <img :src="basket" alt="basket" @click="navigateTo('/basket')" />
        </nuxt-link>
        <nuxt-link to="favorites">
        <img class="like"  src="https://www.svgrepo.com/show/408364/heart-love-like-favorite.svg"/>
        </nuxt-link>
      </div>
    </div>
  </header>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
header {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  position: relative;
}
p {
  font-size: 17px;
  margin: 0;
}
.header-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.burger {
  width: 50px;
  height: 50px;
  position: absolute;
  z-index: 210px;
  left: 15px;
  top: 9px;
}
.wrapper,
.contacts_wrapper,
.input_wrapper,
.popup_wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.popup_wrapper {
  position: absolute;
  left: 11%;
  top: 28%;
  gap: 0;
  z-index: 100;
  border: 1px solid rgb(191, 188, 188);
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
.close {
  padding: 5px 8px;
  position: absolute;
  left: 40.7%;
  top: 28%;
  background: transparent;
  color: gray;
  z-index: 100;
}
.header_buttons {
  display: flex;
  flex-direction: row;
  align-self: end;
  gap: 10px;
}

.phone {
  min-width: 140px;
}
.search_img {
  position: absolute;
  left: 79%;
}
.popup_item {
  font-size: 15px;
  margin: 0;
}
.wrapper {
  justify-content: space-between;
}
.logo-header {
  width: 30%;
  min-width: 300px;
  height: 83px;
  padding: 0 20px;
}
img {
  width: 21px;
  height: 21px;
}
.sign,.profile, .fav_button{
  font-size: 15px;
  padding: 7px 17px;
  background-color: #efe1e1;
  color: white;
}
.fav_button{
  padding: 7px 33px;
}

.profile{
  padding: 10px 25px;
}
.input_wrapper {
  width: 40%;
  min-width: 300px;
  position: relative;
}
.search_input,
input {
  background: #efe1e1;
  padding: 10px;
  border-radius: 10px;
  border-color: transparent;
  width: 90%;
  min-width: 300px;
}

ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
  text-decoration: none;
  gap: 20px;
  align-items: center;
  padding: 0 10px;
}
li {
  text-align: center;
}
li:hover,
a:hover {
  color: #b49696;
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
  /* z-index: 100000; */
  border: none;
}
.button {
  background-color: white;
  color: black;
}
.popup_button {
  background-color: #efe1e1;
  color: white;
  padding-right: 60px;
  z-index: 9999;
}
button:active,
.sign:active,
.sign:hover,
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
.title {
  font-size: 27px;
}
@media (max-width: 1100px) {
  .header-wrapper {
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
  .search_img {
    left: 83%;
  }
}
@media (max-width: 890px) {
  .navigation {
    flex-wrap: nowrap;
    justify-content: flex-start;
    gap: 0;
    overflow: scroll;
    width: 90%;
  }
}
@media (max-width: 1728px) {
  .search_img {
    left: 86%;
  }
  .popup_wrapper {
    left: 21%;
    top: 28%;
  }
}
@media (max-width: 1450px) {
  .search_img {
    left: 84%;
  }
  .popup_wrapper {
    left: 19%;
    top: 28%;
  }
}
@media (max-width: 1350px) {
  .popup_wrapper {
    left: 17%;
    top: 28%;
  }
}
@media (max-width: 1150px) {
  .search_img {
    left: 84%;
  }
  .popup_wrapper {
    left: 14%;
    top: 28%;
  }
}
@media (max-width: 955px) {
  .search_img {
    left: 82%;
  }
  .popup_wrapper {
    left: 7%;
    top: 31%;
  }
}
@media (max-width: 710px) {
  .search_img {
    left: 79%;
  }
}
@media (max-width: 610px) {
  p,
  a {
    font-size: 14px;
  }
  .title {
    font-size: 21px;
  }
  .navigation {
    flex-wrap: nowrap;
    justify-content: flex-start;
    gap: 0;
    overflow: scroll;
    width: 90%;
  }
  .input_wrapper {
    width: 90%;
    position: relative;
  }
  .search_img {
    display: none;
  }
  .logo-header {
    width: 41%;
    min-width: 230px;
    height: 83px;
    padding: 0 20px;
  }
}
@media (max-width: 350px) {
  .search_input {
    min-width: 250px;
  }
  .burger {
    width: 67px;
    height: 67px;
    padding-right: 41px;
  }
}
</style>
