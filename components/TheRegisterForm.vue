<script setup lang="ts">
import { userApi } from "../api-requests/user-api";
import { favoritesApi } from "../api-requests/favorites-api";
import { basketsApi } from "../api-requests/basket-api";
import { ordersApi } from "../api-requests/orders-api";
import { Form, Field, ErrorMessage } from "vee-validate";
import { giftcardApi } from "../api-requests/giftcard-api";

const props = defineProps(['register'])
const schema = {
  name: (value: string) => {
    if (!value) {
      return "This field is required";
    }
    const regex = /^[A-Za-zА-Яа-яЁё\s]+$/u;
    if (!regex.test(value)) {
      return "This field must be a alphabet type";
    }
    return true;
  },
  surname: (value: string) => {
    if (!value) {
      return "This field is required";
    }
    const regex = /^[A-Za-zА-Яа-яЁё\s]+$/u;
    if (!regex.test(value)) {
      return "This field must be a alphabet type";
    }
    return true;
  },
  dateOfBirth: (value: string) => {
    if (!value) {
      return "This field is required";
    }
    // const regex = /^[A-Za-zА-Яа-яЁё\s]+$/u;
    // if (!regex.test(value)) {
    //   return "This field must be a alphabet type";
    // }
    return true;
  },
  password: (value: string) => {
    if (!value) {
      return "This field is required";
    }
    const regex = /^\d+$/;
    if (!regex.test(value)) {
      return "This field must be a numeric type";
    }
    return true;
  },
  email: (value: string) => {
    if (!value) {
      return "This field is required";
    }
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!regex.test(value)) {
      return "This field must be a valid email";
    }
    return true;
  },
  confirmPassword: (value: string) => {
    if (!value) {
      return "This field is required";
    }
    const regex = /^\d+$/;
    if (!regex.test(value)) {
      return "This field must be a numeric type";
    }
    return true;
  },
};

async function onSubmit(values: any) {
 props.register(values);
};

</script>
<template>
  <div class="form_wrapper">
    <p class="title">{{ $t("regTitle") }}</p>
    <Form
      :validation-schema="schema"
      @submit="onSubmit"
      v-slot="{ values }"
      class="form"
    >
      <div class="field_box">
        <Field
          name="name"
          type="text"
          :validation-schema="schema"
          class="input"
          :placeholder="$t('regName')"
        />
        <ErrorMessage name="name" class="error_text" />
      </div>
      <div class="field_box">
        <Field
          name="surname"
          type="text"
          :validation-schema="schema"
          class="input"
          :placeholder="$t('regSurname')"
        />
        <ErrorMessage name="surname" class="error_text" />
      </div>
      <div class="field_box">
        <Field
          name="dateOfBirth"
          :validation-schema="schema"
          class="input"
          :placeholder="$t('regDateOfBirth')"
        />
        <ErrorMessage name="dateOfBirth" class="error_text" />
      </div>
      <div class="field_box">
        <Field
          name="email"
          type="text"
          :validation-schema="schema"
          class="input"
          :placeholder="$t('regEmail')"
        />
        <ErrorMessage name="email" class="error_text" />
      </div>
      <div class="field_box">
        <Field
          name="password"
          :validation-schema="schema"
          class="input"
          :placeholder="$t('regPassword')"
        />
        <ErrorMessage name="password" class="error_text" />
      </div>
      <!-- <div class="field_box">
        <Field
          name="confirm_password"
          :validation-schema="schema"
          class="input"
          :placeholder="$t('regConfirmPassword')"
        />
        <ErrorMessage name="confirm_password" class="error_text" />
      </div> -->
      <button @click="onSubmit(values)" class="ordering">{{ $t("regTitle") }}</button>
    </Form>
  </div>
</template>

<style scoped>
/*DarkMode*/
.dark-mode input {
  background-color: transparent;
  border: 1px solid rgb(71, 70, 70);
  color: rgb(181, 173, 173);
}
.dark-mode input::placeholder {
  color: rgb(181, 173, 173);
}
.dark-mode .title{
  color: rgb(181, 173, 173);
}

.dark-mode button{
  background-color: rgb(28, 27, 27);
  border: 1.7px solid #2d2a2a;
  color: rgb(181, 173, 173);
}
.dark-mode button:active,
.dark-mode button:hover {
  background-color: rgb(131, 110, 107);
}
/*DarkMode*/
.form_wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0 20px;
  width: 100%;
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
}

div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  text-align: -webkit-center;
}


.field_box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 100%;
}
.error_text {
  padding-left: 21px;
  color: rgb(104, 9, 9);
}
.title {
  font-size: 27px;
}
.ordering {
  background: #efe1e1;
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  border: none;
  border-radius: 19px;
  color: white;
  align-self: center;
  padding: 15px 20px;
}

.ordering:hover {
  background: #b49696;
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
  margin:  20px 0;
  background: #efe1e1;
  padding: 11px;
  border-radius: 10px;
  border-color: transparent;
  width: 100%;
  min-width: 250px;
  position: relative;
}
.comment_input {
  height: 170px;
  margin: 20px;
  background: #efe1e1;
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
li {
  border: 2px solid #b49696;
  background: #efe1e1;
  border-radius: 7px;
  width: 300px;
  min-width: 250px;
  padding: 11px;
  color: white;
  font-size: 17px;
}
li:hover,
a:hover {
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
  div {
    width: 100%;
  }

  .form_wrapper {
    padding: 10px;
  }
  .form {
    width: 100%;
  }
  .radio_inputs {
    display: flex;
    flex-direction: column;
    min-width: 250px;
  }
  li {
    border: 2px solid #b49696;
    background: #efe1e1;
    border-radius: 7px;
    width: 250px;
    padding: 11px;
    color: white;
    font-size: 17px;
  }
  .title {
    padding-top: 20px;
    font-size: 21px;
  }
  .input {
    min-width: 250px;
    width: 250px;
  }
}
</style>
