<script>
import { basketsApi } from "../api-requests/basket-api";
import { giftcardApi } from "../api-requests/giftcard-api";
import { userApi } from "../api-requests/user-api";
import giftcard from "../static/images/giftcard.svg";
export default {
  created(){
    this.getUser();
  },
  data() {
    return {
      giftcard: giftcard,
      router: useRouter(),
      title: "Подарочный сертификат",
      text: "Сумма сертификата кратна 500 рублям. Если вы хотите сертификат номиналом 1000Р, добавьте в корзину 2 сертификата. На 3000Р — 6 сертификатов.",
      text1: "Количество",
      text2: "Кому отправить",
      text3: "Куда отправить",
      text4: "Пожелание",
      subtext1: "Себе",
      subtext2: "Другому человеку",
      subtext3: "E-mail",
      subtext4: "Sms",
      inputPlaseholder1: "Введите имя",
      inputPlaseholder2: "Введите пожелание на сертификат",
      addText: "В корзину",
      giftCardInfo: {
        count: "1",
        name: { type: " ", name: "" },
        adress: { type: "E-mail", adress: "" },
        giftcardText: "",
      },
      userData:null,
    };
  },
  methods: {
    increaseQuantity() {
      if (this.giftCardInfo) {
        this.giftCardInfo.count++;
      }
    },
    decreaseQuantity() {
      if (this.giftCardInfo.count > 1) {
        this.giftCardInfo.count--;
      }
    },
    showDescription(index) {
      this.questions[index].show = true;
    },
    hideDescription(index) {
      this.questions[index].show = false;
    },
    subtitleClick(subtext) {
      if (subtext === this.subtext3 || subtext === this.subtext4) {
        this.giftCardInfo.adress.type = subtext;
      } else {
        this.giftCardInfo.name.type = subtext;
      }
    },
    async getUser(){
      this.userInfo = JSON.parse(localStorage.getItem('userData'))
      if(this.userInfo){
        const user = await userApi.getUsersById(this.userInfo.id);
  this.userData = user;
      }

    },
    async addToBacket() {
      const giftcard = await giftcardApi.createNewGiftCard(this.giftCardInfo);
      if(giftcard){
        const addGiftCardToCollection = await giftcardApi.setGiftCardToCollection(this.userData.giftcard_collection.id, giftcard)
      const addGiftCardToBasket = await basketsApi.setBasketGiftCard(this.userData.basket.id,giftcard)
      }
 
      this.$router.push("/");
    },
  },
};
</script>

<template>
  <div class="giftcard_wrapper">
    <p class="title">{{ $t('giftcardTitle') }}</p>
    <!-- <p class="title">{{ title }}</p> -->
    <div class="wrapper">
      <img :src="giftcard" alt="giftcard" />
      <div class="info_wrapper">
        <p class="title">{{ $t('giftcardInputTitle1') }}</p>
        <!-- <p class="title">{{ text1 }}</p> -->
        <div class="count_buttons">
          <button @click="decreaseQuantity()" id="minus">-</button>
          {{ giftCardInfo ? giftCardInfo.count : 0 }}
          <button @click="increaseQuantity()" id="plus">+</button>
        </div>
        <p class="title">{{ $t('giftcardInputTitle2') }}</p>
        <!-- <p class="title">{{ text2 }}</p> -->
        <div class="subtext_wrapper">
          <p
            :class="
              giftCardInfo.name.type === subtext1 ? 'subtextClicked' : 'subtext'
            "
            @click="subtitleClick(subtext1)"
          >
            <!-- {{ subtext1 }} -->
            {{ $t('giftcardInputSubtext1') }}
          </p>
          <p
            :class="
              giftCardInfo.name.type === subtext2 ? 'subtextClicked' : 'subtext'
            "
            @click="subtitleClick(subtext2)"
          >
            <!-- {{ subtext2 }} -->
            {{ $t('giftcardInputSubtext2')}}
          </p>
        </div>
        <input
          type="text"
          :placeholder="$t('giftcardInputPlaceholder1')"
          v-model="giftCardInfo.name.name"
        />
        <p class="title">{{ $t('giftcardInputTitle3') }}</p>
        <!-- <p class="title">{{ text3 }}</p> -->
        <div class="inputs_wrapper">
          <div class="subtext_wrapper">
            <p
              :class="
                giftCardInfo.adress.type === subtext3
                  ? 'subtextClicked'
                  : 'subtext'
              "
              @click="subtitleClick(subtext3)"
            >
              <!-- {{ subtext3 }} -->
              {{ $t('giftcardInputSubtext3') }}
            </p>
            <p
              :class="
                giftCardInfo.adress.type === subtext4
                  ? 'subtextClicked'
                  : 'subtext'
              "
              @click="subtitleClick(subtext4)"
            >
              {{ $t('giftcardInputSubtext4') }}
            </p>
          </div>
          <input
            type="email"
            v-if="giftCardInfo.adress.type === subtext3"
            :placeholder="$t('giftcardInputSubtext3')"
            v-model="giftCardInfo.adress.adress"
          />
          <input
            type="text"
            v-if="giftCardInfo.adress.type === subtext4"
            :placeholder="$t('giftcardInputSubtext4')"
            v-model="giftCardInfo.adress.adress"
          />
        </div>
        <p class="title">{{ $t('giftcardInputTitle4') }}</p>
        <input
          class="wide"
          type="text"
          :placeholder="$t('giftcardInputPlaceholder2')" 
          v-model="giftCardInfo.giftcardText"
        />
        <button class="basket_button" @click="addToBacket">
          {{ $t('giftCardAdd') }}
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>

/*DarkMode*/
.dark-mode #plus, .dark-mode #minus{
  border: none;
  background-color: transparent;
}
.dark-mode input {
  background-color: transparent;
  border: 1px solid rgb(71, 70, 70);
  color: rgb(103, 101, 101);
}
.dark-mode input::placeholder {
  color: rgb(181, 173, 173);
}
.dark-mode p{
  color: rgb(181, 173, 173);
}
.dark-mode button{
  background-color: rgb(28, 27, 27);
  border: none;
  color: rgb(181, 173, 173);
}
.dark-mode .count_buttons{
  background-color: rgb(28, 27, 27);
border: none;
  color: rgb(181, 173, 173);
}
.dark-mode button:active,
.dark-mode button:hover{
  background-color: rgb(28, 27, 27);
  border: 1.7px solid #2d2a2a;
  color: rgb(181, 173, 173);
}
.dark-mode .count_buttons:active,
.dark-mode .count_buttons:hover{
  background-color: rgb(131, 110, 107);
}
.dark-mode .basket_button{
  border: 1.7px solid #2d2a2a;
}
.dark-mode .basket_button:hover, .dark-mode .basket_button:active {
  background-color: rgb(131, 110, 107);
  color: rgb(181, 173, 173);
}
/*DarkMode*/

.box {
  display: flex;
  flex-direction: row;
  align-items: center;
}
img {
  max-width: 470px;
  max-height: 470px;
  min-width: 300px;
  min-height: 300px;
}
.giftcard_wrapper {
  margin: auto;
  padding: 30px;
}
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 70px;
  align-items: flex-start;
  padding-top: 50px;
}
input {
  padding: 10px;
  min-width: 400px;
}
.inputs_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.subtext_wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
}
.subtext {
  padding: 10px 20px;
}
.subtextClicked {
  padding: 10px 20px;
  margin: 10px;
  border-bottom: 1px solid grey;
}

.wide {
  min-height: 170px;
  max-width: 430px;
  text-align: start;
}
.info_wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 17px;
}
ul {
  display: flex;
  flex-direction: column;
}
li {
  border-bottom: 1px solid rgb(176, 174, 174);
}
.box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 30vw;
}
.box_button,
.box_button:hover,
.box_button:active {
  background: transparent;
  color: black;
  font-size: 27px;
}

.title {
  text-align: center;
  padding: 11px;
  padding-bottom: 10px;
}
.basket_button {
  margin: 20px auto;
}
.count_buttons,
button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: #efe1e1;
  align-items: center;
  border-radius: 19px;
  color: white;
  align-self: center;
}
.count_buttons {
  margin-bottom: 10px;
  margin: auto;
  align-items: center;
}
.count_buttons:hover,
.count_buttons:active,
.button:hover,
.button:active {
  background: #efe1e1;
}
@media (max-width: 690px) {
  .giftcard_wrapper {
    margin: auto;
    padding: 10px;
  }
  .inputs_wrapper {
    width: 100%;
  }
  .info_wrapper {
    align-items: center;
    width: 95%;
  }
  input,
  .wide {
    width: 90%;
  }
  .wide {
    min-width: 90%;
  }
  .wrapper {
    gap: 21px;
  }
}
@media (max-width: 550px) {
  .info_wrapper {
    align-items: center;
    width: 95%;
  }
}
</style>
