<script lang="ts">
import { productsApi } from "../api-requests/products-api";
import { productsEnApi } from "../api-requests/products-api-en";

export default {
emits: ["input", "click"],
created() {
  // this.currentLocale =  this.$i18n.locale
     this.getNewProducts();
  },
//     beforeUpdate(){
//   this.currentLocale =  this.$i18n.locale
// },
// beforeMount() {
//   // this.currentLocale =  this.$i18n.locale
//     this.getNewProducts()
// },
computed:{
  currentLocal(){
return  this.$i18n.locale;
  }
},
  data() {
    return {
      route: useRoute(),
      productsListNew: [],
      filteredList: [],
      searchString: "",
      popUpFilter: { title: "", filter: "" },
      router: useRoute(),
      filterName: "",
      // currentLocale: this.$i18n.locale,
      titleProps:this.$t('listsTitle2')
    };
  },
  methods: {
    async getNewProducts() {
      if (this.$i18n.locale === "ru") {
        const newProducts = await productsApi.getAllNewProducts(
          this.searchString
        );
        this.productsListNew = newProducts;
      } else {
        console.log(this.$i18n.locale);
        const newProducts = await productsEnApi.getAllNewProductsEn(
          this.searchString
        );
        this.productsListNew = newProducts;
      }
    },
 
  },
  watch: {
      searchString: async function filter() {
        this.getNewProducts();
      },
      popUpFilter: async function filterPopUp() {
        this.filterListByPopUp();
      },
    //   currentLocale: async function(){
    //   this.getAllNewProducts();
    // },
    },
};
</script>

<template>
  <div :key="currentLocal">
  <NuxtLayout name="custom">
    <TheHeader
      :value="searchString"
      :popUpValue="popUpFilter"
      @input="(data) => (searchString = data)"
      @click="(data) => (popUpFilter = data)"
    />
    <div class="list_box">
      <TheList :titleProps="titleProps" :itemList="productsListNew" />
      <!-- <TheList titleProps="Новинки" :itemList="productsListNew" /> -->
    </div>
  </NuxtLayout>
</div>
</template>

<style>
.list_box {
  min-height: 67vh;
  margin: auto;
}
</style>
