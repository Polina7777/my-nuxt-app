<script lang="ts">
import { productsApi } from "../api-requests/products-api";

export default {
  props: {
    card: Object,
  },
  created() {
    this.getTheSameProductsList();
  },
  data() {
    return {
      addText: "В корзину",
      deleteText: "Добавлено",
      title: "Описание",
      title1: "Применение",
      showTitle1Description: ref(false),
      title2: "Состав",
      showTitle2Description: ref(false),
      sameProductsList: [],
      // basket: ref(false)
      basket: ref(this.card.attributes.basket),
      cardNew: ref({ product: this.card, count: 1 }),
    };
  },

  methods: {
    async addToBacket() {
      const addedProduct = await productsApi.addProductToBasket(
        this.cardNew.product.id
      );
      const changeCount = await productsApi.changeProductCountInBasket(this.cardNew.product.id, this.cardNew.count)
      this.basket = true;
    },
    async deleteFromBacket() {
      const deleteProduct = await productsApi.deleteProductFromBasket(
        // this.card.id
        this.cardNew.product.id
      );
      const changeCount = await productsApi.changeProductCountInBasket(this.cardNew.product.id, this.cardNew.count)
      this.basket = false;
    },
    async getTheSameProductsList() {
      const list = await productsApi.getAllMatureSkinProducts();
      this.sameProductsList = list;
    },
    increaseQuantity(item) {
      item.count++;
    },
    decreaseQuantity(item) {
      if (item.count > 1) {
        item.count--;
      }
    },
    showDescription(title) {
      if (title === this.title1) {
        this.showTitle1Description = true;
      } else if (title === this.title2) {
        this.showTitle2Description = true;
      }
    },
    hideDescription(title) {
      if (title === this.title1) {
        this.showTitle1Description = false;
      } else if (title === this.title2) {
        this.showTitle2Description = false;
      }
    },
    // computeAmount() {
    //   const prices = [];
    //   this.productsFromBasketList.map((item) => {
    //     const priceString = item.product.attributes.price;
    //     const priceDigits = priceString.replace(/\D/g, "");
    //     const priceItem = priceDigits * item.count;
    //     prices.push(priceItem);
    //     console.log(prices);
    //  this.amount = prices.reduce((accumulator, currentValue) => {
    //       return accumulator + currentValue;
    //     }, 0);
    //   });
    // },
    // computePrice(item){
    //   const priceString = item.product.attributes.price;
    //     const priceDigits = priceString.replace(/\D/g, "");
    //     const priceItem = priceDigits * item.count;
    //     return `${priceItem} p.`
    // },
    // async deleteFromBacket(id) {
    //   console.log("delete from backet");
    //   const deleteProduct = await productsApi.deleteProductFromBasket(id);
    //   this.getBasketProducts();
    //   // this.basket=false;
    // },
  },
};
</script>

<template>
  <TheHeader />
  <div class="card_wrapper">
    <nuxt-link :to="`/${this.card.id}`">
      <img :src="card.attributes.image" alt="card-image" />
    </nuxt-link>
    <div>
      <p class="description_small">{{ card.attributes.description_small }}</p>
      <p>{{ card.attributes.price }}</p>

      <div v-if="!basket" class="count_buttons">
        <button @click="decreaseQuantity(cardNew)">-</button>
        {{ cardNew.count }}
        <button @click="increaseQuantity(cardNew)">+</button>
      </div>

      <button v-if="!basket" @click="addToBacket">{{ addText }}</button>
      <button v-if="basket" @click="deleteFromBacket">{{ deleteText }}</button>
      <p class="title">{{ title }}</p>
      <p class="description">{{ card.attributes.description }}</p>
      <div class="box">
        <p class="title">{{ title1 }}</p>
        <button class="box_button" v-if="showTitle1Description" @click="hideDescription(title1)">
          -
        </button>
        <button class="box_button" v-if="!showTitle1Description" @click="showDescription(title1)">
          +
        </button>
      </div>
      <p v-if="showTitle1Description" class="description">
        {{ card.attributes.applying }}
      </p>

      <div class="box">
        <p class="title">{{ title2 }}</p>
        <button class="box_button" v-if="showTitle2Description" @click="hideDescription(title2)">
          -
        </button>
        <button class="box_button" v-if="!showTitle2Description" @click="showDescription(title2)">
          +
        </button>
      </div>
      <p v-if="showTitle2Description" class="description">
        {{ card.attributes.composition }}
      </p>
    </div>
  </div>
  <TheList titleProps="Похожие товары" :itemList="sameProductsList" />
  <TheFooter />
</template>

<style scoped>
.card_wrapper {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  /* width: 200px;
  height: 250px; */
  gap: 30px;
  margin: 0 auto;
  width: 71%;
  padding: 30px;
}
.count_buttons,
.buttton {
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: #efe1e1;
  align-items: center;
  border-radius: 19px;
  width: 131px;
  color: white;
}
.count_buttons {
  margin-bottom: 10px;
}
.box{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.box_button, .box_button:hover, .box_button:active {
    background: transparent;
    color: black;
    font-size: 27px;
}
.count_buttons:hover,
.count_buttons:active,
.button:hover,
.button:active {
  background: #EFE1E1;
}
.description_small {
  width: 80%;
  font-size: 23px;
}
.title,
p {
  font-size: 21px;
  padding: 15px;
}
.description {
  width: 80%;
  font-size: 15px;
}

img {
  width: 300px;
  height: 300px;
}
button {
  padding: 15px 25px;
  background: #efe1e1;
  color: white;
}
</style>
