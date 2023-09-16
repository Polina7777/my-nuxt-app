<script lang="ts">
import price from "../static/images/price.svg";
import termin from "../static/images/termin.svg";
import payment_type from "../static/images/payment_type.svg";
import adresses from "../static/images/adresses.svg";
import { data } from "../static/data";
export default {

updated() {
  this.currentLocale = this.$i18n.locale
},
  data() {
    return {
     currentLocale:this.$i18n.locale,
    delivery :[
    {
      // title: "Пункт выдачи СДЭК",
      title: this.$t('delivery.type1.title'),
      price:'350 р.',
      sub_price:this.$t('delivery.type1.sub_price'),
      termin:this.$t('delivery.type1.termin'),
      payment_type:this.$t('delivery.type1.payment_type'),
      class:'green'
    },
    {
      title: this.$t('delivery.type2.title'),
      price:'350 р.',
      sub_price:this.$t('delivery.type2.sub_price'),
      termin:this.$t('delivery.type2.termin'),
      payment_type:this.$t('delivery.type2.payment_type'),
      class:'blue'
    },
    {
      title: this.$t('delivery.type3.title'),
      price:'350 р.',
      sub_price:this.$t('delivery.type3.sub_price'),
      termin:this.$t('delivery.type3.termin'),
      payment_type:this.$t('delivery.type3.payment_type'),
      class:'purple'
    },
    {
      title: this.$t('delivery.type4.title'),
      price:'100 р.',
      sub_price:this.$t('delivery.type4.sub_price'),
      termin:this.$t('delivery.type4.termin'),
      payment_type:this.$t('delivery.type4.payment_type'),
      class:'orange'
    },
  ],
      priceImg: price,
      termin: termin,
      payment_type: payment_type,

      adresses: adresses,
      title: "Доставки и оплата",
      text: "Способы доставки и оплаты",
    };
  },
  watch: {
    currentLocale: async function(){
          this.delivery = [
    {
      title: this.$t('delivery.type1.title'),
      price:'350 р.',
      sub_price:this.$t('delivery.type1.sub_price'),
      termin:this.$t('delivery.type1.termin'),
      payment_type:this.$t('delivery.type1.payment_type'),
      class:'green'
    },
    {
      title: this.$t('delivery.type2.title'),
      price:'350 р.',
      sub_price:this.$t('delivery.type2.sub_price'),
      termin:this.$t('delivery.type2.termin'),
      payment_type:this.$t('delivery.type2.payment_type'),
      class:'blue'
    },
    {
      title: this.$t('delivery.type3.title'),
      price:'350 р.',
      sub_price:this.$t('delivery.type3.sub_price'),
      termin:this.$t('delivery.type3.termin'),
      payment_type:this.$t('delivery.type3.payment_type'),
      class:'purple'
    },
    {
      title: this.$t('delivery.type4.title'),
      price:'100 р.',
      sub_price:this.$t('delivery.type4.sub_price'),
      termin:this.$t('delivery.type4.termin'),
      payment_type:this.$t('delivery.type4.payment_type'),
      class:'orange'
    },
  ]
    }, 
  },
};

</script>

<template>

    <div class="delivery_wrapper" >
      <!-- <p>{{ title }}</p> -->
      <p>{{ $t('deliveryTitle') }}</p>
      <!-- <span class="sub_title">{{ text }}</span> -->
      <span class="sub_title">{{ $t('deliveryText')  }}</span>
      <ul class="grid-box">
        <li v-for="(item, index) in delivery" :key="index" :class="item.class">
        <!-- <li v-for="(item, index) in methods" :key="index" :class="item.class"> -->
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
        </li>
      </ul>
      <img class="adresses" :src="adresses" alt="adresses" />
    </div>

</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
}
.dark-mode p, .dark-mode .sub_title{
  color: rgb(216, 227, 227);
}
.sub_title{
  font-size: 21px;
  padding-bottom: 20px;
  text-align: center;
}
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
  align-items: center;
  width: 396px;
  min-width: 290px;
  height: 401px;
  gap: 15px;
  margin: 10px;
}
.item_title {
  font-size: 24px;
  padding-bottom: 30px;
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
}
img {
  width: 27px;
  height: 27px;
}
p {
  font-size: 27px;
  padding:30px 0  47px;
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
  @media (max-width: 400px) {
    .delivery_wrapper{
padding: 40px 0 0 0;
    }
  p{
    font-size: 21px;
  }  
  .sub_title{
    font-size: 17px;
  }
  .item_title{
    font-size: 21px;
  }
  }
  li{
    padding-top:0 ;
    padding-bottom: 0;
    height: 270px;
  }
  @media (max-width:940px) {
    div {
  padding: 0px;
}
    .grid-box {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 11px;
    grid-auto-flow: dense;
    gap: 10px;
    width: 100%;
  }
  li{
    width: 95%;
  }
  }
  @media (min-width:1385px) {
    .grid-box{
      width: 70%;
    }
    
  }
  @media (min-width:350px) {
   span{
    font-size: 12px;
   }
   .item_title{
    font-size: 15px;
   }
  }

</style>