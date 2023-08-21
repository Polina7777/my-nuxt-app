<script>
import { productsApi } from "../api-requests/products-api";
export default{
    created() {
    this.getNewProducts();
  },
    data(){
        return{
     route:useRoute(),
     productsListNew:[],
        }
    },
    methods:{
        async getNewProducts() {
      const newProducts = await productsApi.getAllNewProducts();
      this.productsListNew = newProducts;
    },
    }
}

</script>

<template>
   <TheHeader/>
   <!-- <div> -->
   <TheList titleProps="Новинки" :itemList="productsListNew" />
<!-- </div> -->
   <TheFooter/>
  </template>
    
