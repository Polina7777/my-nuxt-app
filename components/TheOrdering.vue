<script>
import { ordersApi } from "../api-requests/orders-api";
import { useForm } from 'vee-validate';
import * as yup from 'yup';

// import { useForm } from "vee-validate";
export default {
// created(){
// this.amountFunction()
// },

  data() {
    return {
      selectedOptionPay: null,
      selectedOptionDelivery: null,
      amount: ref(0),
      orderingData:{
        name:'',
        phone:'',
      email:'',
      comment: '',
      delivery:{type:'',price: ''},
      pay:'',
      price:''
      },
      //      name:'',
      // phone:'',
      // email:'',
      // comment: '',
      title : "Оформление заказа",
subtitle1 : "Ваши данные",
subtitle2 : "Ваш заказ",
subtitle3 : "Способ оплаты",
subtitle4 : "Способ доставки",
delivery1 : "Курьером до двери",
delivery2 : "Пункт выдачи",
delivery3 : "Почта России",
delivery4 : "Самовывоз",
delivery : [
  { type: "Курьером до двери", price: 100 },
  { type: "Пункт выдачи", price: 350 },
  { type:  "Почта России", price: 350 },
  { type: "Самовывоз", price: 0 },
],
pay:[
{ type: "Оплата онлайн" },
  { type: "Оплата при получении" },
],

    };
    
  },
  methods: {
    async order(){
      console.log(this.orderingData);
      const order = await ordersApi.createNewOrder(this.orderingData);
      this.$router.push('/basket');
      console.log(order)
    },
    amountFunction(){
      const deliveryPrice = this.orderingData.delivery.type === this.delivery1 ? 100 : this.orderingData.delivery.type === this.delivery2 || this.orderingData.delivery.type === this.delivery3 ? 350 : 0;
      console.log(deliveryPrice)
     this.amount =  $route.query.amount + deliveryPrice;
     console.log(this.amount)
     
    }
  },
  watch: {
   orderingData: async function fun(){
  this.amountFunction

    }, 
   
  },
};




</script>

<template>
  <!-- <form> -->
    <p class="title">{{ title }}</p>
    <input  v-model="orderingData.name" placeholder="ФИО" />
    <!-- <span>{{ errors.name }}</span> -->

    <input v-model="orderingData.phone" placeholder="Телефон" />
    <!-- <span>{{ errors.phone }}</span> -->

    <input  v-model="orderingData.email" placeholder="E-mail"  type="email"/>
    <!-- <span>{{ errors.email }}</span> -->

    <input class="comment_input"  v-model="orderingData.comment" placeholder="Комментарий" />
    <!-- <span>{{ errors.email }}</span> -->

    <div class="radio_inputs">
      <p>{{ subtitle4 }}</p>
      <ul>
        <li v-for="(item, index) in delivery" :key="index">
          <label>
            <input
              class="radio"
              type="radio"
              :value="item.type"
              v-model="orderingData.delivery"
            />
            {{ ` ${item.type}   ${item.price} p. ` }}
          </label>
        </li>
      </ul>
    </div>

    <div class="radio_inputs">
      <p>{{ subtitle3 }}</p>
      <ul>
        <li v-for="(item, index) in pay" :key="index">
          <label>
            <input
              class="radio"
              type="radio"
              :value="item.type"
              v-model="orderingData.pay"
            />
            {{ item.type}}
          </label>
        </li>
      </ul>
    </div>

    <ThePriceBox :amount="$route.query.amount" />
    <button @click="order">Оформить заказ</button>
  <!-- </form> -->
</template>

<style scoped>
.radio_inputs {
  display: flex;
  flex-direction: column;
  min-width: 200px;
}
label {
  display: flex;
  flex-direction: row;
}
input {
  margin: 20px;
}
.comment_input {
  height: 170px;
}
.radio {
  margin: 10px;
  width: 20px;
  min-width: 20px;
}
ul {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
}
p {
  padding: 21px;
}
button {
  background: #efe1e1;
  margin: 20px;
}

button:hover,
button:active {
  background: #b49696;
}
</style>
