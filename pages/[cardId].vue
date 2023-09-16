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
      this.currentLocal = this.$i18n.locale
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
    if (this.$i18n.locale === "ru") {
      const cardInfo = await productsApi.getProductsById(this.route.params.cardId);
   this.info = cardInfo;
      } else {
        console.log(this.route.params.cardId,'dscs')
        const cardInfo = await productsEnApi.getProductsEnById(this.route.params.cardId);
        console.log(cardInfo,'scnksdc')
   this.info = cardInfo;
      }
   }

},
watch: {
    currentLocale: async function(){
   this.getCardData()
    }, 
  },
}
</script>

<template>
  <div :key="currentLocal">
  <NuxtLayout  name="custom">
    <TheHeader/>
    <TheBigCard v-if="info" :card="info"/>
    <!-- <TheFooter/> -->
  </NuxtLayout>
</div>
</template>