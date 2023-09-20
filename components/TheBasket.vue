<script lang="ts">
import { basketsApi } from "../api-requests/basket-api";
import { giftcardApi } from "../api-requests/giftcard-api";
import { productsApi } from "../api-requests/products-api";
import giftcard from "../static/images/giftcard.svg";
import { IBasketCard, ICard } from "../static/interfaces";
import { userApi } from "../api-requests/user-api";
export default {
  created() {
    this.getUser();
  },
  data() {
    return {
      productsFromBasketList: <IBasketCard[]>[],
      giftcardsFromBasketList: <IBasketCard[]>[],
      giftcard: giftcard,
      userData: null,
      amount: ref(),
    };
  },
  methods: {
    async getUser() {
      this.userInfo = JSON.parse(localStorage.getItem("userData") as string);
      const user = await userApi.getUsersById(this.userInfo.id);
      this.userData = user;
      console.log(this.userData)
      this.getBasketProducts();
      // this.getUserBasketList();
    },
    async getBasketProducts() {
      if (this.userData) {
        console.log(this.userData);
        const products = await basketsApi.getBasketProducts(
          this.userData?.basket.id
        );
        // const products = await productsApi.getAllProductsFromBasket();
        console.log(products)
        const arr = products.map((item: ICard) => {
          return { product: item, count: item.attributes.basket_count? item.attributes.basket_count:0 };
        });
        //  const giftcards = await giftcardApi.getAllGiftCardFromBasket();
        // const arr2 = giftcards.map((item: { attributes: { basket_count: any; }; }) => {
        //   return { product: item, count: item.attributes.basket_count };
        // });

        this.productsFromBasketList = arr;
        // this.giftcardsFromBasketList = arr2;
        this.computeAmount();
      }
    },
    async getUserBasketList() {
      // if (this.userData) {
        try {
          const basketProducts = await basketsApi.getBasketProducts(
            this.userData?.basket.id
          );
          this.productsFromBasketList = basketProducts;
        console.log(basketProducts)
          // const check = basketProducts?.find((item:any) => this.info?.id === item.id);
          // check ? this.productAdded=true : this.productAdded=false;
          // this.basketList = basketProducts;
          // this.checkComplite = true;
        } catch (err) {
          this.error = true;
        }
      // }
    },

    async increaseQuantity(item: IBasketCard) {
      item.count++;
      const changeCount = await productsApi.changeProductCountInBasket(
        item.product.id,
        item.count
      );
      this.computeAmount();
    },
    async decreaseQuantity(item: IBasketCard) {
      if (item.count > 1) {
        item.count--;
        const changeCount = await productsApi.changeProductCountInBasket(
          item.product.id,
          item.count
        );
        this.computeAmount();
      }
    },
    computeAmount() {
      const prices: number[] = [];
      const bigArr: IBasketCard[] = [];
      bigArr.push(...this.productsFromBasketList);
      // bigArr.push(...this.giftcardsFromBasketList)

      bigArr.map((item: IBasketCard) => {
        const priceString = item.product.attributes.price;
        const priceDigits = priceString.replace(/\D/g, "");
        const priceItem = priceDigits * item.count;
        prices.push(priceItem);
        this.amount = prices.reduce((accumulator, currentValue) => {
          return accumulator + currentValue;
        }, 0);
      });
    },
    computePrice(item: IBasketCard) {
      const priceString = item.product.attributes.price;
      const priceDigits = priceString.replace(/\D/g, "");
      const priceItem = priceDigits * item.count;
      return `${priceItem} p.`;
    },
    async deleteProductFromBasket(id: string) {
      const deleteProduct = await basketsApi.deleteProductFromBasket(this.userData.basket.id,id);
      this.getBasketProducts();
    },
    async deleteGiftCardFromBasket(id: string) {
      const deleteGiftCard = await basketsApi.deleteGiftCardFromBasket(this.userData.basket.id,id);
      this.getBasketProducts();
    },
    deleteFromBasket(item){
      if(item.attributes.brand){
        this.deleteProductFromBasket(item);
      } else{
        this.deleteGiftCardFromBasket(item)
      }
console.log(item)
    },
    navigateTo(link: any) {
      this.$router.push(link);
    },
  },
};
</script>
<template>
  <div class="card-wrapper">
    <div class="grid-box no-border">
      <!-- <p class="basket_title">Корзина</p> -->
      <p class="basket_title">{{ $t("basketTabel1") }}</p>
      <!-- <p class="hide">Количество</p> -->
      <p class="hide">{{ $t("basketTabel2") }}</p>
      <!-- <p class="hide">Цена</p> -->
      <p class="hide">{{ $t("basketTabel3") }}</p>
    </div>
    <div
      v-for="(item, index) in productsFromBasketList"
      :key="index"
      class="grid-box"
    >
      <NuxtLink :to="`/${item.product.id}`">
        <div class="product_description">
          <img :src="item.product.attributes.image" v-show="item.product.attributes.image"/>
          <img :src="giftcard" v-show="!item.product.attributes.image"/>
          <p class="description">
            {{ item.product.attributes.description_small }}
          </p>
        </div>
      </NuxtLink>
      <div class="button_td">
        <div class="count_buttons">
          <button @click="decreaseQuantity(item)" id="minus">-</button>
          {{ item.count }}
          <button @click="increaseQuantity(item)" id="plus">+</button>
        </div>
        <!-- <p @click="deleteFromBacket(item.product.id)">Удалить товар</p> -->
        <p @click="deleteFromBasket(item.product)">
          {{ $t("basketDelete") }}
        </p>
      </div>
      <p>{{ computePrice(item) }}</p>
    </div>
<!-- 
    <div
      v-for="(item, index) in giftcardsFromBasketList"
      :key="index"
      class="grid-box"
    >
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
        <p @click="deleteGiftCardFromBacket(item.product.id)">
          {{ $t("basketDelete") }}
        </p>
      </div>
      <p>{{ computePrice(item) }}</p>
    </div> -->

    <ThePriceBox :amount="amount" />
    <!-- <button class="ordering" @click="navigateTo(`/ordering?amount=${amount}`)">Оформить заказ</button> -->
    <button class="ordering" @click="navigateTo(`/ordering?amount=${amount}`)">
      {{ $t("basketOrder") }}
    </button>
  </div>
</template>

<style scoped>
/*DarkMode*/


.dark-mode button{
  background-color: rgb(28, 27, 27);
  color: rgb(181, 173, 173);
}
.dark-mode #plus, .dark-mode #minus{
  border: none;
  background-color: transparent;
}
.dark-mode button:active,
.dark-mode button:hover {
  /* background-color: rgb(69, 67, 67); */
  background-color: rgb(131, 110, 107);
  color: rgb(181, 173, 173);
}
.dark-mode button, .dark-mode .count_buttons{
  background-color: rgb(28, 27, 27);
  border: 1.7px solid #2d2a2a;
  color: rgb(181, 173, 173);
  /* background-color:  rgb(69, 67, 67);
  color: #d1c4c4; */
}
 .dark-mode .count_buttons:hover, .dark-mode .count_buttons:active{
  background-color: rgb(131, 110, 107);
  color: rgb(181, 173, 173);
}
.dark-mode .card-wrapper{
  color: rgb(181, 173, 173);
}
.dark-mode .box_button,
.dark-mode .box_button:hover,
.dark-mode .box_button:active{
  background: transparent;
color:rgb(90, 68, 64);
  font-size: 27px;
}

.dark-mode .ordering {
  background-color: rgb(28, 27, 27);
  border: 1.7px solid #2d2a2a;
  color: rgb(181, 173, 173);
}
/*DarkMode*/
div {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.amount_box {
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
}
.card-wrapper {
  padding: 21px;
}

.box_button,
.box_button:hover,
.box_button:active,
.dark-mode .box_button,
.dark-mode .box_button:hover,
.dark-mode .box_button:active{
  background: transparent;
color:rgb(90, 68, 64);
  font-size: 27px;
}

.button_td {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: center;
  padding: 50px 0;
}
.ordering {
  background: #efe1e1;
  margin: 20px auto;
  width: 30%;
  min-width: 210px;
}
.ordering:hover {
  background: #b49696;
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
.description {
  font-size: 14px;
}

.grid-box {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  grid-gap: 17px;
  grid-auto-flow: dense;
  padding-top: 20px;
}

@media (max-width: 700px) {
  .grid-box {
    display: flex;
    flex-direction: column;
    border: 3px solid #b4969620;
    border-radius: 10px;
    margin: 10px 0;
  }

  .no-border {
    font-size: 21px;
    border: none;
  }
  img {
    width: 140px;
    height: 130px;
  }
  .description {
    font-size: 12px;
  }
  .button_td {
    padding: 0;
  }
  .hide {
    display: none;
    border: none;
  }
  .basket_title {
    font-size: 21px;
    border-color: white;
  }
}
</style>
