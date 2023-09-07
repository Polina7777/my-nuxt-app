<script>
import contacts1 from "../static/images/contacts1.svg";
import contacts2 from "../static/images/contacts2.svg";

export default {
  data() {
    return {
      contacts: [contacts1, contacts2],
      title: "Контактные данные",
      text: "Остались вопросы? Напишите нам в любую социальную сеть и мы с удовольствием ответим!",
    };
  },
};
</script>

<template>
  <div>
    <!-- <p class="contacts_title">{{ title }}</p>
    <p class="contacts_text">{{ text }}</p> -->
    <p class="contacts_title">{{ $t('contactsTitle') }}</p>
    <p class="contacts_text">{{ $t('contactsText') }}</p>
    <ul>
      <li v-for="(item, index) in contacts" :key="index">
        <img
          :src="item"
          alt="method"
          :class="index === contacts.length - 1 ? 'small' : null"
        />
      </li>
    </ul>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 30px;
}
ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  flex-wrap: wrap;
  padding: 30px;
}
img {
  width: 300px;
  height: 300px;
}
.contacts_title {
  font-size: 21px;
  padding: 20px;
}
.contacts_text {
  background: #efe1e1;
  border-radius: 10px;
  padding: 10px 15px;
  font-size: 15px;
}
.small {
  height: 150px;
}
@media (max-width: 570px) {
  div {
    padding: 10px;
  }
  ul {
    width: 90%;
    align-items: center;
    padding: 10px;
  }
}
@media (max-width: 350px) {
  img {
    width: 250px;
    height: 300px;
  }
}
</style>
