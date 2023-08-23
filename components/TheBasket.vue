<script lang="ts">
import { productsApi } from "../api-requests/products-api";
export default {
  created() {
    this.getBasketProducts();

  },
  data() {
    return {
      productsFromBasketList: [],
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
        return { product: item, count: 1 };
      });
      this.productsFromBasketList = arr;
      this.computeAmount();
    },
    increaseQuantity(item) {
      item.count++;
      this.computeAmount();
      // this.computeAmount(count);
    },
    decreaseQuantity(item) {
      if (item.count > 1) {
        item.count--;
        this.computeAmount();
        // this.computeAmount(count);
      }
    },
    computeAmount() {
      const prices = [];
      this.productsFromBasketList.map((item) => {
        const priceString = item.product.attributes.price;
        const priceDigits = priceString.replace(/\D/g, "");
        const priceItem = priceDigits * item.count;
        prices.push(priceItem);
        console.log(prices);
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
      console.log("delete from backet");
      const deleteProduct = await productsApi.deleteProductFromBasket(id);
      this.getBasketProducts();
      // this.basket=false;
    },

  },
};
</script>
<template>
  <table class="card-table">
    <thead>
      <tr>
        <th>Корзина</th>
        <th>Количество</th>
        <th>Цена</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in productsFromBasketList" :key="index">
        <!-- <div class="wrapper"> -->
        <td>
          <div class="product_description">
            <img :src="item.product.attributes.image" />
            <p class="description">
              {{ item.product.attributes.description_small }}
            </p>
          </div>
        </td>
        <td class="button_td">
          <div class="count_buttons">
            <button @click="decreaseQuantity(item)">-</button>
            {{ item.count }}
            <button @click="increaseQuantity(item)">+</button>
          </div>
          <p @click="deleteFromBacket(item.product.id)">Удалить товар</p>
        </td>
        <td>
          <p>{{computePrice(item) }}</p>
        </td>

        <!-- </div> -->
      </tr>
    </tbody>
  </table>
  <div class="amount_box">
    <p class="title">{{ text }}</p>
    <div>
      <p>{{`${string1} ${amount} p.`}}</p>
      <p>{{`${string2}    0 p.`}}</p>
      <p>{{ `${string3} ${amount} p.` }}</p>
    </div>
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
.count_buttons {
  display: flex;
  flex-direction: row;
  background: #efe1e1;
  align-items: center;
  border-radius: 17px;
  width: 60%;
}
.button_td {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: center;
  padding: 50px 0;
}
.product_description {
  display: flex;
  flex-direction: row;
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
</style>
