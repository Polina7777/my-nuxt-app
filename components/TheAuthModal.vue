<script lang="ts" setup>

const props = defineProps({
 openAuthModal: Boolean,
 login:Function,
  user:Function,
})
</script>
<template>
  <Transition name="modal">
    <div v-if="openAuthModal" class="modal-mask">
      <div class="modal-container">
        <div class="modal-header">
            <button
              class="modal-default-button"
              @click="$emit('close')"
            >x</button>
          <!-- <slot name="header">default header</slot> -->
        </div>
        <div class="modal-body">
            <slot name="body">
        <TheAuthForm :user='user' :login="login"/>
   </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>
<style scoped>
.dark-mode .modal-mask{
  background-color:  rgba(143, 143, 143, 0.591);
}
.dark-mode .modal-container{
 background-color: rgb(22, 22, 22);
 border: 1px solid rgb(71, 70, 70);
}
.dark-mode .modal-default-button{
  background-color: transparent;
  color: rgb(181, 173, 173);
}
/*DarkMode*/
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

.modal-container {
  position: absolute;
  background-color: #ffffff ;
  border-radius: 10px;
  margin: auto;
  gap: 0;
  z-index: 1000;
}
.modal-container{
  width: 50%;
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
li{
  text-align: start;
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
</style>
