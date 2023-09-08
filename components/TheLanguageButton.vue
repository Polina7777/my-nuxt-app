<script>
export default {
  beforeMount(){
this.language='ru'
  },
  data(){
    return{
    language:''
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
      <button v-if="language === 'en'" @click="changeLanguage('ru')">RU</button>
      <button v-if="language === 'ru'" @click="changeLanguage('en')">EN</button>
    </div>
  </template>
  
<style>
button{
  background-color: #efe1e1;
  color: white;
  padding-right: 60px;
  z-index: 9999;
}
button:active {
  background-color: #b49696;
}
</style>