<script>
import { productsApi } from "../api-requests/products-api";
import { productsEnApi } from "../api-requests/products-api-en";
export default {
  created() {
    this.getNewProducts();
  },
//   beforeUpdate(){
//   this.currentLocale =  this.$i18n.locale
//   console.log(this.currentLocale)
// },
  data() {
    return {
      route: useRoute(),
      productsListNew: [],
      filteredList: [],
      searchString: "",
      popUpFilter: { title: "", filter: "" },
      router: useRoute(),
      filterName: "",
      currentLocale: this.$i18n.locale,
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
    watch: {
      searchString: async function filter() {
        this.getNewProducts(this.searchString);
      },
      popUpFilter: async function filterPopUp() {
        this.filterListByPopUp();
      },
    //   currentLocale: async function(){
    //   console.log(this.currentLocale)
    //   this,getAllNewProducts()
    // },
    },
  },
};
</script>

<template>
  <NuxtLayout name="custom">
    <TheHeader
      :value="searchString"
      :popUpValue="popUpFilter"
      @input="(data) => (searchString = data)"
      @click="(data) => (popUpFilter = data)"
    />
    <div class="list_box">
      <TheList :titleProps="$t('listsTitle2')" :itemList="productsListNew" />
      <!-- <TheList titleProps="Новинки" :itemList="productsListNew" /> -->
    </div>
  </NuxtLayout>
</template>

<style>
.list_box {
  min-height: 67vh;
  margin: auto;
}
</style>
