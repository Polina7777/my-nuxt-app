<script lang="ts">
import { productsApi } from "../api-requests/products-api";
export default {
  props: {
    card: Object,
  },
  data() {
    return {
      addText: "В корзину",
      deleteText: "Добавлено",
    };
  },

  methods: {
    async addToBacket() {
      console.log("add to basket");
      const addedProduct = await productsApi.addProductToBasket(
        this.card.id
      );
    },
    async deleteFromBacket() {
      console.log("delete from backet");
      const deleteProduct = await productsApi.deleteProductFromBasket(
        this.card.id
      );
    },
  },
};
</script>

<template>
  <div class="card_wrapper">
    <img :src="card.attributes.image" alt="card-image" />
    <p class="description_small">{{ card.attributes.description_small }}</p>
    <p>{{ card.attributes.price }}</p>
    <button v-if="card.attributes.basket === false" @click="addToBacket">{{ addText }}</button>
    <button v-if="card.attributes.basket === true" @click="deleteFromBacket">{{ deleteText }}</button>
  </div>
</template>

<style scoped>
.card_wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 200px;
  height: 250px;
  align-items: center;
}
p {
  font-size: 10px;
  margin: 5px;
}
.description_small {
  max-height: 40px;
  height: 40px;
}
img {
  width: 100px;
  height: 100px;
}
button {
  padding: 15px 25px;
  background: #efe1e1;
  color: white;
}
button:active,
button:hover {
  background-color: #b49696;
}
</style>
