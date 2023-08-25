<script>
import { giftcardApi } from "../api-requests/giftcard-api";
import giftcard from "../static/images/giftcard.svg";
export default {
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
    };
  },
  methods: {
    increaseQuantity() {
      this.giftCardInfo.count++;
      //   item.count++;
      //     this.computeAmount();
      //   this.computeAmount(count);
    },
    decreaseQuantity() {
      if (item.count > 1) {
        this.giftCardInfo.count++;
        // item.count--;
        // this.computeAmount();
        // this.computeAmount(count);
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
    async addToBacket() {
      const giftcard = await giftcardApi.createNewGiftCard(this.giftCardInfo);
      // const addedGiftCard = await giftcardApi.addGiftCardToBasket(giftcard.id);
      // const changeCount = await giftcardApi.changeGiftCardCount(
      //   giftcard.id,
      //   this.giftCardInfo.count
      // );
      this.$router.push('/');
      //   this.basket = true;
    },
  },
};
</script>

<template>
  <TheHeader />
  <div class="giftcard_wrapper">
    <p class="title">{{ title }}</p>
    <div class="wrapper">
      <img :src="giftcard" alt="giftcard" />
      <div class="info_wrapper">
        <p class="title">{{ text1 }}</p>
        <div class="count_buttons">
          <button @click="decreaseQuantity()">-</button>
          {{ giftCardInfo.count }}
          <button @click="increaseQuantity()">+</button>
        </div>
        <p class="title">{{ text2 }}</p>
        <div class="subtext_wrapper">
          <p
            :class="
              this.giftCardInfo.name.type === subtext1
                ? 'subtextClicked'
                : 'subtext'
            "
            @click="subtitleClick(subtext1)"
          >
            {{ subtext1 }}
          </p>
          <p     :class="
              this.giftCardInfo.name.type === subtext2
                ? 'subtextClicked'
                : 'subtext'
            " @click="subtitleClick(subtext2)">{{ subtext2 }}</p>
        </div>
        <input
          type="text"
          :placeholder="inputPlaseholder1"
          v-model="giftCardInfo.name.name"
        />
        <p class="title">{{ text3 }}</p>
        <div class="inputs_wrapper">
          <div class="subtext_wrapper">
            <p     :class="
              this.giftCardInfo.adress.type === subtext3
                ? 'subtextClicked'
                : 'subtext'
            " @click="subtitleClick(subtext3)">
              {{ subtext3 }}
            </p>
            <p     :class="
              this.giftCardInfo.adress.type === subtext4
                ? 'subtextClicked'
                : 'subtext'
            " @click="subtitleClick(subtext4)">
              {{ subtext4 }}
            </p>
          </div>
          <input
            type="email"
            v-if="giftCardInfo.adress.type === subtext3"
            :placeholder="subtext3"
            v-model="giftCardInfo.adress.adress"
          />
          <input
            type="text"
            v-if="giftCardInfo.adress.type === subtext4"
            :placeholder="subtext4"
            v-model="giftCardInfo.adress.adress"
          />
        </div>
        <p class="title">{{ text4 }}</p>
        <input
          class="wide"
          type="text"
          :placeholder="inputPlaseholder2"
          v-model="giftCardInfo.giftcardText"
        />
        <button class="basket_button" @click="addToBacket">
          {{ addText }}
        </button>
      </div>
    </div>
  </div>
  <TheFooter />
</template>
<style scoped>
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
  /* max-width: 57%; */
  padding: 30px;
}
.wrapper{
    align-items: flex-start;
}
input {
  max-width: 430px;
  min-width: 270px;
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
  margin: 10px;
}
.subtextClicked {
  /* max-height: 30px; */
  padding: 10px 20px;
  margin: 10px;
  border-bottom: 1px solid grey;
}
/* .subtext:hover, .subtext:active{
    padding: 10px 20px;
   border-bottom: 1px solid grey;
} */
.wide {
  min-height: 170px;
  max-width: 430px;
  min-width: 270px;
  text-align: start;
}
.info_wrapper {
  text-align: center;
  width: 63%;
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
  padding: 27px;
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
  width: 100px;
  align-items: center;
}
.count_buttons:hover,
.count_buttons:active,
.button:hover,
.button:active {
  background: #efe1e1;
}
</style>
