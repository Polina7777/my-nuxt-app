<script>
import { productsApi } from "../api-requests/products-api";
import { productsEnApi } from "../api-requests/products-api-en";

export default{
  layout: 'custom',
  created() {
    this.filterListBySearchString();
  },
  data(){
  return{
    searchString:'',
    popUpFilter:{title:'',filter:''},
    filteredList:[],
    popUpFilterTitle:'',
    router: useRoute(),
    filterName:'',
 currentLocale: this.$i18n.locale,
  }
},
methods:{

 async filterListBySearchString(){
  if(this.$i18n.locale === 'ru'){
   const list = await productsApi.filterProductsBySearchString(this.searchString)
   this.filteredList = list;
  }else{
    const list = await productsEnApi.filterProductsEnBySearchString(this.searchString)
   this.filteredList = list;
  }
  },
  async filterListByPopUp(){
  
   if(this.$i18n.locale === 'ru'){
    this.filterName = this.popUpFilter.title
    const list = await productsApi.filterProductsByPopUpFilter(this.popUpFilter.filter);
   this.filteredList = list;
  }else{
    this.filterName = this.popUpFilter.title
    const list = await productsEnApi.filterProductsEnByPopUpFilter(this.popUpFilter.filter);
   this.filteredList = list;
  }
  }
},
watch: {
    searchString: async function filter(){
     this.filterListBySearchString()
    }, 
   popUpFilter: async function filterPopUp(){
     this.filterListByPopUp()
    },
  },
  
}
</script>
<template>
    <div>
      <NuxtLayout name="custom" :currentLoc="this.$i18n.locale">
   <TheHeader :value="searchString"
:popUpValue="popUpFilter" @input="(data)=>searchString = data"  @click="(data)=>popUpFilter=data" />
  <TheListsBox v-if="!searchString && !popUpFilter.title" :searchString="searchString"/>
  <TheList v-if="searchString" titleProps="" :itemList="filteredList"/>
  <TheList v-if="popUpFilter.title" :title-props="filterName" :itemList="filteredList"/>
   <TheBrandsBox/>
   <TheAboutBox/>
   <!-- <TheFooter :currentLoc="this.$i18n.locale"/> -->
  </NuxtLayout >
    </div>
  </template>
  <style>
</style>