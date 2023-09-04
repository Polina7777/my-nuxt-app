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
      console.log(saleProducts)
      this.productsListSale = saleProducts;
    },
  //   async filterListBySearchString(){
  //  const list = await productsApi.filterProductsBySearchString(this.searchString);
  //  this.productsListSale = list;
  // },
  },
  watch: {
    searchString: async function filter(){
    //  this.filterListBySearchString()
    this.getSaleProducts(this.searchString)
    }, 
   popUpFilter: async function filterPopUp(){
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
  <!-- <TheFooter /> -->
</template>
<style>
.list_box{
  /* height: 100vh; */
  /* min-height: 527px; */
  min-height: 67vh;
margin: auto;
}
</style>