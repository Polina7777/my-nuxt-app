<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import { ordersApi } from "../api-requests/orders-api";

const route = useRoute();
const router = useRouter();
const schema = {
  number: (value) => {
    if (!value) {
      return "This field is required";
    }
    const regex =
      /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|6(?:011|5[0-9][0-9])[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$/;
    // if (!regex.test(value)) {
    //   return "Invalid number";
    // }
    return true;
  },
  date: (value) => {
    if (!value) {
      return "This field is required";
    }
    const regex = /^(0[1-9]|1[0-2])\/(2[2-9]|[3-9][0-9])$/;
    if (!regex.test(value)) {
      return "Invalid date";
    }
    return true;
  },

  code: (value) => {
    if (!value) {
      return "This field is required";
    }
    const regex = /^\d{3}$/;
    if (!regex.test(value)) {
      return "Invalid CVC/CVV";
    }
    return true;
  },
};

async function onSubmit(values) {
  const id = route.query.id;
  const paidOnlineField = await ordersApi.payByCardOnlineFields(id, values);
  router.push("/");
}
</script>

<template>
  <Form :validation-schema="schema" @submit="onSubmit" v-slot="{ values }">
    <div class="card_pay">
      <p class="title">{{ $t('payTitle') }}</p>
      <p>{{ `${$t('paySubTitle')} ${$route.query.amount} p.` }}</p>
      <Field
        name="number"
        :validation-schema="schema"
        class="input"
        :placeholder="$t('payCardNumber')"
      />
      <ErrorMessage name="number" class="error_text" />
      <div class="card_info">
        <div class="field_box">
          <Field
            name="date"
            :validation-schema="schema"
            class="input"
            placeholder="MM/YY"
          />
          <ErrorMessage name="date" class="error_text" />
        </div>
        <div class="field_box">
          <Field
            name="code"
            :validation-schema="schema"
            class="input"
            placeholder="CVC/CVV"
          />
          <ErrorMessage name="code" class="error_text" />
        </div>
      </div>
      <!-- <button>Оплатить</button> -->
      <button>{{ $t('payPay') }}</button>
    </div>
  </Form>
  <!-- <NuxtLink to="/" class="return">Вернуться в магазин</NuxtLink> -->
  <NuxtLink to="/" class="return">{{ $t('payReturn') }}</NuxtLink>
</template>

<style scoped>
.card_pay {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 410px;
  padding: 20px;
  border: 2px solid rgba(155, 154, 154, 0.152);
  border-radius: 10px;
  margin: 10px;
}
.card_info {
  display: flex;
  flex-direction: row;
  gap: 20px;
}
.input {
  padding: 10px;
  background: #d2f1f8;
  min-width: 100px;
  width: 100%;
}
.field_box {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.error_text {
  padding-left: 21px;
  color: rgb(104, 9, 9);
}
button {
  background: #7ab2be;
  color: white;
}
button:hover {
  background: #a9c8cf;
  color: white;
}
.number {
  margin-top: 20px;
}
.return {
  text-decoration: underline;
}
</style>
