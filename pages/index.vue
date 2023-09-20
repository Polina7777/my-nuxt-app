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
    filterFormValue:'',
    router: useRoute(),
    filterName:'',
 currentLocale: this.$i18n.locale,
  }
},
methods:{

 async filterListBySearchString(){
   const list = await productsApi.filterProductsBySearchString(this.searchString,this.$i18n.locale )
   this.filteredList = list;
  },
  async filterListByPopUp(){
    this.filterName = this.popUpFilter.title
    const list = await productsApi.filterProductsByPopUpFilter(this.popUpFilter.filter,this.$i18n.locale );
   this.filteredList = list;
  },
  async filterListByFiltersForm(filterValue){
    this.filterFormValue = filterValue;
    console.log(this.filterFormValue)
    const list = await productsApi.filterProductsByFiltersForm(filterValue, this.$i18n.locale)
   this.filteredList = list;
   console.log(this.filteredList)
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
      <NuxtLayout name="custom" >
   <TheHeader :value="searchString"
:popUpValue="popUpFilter" @input="(data)=>searchString = data"  @click="(data)=>popUpFilter=data" />
<TheFiltersForm :filterListByFiltersForm="filterListByFiltersForm"/>
  <TheListsBox v-if="!searchString && !popUpFilter.title && !filterFormValue" :searchString="searchString"/>
  <TheList v-if="searchString" titleProps="" :itemList="filteredList"/>
  <TheList v-if="popUpFilter.title" :title-props="filterName" :itemList="filteredList"/>
  <TheList v-if="filterFormValue" :title-props="`Brand ${filterFormValue}` " :itemList="filteredList"/>
   <TheBrandsBox/>
   <TheAboutBox/>
  </NuxtLayout >
    </div>
  </template>
  <style>
</style>