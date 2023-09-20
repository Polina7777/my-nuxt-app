<script>
import { basketsApi } from "../api-requests/basket-api";
import { ordersApi } from "../api-requests/orders-api";
import { userApi } from "../api-requests/user-api";
import { adressesApi } from "../api-requests/adresses-api";
import ok from "../static/images/ok.svg";
import pen from "../static/images/pen.svg";
export default {
  created() {
    this.getUser();
    this.showUserInfo = true;
    
  },
  beforeUpdate() {
    this.currentLocale = this.$i18n.locale;
  },
  beforeMount() {
    this.currentLocale = this.$i18n.locale;
  },

  data() {
    return {
      ok: ok,
      pen: pen,
      userData: JSON.parse(localStorage.getItem("userData")),
      currentLocale: this.$i18n.locale,
      ordersList: [],
      openOrderModal: false,
      modalOrderList: [],
      showUserInfo: true,
      showAdressInfo: false,
      showUserInfo: false,
      showOrdersInfo: false,
      showReviewsInfo: false,
      userNameChange: false,
      emailChange: false,
      dateOfBirthChange: false,
      userInfo: [],
      userAdress: [],
      changedData: "",
    };
  },
  methods: {
    async getOrders(id) {
      const orders = await ordersApi.getOrdersCollectionById(id);
      this.ordersList = orders;
    },
    async getUser() {
      this.userInfo = JSON.parse(localStorage.getItem("userData"));
      const user = await userApi.getUsersById(this.userInfo.id);
      this.userData = user;
      this.userInfo = [
        {
          label: this.$t("profile.name"),
          data: this.userData.name,
          change: false,
          field: "name",
        },
        {
          label: this.$t("profile.surname"),
          data: this.userData.surname,
          change: false,
          field: "surname",
        },
        {
          label: "Email",
          data: this.userData.email,
          change: false,
          field: "email",
        },
        {
          label: this.$t("profile.dateOfBirth"),
          data: this.userData.dateOfBirth,
          change: false,
          field: "dateOfBirth",
        },
      ];
      this.userAdress = [
        {
          label: this.$t("profile.adress"),
          data: this.userData.adresses[0].adress,
          change: false,
          field: "adress",
        },
        {
          label: this.$t("profile.city"),
          data: this.userData.adresses[0].city,
          change: false,
          field: "city",
        },
        {
          label: this.$t("profile.postcode"),
          data: this.userData.adresses[0].postcode,
          change: false,
          field: "postcode",
        },
        {
          label: this.$t("profile.country"),
          data: this.userData.adresses[0].country,
          change: false,
          field: "country",
        },
      ];

      this.getOrders(this.userData.order_collection.id);
      //  const orders = await ordersApi.getOrdersCollectionById()
      const modalList = await basketsApi.getBasketProducts(
        this.userData.basket.id
      );
      this.modalOrderList = modalList;
    },
    async changeUserInfo(field, item) {
      const changedData = await userApi.changeUserData(
        this.userData.id,
        field,
        this.changedData
      );
      // item.change = false;
      this.getUser();
      console.log(changedData);
    },
    async changeAdressInfo(field, item) {
      const changedData = await adressesApi.changeAdressData(
        this.userData.adresses[0].id,
        field,
        this.changedData
      );
      // item.change = false;
      this.getUser();
      console.log(changedData);
    },
    async changeInput(item, value) {
        item.change = true;
      this.changedData = value;
    },
  },
  watch: {
    currentLocale: async function () {
      this.getUser();
    },
  },
};
</script>

<template>
  <div class="profile_box">
  <div class="profile_wrapper">
    <p class="title">{{ $t("profile.title") }}</p>
    <div class="hello_wrapper">
      <p class="hello">
        {{ `${$t("profile.hello")}, ${userData.name} ${userData.surname}  !` }}
      </p>
      <img
        class="hello_image"
        src="https://www.svgrepo.com/show/402888/waving-hand.svg"
      />
    </div>
    <div class="buttons_wrapper">
      <button :class="showUserInfo?'show':null"
        @click="
          {
            showUserInfo = !showUserInfo;
            showAdressInfo = false;
            showOrdersInfo = false;
            showReviewsInfo = false;
          }
        "
      >
      {{ $t("profile.myDetails") }}
      </button>
      <button :class="showAdressInfo?'show':null"
        @click="
          {
            showAdressInfo = !showAdressInfo;
            showUserInfo = false;
            showOrdersInfo = false;
            showReviewsInfo = false;
          }
        "
      >
      {{ $t("profile.myAdresses") }}
      </button>
      <button
      :class="showOrdersInfo?'show':null"
        @click="
          {
            showOrdersInfo = !showOrdersInfo;
            showUserInfo = false;
            showAdressInfo = false;
            showReviewsInfo = false;
          }
        "
      >
      {{ $t("profile.myOrders") }}
      </button>
      <button
      :class="showReviewsInfo?'show':null"
        @click="
          {
            showReviewsInfo = !showReviewsInfo;
            showUserInfo = false;
            showAdressInfo = false;
            showOrdersInfo = false;
          }
        "
      >
      {{ $t("profile.myReviews") }}
      </button>
    </div>
    <p v-show="showUserInfo" class="subtitle">{{ $t("profile.myDetails") }}</p>
    <div class="info_wrapper adress_info" v-show="showUserInfo">
      <div v-for="(item, index) in userInfo" :key="index" class="user_item">
        <label>{{ item.label }}</label>
        <!-- :value="item.data" -->
        <div class="input_wrapper">
          <input
            :placeholder="item.data"
            @input="(event) => changeInput(item, event.target.value)"
          />
          <img
            v-show="item.change && changedData"
            @click="changeUserInfo(item.field, item)"
            :src="ok"
          />
          <img v-show="!item.change || changedData === ''" :src="pen" />
        </div>
      </div>
    </div>
    <!-- </div> -->
    <p v-show="showAdressInfo" class="subtitle">{{ $t("profile.myAdresses") }}</p>
    <div class="info_wrapper adress_info" v-show="showAdressInfo">
      <div
        v-for="(item, index) in userAdress"
        :key="index"
        v-if="userData.adresses"
        class="user_item"
      >
        <label>{{ item.label }}</label>
        <div class="input_wrapper">
          <input
            :placeholder="item.data"
            @change="(event) => changeInput(item, event.target.value)"

          />
          <img
            v-show="item.change && changedData"
            @click="changeAdressInfo(item.field, item)"
            :src="ok"
          />
          <img v-show="!item.change || changedData === ''" :src="pen" />
        </div>
      </div>
      <p v-if="!userData.adresses">"Add adress"</p>
    </div>
    <p v-show="showOrdersInfo" class="subtitle">{{ $t("profile.myOrders") }}</p>
    <div class="grid_wrapper info_wrapper" v-show="showOrdersInfo">
      <p class="orders">{{ $t("profile.orders") }}</p>
      <p class="status">{{ $t("profile.status") }}</p>
    </div>
    <div
      v-for="(item, index) in ordersList"
      :key="index"
      class="grid_wrapper info_wrapper"
      v-show="showOrdersInfo"
    >
      <div class="order_info">
        <p>Name: {{ item.attributes.name }}</p>
        <p>Phone: {{ item.attributes.phone }}</p>
        <p>Email: {{ item.attributes.email }}</p>
        <p v-show="item.attributes.comment">
          Comment: {{ item.attributes.comment }}
        </p>
        <p>Delivery: {{ item.attributes.delivery }}</p>
        <p>Price: {{ item.attributes.price }} p.</p>
        <p>Pay: {{ item.attributes.pay }}</p>
        <button class="order_button" @click="openOrderModal = true">
          Products
        </button>
        <Teleport to="body">
          <TheOrderModal
            :openOrderModal="openOrderModal"
            @close="openOrderModal = false"
            :items="modalOrderList"
            :orderTitle="`${$t('order')} ${item.id}`"
          />
        </Teleport>
      </div>
      <!-- {{ item }} -->
      <p class="order_status">В обработке</p>
    </div>

    <div class="info_wrapper" v-show="showReviewsInfo">
      <p v-show="showReviewsInfo" class="subtitle">{{ $t("profile.myReviews") }}</p>
    </div>
  </div>
</div>
</template>
<style scoped>
/*DarkMode*/
.dark-mode .profile_wrapper{
 background-color: rgb(28, 27, 27);
  border: 1.7px solid #2d2a2a;
  color: rgb(181, 173, 173);
}
.dark-mode .info_wrapper{
 background-color: rgb(52, 49, 49);
  border: 1.7px solid #2d2a2a;
  color: rgb(181, 173, 173);
}
.dark-mode .grid_wrapper{
  background-color: rgb(73, 70, 70);
 border: none;
  background-color: transparent;
  color:rgb(114, 95, 91);
}
.dark-mode .order_info, .dark-mode .order_status{
 background-color: rgb(52, 49, 49);
  border: 1.7px solid #2d2a2a;
  color: rgb(181, 173, 173);
}
.dark-mode input {
  background-color: transparent;
  border: 2px solid rgb(163, 158, 158);
  color: rgb(103, 101, 101);
  margin: 5px 0;
}
.dark-mode input::placeholder {
  color: rgb(135, 130, 130);
}
.dark-mode button{
  background-color: transparent;
  color: rgb(181, 173, 173);
}
.dark-mode .order_button{
  background-color: rgb(73, 71, 71);
  border: 1.7px solid #2d2a2a;
  color: rgb(181, 173, 173);
}
.dark-mode button:active,
.dark-mode button:hover
{
  background-color: rgb(131, 110, 107);
}

/*DarkMode*/

.profile_wrapper {
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-self: center;
  align-items: center;
  background: #efe1e1;
  border-radius: 20px;
  color: white;
  width: 80%;
  padding: 20px 20px 40px;
  margin: 5% auto;
}

.profile_box{
  min-height: 570px;
}
.input_wrapper {
  width: 100%;
  justify-content: start;
}
input {
  width: 95%;
}
.user_item {
  width: 100%;
}
.subtitle {
  font-size: 21px;
}
.user_info,
.adress_info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 20px;
  gap: 7px;
  font-size: 17px;
  background-color: white;
  color: #b49696;
  border-radius: 20px;
}
.info_wrapper,
.user_info {
  width: 70%;
  min-width: 300px;
}
.title {
  font-size: 27px;
}
.status,
.orders,
.hello {
  font-size: 21px;
}
p {
  text-align: center;
  justify-content: center;
}
.order_button,
button {
  background-color: #efe1e1;
  color: white;
  align-self: stretch;
}
.order_button:hover,
.order_button:active,
button:hover,
button:active {
  background-color: #b49696;
}
.hello_wrapper {
  display: flex;
  flex-direction: row;
  gap: 20px;
}
.order_info,
.adress_info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 20px;
  gap: 7px;
  font-size: 17px;
  background-color: white;
  color: #b49696;
  border-radius: 20px;
}
.order,
.order_status {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 20px;
  gap: 7px;
  font-size: 17px;
  background-color: white;
  color: #b49696;
  border-radius: 20px;
}
.order_status {
  align-items: center;
}
.grid_wrapper {
  /* grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  grid-gap: 17px;
  grid-auto-flow: dense; */
  display: grid;
  width: 70%;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  grid-auto-flow: dense;
  grid-gap: 17px;
  /* padding-top: 20px; */
  /* border: 1px solid white; */
  border-radius: 20px;
}
/* .status {
  background-color: lime;
}

.orders {
  background-color: yellow;
} */
</style>
