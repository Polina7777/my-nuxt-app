<script lang="ts">
import { data } from "../static/data";
export default {
  props: {
    openPopup: Boolean,
    updatePopUpValue: Function,
  },
  emits: ["close"],
  mounted() {},
  data() {
    return {
      face: data.face,
      hair: data.hair,
      body: data.body,
      makeUp: data.makeUp,
      sets: data.sets,
      mini: data.mini,

      popUpList1: data.popUpList1,
      popUpList2: data.popUpList2,
      popUpList: [...data.popUpList1, ...data.popUpList2],
      clickPopUpValue: { title: "", open: false },
      phoneNumber: "+7 (999) 131-32-49",
      router: useRoute(),
      changedValue: {},
      //   openPopup: false,
    };
  },
  methods: {
    updateClickPopUpValue(data) {
      console.log(data);
    //   if (!this.clickPopUpValue.open) {
        this.clickPopUpValue.title = data;
        this.clickPopUpValue.open = true;
    //   } else {
        //     this.clickPopUpValue.title='';
        //   this.clickPopUpValue.open = false;
    //   }
    },
    leavePopUpItem(event) {
        console.log(event)
        if(event.x < 200){
    //   setTimeout(() => {
        this.clickPopUpValue.title = "";
        this.clickPopUpValue.open = false;
    //   }, 100);
    }
      //     this.clickPopUpValue.title='';
      //   this.clickPopUpValue.open = false;
    },
    // updateData(item) {
    //   //     {title:"Уход за лицом",filter:'forFace',popup: face},
    //   //     {title:"Волосы",filter:'forHair',popup: hair},
    //   //     {title:"Макияж",filter:'forMakeUp',popup: makeUp},
    //   //     {title:"Тело",filter:'forBody',popup: body},
    //   //    {title: "Наборы",filter:'sets',popup: sets},
    //   //     {title:"Миниатюры",filter:'mini',popup: mini},
    //   this.clickPopUpValue.open = true;
    //   console.log(item)
    //   switch (item.title) {
    //     case "Уход за лицом":
    //       this.changedValue = this.face;

    //     case "Волосы":
    //       this.changedValue = this.hair;
    //     case "Макияж":
    //       this.changedValue = this.makeUp;

    //     case "Тело":
    //       this.changedValue = this.body;

    //     case "Наборы":
    //       this.changedValue = this.sets;
    //     case "Миниатюры":
    //       this.changedValue = this.mini;
    //   }
    // },
  },
  //   watch: {
  //     changedValue : async function(){
  //     //  this.filterListBySearchString()
  // this.changedValue = this.changedValue
  // console.log(this.changedValue)
  //     },

  //   },
};
// @mouseenter="updateClickPopUpValue(item.title)"
//                 @mouseleave="leavePopUpItem"
// @mouseenter="clickPopUpValue.open = true"
</script>
<template>
  <Transition name="modal">
    <div v-if="openPopup" class="modal-mask">
      <div class="modal-container">
        <div class="modal-header">
          <!-- <button class="modal-default-button" @click="$emit('close')">X</button> -->
          <slot name="header"> </slot>
        </div>
        <div class="modal-body">
          <slot name="body">
            <!-- <button class="modal-default-button" @click="$emit('close')">X</button> -->
            <ul class="popup_list" id="popup_list_one">
              <li v-for="(item, index) in popUpList1" :key="index">
                <p
                  class="popup_item"
                  @mouseenter="updateClickPopUpValue(item.title)"
                  @mouseleave="leavePopUpItem"
                >
                  {{ item.title }}
                </p>
                <ul v-if="clickPopUpValue.title === item.title && clickPopUpValue.open===true" class="popup_list" id="popup_list_two" >
                <!-- <ul
                  v-if="clickPopUpValue.open === true"
                  class="popup_list"
                  id="popup_list_two"
                > -->
                  <li v-for="(item2, index2) in item.popup" :key="index2">
                  <!-- <li v-for="(item2, index2) in changedValue" :key="index2"> -->
                    <p
                      class="popup_item"
                      id="popup_list_two_item"
                      @click="updatePopUpValue(item2)"
                    >
                      {{ item2.title }}
                    </p>
                  </li>
                </ul>
                <ul v-if="clickPopUpValue.title === ''" class="popup_list" id="popup_list_two" >
                <!-- <ul
                  v-if="clickPopUpValue.open === true"
                  class="popup_list"
                  id="popup_list_two"
                > -->
                  <li v-for="(item2, index2) in face" :key="index2">
                  <!-- <li v-for="(item2, index2) in changedValue" :key="index2"> -->
                    <p
                      class="popup_item"
                      id="popup_list_two_item"
                      @click="updatePopUpValue(item2)"
                    >
                      {{ item2.title }}
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
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
  background-color: rgba(0, 0, 0, 0.037);
  display: flex;
  transition: opacity 0.3s ease;
}
#show-modal {
  padding: 5px 10px;
  height: 35px;
  border: 2px solid#b49696;
  background-color: var(--background-general);
  border-radius: 10px;
  color: #b49696;
  font-size: 1rem;
  margin: 0 5px;
  z-index: 1000;
}
/* .modal-container {
  min-width: 210px;
  padding: 10px;
background-color: #d7b5b5;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  border: 2px solid #b49696;
  border-radius: 10px;
  color: black;
  overflow: scroll;
} */

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
  left: 11%;
  top: 25%;
  gap: 0;
  z-index: 1000;
  /* width: 30%; */
  /* border: 1px solid rgb(191, 188, 188); */
  /* background: #b49696; */
  /* border-top-right-radius: 10px;
  border-bottom-right-radius: 10px; */
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

#popup_list_one {
  position: relative;
  font-size: 20px;
  min-height: 350px;
  gap: 20px;
  color: white;
  width: 100%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

#popup_list_one_item {
  font-size: 20px;
}
#popup_list_two_item {
  color: black;
  font-size: 12px;
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
  padding: 20px;
  margin: 0;
  min-width: 170px;
  min-height: 350px;
  /* border-top-right-radius: 10px;
  border-bottom-right-radius: 10px; */
}
#popup_list_two {
  position: absolute;
  left: 170px;
  top: 0px;
  color: black;
  background: white;
  text-align: start;
  max-height: 350px;
  padding: 0 20px;
  width: 170px;
  max-width: 170px;
}
.modal-default-button {
  padding: 5px 8px;
  border: 2px solid #d7b5b5;
  background-color: #d7b5b5;
  border-radius: 10px;
  color: rgb(240, 240, 245);
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
  /* border-top-left-radius: 10px;
  border-bottom-left-radius: 10px; */
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
</style>
