<script>
export default {
  created() {
    setTimeout(() => {
      // const consultantMessage = "Консультант: Здравствуйте, чем могу помочь?";
      const consultantMessage = this.$t('chat.consultantMessage');
      this.messages.push(consultantMessage);
    }, 700);
  },
  updated(){
   this.currentLocale=this.$i18n.locale
  },
  data() {
    return {
      messages: [],
      newMessage: "",
      consultantMessage: "",
      currentLocale:this.$i18n.locale,
      deliveryWordsToCheck: [
        "доставка",
        // "способы доставки",
        // "Cпособы доставки",
        "доставки",
        "самовывоз",
        "курьер",
        "почта",
        "СДЭК",
        "выдача",
        "SDEK",
        "pick-up",
        "point",
        "post",
        "pickup",
        "courier",
        "Доставка",
        "Доставки",
        "Самовывоз",
        "Kурьер",
        "Почта",
        "сдек",
        "сдэк",
        "Сдэк",
        "Сдек",
        "Pick-up",
        "Point",
        "Pickup",
        "Courier",
      ],
      contactsWordsToCheck: [
        "Связь",
        "Контакт",
        "связь",
        "контакт",
        "связаться",
        "Связаться",
        "Позвонить",
        "позвонить",
        "звонок",
        "Звонок",
        "Сообщение",
        "сообщение",
        "Вконтакте",
        "вконтакте",
        "мессенджер",
        "Мессенджер",
        "мэсэнджер",
        "месенджер",
        "месджер",
        "Mэсэнджер",
        "Месенджер",
        "Месэджер",
        "сконтактироваться",
        "Сконтактироваться",
        "Contact",
        "communication",
        "contact",
        "Call",
        "call",
        "Message",
        "message",
        "Vkontakte ",
        "vkontakte",
        "messenger",
        "Messenger",
        "социальная",
        "Cоциальная",
        "сеть",
        "Сеть",
        "Social",
        "network",
        "social",
        "network",
      ],
      aboutWordsToCheck: [
        "Магазин",
        "Магазину",
        "Магазине",
        "магазин",
        "магазину",
        "магазине",
        "shop",
        "Shop",
        "about",
        "About",
        "о",
        "KameLAb",
        "kamelab",
        "KameLab",
      ],
      helloWordsToCheck: [
        "привет",
        "Привет",
        "Здравствуйте",
        "здравствуйте",
        "здравствуй",
        "Здравствуй",
        "Добрый",
        "добрый",
        "Доброго",
        "доброго",
        "вечер",
        "Вечер",
        "день",
        "День",
        "дня",
        "Дня",
        "вечера",
        "Вечера",
        "утро",
        "Утро",
        "утра",
        "Утра",
        "Hello",
        "Hi",
        "hello",
        "hi",
        "Good",
        "good",
        "evening",
        "Evening",
        "day",
        "Day",
        "evening",
        "Evening",
        "morning",
        "Morning",
      ],
    };
  },
  methods: {

    sendMessage() {

      //   let consultantMessage = "";
      if (this.newMessage.trim() !== "") {
        // this.messages.push(`Вы: ${this.newMessage}`);
        this.messages.push(`${this.$t('chat.you')}: ${this.newMessage}`);
  this.deliveryWordsToCheck.forEach((word) => {
          if (this.newMessage.includes(word)) {
            console.log("delivery");
            console.log(`Строка содержит слово "${word}".`);
            this.newMessage = "";
            // this.consultantMessage =
            //   "Консультант: Для выбора доступны службы доставки СДЭК и Почта России, в зависимости от населённого пункта. Пункт выдачи СДЭК: 350 р. (бесплатно при заказе от 3000 р.).Сроки: 1-3 рабочих дня. Почта России: 350 р. (бесплатно при заказе от 3000 р.).Сроки: 10-14 рабочих дня. Самовывоз: 350 р.(бесплатно при заказе от 3000 р.).Самовывоз производится по адресам : г.Бавлы, Пионерская 15 либо г.Альметьевск, Джалиля 32.  Сроки: 1-3 рабочих дня. Курьером до двери: 100 р.(бесплатно при заказе от 1000 р.). Сроки: 1-3 рабочих дня.";
              this.consultantMessage = this.$t('chat.consultantMessageDelivery')
            setTimeout(() => {
                this.messages.push(this.consultantMessage);
        }, 1000);
             
          } })
     this.contactsWordsToCheck.forEach((word) => {
              if (this.newMessage.includes(word)) {
                console.log(`Строка содержит слово "${word}".`);
                this.newMessage = "";
                // this.consultantMessage =
                //   "Консультант: Вы можете связаться с нами по номеру +7 (999) 131-32-49, либо в мессенджере Viber . А также в социальной сети ВКонтакте.";
                  this.consultantMessage = this.$t('chat.consultantMessageContacts')
                  setTimeout(() => {
                this.messages.push(this.consultantMessage);
        }, 1000);
              } 
            })


            this.aboutWordsToCheck.forEach((word) => {
                  console.log("about");
                  if (this.newMessage.includes(word)) {
                    console.log(`Строка содержит слово "${word}".`);
                    this.newMessage = "";
                    // this.consultantMessage =
                    //   "Консультант: KameLAb - мультибрендовый интернет-магазин косметики. Мы предлагаем вам большой выбор брендов, среди которых вы обязательно найдете то, что нужно вам. Мы сотрудничаем с официальными дистрибьюторами, поэтому вы можете быть уверены в качестве и оригинальности представленной продукции на сайте. Вы всегда можете получить бесплатную консультацию по подбору ухода от наших специалистов. Спасибо, что выбираете нас!";
                    this.consultantMessage = this.$t('chat.consultantMessageAbout')
                    setTimeout(() => {
                this.messages.push(this.consultantMessage);
        }, 1000);
                  }
            })

            this.helloWordsToCheck.forEach((word) => {
                      console.log("hello");
                      if (this.newMessage.includes(word)) {
                        console.log(`Строка содержит слово "${word}".`);
                        this.newMessage = "";
                        // this.consultantMessage =
                        //   "Консультант: Здравствуйте, чем могу помочь?";
                        this.consultantMessage =
                        this.$t('chat.consultantMessage');
                          setTimeout(() => {
                this.messages.push(this.consultantMessage);
        }, 1000);
                      }})
    
      }else{
        setTimeout(() => {
          // const consultantMessage = "Консультант: Задайте Ваш вопрос.";
          const consultantMessage = this.$t('chat.consultantMessageAsk');
          this.messages.push(consultantMessage);
        }, 1000);
      }

   
    },
  },
};
</script>

<template>
  <div class="form_wrapper" :key="currentLocale">
    <div class="chat">
      <div class="chat-messages">
        <div
          v-for="(message, index) in messages"
          :key="index"
          class="chat-message"
        >
          {{ message }}
        </div>
      </div>
      <div class="chat-input">
        <input
          v-model="newMessage"
          @keyup.enter="sendMessage"
          :placeholder="$t('chat.enterMessage')"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
/*DarkMode*/
.dark-mode input {
  background-color: transparent;
  border: 1px solid rgb(71, 70, 70);
  color: rgb(181, 173, 173);
}
.dark-mode input::placeholder {
  color: rgb(181, 173, 173);
}
.dark-mode .title {
  color: rgb(181, 173, 173);
}

.dark-mode button {
  background-color: rgb(28, 27, 27);
  border: 1.7px solid #2d2a2a;
  color: rgb(181, 173, 173);
}
.dark-mode button:active,
.dark-mode button:hover {
  background-color: rgb(131, 110, 107);
}
.dark-mode .form_wrapper {
  background-color: rgb(28, 27, 27);
  border: 1.7px solid #2d2a2a;
}
/*DarkMode*/
.form_wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid #b49696;
  /* background: #decece62; */
  background: #be939361;
  border-radius: 10px;
  justify-content: flex-end;
  /* align-items: start; */
  padding: 10px 10px 0 10px;
  width: 100%;
  height: 260px;
  /* overflow: scroll; */
  font-size: 14px;
}
.chat {
  overflow: scroll;
}
.chat-message {
  padding: 7px 0;
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.error_text {
  padding-left: 21px;
  color: rgb(104, 9, 9);
}
input {
  width: 97%;
}
.title {
  font-size: 27px;
}
label {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.chat-input {
  padding: 10px 0;
  width: 100%;
  align-items: center;
}
.input {
  margin: 20px;
  background: #efe1e1;
  padding: 11px;
  border-radius: 10px;
  border-color: transparent;
  width: 93%;
  min-width: 250px;
  position: relative;
}

.radio {
  margin: 10px;
  width: 20px;
  min-width: 20px;
}
p {
  padding: 11px;
  font-size: 21px;
}
ul {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  list-style: none;
  text-decoration: none;
  align-items: self-start;
  gap: 20px;
  margin: 17px 20px;
  padding: 0;
}
li {
  border: 2px solid #b49696;
  background: #efe1e1;
  border-radius: 7px;
  width: 300px;
  min-width: 250px;
  padding: 11px;
  color: white;
  font-size: 17px;
}
li:hover,
a:hover {
  color: #8e7676;
  background: #f9ecec;
}
a {
  text-decoration: none;
  color: var(--text-color);
}

button:hover,
button:active {
  background: #b49696;
}
@media (max-width: 350px) {
  div {
    width: 100%;
  }

  .form_wrapper {
    padding: 10px;
  }
  .form {
    width: 100%;
  }
  .radio_inputs {
    display: flex;
    flex-direction: column;
    min-width: 250px;
  }
  li {
    border: 2px solid #b49696;
    background: #efe1e1;
    border-radius: 7px;
    width: 250px;
    padding: 11px;
    color: white;
    font-size: 17px;
  }
  .title {
    padding-top: 20px;
    font-size: 21px;
  }
  .input {
    min-width: 250px;
    width: 250px;
  }
}
</style>
