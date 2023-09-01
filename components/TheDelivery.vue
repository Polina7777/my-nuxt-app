<script lang="ts">
import method1 from "../static/images/method1.svg";
import method2 from "../static/images/method2.svg";
import method3 from "../static/images/method3.svg";
import method4 from "../static/images/method4.svg";
import price from "../static/images/price.svg";
import termin from "../static/images/termin.svg";
import payment_type from "../static/images/payment_type.svg";
import adresses from "../static/images/adresses.svg";
import { data } from "../static/data";
export default {
  data() {
    return {
      // methods:[method1,method2,method3,method4],
      methods: data.delivery,
      priceImg: price,
      termin: termin,
      payment_type: payment_type,

      adresses: adresses,
      title: "Доставки и оплата",
      text: "Способы доставки и оплаты",
    };
  },
};
</script>

<template>
  <NuxtLayout name="custom">
    <TheHeader />
    <div>
      <p>{{ title }}</p>
      <span>{{ text }}</span>
      <ul class="grid-box">
        <li v-for="(item, index) in methods" :key="index" :class="item.class">
          <span class="item_title">{{ item.title }}</span>
          <div class="info">
            <img :src="priceImg" alt="price" />
            <span>{{ item.price }}</span>
          </div>
          <span class="sub_price">{{ item.sub_price }}</span>
          <div class="info">
            <img :src="termin" alt="termin" />
            <span>{{ item.termin }}</span>
          </div>
          <div class="info">
            <img :src="payment_type" alt="payment_type" />
            <span>{{ item.payment_type }}</span>
          </div>
          <!-- <img :src="item" alt="method" :class="index>1?'smaller':null"/> -->
        </li>
      </ul>
      <img class="adresses" :src="adresses" alt="adresses" />
    </div>
    <!-- <TheFooter/> -->
  </NuxtLayout>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
}
/* .grid-box {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 17px;
    grid-auto-flow: dense;
    gap: 10px;
    padding: 0;
    width: 100%;
  } */
.info {
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding:0;
  width: 230px;
}
li {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* justify-content: space-evenly; */
  align-items: center;
  /* max-width: 396px; */

  width: 396px;
  min-width: 290px;
  height: 401px;
  gap: 15px;
  margin: 10px;
}
.sub_price{
    padding-left: 40px;
}
.item_title {
  font-size: 24px;
  padding-bottom: 30px;
}
p {
  font-family: Comfortaa;
}
.blue {
  background: #d7f1f4;
  border-radius: 20px;
}

.green {
  background: #e5fbe7;
  border-radius: 20px;
}
.purple {
  background: #ebe5fb;
  border-radius: 20px;
}
.orange {
  background: #fbeae5;
  border-radius: 20px;
}
ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 auto;
  padding: 10px;
  /* width:70%; */
}
img {
  width: 27px;
  height: 27px;
}
p {
  font-size: 27px;
  padding-bottom: 47px;
}
span {
  font-size: 19px;
}
.adresses {
  width: 300px;
  height: 100px;
}
.grid-box {
padding-top: 20px;
  }
  @media (max-width:610px) {
    .grid-box {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 17px;
    grid-auto-flow: dense;
    gap: 10px;
    padding: 0;
    width: 100%;
  }
  li{
    width: 90%;
  }
  }
/* @media (max-width: 610px) { */
  /* .grid-box {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 17px;
    grid-auto-flow: dense;
    gap: 0;
    padding: 0;
    width: 100%;
  } */

  /* div { */
    /* padding: 10px;
  }

  p {
    font-size: 17px;
    padding-bottom: 27px;
  }
  span {
    font-size: 15px; */
  /* } */
/* } */

</style>