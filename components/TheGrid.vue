<script>
import { productsApi } from "../api-requests/products-api";

export default {
  mounted() {
    this.getItems();
  },
  data() {
    return {
      gridArr: [],
    };
  },
  methods: {
    async getItems() {
      const products = await productsApi.getAllProducts();
      products.push(...products);
      products.push(...products);
      this.gridArr = products;
    },
  },
};
</script>
<template>
  <div class="archive">
    <div v-for="(item, index) in gridArr" :key="index" class="article">
      <TheCard :card="item" />
    </div>
  </div>
</template>
<style>
.archive {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  grid-gap: 21px;
  grid-auto-flow: dense;
}
.article {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #b49696;
  border-radius: 10px;
  background: #f9f5f5;
}
.article:nth-child(31n + 1) {
  background: #caa9a9;
  grid-column: 1 / -1;
}
.article:nth-child(16n + 10) {
  grid-column: 1 / -2;
  background: #dee7cf;
}
.article:nth-child(7n + 2) {
  grid-column: 1 / -3;
  background: #cfe7df;
}
@media (max-width: 459px) {
  .archive {
    display: flex;
    flex-direction: column;
  }
}
</style>
