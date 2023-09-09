<script lang="ts">
import { productsApi } from "../api-requests/products-api";
import { productsEnApi } from "../api-requests/products-api-en";
export default {
  props: {
    card: Object,
  },
  data() {
    return {
      // addText: "В корзину",
      // deleteText: "Добавлено",
      cardData:ref(null),
      basket: ref(this.card?.attributes.basket),
      currentLocale: this.$i18n.locale, // Сохраняем текущий язык в data компонента
    };
  },
  created() {
      this.getCardInfoById()
  },
  beforeUpdate(){
  this.currentLocale =  this.$i18n.locale
},
beforeMount() {
  this.currentLocale =  this.$i18n.locale
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
    async getCardInfoById() {
      if (this.$i18n.locale === "ru") {
        const product = await productsApi.getProductsById(this.card?.id );
         this.cardData = product;
      } else {
        const product = await productsEnApi.getProductsEnById(this.card?.id);
       this.cardData = product
      }
    },
  },
  watch: {
    currentLocale: async function(){
this.getCardInfoById()
    }, 
}
};
</script>

<template>
  <div class="card_wrapper">
    <nuxt-link :to="`/${card?.id}`" class="card_link">
    <img :src="card?.attributes.image" alt="card-image" />
    <p class="description_small">{{ card?.attributes.description_small }}</p>
    <p>{{ card?.attributes.price }}</p>
  </nuxt-link>
  <!-- <nuxt-link :to="`/${cardData?.id}`" class="card_link">
    <img :src="cardData?.attributes.image" alt="card-image" />
    <p class="description_small">{{ cardData?.attributes.description_small }}</p>
    <p>{{ cardData?.attributes.price }}</p>
  </nuxt-link> -->
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
