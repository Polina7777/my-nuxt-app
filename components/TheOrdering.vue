<script setup>
import { useForm } from 'vee-validate';

   let selectedOptionPay = null;
   let selectedOptionDelivery = null;

// Validation, or use `yup` or `zod`
function required(value) {
  return value ? true : 'This field is required';
}

// Create the form
const { defineInputBinds, handleSubmit, errors } = useForm({
  validationSchema: {
    name: required,
    phone: required,
    email:required,
    selectedOptionPay:required,
    selectedOptionDelivery:required,
  },
});

// Define fields
const name = defineInputBinds('name');
const phone = defineInputBinds('phone');
const email = defineInputBinds('email');
const comment = defineInputBinds('comment');

// Submit handler
const onSubmit = handleSubmit(values => {
  // Submit to API
  console.log('dsfsdv')
  console.log(values);
});
const title = 'Оформление заказа';
const subtitle1 = 'Ваши данные';
const subtitle2 = 'Ваш заказ';
const subtitle3 = 'Способ оплаты';
const subtitle4 = 'Способ доставки';
const delivery1 = 'Курьером до двери';
const delivery2 = 'Пункт выдачи';
const delivery3 = 'Почта России';
const delivery4 = 'Самовывоз';
const delivery =[
    {type:delivery1,price:'100 р.'},
    {type:delivery2,price:'350 р.'},
    {type:delivery3,price:'350 р.'},
    {type:delivery4,price:'0 р.'},
]

</script>

<template>
  <form >
    <p class="title">{{ title }}</p>
    <input v-bind="name" placeholder="ФИО"/>
    <span>{{ errors.name }}</span>

    <input v-bind="phone" placeholder="Телефон"/>
    <span>{{ errors.phone }}</span>

    <input v-bind="email" placeholder="E-mail" />
    <span>{{ errors.email }}</span>

    <input class="comment_input" v-bind="comment" placeholder="Комментарий"/>
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
        v-model="selectedOptionDelivery"
      />
    {{` ${item.type}   ${item.price} `}}
    </label>
        </li>
    </ul>
</div>


<div class="radio_inputs">
    <p> {{ subtitle3 }}</p>
    <label>
      <input class="radio"
        type="radio"
        value="Оплата онлайн"
        v-model="selectedOptionPay"
      />
     Оплата онлайн
    </label>

    <label>
      <input
      class="radio"
        type="radio"
        value="Оплата при получении"
        v-model="selectedOptionPay"
      />
      Оплата при получении
    </label>
</div>
    <button @click="onSubmit"> Оформить заказ </button>
  </form>
</template>

<style scoped>
.radio_inputs{
    display: flex;
    flex-direction: column;
    /* width: 21%; */
    min-width: 200px;
}
label{
    display: flex;
    flex-direction: row;
}
input{
   margin: 20px;
}
.comment_input{
    height: 170px;
}
.radio{
    margin: 10px;
   width: 20px;
   min-width: 20px;
}
ul{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
 align-items: flex-start;
}
p{
    padding: 20px;
}
button{
    background: #EFE1E1;
    margin: 20px;
}

.button:hover,
.button:active {
  background: #B49696;
}

</style>