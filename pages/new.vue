<script lang="ts">
import { productsApi } from "../api-requests/products-api";
import { productsEnApi } from "../api-requests/products-api-en";

export default {
emits: ["input", "click"],
created() {
     this.getNewProducts();
  },
  updated() {
  this.currentLocale = this.$i18n.locale
},
  beforeUpdate() {
      this.currentLocale = this.$i18n.locale
  },
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
      currentLocale: this.$i18n.locale,
      titleProps:this.$t('listsTitle2'),
      filterFormValue:'',
    };
  },
  methods: {
    async filterListByFiltersForm(filterValue:any){
      this.openFiltersModal = false;
    this.filterFormValue = filterValue;
    const list = await productsApi.filterProductsByFiltersForm(filterValue.brand,filterValue.priceFrom,filterValue.priceTo, this.$i18n.locale)
    this.productsListNew  = list;
   console.log(this.filteredList)
  },
    async getNewProducts() {
        const newProducts = await productsApi.getAllNewProducts(
          this.searchString,
          this.$i18n.locale 
        );
        this.productsListNew = newProducts;
    },
 
  },
  watch: {
      searchString: async function filter() {
        this.getNewProducts();
      },
      popUpFilter: async function filterPopUp() {
        this.filterListByPopUp();
      },
      currentLocale: async function(){
      this.getNewProducts();
    },
    },
};
</script>
<!-- @close="openFiltersModal = false" -->
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
      <TheList :titleProps="titleProps" :itemList="productsListNew"
        :filterListByFiltersForm="filterListByFiltersForm"/>
      <!-- <TheList titleProps="Новинки" :itemList="productsListNew" /> -->
    </div>
    <!-- <TheFooter/> -->
  </NuxtLayout>
</div>
</template>

<style>
.list_box {
  min-height: 67vh;
  margin: auto;
}
</style>
