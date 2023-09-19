<script>
import logo from "../static/images/logo-header.svg";
import phone from "../static/images/phone.svg";
import whatsapp from "../static/images/whatsapp.svg";
import vk from "../static/images/vk.svg";
import plus from "../static/images/plus.svg";
import { data } from "../static/data";

export default {
  props:{
    currentLoc:String,
  },
  updated() {
  // this.currentLocale = this.$i18n.locale
  // console.log(this.currentLocale)
},
  mounted() {
    const widthDevice = window.innerWidth
    if (widthDevice < 500) {
      this.mobileVersion = true
    }
    this.navScheme1= [
    {
      title: this.$t('navScheme1Title1'),
      navigate: "/paymethods",
    },
    {
      title: this.$t('navScheme1Title2'),
      navigate: "/questions",
    },
    {
      title: this.$t('navScheme1Title3'),
      navigate: "/contacts",
    },
  ],
 this.navScheme2=[
    {
      title: this.$t('navScheme2Title1'),
      navigate: "/",
      image: plus,
    },
    {
      title: this.$t('navScheme2Title2'),
      navigate: "/new",
      image: null,
    },
    {
      title: this.$t('navScheme2Title3'),
      navigate: "/sale",
      image: null,
    },
    {
      title: this.$t('navScheme2Title4'),
      navigate: "/giftcard",
      image: null,
    },
  ]   
    this.currentLocale = this.$i18n.locale
    console.log(this.currentLocale)
  },
  beforeUpdate() {
    this.navScheme1= [
    {
      title: this.$t('navScheme1Title1'),
      navigate: "/paymethods",
    },
    {
      title: this.$t('navScheme1Title2'),
      navigate: "/questions",
    },
    {
      title: this.$t('navScheme1Title3'),
      navigate: "/contacts",
    },
  ],
 this.navScheme2=[
    {
      title: this.$t('navScheme2Title1'),
      navigate: "/",
      image: plus,
    },
    {
      title: this.$t('navScheme2Title2'),
      navigate: "/new",
      image: null,
    },
    {
      title: this.$t('navScheme2Title3'),
      navigate: "/sale",
      image: null,
    },
    {
      title: this.$t('navScheme2Title4'),
      navigate: "/giftcard",
      image: null,
    },
  ]   
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
      // currentLocale:this.$i18n.locale,
      // navScheme1: data.navScheme1,
      // navScheme2: data.navScheme2,
      navScheme1: [
    {
      title: this.$t('navScheme1Title1'),
      navigate: "/paymethods",
    },
    {
      title: this.$t('navScheme1Title2'),
      navigate: "/questions",
    },
    {
      title: this.$t('navScheme1Title3'),
      navigate: "/contacts",
    },
  ],
 navScheme2:[
    {
      title: this.$t('navScheme2Title1'),
      navigate: "/",
      image: plus,
    },
    {
      title: this.$t('navScheme2Title2'),
      navigate: "/new",
      image: null,
    },
    {
      title: this.$t('navScheme2Title3'),
      navigate: "/sale",
      image: null,
    },
    {
      title: this.$t('navScheme2Title4'),
      navigate: "/giftcard",
      image: null,
    },
  ],
    };
  },
  // methods: {
  //   navigateTo(link: any) {
  //     this.$router.push(link);
  //   }
  // },
//   watch: {
//     currentLocale: async function(){
//       console.log(this.currentLocale)
//      this.navScheme1=[
//     {
//       title: this.$t('navScheme1Title1'),
//       navigate: "/paymethods",
//     },
//     {
//       title: this.$t('navScheme1Title2'),
//       navigate: "/questions",
//     },
//     {
//       title: this.$t('navScheme1Title3'),
//       navigate: "/contacts",
//     },
//   ]
//  this.navScheme2=[
//     {
//       title: this.$t('navScheme2Title1'),
//       navigate: "/",
//       image: plus,
//     },
//     {
//       title: this.$t('navScheme2Title2'),
//       navigate: "/new",
//       image: null,
//     },
//     {
//       title: this.$t('navScheme2Title3'),
//       navigate: "/sale",
//       image: null,
//     },
//     {
//       title: this.$t('navScheme2Title4'),
//       navigate: "/giftcard",
//       image: null,
//     },
//   ]
//     }
//   },
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
/* DarkMode*/
.dark-mode footer{
  /* background-color: rgb(57, 85, 85);
 border: 2px solid rgb(42, 69, 69); */
 /* background-color: rgb(131, 110, 107); */
 background-color:  transparent;
}
.dark-mode ul,
.dark-mode .contacts_wrapper {
  display: flex;
  flex-direction: column;
  color: rgb(103, 101, 101);
  /* color: rgb(218, 197, 189); */
}
/*DarkMode*/
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
