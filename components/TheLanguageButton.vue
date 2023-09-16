<script>

export default {
//   beforeMount(){
// this.language='ru'
//   },
  data(){
    return{
    language:this.$i18n.locale 
    }
  },
  methods: {
    changeLanguage(locale) {
      this.$i18n.locale = locale;
      this.language = locale;
    },
  },
};
</script>

<template>
    <div>
      <button class="lang_button" v-if="language === 'en'" @click="changeLanguage('ru')">RU</button>
      <button class="lang_button" v-if="language === 'ru'" @click="changeLanguage('en')">EN</button>
      <!-- <button  @click="changeLanguage('ru')">RU</button>
      <button  @click="changeLanguage('en')">EN</button> -->
    </div>
  </template>
  
<style>
.lang_button{
  font-size: 14px;
  padding: 10px 35px;
  text-align: center;
  background-color: #efe1e1;
  color: white;
  z-index: 1000;
}
.dark-mode .lang_button {
  background-color: rgb(6, 89, 89);
    color: #ffffff;
    font-size: 14px;
  padding: 10px 35px;
}
.dark-mode .lang_button:hover,
.dark-mode .lang_button:active{
  background-color: rgb(13, 121, 121);
    color: #ffffff;
    font-size: 14px;
    padding: 10px 35px;
}
.lang_button:active, .lang_button:hover {
  background-color: #b49696;
}
</style>