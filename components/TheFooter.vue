<script lang="ts">
import logo from "../static/images/logo-header.svg";
import phone from "../static/images/phone.svg";
import whatsapp from "../static/images/whatsapp.svg";
import vk from "../static/images/vk.svg";
import plus from "../static/images/plus.svg";
import { data } from "../static/data";
export default {
  mounted() {
    const widthDevice = window.innerWidth
    if (widthDevice < 500) {
      this.mobileVersion = true
    }
  },
  data() {
    return {
      plus: plus,
      logo: logo,
      phone: phone,
      whatsapp: whatsapp,
      vk: vk,
      phoneNumber: "+7 (999) 131-32-49",
      mobileVersion:false,
      navScheme1: data.navScheme1,
      navScheme2: data.navScheme2,
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
  <footer v-if="!mobileVersion">
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
  <footer v-if="mobileVersion">
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
@media (max-width:700px) {
  ul{
    display: flex;
    flex-direction: row;
  }
  footer {
  background-color: #efe1e1;
  display:block;
  flex-direction: row;
  padding: 10px;
}

.contacts_wrapper {
  flex-direction: row;
}
  
}
</style>
