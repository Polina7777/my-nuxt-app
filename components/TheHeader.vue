<script lang="ts">
import logo from "../static/images/logo-header.svg";
import search from "../static/images/search.svg";
import basket from "../static/images/basket.svg";
import phone from "../static/images/phone.svg";
import whatsapp from "../static/images/whatsapp.svg";
import vk from "../static/images/vk.svg";
import plus from "../static/images/plus.svg";
import like from "../static/images/like.svg";
import burger from "../static/images/burger.svg";
import searchDark from "../static/images/search-dark.svg";
import vkDark from "../static/images/vk-dark.svg";
import viberDark from "../static/images/viber.svg";
import basketDark from "../static/images/basket-dark.svg";
import phoneDark from "../static/images/phone-dark.svg";
import { data } from "../static/data";
import { IClickPopUpValue } from "static/interfaces";
import ThePopUpMenu from "@/components/ThePopUpMenu.vue";
import TheLanguageButton from "@/components/TheLanguageButton.vue";
import TheThemeButton from "@/components/TheThemeButton.vue";
import TheColorMode from "@/components/TheColorMode.vue";
import TheChatModal from "@/components/TheChatModal.vue";
import { userApi } from "../api-requests/user-api";
import { favoritesApi } from "../api-requests/favorites-api";
import { basketsApi } from "../api-requests/basket-api";
import { giftcardApi } from "../api-requests/giftcard-api";
import { ordersApi } from "../api-requests/orders-api";
import { reviewApi } from "../api-requests/reviews-api";

export default {
  props: {
    value: String,
    popUpValue: Object,
  },
  emits: ["input", "click"],
  components: {
    ThePopUpMenu,
    TheLanguageButton,
    TheThemeButton,
    TheColorMode,
    TheChatModal,
  },
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
          title: this.$t("navScheme2Title1"),
          navigate: "/",
          image: plus,
        },
        {
          title: this.$t("navScheme2Title2"),
          navigate: "/new",
          image: null,
        },
        {
          title: this.$t("navScheme2Title3"),
          navigate: "/sale",
          image: null,
        },
        {
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
updated() {
  this.authListener(); 
},
  onMounted() {
    this.authListener();
  },
  beforeMount() {
    this.authListener();
  },

  data() {
    return {
      popUpList1: data.popUpList1,
      popUpList2: data.popUpList2,
      openAuthModal: false,
      openRegModal: false,
      openAuthRequiredModal: false,
      like: like,
      phoneDark: phoneDark,
      basketDark: basketDark,
      vkDark: vkDark,
      viberDark: viberDark,
      searchDark: searchDark,
      navScheme1: [
        {
          title: this.$t("navScheme1Title1"),
          navigate: "/paymethods",
        },
        {
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
          title: this.$t("navScheme2Title1"),
          navigate: "/",
          image: plus,
        },
        {
          title: this.$t("navScheme2Title2"),
          navigate: "/new",
          image: null,
        },
        {
          title: this.$t("navScheme2Title3"),
          navigate: "/sale",
          image: null,
        },
        {
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
      chatOpen: true,
      userJWT: "",
    };
  },
  methods: {
    navigateTo(link: string) {
      this.$router.push(link);
    },
    basketButtonClick() {
      if (this.isLoggedIn) {
        navigateTo("/basket");
      } else {
        this.openAuthRequiredModal = true;
      }
    },
    authRequiredAuthClick() {
      this.openAuthModal = true;
      this.openAuthRequiredModal = false;
    },
    authRequiredRegClick() {
      this.openRegModal = true;
      this.openAuthRequiredModal = false;
    },
    updateValue(event: any) {
      this.$emit("input", event.target.value);
    },
    updatePopUpValue(data: IClickPopUpValue) {
      this.openPopup = false;
      this.showMobileMenu = false;
      this.internalPopUpValue = data;
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
    openChat() {
      this.chatOpen = !this.chatOpen;
    },
    mobileMenuOpen() {
      this.showMobileMenu = true;
    },
    authListener() {
      const user = localStorage.getItem("jwt");
      if (!user) {
      this.isLoggedIn = false;
      } else {
 this.isLoggedIn = true;
      }
    },

    async login(data: any) {
      try {
        const res = await userApi.loginUser(data.email, data.password);
        if (res.jwt) {
          localStorage.setItem("jwt", res.jwt);
          localStorage.setItem("userData", JSON.stringify(res.user));
          this.openAuthModal = false;
          this.userJWT = res.jwt;
          // router.push('/')
          // user({
          //   jwt:res.jwt,
          //   user:res.user
          // })
        } else {
          if (res.error) {
            alert(res.error.message);
          }
        }
      } catch (error) {
        console.log(error);
        error = true;
      }
    },

    async register(data: any) {
      try {
        const collectionFav = await favoritesApi.createFavoritesCollection();
        const collectionBasket = await basketsApi.createBasketCollection();
        const collectionGiftCard = await giftcardApi.createGiftCardCollection();
        const collectionOrder = await ordersApi.createOrdersCollection();
        const collectionReviews = await reviewApi.createReviewsCollection();
        const res = await userApi.registerUser(
          data.name,
          data.surname,
          data.email,
          data.password,
          collectionFav.id,
          collectionBasket.id,
          collectionGiftCard.id,
          collectionOrder.id,
          collectionReviews.id
        );
        this.openRegModal = false;
        if (res.jwt) {
          localStorage.setItem("jwt", res.jwt);
          localStorage.setItem("userData", JSON.stringify(res.user));
          this.userJWT = res.jwt;
          // this.router.push("/");
          //  this.user({
          //     jwt:res.jwt,
          //     user:res.user
          //   })
        } else if (res.error) {
          alert(res.error.message);
        }
      } catch (err) {
        console.log(err);
      }
    },
    signOut() {
      this.$router.push("/");
      localStorage.removeItem("jwt");
      localStorage.removeItem("userData");
      this.userJWT = "";
      this.authListener();
      // return (this.userData = null);
    },
  },
};
</script>
<template>
  <!-- :key="user" -->
  <header v-if="!mobileVersion" >
    <div class="header_buttons">
      <TheLanguageButton />
      <button class="sign" v-if="!isLoggedIn" @click="openAuthModal = true">
        Sign In
      </button>
      <button class="sign" v-if="!isLoggedIn" @click="openRegModal = true">
        Sign Up
      </button>
      <button class="sign" v-if="isLoggedIn" @click="signOut()">
        Log Out
      </button>
      <nuxt-link>
        <button class="profile" v-if="isLoggedIn" @click="navigateTo('/user')">
          Profile
        </button></nuxt-link
      >
      <!-- <nuxt-link to="favorites"> -->
      <button class="fav_button" @click="navigateTo('/favorites')">
        <!-- <img
          class="like"
          src="https://www.svgrepo.com/show/408364/heart-love-like-favorite.svg"
        /> -->
        <img class="like" :src="like" />
      </button>
      <button class="fav_button" @click="openChat">Chat</button>
      <TheColorMode />
      <!-- </nuxt-link> -->
      <Teleport to="body">
        <TheAuthModal
          :openAuthModal="openAuthModal"
          @close="openAuthModal = false"
          :login="login"
        />
      </Teleport>
      <Teleport to="body">
        <TheRegisterModal
          :openRegModal="openRegModal"
          @close="openRegModal = false"
          :register="register"
        />
      </Teleport>
      <Teleport to="body">
        <TheChatModal :chatOpen="chatOpen" @close="chatOpen = false" />
      </Teleport>
    </div>
    <Teleport to="body">
      <TheAuthRequiredModal
        :openAuthRequiredModal="openAuthRequiredModal"
        @close="openAuthRequiredModal = false"
        :authRequiredAuthClick="authRequiredAuthClick"
        :authRequiredRegClick="authRequiredRegClick"
      />
    </Teleport>
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
        <!-- <img class="search_img" :src="search" alt="search" /> -->
        <img class="search_img" :src="searchDark" alt="search" />
        <!-- <nuxt-link to="basket"> -->
        <!-- <img :src="basket" alt="basket" @click="navigateTo('/basket')" /> -->
        <img
          :src="basketDark"
          alt="basket"
          class="basket-img"
          @click="basketButtonClick"
        />
        <!-- </nuxt-link> -->
      </div>
      <div class="contacts_wrapper">
        <!-- <img :src="phone" alt="phone" /> -->
        <img :src="phoneDark" alt="phone" />
        <p class="phone">{{ phoneNumber }}</p>
        <!-- <img :src="whatsapp" alt="whatsapp" /> -->
        <img :src="viberDark" alt="whatsapp" />
        <!-- <img :src="vk" alt="vk" /> -->
        <img :src="vkDark" alt="vk" />
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
            item.title === 'Каталог' || item.title === 'Catalog'
              ? popUpOpen()
              : navigateTo(item.navigate)
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
    <button class="fav_button" @click="openChat">Open Chat</button>
    <Teleport to="body">
      <TheChatModal :chatOpen="chatOpen" @close="chatOpen = false" />
    </Teleport>
    <Teleport to="body">
      <TheAuthRequiredModal
        :openAuthRequiredModal="openAuthRequiredModal"
        @close="openAuthRequiredModal = false"
        :authRequiredAuthClick="authRequiredAuthClick"
        :authRequiredRegClick="authRequiredRegClick"
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
        <!-- <img class="search_img" :src="search" alt="search" /> -->
        <img class="search_img" :src="searchDark" alt="search" />
        <!-- <nuxt-link to="basket"> -->
        <!-- <img :src="basket" alt="basket" @click="navigateTo('/basket')" /> -->
        <img
          :src="basketDark"
          alt="basket"
          class="basket-img"
          @click="basketButtonClick"
        />
        <!-- </nuxt-link> -->
        <nuxt-link to="favorites">
          <!-- <img
            class="like"
            src="https://www.svgrepo.com/show/408364/heart-love-like-favorite.svg"
          /> -->
          <img class="like" :src="like" />
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
.basket-img {
  width: 31px;
  height: 31px;
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

.sign,
.profile,
.fav_button {
  font-size: 15px;
  padding: 7px 17px;
  background-color: #efe1e1;
  color: white;
  height: 40px;
  align-items: center;
}

.fav_button {
  padding: 7px 33px;
}

.profile {
  padding: 10px 25px;
}
.dark-mode .profile {
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
  border: none;
}
.button {
  background-color: white;
  color: black;
  align-items: center;
}

.popup_button {
  background-color: #efe1e1;
  color: white;
  padding-right: 60px;
  z-index: 9999;
}
button:active,
.sign:active,
.sign:hover {
  background-color: rgb(131, 110, 107);
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

/* DarkMode */

.dark-mode .profile:hover,
.dark-mode .profile:active .dark-mode .fav_button:active,
.dark-mode .fav_button:hover {
  font-size: 15px;
  /* background-color: transparent; */
  background-color: rgb(131, 110, 107);
  border: 1.7px solid #2d2a2a;
  color: rgb(181, 173, 173);
}
.dark-mode .button {
  background-color: transparent;
  border: 1.7px solid #2d2a2a;
  color: rgb(181, 173, 173);
  align-items: center;
}
.dark-mode .button:hover,
.dark-mode .button:active {
  background-color: rgb(131, 110, 107);
  color: rgb(181, 173, 173);
}

.dark-mode input {
  background-color: transparent;
  border: 1px solid rgb(71, 70, 70);
  /* color: rgb(103, 101, 101); */
  color: rgb(181, 173, 173);
}
.dark-mode input::placeholder {
  /* color: rgb(103, 101, 101); */
  color: rgb(181, 173, 173);
}

.dark-mode .sign,
.dark-mode .fav_button,
.dark-mode .profile {
  /* background-color: rgb(6, 89, 89); */
  /* background-color: rgb(168, 138, 134); */
  background-color: transparent;
  border: 1.7px solid #2d2a2a;
  /* color: rgb(98, 98, 98); */
  color: rgb(181, 173, 173);
  font-size: 15px;
  padding: 7px 17px;
  height: 40px;
  align-items: center;
}
.dark-mode .profile {
  padding: 7px 23.7px;
}
.dark-mode .fav_button {
  padding: 7px 33px;
}
.dark-mode .fav_button:hover,
.dark-mode .fav_button:active {
  padding: 7px 33px;
  background-color: rgb(131, 110, 107);
}
.dark-mode .basket-img {
  width: 31px;
  height: 31px;
}
.dark-mode .popup_button {
  background-color: rgb(28, 27, 27);
  border: 1.7px solid #2d2a2a;
  color: rgb(181, 173, 173);
}
.dark-mode a {
  /* color: rgb(103, 101, 101); */
  color: rgb(181, 173, 173);
}
.dark-mode a:hover,
.dark-mode a:active {
  color: rgb(234, 207, 204);
}

.dark-mode button:active,
.dark-mode .sign:active,
.dark-mode .sign:hover,
.dark-mode .profile:active,
.dark-mode .profile:hover .dark-mode .popup_button {
  background-color: rgb(131, 110, 107);
  color: rgb(181, 173, 173);
}
/*DarkMode*/
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
