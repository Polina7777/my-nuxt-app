<script lang="ts">
import { productsApi } from "../api-requests/products-api";
export default {
  emits: ["input", "click"],
  created() {
    this.getSaleProducts();
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
      productsListSale: [],
      searchString:'',
    popUpFilter:{title:'',filter:''},
    currentLocale: this.$i18n.locale,
    titleProps:this.$t('listsTitle1'),
    openFiltersModal:false,
      filterFormValue:'',
    };
  },
  methods: {
    async filterListByFiltersForm(filterValue:any){
    this.filterFormValue = filterValue;
    const list = await productsApi.filterProductsByFiltersForm(filterValue.brand,filterValue.priceFrom,filterValue.priceTo, this.$i18n.locale)
    this.productsListSale = list;
   console.log(this.filteredList)
  },
    async getSaleProducts() {
    const saleProducts = await productsApi.getAllSaleProducts(this.searchString,this.$i18n.locale );
      this.productsListSale = saleProducts;
    },
  },
  watch: {
    searchString: async function (){
    this.getSaleProducts()
    }, 
   popUpFilter: async function (){
     this.filterListByPopUp()
    },
    currentLocale: async function(){
      this.getSaleProducts();
    },
  },
};
</script>
<!-- @close="openFiltersModal = false"
:openFiltersModal="openFiltersModal" -->
<template>
  <div :key="currentLocal">
  <NuxtLayout name="custom">
    <TheHeader :value="searchString" :popUpValue="popUpFilter" @input="(data)=>searchString = data"  @click="(data)=>popUpFilter=data"/>
  <div class="list_box">
    <TheList :titleProps="titleProps" :itemList="productsListSale" 
        :filterListByFiltersForm="filterListByFiltersForm"/>
  </div>
  <!-- <TheFooter/> -->
  </NuxtLayout>
</div>
</template>
<style>
.list_box{
  min-height: 67vh;
margin: auto;
}
</style>