<script setup lang="ts">
import { userApi } from "../api-requests/user-api";
import { ordersApi } from "../api-requests/orders-api";
import { Form, Field, ErrorMessage } from 'vee-validate';

const props = defineProps(['login'])
const route = useRoute();
const router = useRouter();
let error=false;
let user= null;

const schema = {
  password: (value:string) => {
    if (!value) {
        return 'This field is required';
      }
     const regex = /^\d+$/;
      if (!regex.test(value)) {
        return 'This field must be a numeric type';
      }
      return true
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
  props.login(values)
  }

  // async function login(data:any) {             
  // try {
  // const res = await userApi.loginUser(data.email,data.password)
  // console.log(res)
  // if (res.jwt){
  //   localStorage.setItem('jwt', res.jwt)
  //    localStorage.setItem('userData', JSON.stringify(res.user))
  // router.push('/')
  //   // user({
  //   //   jwt:res.jwt,
  //   //   user:res.user
  //   // })
  // } else {
  //   if(res.error){
  //     alert(res.error.message)
  //   }
  
  // }
  //  } catch(error) {
  //   console.log(error)
  //     error = true
  //        }
  //      };
  async function userBearer(jwt:string,user:any){
    try {
      const res2 = userApi.userBearer(jwt,user)
      router.push('/')
    } catch (error) {
      error = true
      console.log(error)
    }
  }

</script>
<template>
    <div class="form_wrapper">
        <p class="title">{{ $t('authTitle')}}</p>
        <Form :validation-schema="schema" @submit="onSubmit"  v-slot="{ values }" class="form">
        <div class="field_box">
        <Field name="email" type="text" :validation-schema="schema" class="input"  :placeholder="$t('authEmail')"/>
      <ErrorMessage name="email"  class="error_text"/>
    </div>
    <div class="field_box">
        <Field name="password" :validation-schema="schema" class="input" :placeholder="$t('authPassword')"/>
      <ErrorMessage name="password" class="error_text"/>
    </div>
    <button type="submit" class="ordering"> {{ $t('authTitle') }}</button>
    </Form>
    </div>
  </template>
  
<style scoped>
/*DarkMode*/
.dark-mode input {
  background-color: transparent;
  border: 1px solid rgb(71, 70, 70);
  color: rgb(181, 173, 173);
  /* color: rgb(103, 101, 101); */
}
.dark-mode input::placeholder {
  color: rgb(181, 173, 173);
  /* color: rgb(103, 101, 101); */
}
.dark-mode .title{
  color: rgb(181, 173, 173);
  /* color: rgb(103, 101, 101); */
}

.dark-mode button{
  /* background-color:  rgb(15, 60, 60); */
  /* background-color:rgb(90, 68, 64); */
  background-color: rgb(28, 27, 27);
  border: 1.7px solid #2d2a2a;
  color: rgb(181, 173, 173);
}
.dark-mode button:active,
.dark-mode button:hover {
  /* background-color: rgb(13, 121, 121); */
  background-color: rgb(131, 110, 107);
}
/*DarkMode*/
.form_wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
align-items: center;
    padding: 20px 0 20px 20px;
    width: 100%;
}

.form{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

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
  padding: 15px 20px;
  }

.ordering:hover{
  background: #B49696;
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