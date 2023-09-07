<script lang="ts">
import { productsApi } from "../api-requests/products-api";
export default {
  props: {
    card: Object,
  },
  data() {
    return {
      // addText: "В корзину",
      // deleteText: "Добавлено",
      basket: ref(this.card?.attributes.basket)
    };
  },

  methods: {
    async addToBacket() {
      const addedProduct = await productsApi.addProductToBasket(
        this.card?.id
      );
      this.basket=true;
    },
    async deleteFromBacket() {
      const deleteProduct = await productsApi.deleteProductFromBasket(
        this.card?.id
      );
      this.basket=false;
    },
  },
};
</script>

<template>
  <div class="card_wrapper">
    <nuxt-link :to="`/${card?.id}`" class="card_link">
    <img :src="card?.attributes.image" alt="card-image" />
    <p class="description_small">{{ card?.attributes.description_small }}</p>
    <p>{{ card?.attributes.price }}</p>
  </nuxt-link>
    <!-- <button v-if="!basket" @click="addToBacket">{{ addText }}</button> -->
    <button v-if="!basket" @click="addToBacket">{{ $t('cardAdd') }}</button>
    <!-- <button v-if="basket" @click="deleteFromBacket">{{ deleteText }}</button> -->
    <button v-if="basket" @click="deleteFromBacket">{{ $t('cardDelete') }}</button>
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
.card_link{
  display: flex;
flex-direction: column;
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
