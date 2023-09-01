<script>
import { productsApi } from "../api-requests/products-api";

export default{
  // layout (context) {
  //   return 'default'
  // },

  layout: 'custom',
  // name: 'index',



  data(){
  return{
    searchString:'',
    popUpFilter:{title:'',filter:''},
    filteredList:[],
    popUpFilterTitle:'',
    router: useRoute(),
    filterName:''
  }
},
methods:{
 async filterListBySearchString(){
   const list = await productsApi.filterProductsBySearchString(this.searchString)
   this.filteredList = list;
  },
  async filterListByPopUp(){
    this.filterName = this.popUpFilter.title
    const list = await productsApi.filterProductsByPopUpFilter(this.popUpFilter.filter);
   this.filteredList = list;
  }
},
watch: {
    searchString: async function filter(){
     this.filterListBySearchString()
    }, 
   popUpFilter: async function filterPopUp(){
     this.filterListByPopUp()
    }
  },
}
</script>
<template>
    <div>
      <NuxtLayout name="custom">
   <TheHeader :value="searchString" @input="searchString = $event.target.value" :popUpValue="popUpFilter" @click="(data)=>popUpFilter=data"/>
  <TheListsBox v-if="!searchString && !popUpFilter.title" :searchString="searchString"/>
  <TheList v-if="searchString" titleProps="" :itemList="filteredList"/>
  <TheList v-if="popUpFilter.title" :title-props="filterName" :itemList="filteredList"/>
   <TheBrandsBox/>
   <TheAboutBox/>
  </NuxtLayout>
    </div>
  </template>
  <style>
  .gray{
    background: rgb(206, 202, 202);
    height: 370px;
    width: 100%;
  }
</style>