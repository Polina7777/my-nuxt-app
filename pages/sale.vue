<script>
import { productsApi } from "../api-requests/products-api";
export default {
  created() {
    this.getSaleProducts();
  },
  data() {
    return {
      route: useRoute(),
      productsListSale: [],
      searchString:'',
    popUpFilter:{title:'',filter:''},
    };
  },
  methods: {
    async getSaleProducts() {
      const saleProducts = await productsApi.getAllSaleProducts(this.searchString);
      this.productsListSale = saleProducts;
    },
  },
  watch: {
    searchString: async function (){
    this.getSaleProducts(this.searchString)
    }, 
   popUpFilter: async function (){
     this.filterListByPopUp()
    }
  },
};
</script>

<template>
  <NuxtLayout name="custom">
    <TheHeader :value="searchString" :popUpValue="popUpFilter" @input="(data)=>searchString = data"  @click="(data)=>popUpFilter=data"/>
  <div class="list_box">
    <TheList titleProps="Распродажи" :itemList="productsListSale" />
  </div>
  </NuxtLayout>
</template>
<style>
.list_box{
  min-height: 67vh;
margin: auto;
}
</style>