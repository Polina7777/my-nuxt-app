<script setup lang="ts">
import { Form, Field, ErrorMessage } from "vee-validate";

const props = defineProps(['createReview'])

const schema = {
  review: (value: string) => {
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
async function onSubmit(values: any) {
  console.log(values);
  props.createReview(values.review)
}

</script>
<template>
  <div class="form_wrapper">
    <p class="title">{{ "Review" }}</p>
    <Form
      :validation-schema="schema"
      @submit="onSubmit"
      v-slot="{ values }"
      class="form"
    >
      <div class="field_box">
        <Field
          name="review"
          type="text"
          :validation-schema="schema"
          class="input"
          placeholder="Enter review"
        />
        <ErrorMessage name="review" class="error_text" />
      </div>
      <button type="submit" class="ordering">{{ "add Review" }}</button>
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
.dark-mode .title {
  color: rgb(181, 173, 173);
}

.dark-mode button {
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
  padding: 20px 0 20px 20px;
  width: 100%;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
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
  width: 90%;
  min-width: 320px;
  height: 70px;
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
