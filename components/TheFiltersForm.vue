<script setup lang="ts">
import { userApi } from "../api-requests/user-api";
import { ordersApi } from "../api-requests/orders-api";
import { Form, Field, ErrorMessage } from "vee-validate";
import { filterProductsByFiltersForm, productsApi } from "../api-requests/products-api";

const props = defineProps({
filterListByFiltersForm:Function,
})
const brands = ['Deoproce','EYENLIP','GRACE DAY',"J:ON",'Meishoku','THE SAEM']
const route = useRoute();
const router = useRouter();
const schema = {
  brand: (value: string) => {
    if (!value) {
      return "This field is required";
    }
    // const regex = /^[A-Za-zА-Яа-яЁё\s]+$/u;
    // if (!regex.test(value)) {
    //   return "This field must be a alphabet type";
    // }
    return true;
  },

};
let openFilterModal = false;
const {locale} = useI18n();
const currentLocale = locale.value
async function getUser() {
  const userInfo = JSON.parse(localStorage.getItem("userData") as string);
  const user = await userApi.getUsersById(userInfo.id);
  const userData = user;
}

async function onSubmit(values: any) {
    props.filterListByFiltersForm(values.brand)
}
</script>
<template>
  <div class="form_wrapper">
    <p class="title">{{ 'Filter by Brand' }}</p>
    <Form
      :validation-schema="schema"
      @submit="onSubmit"
      v-slot="{ values }"
      class="form"
    >

      <div class="radio_wrapper">
        <div>
          <!-- <p>{{ $t("orderingSubTitle4") }}</p> -->
          <ul>
            <div class="field_box">
              <li
                class="radio_inputs"
                v-for="(item, index) in brands"
                :key="index"
              >
                <label>
                  <Field
                    name="brand"
                    class="radio"
                    type="radio"
                    :value="item"
                  />
                  {{ item }}
                  <!-- {{ ` ${item.type}   ${item.price} p. ` }} -->
                </label>
              </li>
              <ErrorMessage name="brand" class="error_text" />
            </div>
          </ul>
        </div>
        <div>
          <!-- <p>{{ subtitle3 }}</p> -->
          <!-- <p>{{ $t("orderingSubTitle3") }}</p> -->
        </div>
      </div>

      <!-- <Teleport to="body">
        <TheTextModal
          :openTextModal="openTextModal"
          @close="openTextModal = false"
          :message="$t('orderAccepted')"
        />
      </Teleport> -->
      <!-- @click="openTextModal = true" -->
      <button class="ordering" >{{"Filter" }}</button>
    </Form>

  </div>
</template>

<style scoped>
/*DarkMode*/
.dark-mode .form_wrapper{
  color: rgb(181, 173, 173);
}
.dark-mode input {
  background-color: transparent;
  border: 2px solid rgb(163, 158, 158);
  color: rgb(181, 173, 173);
  margin: 5px 0;
}
.dark-mode input::placeholder {
  color: rgb(181, 173, 173);
}
.dark-mode   li {
  background-color: rgb(52, 49, 49);
  border: 1.7px solid #2d2a2a;
  color: rgb(181, 173, 173);
  }
  .dark-mode li:active, .dark-mode li:hover{
    background-color: rgb(131, 110, 107);
    color: rgb(181, 173, 173);
  }
  .dark-mode button:active,
.dark-mode button:hover
{
  background-color: rgb(131, 110, 107);
}
.dark-mode .ordering {
  background-color: rgb(28, 27, 27);
  border: 1.7px solid #2d2a2a;
  color: rgb(181, 173, 173);
}
/*DarkMode*/
.form_wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
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
  padding: 20px 25px;
}

.ordering:hover {
  background: #b49696;
}
.radio_inputs {
  display: flex;
  flex-direction: column;
  /* min-width: 300px; */
}
label {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.input {
  margin: 20px;
  background: #efe1e1;
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
