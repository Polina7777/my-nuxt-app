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
      // face: data.face,
      // hair: data.hair,
      // body: data.body,
      // makeUp: data.makeUp,
      // sets: data.sets,
      // mini: data.mini,
      // popUpList1: data.popUpList1,
      // popUpList2: data.popUpList2,
      // popUpList: [...data.popUpList1, ...data.popUpList2],
      face: [
        {
          title: this.$t("popupListFace.makeUpRemoval"),
          filter: "makeUpRemoval",
        },
        { title: this.$t("popupListFace.cleansing"), filter: "cleansing" },
        { title: this.$t("popupListFace.exfoliation"), filter: "exfoliation" },
        { title: this.$t("popupListFace.toning"), filter: "toning" },
        { title: this.$t("popupListFace.serum"), filter: "serum" },
        { title: this.$t("popupListFace.cream"), filter: "cream" },
        { title: this.$t("popupListFace.mask"), filter: "mask" },
        { title: this.$t("popupListFace.sheetMask"), filter: "sheetMask" },
        { title: this.$t("popupListFace.eyesCream"), filter: "eyesCream" },
        { title: this.$t("popupListFace.patches"), filter: "patches" },
        { title: this.$t("popupListFace.pointMeans"), filter: "pointMeans" },
        { title: this.$t("popupListFace.spf"), filter: "spf" },
        { title: this.$t("popupListFace.accessories"), filter: "accessories" },
      ],
      hair: [
        { title: this.$t("popupListHair.cleansing"), filter: "cleansing" },
        { title: this.$t("popupListHair.exfoliation"), filter: "exfoliation" },
        { title: this.$t("popupListHair.serum"), filter: "serum" },
        { title: this.$t("popupListHair.cream"), filter: "cream" },
        { title: this.$t("popupListHair.mask"), filter: "mask" },
        { title: this.$t("popupListHair.spf"), filter: "spf" },
        {
          title: this.$t("popupListHair.professional_care"),
          filter: "professional_care",
        },
        { title: this.$t("popupListHair.accessories"), filter: "accessories" },
      ],
      body: [
        { title: this.$t("popupListBody.cleansing"), filter: "cleansing" },
        { title: this.$t("popupListBody.exfoliation"), filter: "exfoliation" },
        { title: this.$t("popupListBody.toning"), filter: "toning" },
        { title: this.$t("popupListBody.serum"), filter: "serum" },
        { title: this.$t("popupListBody.cream"), filter: "cream" },
        {
          title: this.$t("popupListBody.self-tanning"),
          filter: "self-tanning",
        },
        {
          title: this.$t("popupListBody.brushes_massagers"),
          filter: "brushes_massagers",
        },
        { title: this.$t("popupListBody.scrubs"), filter: "scrubs" },
        { title: this.$t("popupListBody.wraps"), filter: "wraps" },
        { title: this.$t("popupListBody.spf"), filter: "spf" },
      ],
      makeUp: [
        { title: this.$t("popupListMakeUp.forLips"), filter: "forLips" },
        { title: this.$t("popupListMakeUp.forEyes"), filter: "forEyes" },
        { title: this.$t("popupListMakeUp.forFace"), filter: "forFace" },
        { title: this.$t("popupListMakeUp.forBrows"), filter: "forBrows" },
        { title: this.$t("popupListMakeUp.brushes"), filter: "brushes" },
        { title: this.$t("popupListMakeUp.palletes"), filter: "palletes" },
        { title: this.$t("popupListMakeUp.sponges"), filter: "sponges" },
        {
          title: this.$t("popupListMakeUp.accessories"),
          filter: "accessories",
        },
      ],
      sets: [
        {
          title: this.$t("popupListSetsMini.makeUpRemoval"),
          filter: "makeUpRemoval",
        },
        { title: this.$t("popupListSetsMini.cleansing"), filter: "cleansing" },
        {
          title: this.$t("popupListSetsMini.exfoliation"),
          filter: "exfoliation",
        },
        { title: this.$t("popupListSetsMini.toning"), filter: "toning" },
        { title: this.$t("popupListSetsMini.serum"), filter: "serum" },
        { title: this.$t("popupListSetsMini.cream"), filter: "cream" },
        { title: this.$t("popupListSetsMini.mask"), filter: "mask" },
        { title: this.$t("popupListSetsMini.sheetMask"), filter: "sheetMask" },
        { title: this.$t("popupListSetsMini.eyesCream"), filter: "eyesCream" },
        { title: this.$t("popupListSetsMini.patches"), filter: "patches" },
        { title: this.$t("popupListSetsMini.forLips"), filter: "forLips" },
        {
          title: this.$t("popupListSetsMini.pointMeans"),
          filter: "pointMeans",
        },
        { title: this.$t("popupListSetsMini.spf"), filter: "spf" },
        {
          title: this.$t("popupListSetsMini.accessories"),
          filter: "accessories",
        },
      ],
      mini: [
        {
          title: this.$t("popupListSetsMini.makeUpRemoval"),
          filter: "makeUpRemoval",
        },
        { title: this.$t("popupListSetsMini.cleansing"), filter: "cleansing" },
        {
          title: this.$t("popupListSetsMini.exfoliation"),
          filter: "exfoliation",
        },
        { title: this.$t("popupListSetsMini.toning"), filter: "toning" },
        { title: this.$t("popupListSetsMini.serum"), filter: "serum" },
        { title: this.$t("popupListSetsMini.cream"), filter: "cream" },
        { title: this.$t("popupListSetsMini.mask"), filter: "mask" },
        { title: this.$t("popupListSetsMini.sheetMask"), filter: "sheetMask" },
        { title: this.$t("popupListSetsMini.eyesCream"), filter: "eyesCream" },
        { title: this.$t("popupListSetsMini.patches"), filter: "patches" },
        { title: this.$t("popupListSetsMini.forLips"), filter: "forLips" },
        {
          title: this.$t("popupListSetsMini.pointMeans"),
          filter: "pointMeans",
        },
        { title: this.$t("popupListSetsMini.spf"), filter: "spf" },
        {
          title: this.$t("popupListSetsMini.accessories"),
          filter: "accessories",
        },
      ],
      popUpList1: [
        {
          title: this.$t("popupList1.forFace"),
          filter: "forFace",
          popup: [
            {
              title: this.$t("popupListFace.makeUpRemoval"),
              filter: "makeUpRemoval",
            },
            { title: this.$t("popupListFace.cleansing"), filter: "cleansing" },
            {
              title: this.$t("popupListFace.exfoliation"),
              filter: "exfoliation",
            },
            { title: this.$t("popupListFace.toning"), filter: "toning" },
            { title: this.$t("popupListFace.serum"), filter: "serum" },
            { title: this.$t("popupListFace.cream"), filter: "cream" },
            { title: this.$t("popupListFace.mask"), filter: "mask" },
            { title: this.$t("popupListFace.sheetMask"), filter: "sheetMask" },
            { title: this.$t("popupListFace.eyesCream"), filter: "eyesCream" },
            { title: this.$t("popupListFace.patches"), filter: "patches" },
            {
              title: this.$t("popupListFace.pointMeans"),
              filter: "pointMeans",
            },
            { title: this.$t("popupListFace.spf"), filter: "spf" },
            {
              title: this.$t("popupListFace.accessories"),
              filter: "accessories",
            },
          ],
        },
        {
          title: this.$t("popupList1.forHair"),
          filter: "forHair",
          popup: [
            { title: this.$t("popupListHair.cleansing"), filter: "cleansing" },
            {
              title: this.$t("popupListHair.exfoliation"),
              filter: "exfoliation",
            },
            { title: this.$t("popupListHair.serum"), filter: "serum" },
            { title: this.$t("popupListHair.cream"), filter: "cream" },
            { title: this.$t("popupListHair.mask"), filter: "mask" },
            { title: this.$t("popupListHair.spf"), filter: "spf" },
            {
              title: this.$t("popupListHair.professional_care"),
              filter: "professional_care",
            },
            {
              title: this.$t("popupListHair.accessories"),
              filter: "accessories",
            },
          ],
        },
        {
          title: this.$t("popupList1.forMakeUp"),
          filter: "forMakeUp",
          popup: [
            { title: this.$t("popupListMakeUp.forLips"), filter: "forLips" },
            { title: this.$t("popupListMakeUp.forEyes"), filter: "forEyes" },
            { title: this.$t("popupListMakeUp.forFace"), filter: "forFace" },
            { title: this.$t("popupListMakeUp.forBrows"), filter: "forBrows" },
            { title: this.$t("popupListMakeUp.brushes"), filter: "brushes" },
            { title: this.$t("popupListMakeUp.palletes"), filter: "palletes" },
            { title: this.$t("popupListMakeUp.sponges"), filter: "sponges" },
            {
              title: this.$t("popupListMakeUp.accessories"),
              filter: "accessories",
            },
          ],
        },
        {
          title: this.$t("popupList1.forBody"),
          filter: "forBody",
          popup: [
            { title: this.$t("popupListBody.cleansing"), filter: "cleansing" },
            {
              title: this.$t("popupListBody.exfoliation"),
              filter: "exfoliation",
            },
            { title: this.$t("popupListBody.toning"), filter: "toning" },
            { title: this.$t("popupListBody.serum"), filter: "serum" },
            { title: this.$t("popupListBody.cream"), filter: "cream" },
            {
              title: this.$t("popupListBody.self-tanning"),
              filter: "self-tanning",
            },
            {
              title: this.$t("popupListBody.brushes_massagers"),
              filter: "brushes_massagers",
            },
            { title: this.$t("popupListBody.scrubs"), filter: "scrubs" },
            { title: this.$t("popupListBody.wraps"), filter: "wraps" },
            { title: this.$t("popupListBody.spf"), filter: "spf" },
          ],
        },
        {
          title: this.$t("popupList1.sets"),
          filter: "sets",
          popup: [
            {
              title: this.$t("popupListSetsMini.makeUpRemoval"),
              filter: "makeUpRemoval",
            },
            {
              title: this.$t("popupListSetsMini.cleansing"),
              filter: "cleansing",
            },
            {
              title: this.$t("popupListSetsMini.exfoliation"),
              filter: "exfoliation",
            },
            { title: this.$t("popupListSetsMini.toning"), filter: "toning" },
            { title: this.$t("popupListSetsMini.serum"), filter: "serum" },
            { title: this.$t("popupListSetsMini.cream"), filter: "cream" },
            { title: this.$t("popupListSetsMini.mask"), filter: "mask" },
            {
              title: this.$t("popupListSetsMini.sheetMask"),
              filter: "sheetMask",
            },
            {
              title: this.$t("popupListSetsMini.eyesCream"),
              filter: "eyesCream",
            },
            { title: this.$t("popupListSetsMini.patches"), filter: "patches" },
            { title: this.$t("popupListSetsMini.forLips"), filter: "forLips" },
            {
              title: this.$t("popupListSetsMini.pointMeans"),
              filter: "pointMeans",
            },
            { title: this.$t("popupListSetsMini.spf"), filter: "spf" },
            {
              title: this.$t("popupListSetsMini.accessories"),
              filter: "accessories",
            },
          ],
        },
        {
          title: this.$t("popupList1.mini"),
          filter: "mini",
          popup: [
            {
              title: this.$t("popupListSetsMini.makeUpRemoval"),
              filter: "makeUpRemoval",
            },
            {
              title: this.$t("popupListSetsMini.cleansing"),
              filter: "cleansing",
            },
            {
              title: this.$t("popupListSetsMini.exfoliation"),
              filter: "exfoliation",
            },
            { title: this.$t("popupListSetsMini.toning"), filter: "toning" },
            { title: this.$t("popupListSetsMini.serum"), filter: "serum" },
            { title: this.$t("popupListSetsMini.cream"), filter: "cream" },
            { title: this.$t("popupListSetsMini.mask"), filter: "mask" },
            {
              title: this.$t("popupListSetsMini.sheetMask"),
              filter: "sheetMask",
            },
            {
              title: this.$t("popupListSetsMini.eyesCream"),
              filter: "eyesCream",
            },
            { title: this.$t("popupListSetsMini.patches"), filter: "patches" },
            { title: this.$t("popupListSetsMini.forLips"), filter: "forLips" },
            {
              title: this.$t("popupListSetsMini.pointMeans"),
              filter: "pointMeans",
            },
            { title: this.$t("popupListSetsMini.spf"), filter: "spf" },
            {
              title: this.$t("popupListSetsMini.accessories"),
              filter: "accessories",
            },
          ],
        },
      ],
      popUpList2: [
        {
          title: this.$t("popupListSetsMini.makeUpRemoval"),
          filter: "makeUpRemoval",
        },
        { title: this.$t("popupListSetsMini.cleansing"), filter: "cleansing" },
        {
          title: this.$t("popupListSetsMini.exfoliation"),
          filter: "exfoliation",
        },
        { title: this.$t("popupListSetsMini.toning"), filter: "toning" },
        { title: this.$t("popupListSetsMini.serum"), filter: "serum" },
        { title: this.$t("popupListSetsMini.cream"), filter: "cream" },
        { title: this.$t("popupListSetsMini.mask"), filter: "mask" },
        { title: this.$t("popupListSetsMini.sheetMask"), filter: "sheetMask" },
        { title: this.$t("popupListSetsMini.eyesCream"), filter: "eyesCream" },
        { title: this.$t("popupListSetsMini.patches"), filter: "patches" },
        { title: this.$t("popupListSetsMini.forLips"), filter: "forLips" },
        {
          title: this.$t("popupListSetsMini.pointMeans"),
          filter: "pointMeans",
        },
        { title: this.$t("popupListSetsMini.spf"), filter: "spf" },
        {
          title: this.$t("popupListSetsMini.accessories"),
          filter: "accessories",
        },
      ],
      // popUpList: [...this.popUpList1, ...this.popUpList2],
      // popUpList2: data.popUpList2,
      clickPopUpValue: { title: "", open: false },
      phoneNumber: "+7 (999) 131-32-49",
      router: useRoute(),
      changedValue: {},
    };
  },
  methods: {
    updateClickPopUpValue(data: string) {
      this.clickPopUpValue.title = data;
      this.clickPopUpValue.open = true;
    },
    leavePopUpItem(event: MouseEvent) {
      if (event.x < 200) {
        this.clickPopUpValue.title = "";
        this.clickPopUpValue.open = false;
      }
    },
  },
};
</script>
<template>
  <Transition name="modal">
    <div v-if="openPopup" class="modal-mask" @click="$emit('close')">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header"> </slot>
        </div>
        <div class="modal-body">
          <slot name="body">
            <ul class="popup_list" id="popup_list_one">
              <li v-for="(item, index) in popUpList1" :key="index">
                <p
                  class="popup_item"
                  @mouseenter="updateClickPopUpValue(item.title)"
                  @mouseleave="leavePopUpItem"
                  id="popup_list_one_item"
                >
                  {{ item.title }}
                </p>
                <ul
                  v-if="
                    clickPopUpValue.title === item.title &&
                    clickPopUpValue.open === true &&
                    updatePopUpValue
                  "
                  class="popup_list"
                  id="popup_list_two"
                >
                  <!-- {{clickPopUpValue }}
                {{ item }} -->
                  <li v-for="(item2, index2) in item.popup" :key="index2">
                    <p
                      class="popup_item"
                      id="popup_list_two_item"
                      @click="updatePopUpValue(item2)"
                    >
                      {{ item2.title }}
                    </p>
                  </li>
                </ul>
                <ul
                  v-if="clickPopUpValue.title === '' && updatePopUpValue"
                  class="popup_list"
                  id="popup_list_two"
                >
                  <li v-for="(item2, index2) in face" :key="index2">
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
/*DarkMode*/
.dark-mode #popup_list_one {
  background-color: rgb(52, 49, 49);
  border: 1.7px solid #2d2a2a;
  color: rgb(181, 173, 173);
}
.dark-mode #popup_list_one_item {
  font-size: 21px;
}
.dark-mode #popup_list_two_item {
  color: black;
  font-size: 14px;
}
.dark-mode #popup_list_two {
  background-color: rgb(131, 120, 120);
  border: 1.7px solid #2d2a2a;
}
/*DarkMode*/
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
li {
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
  /* border-top-left-radius: 10px;
  border-bottom-left-radius: 10px; */
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
  min-height: 410px;
  padding: 10px 10px 10px 20px;
  max-width: 320px;
  min-width: 250px;
  width: 100%;
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
@media (max-width: 937px) {
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
}
</style>
