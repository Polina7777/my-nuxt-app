<script lang="ts">
import { userApi } from "../api-requests/user-api";
import { favoritesApi } from "../api-requests/favorites-api";
import { productsApi } from "../api-requests/products-api";
import { productsEnApi } from "../api-requests/products-api-en";
import { basketsApi } from "../api-requests/basket-api";
import like from "../static/images/like.svg"
import { userInfo } from "os";
export default {
  props: {
    card: Object,
  },
  data() {
    return {
      like:like,
      router: useRouter(),
      cardData: ref(null),
      basket: ref(this.card?.attributes.basket),
      currentLocale: this.$i18n.locale, // Сохраняем текущий язык в data компонента
      likeClicked: false,
      info: null,
      check: false,
      productAdded: false,
      favoritesList: [],
      basketList: [],
      userInfo: null,
    };
  },

  created() {
     this.getUser()
  },
  mounted() {
    this.getUser();
  },
  beforeUpdate() {
    this.currentLocale = this.$i18n.locale;
  },
  beforeMount() {
    this.currentLocale = this.$i18n.locale;
  },
  methods: {
    async getUser() {
      this.userInfo = JSON.parse(localStorage.getItem("userData"));
      if(this.userInfo){
        console.log(this.userInfo.id)
      const user = await userApi.getUsersById(this.userInfo?.id);
      this.userData = user;
      this.getUsersFavoritesList();
      this.getUsersBasketList();
      }

    },

    async getCardInfoById() {
      // if (this.$i18n.locale === "ru") {
        const product = await productsApi.getProductsById(this.card?.id,this.$i18n.locale );
        this.cardData = product;
        this.info = product;
      // } else {
      //   const product = await productsEnApi.getProductsEnById(this.card?.id);
      //   this.cardData = product;
      //   this.info = product;
      // }
    },
    navigateTo(link: any) {
      this.$router.push(link);
    },
    checkIsFavorite(product: any) {
      const check = this.favoritesList?.find(
        (item: any) => product.id === item.id
      );
      this.checkComplite = true;
      check ? (this.likeClicked = true) : (this.likeClicked = false);
      return check;
    },
    checkIsInBasket(product: any) {
      const check = this.basketList?.find(
        (item: any) => product.id === item.id
      );
      this.checkComplite = true;
      check ? (this.productAdded = true) : (this.productAdded = false);
      return check;
    },
    likeClick() {
      // if (!this.info) return;
      if (!this.card) return;
      // const checkResult = this.checkIsFavorite(this.info);
      const checkResult = this.checkIsFavorite(this.card);
      if (checkResult) {
        this.deleteFavorite();
      } else {
        this.addNewFavorite();
      }
    },
    basketClick() {
      if (!this.card) return;
      const checkResult = this.checkIsInBasket(this.card);
      if (checkResult) {
        this.deleteFromBacket();
      } else {
        this.addToBacket();
      }
    },
    async getUsersFavoritesList() {
      if (this.userData) {
        try {
          const favorites = await favoritesApi.getFavorites(
            this.userData?.favorite.id
          );
          // const check = favorites?.find((item:any) => this.info?.id === item.id);
          const check = favorites?.find(
            (item: any) => this.card?.id === item.id
          );
          check ? (this.likeClicked = true) : (this.likeClicked = false);
          this.favoritesList = favorites;

          this.checkComplite = true;
          this.checkIsFavorite(this.card);
        } catch (err) {
          this.error = true;
        }
      }
    },
    async getUsersBasketList() {
      if (this.userData) {
        try {
          const basketProducts = await basketsApi.getBasketProducts(
            this.userData?.basket.id
          );
          const check = basketProducts?.find(
            (item: any) => this.card?.id === item.id
          );
          check ? (this.productAdded = true) : (this.productAdded = false);
          this.basketList = basketProducts;
          // this.checkComplite = true;
          this.checkIsInBasket(this.card);
        } catch (err) {
          this.error = true;
        }
      }
    },
    async addToBacket() {
      // const addedProduct = await productsApi.addProductToBasket(
      //   this.card?.id
      // );
      // this.basket=true;
      if (this.userData) {
        try {
          const addedProduct = await basketsApi.setBasketProduct(
            this.userData.basket.id,
            this.card
          );
          this.productAdded = true;
          // this.basket = true;
          this.getUsersBasketList();
        } catch (err) {
          console.log(err, "error");
        }
      }
    },
    async deleteFromBacket() {
      try {
        if (this.userData) {
          const deleteProduct = await basketsApi.deleteProductFromBasket(
            this.userData.basket.id,
            this.card
          );
          // const favorite = await favoritesApi.deleteFavorite(
          //  this.userData.favorite.id,
          //   this.info
          // );
        }
        this.productAdded = false;
        // this.basket = false;
        this.getUsersBasketList();
      } catch (err) {
        this.error = true;
      }
      // const deleteProduct = await productsApi.deleteProductFromBasket(
      //   this.card?.id
      // );
      // this.basket=false;
    },
    async addNewFavorite() {
      if (this.userData) {
        try {
          const favorite = await favoritesApi.setFavorite(
            this.userData.favorite.id,
            // this.info
            this.card
          );
          this.likeClicked = true;
          this.getUsersFavoritesList();
        } catch (err) {
          console.log(err, "error");
        }
      }
    },
    async deleteFavorite() {
      try {
        if (this.userData) {
          const favorite = await favoritesApi.deleteFavorite(
            this.userData.favorite.id,
            // this.info
            this.card
          );
        }
        this.likeClicked = false;
        this.getUsersFavoritesList();
      } catch (err) {
        this.error = true;
      }
    },
  },
  watch: {
    currentLocale: async function () {
      this.getCardInfoById();
    },
    userData: async function getFav() {
      this.getUsersFavoritesList();
      this.getUsersBasketList();
    },
    favoritesList: async function checkFav() {
      if (this.card) {
        //  this.checkIsFavorite(this.info)
        this.checkIsFavorite(this.card);
      }
    },
    basketList: async function checkBasket() {
      if (this.card) {
        //  this.checkIsFavorite(this.info)
        this.checkIsInBasket(this.card);
      }
    },
  },
};
</script>
<!-- @click="navigateTo(`/${card?.id}?title=${card?.attributes.description_small}`)" -->
<!-- :to="`/${card?.id}`" -->
<!-- src="https://www.svgrepo.com/show/408364/heart-love-like-favorite.svg" -->
<template>
  <div class="card_wrapper">
    <button class="button_like" @click="likeClick">
      <img
        class="like"
        v-if="!likeClicked && router.currentRoute.path !== '/user' "
        :src="like"
      />
      <img
        class="like"
        v-if="likeClicked && router.currentRoute.path !== '/user' "
        src="https://www.svgrepo.com/show/422454/heart-love-romantic.svg"
      />
    </button>
    <nuxt-link :to="`/${card?.id}`" class="card_link">
      <img :src="card?.attributes.image" alt="card-image" />
      <p class="description_small">{{ card?.attributes.description_small }}</p>
      <p>{{ card?.attributes.price }}</p>
    </nuxt-link>
    <button v-if="!productAdded && router.currentRoute.path !== '/user' " @click="basketClick">{{ $t("cardAdd") }}</button>
    <button v-if="productAdded && router.currentRoute.path !== '/user' " @click="basketClick">{{ $t("cardDelete") }}</button>
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
.card_link {
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

.button_like,
.button_like:hover,
.button_like:active,
.dark-mode .button_like,
.dark-mode .button_like:hover,
.dark-mode .button_like:active {
  background: transparent;
  padding: 0;
  align-self: end;
  border: none;
}
.like {
  width: 21px;
  height: 21px;
}
/*DarkMode*/
.dark-mode .button_like,
.dark-mode .button_like:hover,
.dark-mode .button_like:active {
  background: transparent;
  padding: 0;
  align-self: end;
}
.dark-mode button{
  /* background-color:  rgb(6, 89, 89); */
  /* background-color: rgb(168, 138, 134); */
  background-color: rgb(28, 27, 27);
  border: 1.7px solid  #2d2a2a;
    color: rgb(181, 173, 173);
}
.dark-mode button:active,
.dark-mode button:hover {
  /* background-color: rgb(13, 121, 121); */
  background-color: rgb(131, 110, 107);
  /* background-color: rgba(254, 190, 190, 0.42); */
}
.dark-mode 
button:active,
button:hover {
  background-color: #b49696;
}
/*DarkMode*/
</style>
