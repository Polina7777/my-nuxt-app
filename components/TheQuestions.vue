<script>
import { productsApi } from "../api-requests/products-api";
export default {
  //   created() {
  //     this.getSaleProducts();
  //   },
  data() {
    return {
      route: useRoute(),
      title:'Популярные вопросы',
      questions: [
        {
          question: "Какие способы доставки доступны?",
          answer:
            "Для выбора доступны службы доставки СДЭК и Почта России, в зависимости от населённого пункта.",
          show: false,
        },
        {
          question: "Какие способы доставки доступны?",
          answer:
            "Для выбора доступны службы доставки СДЭК и Почта России, в зависимости от населённого пункта.",
          show: false,
        },
        {
          question: "Какие способы доставки доступны?",
          answer:
            "Для выбора доступны службы доставки СДЭК и Почта России, в зависимости от населённого пункта.",
            show: false,
        },
        {
          question: "Какие способы доставки доступны?",
          answer:
            "Для выбора доступны службы доставки СДЭК и Почта России, в зависимости от населённого пункта.",
            show: false,
        },
        {
          question: "Какие способы доставки доступны?",
          answer:
            "Для выбора доступны службы доставки СДЭК и Почта России, в зависимости от населённого пункта.",
            show: false,
        },
        {
          question: "Какие способы доставки доступны?",
          answer:
            "Для выбора доступны службы доставки СДЭК и Почта России, в зависимости от населённого пункта.",
            show: false,
        },
        {
          question: "Какие способы доставки доступны?",
          answer:
            "Для выбора доступны службы доставки СДЭК и Почта России, в зависимости от населённого пункта.",
            show: false,
        },
      ],
    };
  },
  methods: {
    showDescription(index) {
      // this.showQuestion = index;
      // this.hideQuestion = "";
      this.questions[index].show = true;
      //   if (title === this.title1) {
      //     this.showTitle1Description = true;
      //   } else if (title === this.title2) {
      //     this.showTitle2Description = true;
      //   }
    },
    hideDescription(index) {
      // this.hideQuestion = index;
      // this.showQuestion = "";
      this.questions[index].show = false;

      //   if (title === this.title1) {
      //     this.showTitle1Description = false;
      //   } else if (title === this.title2) {
      //     this.showTitle2Description = false;
      //   }
    },
  },
};
</script>

<template>
  <TheHeader />
  <div class="question_list">
    <p class="title">{{ title }}</p>
    <ul>
      <li v-for="(item, index) in questions" :key="index">
        <div class="box">
          <p class="question">{{ item.question }}</p>
          <button
            class="box_button"
            v-if="item.show"
            @click="hideDescription(index)"
          >
            -
          </button>
          <button
            class="box_button"
            v-if="!item.show"
            @click="showDescription(index)"
          >
            +
          </button>
        </div>
        <p class="answer" v-if="item.show">{{ item.answer }}</p>
      </li>
    </ul>
  </div>
  <TheFooter />
</template>
<style scoped>
.question_list {
  margin: auto;
  max-width: 70%;
}
ul {
  display: flex;
  flex-direction: column;
}
li{
  border-bottom: 1px solid  rgb(176, 174, 174);
}
.question {
  font-size: 21px;
  padding: 20px;
}
.answer {
  font-size: 14px;
  max-width: 370px;
  padding:17px;
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
.title{
  text-align: center;
  padding: 37px;
}
@media (max-width:700px) {
  .question_list {
  margin: auto;
  max-width: 90%;
}
.title{
  text-align: center;
  padding: 31px;
}
.question {
  font-size: 17px;
}
}
</style>
