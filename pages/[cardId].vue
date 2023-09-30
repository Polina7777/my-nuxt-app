<script>
import { productsApi } from "../api-requests/products-api";
import { productsEnApi } from "../api-requests/products-api-en";
export default{
    created() {
  this.getCardData()
  },
  updated() {
  this.currentLocale = this.$i18n.locale
},
beforeUpdate() {
      this.currentLocale = this.$i18n.locale
  },
  computed:{
  currentLocal(){
return  this.$i18n.locale;
  }
},
    data(){
    return{
        info:null,
        route:useRoute(),
        currentLocale: this.$i18n.locale,
    }
},
methods:{
   async getCardData(){
      // console.log('in cardId')
      // console.log(this.$i18n.locale)
      const cardInfo = await productsApi.getProductsById(this.route.params.cardId,this.$i18n.locale );
   console.log(cardInfo)
   this.info = cardInfo;
   }

},
watch: {
  //   currentLocale: async function(){
  //  this.getCardData()
  //   }, 
  // },
  currentLocal: async function(){
    this.getCardData()
  }
}
}
</script>
<!-- :key="currentLocal" -->
<template>
  <div :key="currentLocal" >
  <NuxtLayout  name="custom">
    <TheHeader/>
    <TheBigCard v-if="info" :card="info" :id="info.id"/>
  </NuxtLayout>
</div>
</template>