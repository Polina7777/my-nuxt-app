<script>

export default {
//   beforeMount(){
// this.language='ru'
//   },
  data(){
    return{
    theme:'light'
    }
  },
  methods: {
    changeTheme(themeChange) {
        this.theme = themeChange
        localStorage.setItem('theme', themeChange)
    },
  },
};
</script>

<template>
    <div>
      <button class="lang_button" v-if="theme === 'dark'" @click="changeTheme('light')">light</button>
      <button class="lang_button" v-if="theme === 'light'" @click="changeTheme('dark')">dark</button>
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
button{
  white-space: nowrap;
}

.lang_button:active, .lang_button:hover {
  background-color: #b49696;
}
</style>