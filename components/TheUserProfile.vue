<script>
import { basketsApi } from "../api-requests/basket-api";
import { ordersApi } from "../api-requests/orders-api";
import { userApi } from "../api-requests/user-api";

export default{
created(){
  this.getUser();
},
    data(){
        return{
            userData:JSON.parse(localStorage.getItem('userData')),
            ordersList:[],
            openOrderModal:false,
            modalOrderList: [],
        }
    },
    methods:{
//         async getUser(){
//       this.userInfo = JSON.parse(localStorage.getItem('userData'))
//   const user = await userApi.getUsersById(this.userInfo.id);
//   this.userData = user;
//   console.log(this.userData)
//     },
 
    async getOrders(id) {
      // const orders = await ordersApi.getOrders(id);
      const orders = await ordersApi.getOrdersCollectionById(id)
      this.ordersList = orders;
    },
    async getUser() {
      this.userInfo = JSON.parse(localStorage.getItem("userData"));
      const user = await userApi.getUsersById(this.userInfo.id);
      this.userData = user;
      this.getOrders(this.userData.order_collection.id)
    //  const orders = await ordersApi.getOrdersCollectionById()
      const modalList = await basketsApi.getBasketProducts(this.userData.basket.id);
      this.modalOrderList = modalList;
    },
    // async getModalOrderList() {
    //   this.userInfo = JSON.parse(localStorage.getItem("userData"));
    //   const user = await userApi.getUsersById(this.userInfo.id);
    //   this.userData = user;
    //   console.log(this.userData);
    //   this.getOrders(this.userData.order_collection.id)  
    // },
 
    }
}
</script>

<template>
    <div class="profile_wrapper">
        <p class="title">{{ $t('profile.title') }}</p>
        <div class="hello_wrapper">
        <p class="hello">{{`${$t('profile.hello')}, ${userData.username} !`}}</p>
        <img class="hello_image" src="https://www.svgrepo.com/show/402888/waving-hand.svg" />
    </div>
        <div class="grid_wrapper">
        <p class="orders">{{ $t('profile.orders') }}</p>
        <p class="status">{{ $t('profile.status') }}</p>
    </div>
    <!-- <div class="order_wrapper"> -->
    <div v-for="(item, index) in ordersList" :key="index" class="grid_wrapper">
<div class="order_info">
        <p>Name: {{ item.attributes.name }}</p>
        <p>Phone: {{ item.attributes.phone }}</p>
        <p>Email: {{ item.attributes.email }}</p>
        <p v-show="item.attributes.comment">Comment: {{ item.attributes.comment }}</p>
        <p>Delivery: {{ item.attributes.delivery }}</p>
        <p>Price: {{ item.attributes.price }} p.</p>
        <p>Pay: {{ item.attributes.pay }}</p>
        <button class="order_button" @click="openOrderModal = true">Products</button>
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

      </div>
    <!-- </div> -->
</template>
<style scoped>
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
    padding: 20px;
    margin: auto;
}
.title{
  font-size: 27px;
}
.status, .orders, .hello{
font-size: 21px;
}
p{
    text-align: center;
    justify-content: center;
}
.order_button{
  background-color: #efe1e1;
  color: white;
  align-self: stretch;
}
.order_button:hover, .order_button:active{
background-color: #b49696;
}
.hello_wrapper {
    display: flex;
    flex-direction: row;
    gap:20px;
}
.order_info{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 20px;
  gap:7px;
  font-size: 17px;
  background-color: white;
  color: #b49696;
  border-radius: 20px;
}
.order, .order_status{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 20px;
  gap:7px;
  font-size: 17px;
  background-color: white;
  color: #b49696;
  border-radius: 20px;
}
.order_status{
  align-items: center;
}
.grid_wrapper{
  /* grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  grid-gap: 17px;
  grid-auto-flow: dense; */
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  grid-auto-flow: dense; 
  grid-gap: 17px;
  /* padding-top: 20px; */
  width: 100%;
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