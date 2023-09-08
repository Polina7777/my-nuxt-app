<script>
import { productsApi } from "../api-requests/products-api";
import { productsEnApi } from "../api-requests/products-api-en";
export default {
  created() {
    this.getSaleProducts();
  },
//   beforeUpdate(){
//   this.currentLocale =  this.$i18n.locale
//   console.log(this.currentLocale)
// },
  data() {
    return {
      route: useRoute(),
      productsListSale: [],
      searchString:'',
    popUpFilter:{title:'',filter:''},
    currentLocale: this.$i18n.locale,
    };
  },
  methods: {
    async getSaleProducts() {
  if(this.$i18n.locale === 'ru'){
    console.log(this.$i18n.locale)
    const saleProducts = await productsApi.getAllSaleProducts(this.searchString);
      this.productsListSale = saleProducts;
  }else{
    console.log(this.$i18n.locale)
    const saleProducts = await productsEnApi.getAllSaleProductsEn(this.searchString);
      this.productsListSale = saleProducts;
  }
  
    },
  },
  watch: {
    searchString: async function (){
    this.getSaleProducts()
    }, 
   popUpFilter: async function (){
     this.filterListByPopUp()
    },
    // currentLocale: async function(){
    //   console.log(this.currentLocale)
    //   this.getSaleProducts()
    // }, 
  },
};
</script>

<template>
  <NuxtLayout name="custom">
    <TheHeader :value="searchString" :popUpValue="popUpFilter" @input="(data)=>searchString = data"  @click="(data)=>popUpFilter=data"/>
  <div class="list_box">
    <TheList :titleProps="$t('listsTitle1')" :itemList="productsListSale" />
    <!-- <TheList titleProps="Распродажи" :itemList="productsListSale" /> -->
  </div>
  </NuxtLayout>
</template>
<style>
.list_box{
  min-height: 67vh;
margin: auto;
}
</style>