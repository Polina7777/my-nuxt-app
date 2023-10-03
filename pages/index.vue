<script>
import { productsApi } from "../api-requests/products-api";
import TheParallax  from "../components/TheParallax.vue";


export default{
  layout: 'custom',
  created() {
    this.filterListBySearchString();
    this.getBestSellerProducts();
  },
  updated(){
    this.filterListBySearchString();
    this.getBestSellerProducts();
  },
  beforeUpdate() {
      this.currentLocale = this.$i18n.locale
  },
  computed:{
  currentLocal(){
return  this.$i18n.locale;
  }
},
  beforeCreate(){
    this.getBestSellerProducts;
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
    openFiltersModal:false,
    productsListBestSeller:[],
    openSwiperModal:false,
    openSwiper2:false,
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
      this.productsListBestSeller = bestsellerProducts;
      this.openSwiperModal = true;
      this.openSwiper2 = true;
    },

  
},
watch: {
    searchString: async function filter(){
     this.filterListBySearchString()
    }, 
   popUpFilter: async function filterPopUp(){
     this.filterListByPopUp()
    },
    currentLocale: async function(){
      this.getSaleProducts();
    },

  },
  components:{TheParallax}
  
}
</script>
<template>
    <div :key="currentLocal">
      <NuxtLayout name="custom" >
   <TheHeader :value="searchString"
:popUpValue="popUpFilter" @input="(data)=>searchString = data"  @click="(data)=>popUpFilter=data"/>
<!-- <TheFiltersForm :filterListByFiltersForm="filterListByFiltersForm"/> -->
<!-- <TheParallax2/> -->
<ClientOnly>
<TheScrollParallax :productsListBestSeller = "productsListBestSeller"  v-if="!searchString && !popUpFilter.title && !filterFormValue"/>
<TheParallax4 v-if="!searchString && !popUpFilter.title && !filterFormValue" :productsListBestSeller = "productsListBestSeller" />

 <!-- <TheSwiper2  :productsListBestSeller = "productsListBestSeller"  /> -->
 <TheSwiperModal  :openSwiperModal="openSwiperModal" :productsListBestSeller = "productsListBestSeller" @close="openSwiperModal = false"/> 
</ClientOnly>
  <TheListsBox v-if="!searchString && !popUpFilter.title && !filterFormValue" :searchString="searchString" />
  <TheList v-if="searchString" titleProps="" :itemList="filteredList"/>
  <TheList v-if="popUpFilter.title" :title-props="filterName" :itemList="filteredList"/>
  <TheList v-if="filterFormValue" :title-props="`Brand ${filterFormValue}` " :itemList="filteredList"/>
   <TheBrandsBox/>
   <!-- <TheAboutBox/> -->
  </NuxtLayout >
    </div>
  </template>


  <style>
</style>