<script>
import { productsApi } from "../api-requests/products-api";

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
  },
},
    data(){
    return{
        info:null,
        route:useRoute(),
        currentLocale: this.$i18n.locale,
         reviewsData:null,
    }
},
methods:{
   async getCardData(){
      const cardInfo = await productsApi.getProductsById(this.route.params.cardId,this.$i18n.locale );
   this.info = cardInfo;
   this.reviewsData = cardInfo.attributes.reviews.data
   }

},
watch: {
  currentLocal: async function(){
    this.getCardData()
  },
}
}
</script>
<template>
  <div :key="currentLocal" >
  <NuxtLayout  name="custom">
    <TheHeader/>
    <TheBigCard v-if="info" :card="info" :id="info.id"/>
  </NuxtLayout>
</div>
</template>