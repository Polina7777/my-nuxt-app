<script>
import { productsApi } from "../api-requests/products-api";
export default {
  created() {
    this.getSaleProducts();
  },
  data() {
    return {
      route: useRoute(),
      productsListSale: [],
    };
  },
  methods: {
    async getSaleProducts() {
      const saleProducts = await productsApi.getAllSaleProducts();
      this.productsListSale = saleProducts;
    },
  },
};
</script>

<template>
  <NuxtLayout name="custom">
    <TheHeader/>
  <div class="list_box">
    <TheList titleProps="Распродажи" :itemList="productsListSale" />
  </div>
  </NuxtLayout>
  <!-- <TheFooter /> -->
</template>
<style>
.list_box{
  /* height: 100vh; */
  min-height: 527px;
margin: auto;
}
</style>