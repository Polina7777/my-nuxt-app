<script>
export default {
//   questions :[
// {
//           question: this.$i18n.t('question1'),
//           answer:
//             "Для выбора доступны службы доставки СДЭК и Почта России, в зависимости от населённого пункта.",
//           show: false,
//         },
// ],
  mounted(){
// questions =[
// {
//           question: this.$i18n.t('question1'),
//           answer:
//             "Для выбора доступны службы доставки СДЭК и Почта России, в зависимости от населённого пункта.",
//           show: false,
//         },
// ]
  },
  data() {
    return {
      route: useRoute(),
      title:'Популярные вопросы',
      questions: [
        {
          question:this.$t('question1'),
          answer: this.$t('questionAnswer1'),
          show: false,
        },
        {
          question:this.$t('question1'),
          answer: this.$t('questionAnswer1'),
          show: false,
        },
        {
          question:this.$t('question1'),
          answer: this.$t('questionAnswer1'),
          show: false,
        },
        {
          question:this.$t('question1'),
          answer: this.$t('questionAnswer1'),
          show: false,
        },
        {
          question:this.$t('question1'),
          answer: this.$t('questionAnswer1'),
          show: false,
        },
        {
          question:this.$t('question1'),
          answer: this.$t('questionAnswer1'),
          show: false,
        },
        {
          question:this.$t('question1'),
          answer: this.$t('questionAnswer1'),
          show: false,
        },
        // {
        //   question: "Какие способы доставки доступны?",
        //   answer:
        //     "Для выбора доступны службы доставки СДЭК и Почта России, в зависимости от населённого пункта.",
        //   show: false,
        // },
        // {
        //   question: "Какие способы доставки доступны?",
        //   answer:
        //     "Для выбора доступны службы доставки СДЭК и Почта России, в зависимости от населённого пункта.",
        //   show: false,
        // },
        // {
        //   question: "Какие способы доставки доступны?",
        //   answer:
        //     "Для выбора доступны службы доставки СДЭК и Почта России, в зависимости от населённого пункта.",
        //     show: false,
        // },
        // {
        //   question: "Какие способы доставки доступны?",
        //   answer:
        //     "Для выбора доступны службы доставки СДЭК и Почта России, в зависимости от населённого пункта.",
        //     show: false,
        // },
        // {
        //   question: "Какие способы доставки доступны?",
        //   answer:
        //     "Для выбора доступны службы доставки СДЭК и Почта России, в зависимости от населённого пункта.",
        //     show: false,
        // },
        // {
        //   question: "Какие способы доставки доступны?",
        //   answer:
        //     "Для выбора доступны службы доставки СДЭК и Почта России, в зависимости от населённого пункта.",
        //     show: false,
        // },
        // {
        //   question: "Какие способы доставки доступны?",
        //   answer:
        //     "Для выбора доступны службы доставки СДЭК и Почта России, в зависимости от населённого пункта.",
        //     show: false,
        // },
      ],
    };
  },
  methods: {
    showDescription(index) {
      this.questions[index].show = true;
    },
    hideDescription(index) {
      this.questions[index].show = false;
    },
  },
};
</script>

<template>
  <div class="question_list">
    <!-- <p class="title">{{ title }}</p> -->
    <p class="title">{{ $t('questionTitle') }}</p>
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
  gap: 10vw;
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
@media (max-width:400px) {
  .box {
  gap: 0;
}
}
</style>
