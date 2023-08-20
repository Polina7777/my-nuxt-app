<script lang="ts">
import { productsApi } from "../api-requests/products-api";
export default {
  created() {
    this.getBasketProducts();
  },
  data() {
    return {
        productsFromBasketList:[],
    };
  },
  methods: {
    async getBasketProducts() {
      const products = await productsApi.getAllProductsFromBasket();
      this.productsFromBasketList = products
    },
  },
};
</script>

<template>
  <div>
    <TheList titleProps="Корзина" :itemList="productsFromBasketList" />
  </div>
</template>
<style scoped>
div{
    display: flex;
    flex-direction: column;
    gap:10px;
}
</style>