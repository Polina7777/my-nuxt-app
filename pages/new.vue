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
    filteredList:[],
    searchString:'',
    popUpFilter:{title:'',filter:''},
    router: useRoute(),
    filterName:''
        }
    },
    methods:{
        async getNewProducts() {
      const newProducts = await productsApi.getAllNewProducts(this.searchString);
      console.log(newProducts)
      this.productsListNew = newProducts;
    },
    watch: {
    searchString: async function filter(){
    //  this.filterListBySearchString()
    this.getNewProducts(this.searchString)
    }, 
   popUpFilter: async function filterPopUp(){
     this.filterListByPopUp()
    }
  },
}
}
</script>

<template>

   <NuxtLayout name="custom">
 <TheHeader :value="searchString" :popUpValue="popUpFilter" @input="(data)=>searchString = data"  @click="(data)=>popUpFilter=data"/> 
   <div class="list_box">
   <TheList titleProps="Новинки" :itemList="productsListNew" />
</div>
</NuxtLayout>
  </template>

  <style>
.list_box{
  /* height: 100vh; */
  /* min-height: 527px; */
  min-height: 67vh;
margin: auto;
}
</style>