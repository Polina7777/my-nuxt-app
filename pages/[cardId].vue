<script>
import { productsApi } from "../api-requests/products-api";
export default{
    created() {
  this.getCardData()

  },
    data(){
    return{
        info:ref(),
        route:useRoute()
    }
},
methods:{
  async getCardData(){
   const cardInfo = await productsApi.getProductsById(this.route.params.cardId);
   this.info = cardInfo;
   console.log(this.info)
   }
}
}
</script>

<template>
  <NuxtLayout  name="custom">
    <TheHeader/>
    <TheBigCard v-if="info" :card="info"/>
  </NuxtLayout>
</template>