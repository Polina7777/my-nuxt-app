<script lang="ts">
import { productsApi } from "../api-requests/products-api";
import { productsEnApi } from "../api-requests/products-api-en";
import { IBasketCard } from "../static/interfaces";
export default {
  props: {
    card: Object,
  },
  created() {
    this.getTheSameProductsList();
  },
//   beforeUpdate(){
//   this.currentLocale =  this.$i18n.locale
// },
// updated() {
//   this.currentLocale = this.$i18n.locale;
// },
// beforeMount() {
//   this.currentLocale =  this.$i18n.locale
// },

  data() {
    return {
       addText: "В корзину",
      deleteText: "Добавлено",
      title: "Описание",
      title1: "Применение",
      showTitle1Description: false,
      title2: "Состав",
      showTitle2Description: false,
      sameProductsList: ref([]),
      basket: this.info?.attributes.basket,
      cardNew: { product: this.info, count: 1 },
      currentLocale:this.$i18n.locale,
       route:useRoute(),
       router:useRouter(),
       info:this.card,
    };
  },

  methods: {
    async addToBacket() {
        const addedProduct = await productsApi.addProductToBasket(
        this.cardNew.product?.id,this.$i18n.locale 
      );
      const changeCount = await productsApi.changeProductCountInBasket(
        this.cardNew.product?.id,
        this.cardNew.count,
        this.$i18n.locale 
      );
      this.basket = true;
    },
    async deleteFromBacket() {
        const deleteProduct = await productsApi.deleteProductFromBasket(
        this.cardNew.product?.id,
        this.$i18n.locale 
      );
      const changeCount = await productsApi.changeProductCountInBasket(
        this.cardNew.product?.id,
        this.cardNew.count,
        this.$i18n.locale 
      );
      this.basket = false;
    },
    async getTheSameProductsList() {
        const list = await productsApi.getAllMatureSkinProducts(this.$i18n.locale );
      this.sameProductsList = list;
    },
    async getCardData(){
      console.log('in bigcard')
      const cardInfo = await productsApi.getProductsById(this.cardNew.product?.id,this.$i18n.locale );
   this.info = cardInfo;
   },
 
    increaseQuantity(item:IBasketCard) {
      item.count++;
    },
    decreaseQuantity(item:IBasketCard) {
      if (item.count > 1) {
        item.count--;
      }
    },
    showDescription(title:string) {
      if (title === this.title1) {
        this.showTitle1Description = true;
      } else if (title === this.title2) {
        this.showTitle2Description = true;
      }
    },
    hideDescription(title:string) {
      if (title === this.title1) {
        this.showTitle1Description = false;
      } else if (title === this.title2) {
        this.showTitle2Description = false;
      }
    },
  },
//   watch: {
//     currentLocale: async function(){
//  this.getTheSameProductsList();
//  this.getCardData();
//     }, 
//   },
};
</script>

<template>
  <div class="card_wrapper" :key="info?.id">
    <nuxt-link :to="`/${info?.id}`">
      <!-- <img :src="card?.attributes.image" alt="card-image" /> -->
      <img :src="info?.attributes.image" alt="card-image" />
    </nuxt-link>
    <div class="info_box">
      <!-- <p class="description_small">{{ card?.attributes.description_small }}</p> -->
      <p class="description_small">{{ info?.attributes.description_small }}</p>
      <!-- <p>{{ card?.attributes.price }}</p> -->
      <p>{{ info?.attributes.price }}</p>
      <div v-if="!basket" class="count_buttons">
        <button @click="decreaseQuantity(cardNew)" id="minus">-</button>
        {{ cardNew.count }}
        <button @click="increaseQuantity(cardNew)" id="plus">+</button>
      </div>

      <button v-if="!basket" @click="addToBacket" class="basket">{{ $t('bigCardAdd') }}</button>
      <button v-if="basket" @click="deleteFromBacket" class="basket">{{  $t('bigCardDelete')}}</button>
      <p class="title">{{ $t('bigCardTitle1') }}</p>
      <!-- <p class="description">{{ card?.attributes.description }}</p> -->
      <p class="description">{{ info?.attributes.description }}</p>
      <div class="box">
        <!-- <p class="title">{{ title1 }}</p> -->
        <p class="title">{{ $t('bigCardTitle2') }}</p>
        <button
          class="box_button"
          v-if="showTitle1Description"
          @click="hideDescription(title1)"
        >
          -
        </button>
        <button
          class="box_button"
          v-if="!showTitle1Description"
          @click="showDescription(title1)"
        >
          +
        </button>
      </div>
      <p v-if="showTitle1Description" class="description">
        <!-- {{ card?.attributes.applying }} -->
        {{ info?.attributes.applying }}
      </p>

      <div class="box">
        <!-- <p class="title">{{ title2 }}</p> -->
        <p class="title">{{$t('bigCardTitle3') }}</p>
        <button
          class="box_button"
          v-if="showTitle2Description"
          @click="hideDescription(title2)"
        >
          -
        </button>
        <button
          class="box_button"
          v-if="!showTitle2Description"
          @click="showDescription(title2)"
        >
          +
        </button>
      </div>
      <p v-if="showTitle2Description" class="description">
        <!-- {{ card?.attributes.composition }} -->
        {{ info?.attributes.composition }}
      </p>
    </div>
  </div>
  <TheList :titleProps=" $t('bigCardOther')" :itemList="sameProductsList" />
</template>

<style scoped>
/*DarkMode*/
.dark-mode #plus, .dark-mode #minus{
  border: none;
  background-color: transparent;
}
.dark-mode .count_buttons:hover,
.dark-mode .count_buttons:active,
.dark-mode button:hover,
.dark-mode button:active {
  background-color: rgb(131, 110, 107);
}
.dark-mode .box_button{
  color: rgb(180, 172, 172);
}
.dark-mode button, .dark-mode .count_buttons{
  /* background-color: rgb(131, 110, 107); */
  background-color: rgb(28, 27, 27);
  color: rgb(181, 173, 173);
}
.dark-mode .count_buttons{
  border: 1.7px solid #2d2a2a;
}
.dark-mode .basket{
  border: 1.7px solid #2d2a2a;
}

 .dark-mode .count_buttons:hover, .dark-mode .count_buttons:active{
  background-color: rgb(131, 110, 107);
}
.dark-mode .box_button,
.dark-mode .box_button:hover,
.dark-mode .box_button:active{
  background: transparent;
  /* background-color:rgb(93, 91, 91); */
  color: rgb(181, 173, 173);
  border: none;
  font-size: 27px;
}
.dark-mode .card_wrapper{
  /* color:  rgb(103, 101, 101); */
  color: rgb(181, 173, 173);
}

/*DarkMode*/
.card_wrapper {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 30px;
  margin: 0 auto;
  width: 71%;
  padding-top: 70px;
  color: rgb(218, 197, 189);
}

.count_buttons,
.button {
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
.box {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-width: 300px;
}
.box_button,
.box_button:hover,
.box_button:active,
.dark-mode .box_button,
.dark-mode .box_button:hover,
.dark-mode .box_button:active{
  background: transparent;
  font-size: 27px;
}
/* .count_buttons:hover,
.count_buttons:active,
.button:hover,
.button:active {
  background:  rgb(6, 89, 89);
} */

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
@media (max-width: 1000px) {
  .card_wrapper {
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin: 0 auto;
    width: 87%;
    padding-top: 70px;
    align-items: center;
  }
  .info_box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 200px;
    height: 200px;
  }
  .description_small {
    font-size: 17px;
  }
}
@media (max-width: 610px) {
  .card_wrapper {
    width: 97%;
  }
  .description,
  .description_small {
    text-align: center;
  }
}
</style>
