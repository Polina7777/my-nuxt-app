<script lang="ts" setup>
const props = defineProps({
  openOrderModal: Boolean,
  items:Object,
  orderTitle:String,
})
</script>


<template>
  <Transition name="modal">
    <div v-if="openOrderModal" class="modal-mask">
      <div class="modal-container">
        <div class="modal-header">
          <button class="modal-default-button" @click="$emit('close')">x</button>
          <slot name="header"></slot>
        </div>
        <div class="modal-body">
          <slot name="body">
        <TheOrderList :titleProps="orderTitle" :itemList="items"/>
          </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>
<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(201, 171, 171, 0.163);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease;
}
#show-modal {
  padding: 5px 10px;
  height: 35px;
  border: 2px solid#b49696;
  background-color: #efd9d9 ;
  border-radius: 10px;
  color: #b49696;
  font-size: 1rem;
  margin: 0 5px;
  z-index: 1000;
}
.popup_wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.popup_wrapper,
.modal-container {
  position: absolute;
  background-color: #ffffff ;
  border-radius: 10px;
  margin: auto;
  gap: 0;
  z-index: 1000;
}
.dark-mode .modal-mask{
  background-color:  rgba(144, 123, 122, 0.591);
}
.dark-mode .modal-container{
 /* background-color: rgb(57, 85, 85); */
 background-color: rgb(168, 138, 134);
 border: 2px solid  rgb(214, 194, 191);

}
.dark-mode .modal-default-button{
  background-color: transparent;
  color: rgb(214, 194, 191);
}
.close {
  padding: 5px 8px;
  position: absolute;
  left: 40.7%;
  top: 28%;
  background: transparent;
  color: gray;
  z-index: 100;
}
ul{
    padding: 0 0 0 10px;
}
li{
  text-align: start;
}

#popup_list_one {
  position: relative;
  font-size: 20px;
  min-height: 410px;
  gap: 20px;
  color: white;
  max-width: 320px;
  min-width: 250px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

#popup_list_one_item {
  font-size: 25px;
}
#popup_list_two_item {
  color: black;
  font-size: 15px;
}
#popup_list_two_item:hover {
  color: #b49696;
}
.popup_item {
  font-size: 15px;
  margin: 0;
}
.popup_button {
  background-color: #b49696;
}
.popup_list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
text-align: start;
  background: #d7b5b5;
  text-align: start;
  gap: 10px;
  font-size: 15px;
  padding: 10px;
  margin: 0;
  min-width: 170px;
  min-height: 410px;
}
#popup_list_two {
  display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: flex-start;

  position: absolute;
  left: 250px;
  top: 0px;
  color: black;
  background: white;
  text-align: start;
  min-height:410px;
  padding: 10px 10px 10px 20px;
  max-width: 320px;
  min-width: 250px;
  width:100%;
}
.modal-default-button {
  padding: 5px 8px;
  background: #ffffff;
  /* border: 2px solid #d7b5b5;
  background-color: #d7b5b5; */
  border-radius: 10px;
  color:  #d7b5b5;
  font-size: 15px;
}
.logo {
  width: 270px;
  height: 100px;
  padding-left: 50px;
}

a {
  color: white;
  font-size: 21px;
}
.modal-body {
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
}

.modal-default-button {
  float: right;
}

.modal-enter-from {
  opacity: 0;
}
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

ul {
  display: flex;
  flex-direction: column;
  align-items: self-start;
  font-size: 21px;
  gap: 10px;
  color: black;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a:first-of-type {
  border: 0;
}
button {
  background-color: transparent;
  padding: 7px 0;
  font-size: 21px;
  color: white;
}
button:hover {
  background-color: transparent;
  color: #efe1e1;
}
@media (max-width: 640px) {
  .modal-container{
width: 70%;
}
  
}
/* @media (max-width: 937px) {
  .modal-container {
  position: absolute;
  left: 8%;
  top: 29%;
  gap: 0;
  z-index: 1000;
}
}
@media (max-width: 888px) {
  .modal-container {
  position: absolute;
  left: 8%;
  top: 31%;
  gap: 0;
  z-index: 1000;
}
} */
</style>