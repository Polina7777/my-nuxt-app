<script>
import { productsApi } from "../api-requests/products-api";


export default{
  layout: 'custom',
  mounted(){
    this.getBestSellerProducts();
  },
  created() {
    this.filterListBySearchString();
    this.getBestSellerProducts();
  },
  updated(){
    this.filterListBySearchString();
    this.getBestSellerProducts();
  },
// beforeMount(){
//  this.getBestSellerProducts();
// },
  data(){
  return{
    searchString:'',
    popUpFilter:{title:'',filter:''},
    filteredList:[],
    popUpFilterTitle:'',
    filterFormValue:'',
    router: useRoute(),
    filterName:'',
    openFiltersModal:false,
    productsListBestSeller:[],
    openSwiperModal:true,
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
    const list = await productsApi.filterProductsByFiltersForm(filterValue.brand,filterValue.priceFrom,filterValue.priceTo, this.$i18n.locale)
   this.filteredList = list;
   console.log(this.filteredList)
  },
  async getBestSellerProducts() {
    const bestsellerProducts = await productsApi.getAllBestsellerProducts('',this.$i18n.locale );
    console.log(bestsellerProducts)
      this.productsListBestSeller = bestsellerProducts;
    },
  
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
:popUpValue="popUpFilter" @input="(data)=>searchString = data"  @click="(data)=>popUpFilter=data"/>
<!-- <TheFiltersForm :filterListByFiltersForm="filterListByFiltersForm"/> -->
<TheSwiper2 v-if="productsListBestSeller" :productsListBestSeller = "productsListBestSeller"  />
<TheSwiperModal v-if="productsListBestSeller" :openSwiperModal="openSwiperModal" :productsListBestSeller = "productsListBestSeller" @close="openSwiperModal = false"/>
  <TheListsBox v-if="!searchString && !popUpFilter.title && !filterFormValue" :searchString="searchString" />
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