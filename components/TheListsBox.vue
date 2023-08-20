<script lang="ts">
import { productsApi } from "../api-requests/products-api";
export default {
  created() {
    this.getSaleProducts();
    this.getNewProducts();
    this.getBestsellerProducts();
  },
  data() {
    return {
        productsListSale:[],
        productsListNew:[],
        productsListBestseller:[],
    };
  },
  methods: {
    async getSaleProducts() {
      const saleProducts = await productsApi.getAllSaleProducts();
      this.productsListSale = saleProducts
    },
    async getNewProducts() {
      const newProducts = await productsApi.getAllNewProducts();
      this.productsListNew = newProducts;
    },
    async getBestsellerProducts() {
      const bestsellerProducts = await productsApi.getAllBestsellerProducts();
      this.productsListBestseller = bestsellerProducts;
    },
  },
};
</script>

<template>
  <div>
    <TheList titleProps="Акции" :itemList="productsListSale" />
    <TheList titleProps="Новинки" :itemList="productsListNew" />
    <TheList titleProps="Хиты продаж" :itemList="productsListBestseller" />
  </div>
</template>
<style scoped>
div{
    display: flex;
    flex-direction: column;
    gap:10px;
}
</style>
