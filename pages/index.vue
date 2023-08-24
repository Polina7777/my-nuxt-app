<script>
import { productsApi } from "../api-requests/products-api";
export default{
  data(){
  return{
    searchString:'',
    filteredList:[],
  }
},
methods:{
 async filterListBySearchString(){
   const list = await productsApi.filterProductsBySearchString(this.searchString)
   console.log(list)
   this.filteredList = list;
  }
},
watch: {
    searchString: async function filter(){
      console.log(this.searchString)
     this.filterListBySearchString()
    }
  },
}
</script>
<template>
    <div>
   <TheHeader :value="searchString" @input="searchString = $event.target.value" />
   <div class="gray"></div>
  <TheListsBox v-if="!searchString" :searchString="searchString"/>
  <TheList v-if="searchString" titleProps="" :itemList="filteredList"/>
   <TheBrandsBox/>
   <TheAboutBox/>
   <TheFooter/>
    </div>
  </template>
  <style>
  .gray{
    background: rgb(206, 202, 202);
    height: 370px;
    width: 100%;
  }
</style>