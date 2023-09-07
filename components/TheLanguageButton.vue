<script>
export default {
  methods: {
    changeLanguage(locale) {
      this.$i18n.locale = locale;
    },
  },
};
</script>

<template>
    <div>
      <button @click="changeLanguage('ru')">Russian</button>
      <button @click="changeLanguage('en')">English</button>

    </div>
  </template>
  
