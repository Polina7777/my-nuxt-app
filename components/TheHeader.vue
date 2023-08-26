<script lang="ts">
import logo from "../static/images/logo-header.svg";
import search from "../static/images/search.svg";
import basket from "../static/images/basket.svg";
import phone from "../static/images/phone.svg";
import whatsapp from "../static/images/whatsapp.svg";
import vk from "../static/images/vk.svg";
import plus from "../static/images/plus.svg";

export default {
  props: {
    value: String,
    // filterPopUp:Function,
    popUpValue:Object,
  },
  data() {
    return {
      plus: plus,
      logo: logo,
      search: search,
      basket: basket,
      phone: phone,
      whatsapp: whatsapp,
      vk: vk,
      phoneNumber: "+7 (999) 131-32-49",
      router: useRoute(),
      openPopup: false,
      internalValue: this.value,
      internalPopUpValue:this.popUpValue,
      popUpList1: [
        {title:"Уход за лицом",filter:'forFace'},
        {title:"Волосы",filter:'forHair'},
        {title:"Макияж",filter:'forMakeUp'},
        {title:"Тело",filter:'forBody'},
       {title: "Наборы",filter:'sets'},
        {title:"Миниатюры",filter:'mini'},
      ],
      popUpList2: [
        {title:"Демакияж",filter:'makeUpRemoval'},
        {title:"Очищение",filter:'cleansing'},
        {title:"Отшелушивание",filter:'exfoliation'},
        {title:"Тонизирование",filter:'toning'},
        {title:"Сыворотки",filter:'serum'},
        {title:"Кремы",filter:'cream'},
        {title:"Маски",filter:'mask'},
        {title:"Тканевые маски",filter:'sheetMask'},
        {title:"Для кожи вокруг глаз",filter:'eyesCream'},
        {title:"Патчи",filter:'patches'},
        {title:"Для губ",filter:'forLips'},
       {title:"Точечные средства",filter:'pointMeans'},
        {title:"SPF-защита от солнца",filter:'spf'},
        {title:"Гаджеты и аксессуары для лица",filter:'accessories'},
      ],
      navScheme1: [
        {
          title: "Доставка и оплата",
          navigate: "/paymethods",
        },
        {
          title: "Вопрос-ответ",
          navigate: "/questions",
        },
        {
          title: "Контакты",
          navigate: "/contacts",
        },
      ],

      navScheme2: [
        {
          title: "Каталог",
          navigate: "/",
          image: plus,
        },
        {
          title: "Новинки",
          navigate: "/new",
          image: null,
        },
        {
          title: "Распродажи",
          navigate: "/sale",
          image: null,
        },
        {
          title: "Подарочные сертификаты",
          navigate: "/giftcard",
          image: null,
        },
      ],
    };
  },
  // watch: {
  //   internalValue(newValue) {
  //     this.$emit("input", newValue);
  //   },
  // },
  methods: {
    navigateTo(link: any) {
      this.$router.push(link);
    },
    updateValue(event) {
      // this.internalValue = event.target.value;
    //  this.$emit("input", this.internalValue);
    this.$emit("input", event.target.value);
    },
    updatePopUpValue(data) {
      this.openPopup =false;
      this.internalPopUpValue = data;
    this.$emit("click", this.internalPopUpValue);
    },
   popUpOpen(){
    this.openPopup = true;
    navigateTo('/');
    }
  
  },
};
</script>

<template>
  <header>
    <ul>
      <li v-for="(item, index) in navScheme1" :key="index">
        <nuxt-link :to="item.navigate">{{ item.title }}</nuxt-link>
      </li>
    </ul>
    <div class="wrapper">
      <img
        class="logo-header"
        :src="logo"
        alt="header-logo"
        @click="navigateTo('/')"
      />
      <div class="input_wrapper">
        <input
          class="search_input"
         placeholder="Поиск товара"
         :value="value"
      
        />
        <img class="search_img" :src="search" alt="search" />
        <nuxt-link to="basket">
          <img :src="basket" alt="basket" @click="navigateTo('/basket')" />
        </nuxt-link>
      </div>
      <div class="contacts_wrapper">
        <img :src="phone" alt="phone" />
        <p>{{ phoneNumber }}</p>
        <img :src="whatsapp" alt="whatsapp" />
        <img :src="vk" alt="vk" />
      </div>
    </div>
    <ul>
      <li
        v-for="(item, index) in navScheme2"
        :key="index"
        :class="item.image ? 'plus_button' : null"
      >
        <button
          :class="item.title === 'Каталог' ? 'popup_button' : 'button '"
          @click="
            item.title === 'Каталог'
              ? popUpOpen()
              : navigateTo(item.navigate)
          "
        >
          {{ item.title }}
        </button>
        <img
          class="plus"
          v-if="item.image"
          :src="item.image"
          alt="item-image"
        />
      </li>
    </ul>
    <div v-if="openPopup" class="gray"></div>
    <Teleport to="body">
      <div v-if="openPopup" class="modal">
        <div class="popup_wrapper">
          <ul class="popup_list" id="popup_list_one">
            <li v-for="(item, index) in popUpList1" :key="index">
              <p class="popup_item" id="popup_list_one_item" @click = updatePopUpValue(item)>{{ item.title }}</p>
            </li>
          </ul>
          <ul class="popup_list" id="popup_list_two">
            <li v-for="(item, index) in popUpList2" :key="index">
              <p class="popup_item"  id="popup_list_two_item" @click = updatePopUpValue(item) >{{ item.title }}</p>
            </li>
          </ul>
        </div>
        <button class="close" @click="openPopup = false">х</button>
      </div>
    </Teleport>
  </header>
</template>

<style>
* {
  box-sizing: border-box;
  font-size: 17px;
}
p {
  font-size: 17px;
  margin: 0;
}
header {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.wrapper,
.contacts_wrapper,
.input_wrapper,
.popup_wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.popup_wrapper {
  position: absolute;
  left: 11%;
  top: 28%;
  gap: 0;
  z-index: 100;
  border: 1px solid rgb(191, 188, 188);
  border-top-right-radius:10px ;
  border-bottom-right-radius:10px ;
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
.search_img{
  position: absolute;
  left: 65%;
}
.popup_item {
  font-size: 15px;
  margin: 0;
}

#popup_list_one {
  font-size: 20px;
  min-height: 350px;
  gap: 20px;
}

#popup_list_one_item {
  font-size: 20px;
}
#popup_list_two_item {
  font-size: 11px;
}

#popup_list_two {
  background: white;
  text-align: start;
  max-height: 350px;
  padding: 0 20px;
}

.wrapper {
  justify-content: space-between;
}
.logo-header {
  width: 30%;
  height: 83px;
}
img {
  width: 21px;
  height: 21px;
}
.input_wrapper {
  width: 50%;
}
.search_input, input{
  background:#efe1e1;
  padding: 7px;
  border-radius: 10px;
  border-color: transparent;
  width: 71%;
  min-width: 250px;
  position: relative;

}
.popup_list {
  display: flex;
  flex-direction: column;
  background: #efe1e1;
  text-align: start;
  gap: 10px;
  font-size: 15px;
  padding: 20px;
  margin: 0;
  min-height: 350px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
  text-decoration: none;
  gap: 20px;
  align-items: center;
  padding: 0;
}
li:hover, a:hover{
  color: #b49696;
}
a {
  text-decoration: none;
  color: var(--text-color);
}
button,
.popup_button {
  padding: 15px 40px;
  font-size: 17px;
  border-radius: 20px;
  border: none;
}
.button {
  background-color: white;
}
.popup_button {
  background-color: #efe1e1;
  color: white;
  padding-right: 60px;
}
button:active,
.popup_button {
  background-color: #b49696;
}
.plus_button {
  position: relative;
}
.plus {
  width: 20px;
  height: 20px;
  position: absolute;
  left: 115px;
  top: 15px;
}
.show_more {
  font-size: 14px;
}
.title {
  font-size: 27px;
}
@media (max-width: 800px) {
  .wrapper{
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
