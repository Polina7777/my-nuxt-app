<script lang="ts" setup>
import ok from "../static/images/ok.svg"
const props = defineProps({
  openTextModal: Boolean,
  title:String,
  message:String,
})
</script>


<template>
  <Transition name="modal">
    <div v-if="openTextModal" class="modal-mask">
      <div class="modal-container">
        <div class="modal-header">
          <!-- <button class="modal-default-button" @click="$emit('close')">x</button> -->
          <slot name="header"></slot>
        </div>
        <div class="modal-body">
          <slot name="body">
    <div class="wrapper">
        <img :src="ok">
        <p class="message">{{ message }}</p>
    </div>
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
  background-color: rgba(201, 171, 171, 0.472);
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
.wrapper {
    display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 20px;
}
p{
    font-size: 21px;
    color: #b49696;
}
.modal-container {
  position: absolute;
  background-color: #ffffff ;
  border-radius: 10px;
  margin: auto;
  gap: 0;
  z-index: 1000;
}
.modal-container{
 width: 300px;
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

.modal-default-button {
  padding: 5px 8px;
  background: #ffffff;
  /* border: 2px solid #d7b5b5;
  background-color: #d7b5b5; */
  border-radius: 10px;
  color:  #d7b5b5;
  font-size: 15px;
}
img {
  width: 210px;
  height: 170px;
  padding:10px;
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
</style>