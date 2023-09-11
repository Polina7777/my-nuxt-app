<script setup lang="ts">
import { ordersApi } from "../api-requests/orders-api";
import { Form, Field, ErrorMessage } from 'vee-validate';

const delivery = [
  { type: "Курьером до двери", price: 100 },
  { type: "Пункт выдачи", price: 350 },
  { type:  "Почта России", price: 350 },
  { type: "Самовывоз", price: 0 },
];
// const delivery = [
//   { type: $t('orderingDeliveryType1'), price: 100 },
//   { type:  $t('orderingDeliveryType2'), price: 350 },
//   { type:   $t('orderingDeliveryType3'), price: 350 },
//   { type:  $t('orderingDeliveryType4'), price: 0 },
//];
const pay=[
{ type: "Оплата онлайн" },
  { type: "Оплата при получении" },
];
const title = "Оформление заказа";
const subtitle3 = "Способ оплаты:";
const subtitle4 = "Способ доставки:";
const delivery1 = "Курьером до двери";
const delivery2 = "Пункт выдачи";
const delivery3 = "Почта России";
const delivery4 = "Самовывоз";
const route = useRoute();
const router = useRouter();
const schema = {
    name: (value:string) => {
        if (!value) {
        return 'This field is required';
      }
     const regex =  /^[A-Za-zА-Яа-яЁё\s]+$/u;
      if (!regex.test(value)) {
        return 'This field must be a alphabet type';
      }
      return true
  },
  phone: (value:string) => {

    if (!value) {
        return 'This field is required';
      }
     const regex = /^\d+$/;
      if (!regex.test(value)) {
        return 'This field must be a numeric type';
      }
      return true
  },
  delivery: (value:string) => {
    if (value) {
      return true;
    }
    return 'You must choose a delivery method';
  },
 pay: (value:string) => {
    if (value) {
      return true;
    }
    return 'You must choose a payment method';
  },
  comment: () => {
    return true;
  },
  email:(value:string)=>{
    if (!value) {
        return 'This field is required';
      }
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return 'This field must be a valid email';
      }
      return true
  }
};

async function onSubmit(values:any) {
 const price = (values.delivery === delivery2 || values.delivery  === delivery3  ) ? Number(route.query.amount) + Number(350) : (values.delivery === delivery1) ? Number(route.query.amount) + Number(100): Number(route.query.amount);
 const order = await ordersApi.createNewOrder(values,price);
  if(values.pay === "Оплата онлайн"){
    router.push(`/pay?amount=${price}&id=${order.id}`);
  }else{
    router.push('/');
  }
  }

</script>
<template>
    <div class="form_wrapper">
        <!-- <p class="title">{{ title }}</p> -->
        <p class="title">{{ $t('orderingTitle')}}</p>
      <Form :validation-schema="schema" @submit="onSubmit"  v-slot="{ values }" class="form">
        <div class="field_box">
        <Field name="name" type="text" :validation-schema="schema" class="input"  :placeholder="$t('orderingName')"/>
      <ErrorMessage name="name"  class="error_text"/>
    </div>
    <div class="field_box">
        <Field name="phone" :validation-schema="schema" class="input" :placeholder="$t('orderingPhone')"/>
      <ErrorMessage name="phone" class="error_text"/>
    </div>
      <div class="field_box">
        <Field name="email" type="email" :validation-schema="schema" class="input"  placeholder="E-mail"/>
      <ErrorMessage name="email" class="error_text" />
    </div>
      <div class="field_box">
      <Field name="comment" type="text" :validation-schema="schema" class="comment_input" :placeholder="$t('orderingCommments')" />
      <ErrorMessage name="comment" class="error_text" />
    </div>
<div class="radio_wrapper">
        <div>
      <!-- <p>{{ subtitle4}}</p> -->
      <p>{{ $t('orderingSubTitle4')}}</p>
       <ul >
        <div class="field_box">
        <li class="radio_inputs" v-for="(item, index) in delivery"  :key="index">
          <label>
            <Field
            name="delivery"
              class="radio"
              type="radio"
              :value="item.type"
            />
            {{ ` ${item.type}   ${item.price} p. ` }}
          </label>
        </li>
        <ErrorMessage name="delivery" class="error_text" />
        </div>
      </ul>
    </div>
    <div >
      <!-- <p>{{ subtitle3 }}</p> -->
      <p>{{  $t('orderingSubTitle3') }}</p>
      <ul >
        <div class="field_box">
        <li class="radio_inputs" v-for="(item, index) in pay" :key="index">
          <label>
            <Field name="pay"
              class="radio"
              type="radio"
              :value="item.type"
             
            />
            {{ item.type}}
          </label>
        </li>
        <ErrorMessage name="pay" class="error_text"/>
        </div>
      </ul>
    </div>
  </div>
    <ThePriceBox :amount="(values.delivery === delivery2 || values.delivery  === delivery3  ) ? Number($route.query.amount) + Number(350) : (values.delivery === delivery1) ? Number($route.query.amount) + Number(100): Number($route.query.amount)" />
      <!-- <button class="ordering">Оформить заказ</button> -->
      <button class="ordering"> {{ $t('orderingTitle') }}</button>
    </Form>
    </div>
  </template>
  
<style scoped>
.form_wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
align-items: center;
    padding: 20px;
    width: 100%;
}
.form{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;

}
div{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  text-align: -webkit-center;
}

.field_box{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    width: 100%;
}
.error_text{
    padding-left: 21px;
    color: rgb(104, 9, 9);
}
.title{
    font-size: 27px;
}
.ordering{
 background: #efe1e1;
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  border: none;
  border-radius: 19px;
  color: white;
  align-self: center;
  padding: 20px 25px;
  }

.ordering:hover{
  background: #B49696;
}
.radio_inputs {
  display: flex;
  flex-direction: column;
  min-width: 300px;
}
label {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.input {
  margin: 20px;
  background:#efe1e1;
  padding: 11px;
  border-radius: 10px;
  border-color: transparent;
  width: 80%;
  min-width: 250px;
  position: relative;
}
.comment_input {
  height: 170px;
  margin: 20px;
  background:#efe1e1;
  padding: 7px;
  border-radius: 10px;
  border-color: transparent;
  width: 80%;
  min-width: 250px;
  position: relative;
}
.radio {
  margin: 10px;
  width: 20px;
  min-width: 20px;
}
p {
  padding: 11px;
  font-size: 21px;
}
ul {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  list-style: none;
  text-decoration: none;
  align-items: self-start;
  gap: 20px;
  margin: 17px 20px;
  padding: 0;
}
li{
    border: 2px solid #b49696;
    background: #efe1e1;
    border-radius: 7px;
    width: 300px;
    min-width: 250px;
    padding: 11px;
    color: white;
    font-size: 17px;

}
li:hover, a:hover{
  color: #8e7676;
  background: #f9ecec;
}
a {
  text-decoration: none;
  color: var(--text-color);
}

button:hover,
button:active {
  background: #b49696;
}
@media (max-width: 350px) {
  div{
    width: 100%;
  }
  
  .form_wrapper{
    padding: 10px;
  }
.form{
  width: 100%;
}
.radio_inputs {
  display: flex;
  flex-direction: column;
  min-width: 250px;
}
li{
    border: 2px solid #b49696;
    background: #efe1e1;
    border-radius: 7px;
    width: 250px;
    padding: 11px;
    color: white;
    font-size: 17px;

}
.title{
  padding-top: 20px;
  font-size: 21px;
}
.input{
min-width: 250px;
width: 250px;
}
}
</style>