<script lang="ts">
import { productsApi } from "../api-requests/products-api";
import { productsEnApi } from "../api-requests/products-api-en";
export default {
  emits: ["input", "click"],
  created() {
    this.getSaleProducts();
  },
  updated() {
  this.currentLocale = this.$i18n.locale
},
beforeUpdate() {
      this.currentLocal = this.$i18n.locale
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
    titleProps:this.$t('listsTitle1')
    };
  },
  methods: {
    async getSaleProducts() {
  if(this.$i18n.locale === 'ru'){
    const saleProducts = await productsApi.getAllSaleProducts(this.searchString);
      this.productsListSale = saleProducts;
  }else{
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
    currentLocale: async function(){
      this.getSaleProducts();
    },
  },
};
</script>

<template>
  <div :key="currentLocal">
  <NuxtLayout name="custom">
    <TheHeader :value="searchString" :popUpValue="popUpFilter" @input="(data)=>searchString = data"  @click="(data)=>popUpFilter=data"/>
  <div class="list_box">
    <TheList :titleProps="titleProps" :itemList="productsListSale" />
    <!-- <TheList titleProps="Распродажи" :itemList="productsListSale" /> -->
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