<script lang="ts">
import logo from "../static/images/logo-header.svg";
import search from "../static/images/search.svg";
import basket from "../static/images/basket.svg";
import phone from "../static/images/phone.svg";
import whatsapp from "../static/images/whatsapp.svg";
import vk from "../static/images/vk.svg";
import plus from "../static/images/plus.svg";
import { data } from "../static/data";
export default {
  props: {
    showMobileMenu: Boolean,
    isLoggedIn:Boolean,
    updatePopUpValue: Function,
    signOut:Function,
  },
  data() {
    return {
      popUpList1: data.popUpList1,
      popUpList2: data.popUpList2,
      popUpList: [...data.popUpList1, ...data.popUpList2],
      navScheme1: data.navScheme1,
      navScheme2: data.navScheme2,
      plus: plus,
      logo: logo,
      search: search,
      basket: basket,
      phone: phone,
      whatsapp: whatsapp,
      vk: vk,
      phoneNumber: "+7 (999) 131-32-49",
      router: useRoute(),
      openPopup: false,
      openAuthModal:false,
      openRegModal:false
    };
  },
  methods: {
    popUpOpen() {
      this.openPopup = !this.openPopup;
    },
    closeModal() {
      this.openPopup = false;
    },
  },
};
</script>
<template>
  <Transition name="modal">
    <div v-if="showMobileMenu" class="modal-mask">
      <div class="modal-container">
        <div class="modal-header">
          <button class="modal-default-button" @click="$emit('close')">
            X
          </button>
          <slot name="header">
            <img class="logo" :src="logo" alt="logo" @click="navigateTo('/')" />
            <div class="header_buttons">
    <!-- <TheLanguageButton/> -->
    <button class="sign" v-show="!isLoggedIn" @click="openAuthModal = true">Sign In</button>
    <button class="sign" v-show="!isLoggedIn" @click="openRegModal = true">Sign Up</button>
    <button class="sign" v-show="isLoggedIn" @click="signOut">Sign Out</button>
    <nuxt-link>
        <button class="sign" v-show="isLoggedIn" @click="navigateTo('/user')">
          Profile
        </button></nuxt-link>
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
          </slot>
        </div>
        <div class="modal-body">
          <slot name="body">
            <ul class="nav">
              <li
                v-for="(item, index) in navScheme2"
                :key="index"
                :class="item.image ? 'plus_button' : null"
              >
                <button
                  :class="item.title === 'Каталог' ? 'popup_button' : 'button '"
                  @click="
                    item.title === 'Каталог'
                      ? popUpOpen()
                      : navigateTo(item.navigate)
                  "
                >
                  {{ item.title }}
                </button>
                <div
                  v-if="openPopup && item.title === 'Каталог'"
                  class="popUp_box"
                >
                  <ul class="popup_list" id="popup_list">
                    <li v-for="(item, index) in popUpList" :key="index">
                      <p
                        class="popup_item"
                        @click="
                          updatePopUpValue ? updatePopUpValue(item) : null
                        "
                      >
                        {{ item.title }}
                      </p>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <ul>
              <li v-for="(item, index) in navScheme1" :key="index">
                <nuxt-link :to="item.navigate">{{ item.title }}</nuxt-link>
              </li>
            </ul>

            <div class="contacts_wrapper">
              <img :src="phone" alt="phone" />
              <p>{{ phoneNumber }}</p>
              <img :src="whatsapp" alt="whatsapp" />
              <img :src="vk" alt="vk" />
            </div>
          </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}
#show-modal {
  padding: 5px 10px;
  height: 35px;
  border: 2px solid#b49696;
  background-color: var(--background-general);
  border-radius: 10px;
  color: #b49696;
  font-size: 1rem;
  margin: 0 5px;
  z-index: 1000;
}
.modal-container {
  min-width: 210px;
  padding: 10px;
  background-color: #d7b5b5;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  border: 2px solid #b49696;
  border-radius: 10px;
  color: black;
  overflow: scroll;
}

.modal-default-button {
  padding: 5px 8px;
  border: 2px solid #d7b5b5;
  background-color: #d7b5b5;
  border-radius: 10px;
  color: rgb(240, 240, 245);
  font-size: 15px;
}
.logo {
  width: 270px;
  height: 100px;
  padding-left: 50px;
}

a {
  color: white;
  font-size: 21px;
}
.modal-body {
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
}

.modal-default-button {
  float: right;
}

.modal-enter-from {
  opacity: 0;
}
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

ul {
  display: flex;
  flex-direction: column;
  align-items: self-start;
  font-size: 21px;
  gap: 10px;
  color: black;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a:first-of-type {
  border: 0;
}
button {
  background-color: transparent;
  padding: 7px 0;
  font-size: 21px;
  color: white;
}
button:hover {
  background-color: transparent;
  color: #efe1e1;
}
.popup_list {
  background-color: transparent;
  align-items: flex-start;
  justify-content: start;
  width: 260px;
  padding: 0;
  padding-top: 20px;
  gap: 10px;
}
.popup_item {
  font-size: 17px;
  padding: 3px;
  color: white;
}
.popup_item:hover {
  color: #efe1e1;
}
.sign{
  padding: 21px;
}
</style>
