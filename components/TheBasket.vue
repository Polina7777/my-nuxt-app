<script lang="ts">
import { giftcardApi } from "../api-requests/giftcard-api";
import { productsApi } from "../api-requests/products-api";
import giftcard from '../static/images/giftcard.svg';
export default {
  created() {
    this.getBasketProducts();

  },
  data() {
    return {
      productsFromBasketList: [],
      giftcardsFromBasketList:[],
      giftcard:giftcard,
      text: "Стоимость",
      string1: "Товары .................................. ",
      string2: "Скидка .................................. ",
      string3: "Итого ................................... ",
      amount: ref(),
    };
  },
  methods: {
    async getBasketProducts() {
      const products = await productsApi.getAllProductsFromBasket();
      const arr = products.map((item) => {
        return { product: item, count: item.attributes.basket_count };
      });
      const giftcards = await giftcardApi.getAllGiftCardFromBasket();
      const arr2 = giftcards.map((item) => {
        return { product: item, count: item.attributes.basket_count };
      });

      this.productsFromBasketList = arr;
      this.giftcardsFromBasketList = arr2;
      this.computeAmount();
    },
   async increaseQuantity(item) {
      item.count++;
      const changeCount = await productsApi.changeProductCountInBasket(item.product.id, item.count)
      this.computeAmount();
    },
  async  decreaseQuantity(item) {
      if (item.count > 1) {
        item.count--;
        const changeCount = await productsApi.changeProductCountInBasket(item.product.id, item.count)
        this.computeAmount();
      }
    },
    computeAmount() {
      const prices = [];
      const bigArr = [];
      bigArr.push(...this.productsFromBasketList);
      bigArr.push(...this.giftcardsFromBasketList)

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

   bigArr.map((item) => {
        const priceString = item.product.attributes.price;
        const priceDigits = priceString.replace(/\D/g, "");
        const priceItem = priceDigits * item.count;
        prices.push(priceItem);
     this.amount = prices.reduce((accumulator, currentValue) => {
          return accumulator + currentValue;
        }, 0);
      });
    },
    computePrice(item){
      const priceString = item.product.attributes.price;
        const priceDigits = priceString.replace(/\D/g, "");
        const priceItem = priceDigits * item.count;
        return `${priceItem} p.`
    },
    async deleteFromBacket(id) {
      const deleteProduct = await productsApi.deleteProductFromBasket(id);
      this.getBasketProducts();
    },
    async deleteGiftCardFromBacket(id) {
      const deleteGiftCard = await giftcardApi.deleteGiftCardFromBasket(id);
      this.getBasketProducts();
    },
    navigateTo(link: any) {
      this.$router.push(link);
    },


  },
};
</script>
<template>
   <div class="card-wrapper">
  <div class="grid-box">
    <p class="basket_title">Корзина</p>
        <p class="hide">Количество</p>
        <p class="hide">Цена</p>
        </div>
  <div  v-for="(item, index) in productsFromBasketList" :key="index" class="grid-box">
    <NuxtLink :to="`/${item.product.id}`">
          <div class="product_description">
            <img :src="item.product.attributes.image" />
            <p class="description">
              {{ item.product.attributes.description_small }}
            </p>
          </div>
        </NuxtLink>
        <div class="button_td">
          <div class="count_buttons">
            <button @click="decreaseQuantity(item)">-</button>
            {{ item.count }}
            <button @click="increaseQuantity(item)">+</button>
          </div>
          <p @click="deleteFromBacket(item.product.id)">Удалить товар</p>
        </div>
        <p>{{computePrice(item) }}</p>
      </div>


      <div v-for="(item, index) in giftcardsFromBasketList" :key="index" class="grid-box">
      
          <div class="product_description">
            <img :src="giftcard" />
            <p class="description">
              {{ item.product.attributes.name }}
            </p>
          </div>
         <div class="button_td">
          <div class="count_buttons">
            <button @click="decreaseQuantity(item)">-</button>
            {{ item.count }}
            <button @click="increaseQuantity(item)">+</button>
          </div>
          <p @click="deleteGiftCardFromBacket(item.product.id)">Удалить товар</p>
  </div>
          <p>{{computePrice(item) }}</p>
        </div>


  <ThePriceBox :amount="amount"/>
  <button class="ordering" @click="navigateTo(`/ordering?amount=${amount}`)">Оформить заказ</button>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.amount_box{
  padding: 20px;
}
.description {
  max-width: 700px;
  padding: 0 30px;
}
button {
  background: transparent;
  padding: 10px 20px;
}
th {
  min-width: 210px;
  font-size: 21px;
  padding: 41px;
  text-align: center;
}
.count_buttons{
  display: flex;
  flex-direction: row;
  background: #efe1e1;
  align-items: center;
  border-radius: 17px;
}
.card-wrapper{
  padding: 21px;
}
.button_td {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: center;
  padding: 50px 0;
}
.ordering{
  background: #efe1e1;
  margin: 20px auto;
  width: 30%;
  min-width: 210px;
}
.ordering:hover{
  background: #B49696;
}
.product_description {
  display: flex;
  /* flex-direction: row; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}
tr {
  border: 2px solid gray;
}
td {
  align-items: center;
}
img {
  width: 200px;
  height: 190px;
}
p {
  padding: 10px;
  text-align: center;
}
.card-table {
  padding: 20px;
  margin: auto;
}
.description{
  font-size: 14px;
}




.grid-box {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  grid-gap: 17px;
  grid-auto-flow: dense;
}


@media (max-width: 700px) {
  .grid-box {
    display: flex;
    flex-direction: column;
    border:1px solid #b4969620;
    border-radius: 10px;
    margin: 10px 0;
 
  }
  img {
  width: 140px;
  height: 130px;
}
.description{
  font-size: 12px;
}
  .button_td{
    padding: 0;
  }
  .hide{
    display: none;
    border:none
  }
  .basket_title{
    font-size: 21px;
  }
  
}

</style>
